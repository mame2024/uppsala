// src/lib/supabase/server.ts
import { createClient } from '@supabase/supabase-js';

// Local Supabase defaults for development
const localSupabaseUrl = 'http://localhost:54321';
const localSupabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';

// Function to get environment variables with fallbacks
const getSupabaseCredentials = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || localSupabaseUrl;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || localSupabaseKey;
  return { supabaseUrl, supabaseKey };
};

// Universal client that works in both client and server
export function createUniversalClient() {
  const { supabaseUrl, supabaseKey } = getSupabaseCredentials();
  return createClient(supabaseUrl, supabaseKey);
}

// Server-only client - only call this from server components
export function createServerClient() {
  // In browser environments, return the universal client
  if (typeof window !== 'undefined') {
    return createUniversalClient();
  }
  
  // In server environments, use the cookie-based client
  const { supabaseUrl, supabaseKey } = getSupabaseCredentials();
  
  // Dynamic import to avoid the error when this code runs on the client
  const { cookies } = require('next/headers');
  const cookieStore = cookies();
  
  return createClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value;
      },
    },
  });
}

// Export a default client for simpler imports
export default createUniversalClient();