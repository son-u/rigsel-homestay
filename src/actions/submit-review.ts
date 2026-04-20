"use server";

import { z } from "zod";
import { supabase } from "@/lib/supabase";

// Define the exact bounds for length constraints to fit the testimonials style.
const reviewSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name cannot exceed 50 characters"),
    location: z.string().max(50, "Location cannot exceed 50 characters").optional().or(z.literal("")),
    rating: z.number().int().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
    text: z.string().min(5, "Please write a brief review.").max(280, "Review must not exceed 280 characters to keep our layout clean"),
    // The honeypot field. It should always be perfectly empty.
    honeyPot: z.string().optional()
});

export async function submitReview(formData: {
    name: string;
    location?: string;
    rating: number;
    text: string;
    honeyPot?: string;
}) {
    try {
        const validated = reviewSchema.parse(formData);

        // If a bot fills out the honeypot, we gracefully pretend we saved it.
        if (validated.honeyPot && validated.honeyPot.length > 0) {
            return { success: true, message: "Review submitted successfully." };
        }

        // Insert using the secure RPC function to bypass schema visibility limitations
        const { error } = await supabase.rpc('insert_rigsel_review', {
            p_name: validated.name,
            p_location: validated.location || null,
            p_rating: validated.rating,
            p_text: validated.text
        });

        if (error) {
            console.error("Supabase Error adding review:", error);
            return { success: false, message: "Failed to submit review. Please try again later." };
        }

        // Fire-and-forget Telegram Notification
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (botToken && chatId) {
            // We use 'void' to intentionally not await this. The user shouldn't have to wait for the message to send.
            void fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    parse_mode: 'HTML',
                    text: `🔔 <b>New Review Pending Approval!</b>\n\n` +
                          `👤 <b>Name:</b> ${validated.name}\n` +
                          `📍 <b>Location:</b> ${validated.location || 'N/A'}\n` +
                          `⭐ <b>Rating:</b> ${validated.rating} / 5\n\n` +
                          `📝 <b>Review:</b>\n<i>"${validated.text}"</i>\n\n` +
                          `👉 Head over to your Supabase Dashboard to approve it!`
                })
            }).catch(err => console.error("Failed to send Telegram notification:", err));
        }

        return { success: true, message: "Review submitted successfully and is pending approval!" };

    } catch (e: any) {
        if (e instanceof z.ZodError) {
            return { success: false, message: e.issues[0].message };
        }
        console.error("Error submitting review:", e);
        return { success: false, message: "An unexpected error occurred." };
    }
}
