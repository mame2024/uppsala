import React from 'react';
import { createServerClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TestDbPage() {
  const supabase = createServerClient();
  
  // Test query to public schema
  const { data: recipes, error } = await supabase
    .from('recipes')
    .select('*');
  
  // Test raw SQL query
  const { data: rawResults, error: rawError } = await supabase
    .rpc('get_all_recipes', {});
  
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Database Connection Test</h1>
      
      <h2>Recipe Query Results:</h2>
      {error ? (
        <div style={{ color: 'red' }}>
          <p>Error: {error.message}</p>
          <p>Code: {error.code}</p>
          <p>Details: {error.details}</p>
        </div>
      ) : (
        <pre>{JSON.stringify(recipes, null, 2)}</pre>
      )}
      
      <h2>Available Supabase Tables:</h2>
      <pre>{JSON.stringify({ supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL }, null, 2)}</pre>
    </div>
  );
}
