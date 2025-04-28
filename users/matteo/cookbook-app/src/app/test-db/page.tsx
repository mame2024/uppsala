'use client';

import React, { useEffect, useState } from 'react';
import supabase from '@/lib/supabase/client';

export default function TestDbPage() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from('recipes')
          .select('*');
        
        if (error) throw error;
        setRecipes(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Database Connection Test</h1>
      
      <h2>Recipe Query Results:</h2>
      {error ? (
        <div style={{ color: 'red' }}>
          <p>Error: {error}</p>
        </div>
      ) : (
        <pre>{JSON.stringify(recipes, null, 2)}</pre>
      )}
      
      <h2>Supabase Connection:</h2>
      <pre>{JSON.stringify({ 
        url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'Using default URL'
      }, null, 2)}</pre>
    </div>
  );
}
