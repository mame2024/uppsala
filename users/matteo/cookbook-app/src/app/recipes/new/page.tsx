'use client';

import RecipeForm from '@/components/recipes/RecipeForm';
import supabase from '@/lib/supabase/client';

export default function NewRecipePage() {
  return (
    <div>
      <h1>Submit a New Recipe</h1>
      <p>Share your favorite recipe with your colleagues!</p>
      <RecipeForm />
    </div>
  );
}