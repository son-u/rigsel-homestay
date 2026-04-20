"use client"

import * as React from "react"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FaStar } from "react-icons/fa"
import { MdArrowForwardIos } from "react-icons/md"
import { toast } from "sonner"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { submitReview } from "@/actions/submit-review"
import { cn } from "@/lib/utils"

const reviewSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name cannot exceed 50 characters"),
    location: z.string().max(50, "Location cannot exceed 50 characters").optional().or(z.literal("")),
    rating: z.number().int().min(1, "Rating is required").max(5),
    text: z.string().min(5, "Please write a brief review.").max(280, "Review must not exceed 280 characters to keep our layout clean."),
    honeyPot: z.string().optional()
})

type ReviewFormValues = z.infer<typeof reviewSchema>

export function ReviewModal() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isPending, startTransition] = useTransition()

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm<ReviewFormValues>({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
            name: "",
            location: "",
            rating: 0,
            text: "",
            honeyPot: ""
        }
    })

    const rating = watch("rating")

    const onSubmit = (data: ReviewFormValues) => {
        startTransition(async () => {
            const result = await submitReview(data)
            if (result.success) {
                toast.success(result.message)
                setIsOpen(false)
                reset()
            } else {
                toast.error(result.message)
            }
        })
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button 
                    className="group relative inline-flex items-center justify-center gap-3 px-8 h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl shadow-black/10 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-base"
                >
                    <span className="relative z-10 transition-colors duration-300">
                        Leave a Review
                    </span>
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 flex items-center" aria-hidden="true">
                        <MdArrowForwardIos className="h-4 w-4" />
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] p-6 sm:p-8 rounded-2xl border-primary/10 shadow-2xl">
                <DialogHeader className="mb-4">
                    <DialogTitle className="font-serif text-3xl font-medium tracking-tight text-foreground">Share Your Experience</DialogTitle>
                    <DialogDescription className="text-base text-muted-foreground/80 mt-1.5">
                        We'd love to hear about your stay at Rigsel Homestay.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
                    {/* Honeypot Field - Hidden but accessible to bots */}
                    <div className="hidden" aria-hidden="true">
                        <Label htmlFor="honeyPot">Don't fill this out</Label>
                        <Input id="honeyPot" type="text" {...register("honeyPot")} tabIndex={-1} autoComplete="off" />
                    </div>

                    {/* Star Rating */}
                    <div className="space-y-3">
                        <Label>Rating *</Label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setValue("rating", star, { shouldValidate: true })}
                                    className="group focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 focus-visible:ring-offset-0 rounded-full p-1 transition-transform active:scale-95"
                                >
                                    <FaStar 
                                        className={cn(
                                            "w-8 h-8 transition-all duration-200",
                                            star <= rating ? "text-[#FACC15] drop-shadow-sm scale-110" : "text-gray-200 group-hover:text-gray-300"
                                        )} 
                                    />
                                </button>
                            ))}
                        </div>
                        {errors.rating && <p className="text-xs text-destructive">{errors.rating.message}</p>}
                    </div>

                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input 
                                id="name" 
                                placeholder="Your full name" 
                                className="bg-muted/30 border-muted-foreground/20 focus-visible:ring-1 focus-visible:ring-primary/30 focus-visible:ring-offset-0 focus-visible:border-primary/30 transition-all rounded-xl h-11"
                                {...register("name")} 
                            />
                            {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="location">Location (Optional)</Label>
                            <Input 
                                id="location" 
                                placeholder="e.g. Kolkata, WB" 
                                className="bg-muted/30 border-muted-foreground/20 focus-visible:ring-1 focus-visible:ring-primary/30 focus-visible:ring-offset-0 focus-visible:border-primary/30 transition-all rounded-xl h-11"
                                {...register("location")} 
                            />
                            {errors.location && <p className="text-xs text-destructive">{errors.location.message}</p>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="text">Review *</Label>
                            <Textarea 
                                id="text" 
                                placeholder="Tell us about the hospitality, the food, and your overall experience..." 
                                className="resize-none min-h-[120px] bg-muted/30 border-muted-foreground/20 focus-visible:ring-1 focus-visible:ring-primary/30 focus-visible:ring-offset-0 focus-visible:border-primary/30 transition-all rounded-xl p-4"
                                {...register("text")} 
                            />
                            {errors.text && <p className="text-xs text-destructive">{errors.text.message}</p>}
                        </div>
                    </div>

                    <Button type="submit" disabled={isPending} className="w-full h-12 rounded-xl text-base font-semibold tracking-wide shadow-lg hover:shadow-xl hover:bg-primary/95 transition-all duration-300">
                        {isPending ? "Submitting..." : "Submit Review"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
