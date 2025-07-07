import { createClient } from "@supabase/supabase-js";
// Ensure you have the environment variables set in your .env file
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
