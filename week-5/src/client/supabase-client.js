import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabase_url = process.env.SUPABASE_URL;
const supabase_key = process.env.SUPABASE_KEY;

if (!supabase_url || !supabase_key) {
  console.error("One of the keys didn't load in correctly");
}

export const supabase = createClient(supabase_url, supabase_key);