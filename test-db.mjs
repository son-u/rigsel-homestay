import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ygvkoplkilpdhijqfvaj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlndmtvcGxraWxwZGhpanFmdmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2MTAzNzIsImV4cCI6MjA5MjE4NjM3Mn0.MX1lvXU2rfw8ryMhWTR-Eo5JKB1X4fl3E3F118_PfX0',
  { db: { schema: 'rigsel_schema' } }
);

async function test() {
  const { data, error } = await supabase.from('reviews').select('*');
  if (error) {
    console.error("DB Error:", error);
  } else {
    console.log("DB Data:", data);
  }
}
test();
