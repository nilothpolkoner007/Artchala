import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Missing Supabase configuration. Please connect to Supabase using the "Connect to Supabase" button.',
  );
  throw new Error('Missing Supabase configuration');
}

try {
  // Validate URL format
  new URL(supabaseUrl);
} catch (error) {
  console.error('Invalid Supabase URL format');
  throw new Error('Invalid Supabase URL configuration');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  },
});
