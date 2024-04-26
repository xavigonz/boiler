import OpenAI from 'https://deno.land/x/openai@v4.33.0/mod.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.5.0'

console.log("Hello from Functions!")

const openai = new OpenAI({
  apiKey: Deno.env.get['OPENAI_API_KEY'], 
});

Deno.serve(async (req) => {
  const payload = await req.json();
  console.log(payload)
  return new Response(JSON.stringify(payload));
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/bot-comment' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
