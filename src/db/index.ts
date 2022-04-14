import { config } from "dotenv";
import { createClient } from '@supabase/supabase-js';

/**
 * Determines the location of the required .env file.
 */
const results = config({ path: '../../.env' });
if (results.error) {
	  console.log(`You don't have a .env file set up! Are you sure the environment variables are configured?`);
}

export const database = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
