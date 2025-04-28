// src/app/recipes/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import supabase from '@/lib/supabase/client';
import styles from './recipes.module.css';

export const dynamic = 'force-dynamic';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const { data, error } = await supabase
          .from('recipes')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        setRecipes(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  // Function to extract first few ingredients as a summary
  const createIngredientsSummary = (ingredients: string | null | undefined): string => {
    if (!ingredients) return 'No ingredients listed';
    
    // Extract up to 3 ingredients
    const lines = ingredients.split('\n')
      .map(line => line.trim().replace(/^-\s*/, '')) // Remove bullet points
      .filter(line => line);
    
    const mainItems = lines.slice(0, 3);
    const extras = lines.length > 3 ? ` and ${lines.length - 3} more items` : '';
    
    return mainItems.join(', ') + extras;
  };

  if (loading) return <div className={styles.loading}>Loading recipes...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Flow Cookbook Recipes</h1>
      
      <div className={styles.summary}>
        <p>{recipes.length} delicious recipes to choose from</p>
      </div>
      
      <Link href="/recipes/new" className={styles.newButton}>
        Add New Recipe
      </Link>
      
      <div className={styles.grid}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link 
              href={`/recipes/${recipe.id}`} 
              key={recipe.id} 
              className={styles.card}
            >
              <h2>{recipe.title}</h2>
              <p className={styles.author}>By {recipe.author_name || 'Unknown'}</p>
              
              <p className={styles.ingredients}>
                {createIngredientsSummary(recipe.ingredients)}
              </p>
              
              <div className={styles.tags}>
                {recipe.is_vegetarian && <span className={styles.tag}>Vegetarian</span>}
                {recipe.is_vegan && <span className={styles.tag}>Vegan</span>}
                {recipe.is_gluten_free && <span className={styles.tag}>Gluten Free</span>}
                {recipe.is_dairy_free && <span className={styles.tag}>Dairy Free</span>}
              </div>
            </Link>
          ))
        ) : (
          <p className={styles.empty}>No recipes found. Add your first recipe!</p>
        )}
      </div>
    </div>
  );
}