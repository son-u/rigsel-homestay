import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// This forces the route to evaluate dynamically on every request.
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    try {
        // Authenticate the cron request if running on Vercel
        // We verify the Vercel internal CRON_SECRET to ensure only Vercel can trigger this.
        const authHeader = request.headers.get('authorization');
        if (
            process.env.CRON_SECRET && 
            authHeader !== `Bearer ${process.env.CRON_SECRET}`
        ) {
            return new Response('Unauthorized', { status: 401 });
        }

        // A simple query that touches the rigsel_schema to register activity
        const { error } = await supabase.rpc('get_rigsel_reviews').limit(1);

        if (error) {
            console.error('Keep-alive cron encountered a DB error:', error.message);
            return NextResponse.json({ success: false, error: error.message }, { status: 500 });
        }

        return NextResponse.json({ 
            success: true, 
            message: 'Database keep-alive ping successful.' 
        });
    } catch (e: any) {
        return NextResponse.json({ success: false, error: e.message }, { status: 500 });
    }
}
