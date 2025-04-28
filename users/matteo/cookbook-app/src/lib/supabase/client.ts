import { createClient } from '@supabase/supabase-js';

// Local Supabase defaults for development
const localSupabaseUrl = 'http://localhost:54321';
const localSupabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';

// Use environment variables if available, otherwise use local defaults
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || localSupabaseUrl;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || localSupabaseKey;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
