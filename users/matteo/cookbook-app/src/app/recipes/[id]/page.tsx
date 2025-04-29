'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import supabase from '@/lib/supabase/client';
import styles from './recipe-details.module.css';

export default function RecipeDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const { data, error } = await supabase
          .from('recipes')
          .select('*')
          .eq('id', params.id)
          .single();
        
        if (error) throw error;
        setRecipe(data);
      } catch (err) {
        console.error('Error fetching recipe:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchRecipe();
    }
  }, [params.id]);

  const formatIngredients = (ingredients) => {
    if (!ingredients) return null;
    
    return ingredients.split('\n').map((item, index) => (
      <li key={index}>{item.trim().replace(/^-\s*/, '')}</li>
    ));
  };

  const formatInstructions = (instructions) => {
    if (!instructions) return null;
    
    return instructions.split('\n').map((step, index) => (
      <li key={index}>{step.trim().replace(/^\d+\.\s*/, '')}</li>
    ));
  };

  if (loading) return (
    <div className={styles.container}>
      <div className={styles.loading}>Loading recipe...</div>
    </div>
  );

  if (error) return (
    <div className={styles.container}>
      <div className={styles.error}>
        <h2>Error Loading Recipe</h2>
        <p>{error}</p>
        <Link href="/recipes" className={styles.backButton}>
          Back to All Recipes
        </Link>
      </div>
    </div>
  );

  if (!recipe) return (
    <div className={styles.container}>
      <div className={styles.error}>
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist or has been removed.</p>
        <Link href="/recipes" className={styles.backButton}>
          Back to All Recipes
        </Link>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.actionButtons}>
        <button 
          onClick={() => router.back()} 
          className={styles.backButton}
        >
          ← Back to Recipes
        </button>
        
        <Link 
          href={`/recipes/edit/${recipe.id}`} 
          className={styles.editButton}
        >
          Edit Recipe
        </Link>
      </div>

      <article className={styles.recipe}>
        <h1 className={styles.title}>{recipe.title}</h1>
        
        {recipe.author_name && (
          <p className={styles.author}>By {recipe.author_name}</p>
        )}

        <div className={styles.tags}>
          {recipe.is_vegetarian && <span className={styles.tag}>Vegetarian</span>}
          {recipe.is_vegan && <span className={styles.tag}>Vegan</span>}
          {recipe.is_gluten_free && <span className={styles.tag}>Gluten Free</span>}
          {recipe.is_dairy_free && <span className={styles.tag}>Dairy Free</span>}
        </div>

        <div className={styles.section}>
          <h2>Ingredients</h2>
          <ul className={styles.ingredients}>
            {formatIngredients(recipe.ingredients)}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Instructions</h2>
          <ol className={styles.instructions}>
            {formatInstructions(recipe.instructions)}
          </ol>
        </div>
      </article>
    </div>
  );
}
