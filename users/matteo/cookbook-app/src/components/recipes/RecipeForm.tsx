'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './RecipeForm.module.css';
import { createServerClient } from '@/lib/supabase/server';
import { useRouter } from 'next/navigation';

type FormData = {
  title: string;
  ingredients: string;
  instructions: string;
  author_name: string;
};

export default function RecipeForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Insert the recipe into Supabase
      const supabase = createServerClient();
      const { data: recipe, error } = await supabase
        .from('recipes')
        .insert([{
          title: data.title,
          ingredients: data.ingredients,
          instructions: data.instructions,
          author_name: data.author_name,
        }])
        .select();
      
      if (error) {
        throw error;
      }
      
      // Success handling
      setSubmitSuccess(true);
      reset(); // Clear the form fields
      
      // Refresh the page data
      router.refresh();
      
      // After a delay, reset the success message
      setTimeout(() => setSubmitSuccess(false), 5000);
      
      // Optionally redirect to the recipe list or detail page
      // setTimeout(() => router.push('/recipes'), 2000);
    } catch (error: any) {
      // Error handling
      console.error('Error submitting recipe:', error);
      setSubmitError(error.message || 'Failed to submit recipe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      {submitSuccess && (
        <div className={styles.successMessage}>
          Your recipe was submitted successfully!
        </div>
      )}
      
      {submitError && (
        <div className={styles.errorMessage}>{submitError}</div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Recipe Title*
          </label>
          <input
            id="title"
            type="text"
            className={styles.input}
            placeholder="Enter the recipe title"
            {...register('title', { 
              required: 'Title is required',
              maxLength: {
                value: 100,
                message: 'Title cannot exceed 100 characters'
              }
            })}
          />
          {errors.title && (
            <span className={styles.errorText}>{errors.title.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="ingredients" className={styles.label}>
            Ingredients
          </label>
          <textarea
            id="ingredients"
            className={styles.textarea}
            placeholder="List the ingredients, one per line"
            rows={6}
            {...register('ingredients')}
          />
          {errors.ingredients && (
            <span className={styles.errorText}>{errors.ingredients.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="instructions" className={styles.label}>
            Instructions*
          </label>
          <textarea
            id="instructions"
            className={styles.textarea}
            placeholder="Explain how to prepare the recipe"
            rows={10}
            {...register('instructions', { 
              required: 'Instructions are required',
              minLength: {
                value: 20,
                message: 'Instructions should be at least 20 characters'
              }
            })}
          />
          {errors.instructions && (
            <span className={styles.errorText}>{errors.instructions.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="author_name" className={styles.label}>
            Your Name
          </label>
          <input
            id="author_name"
            type="text"
            className={styles.input}
            placeholder="Enter your name (optional)"
            {...register('author_name')}
          />
          {errors.author_name && (
            <span className={styles.errorText}>{errors.author_name.message}</span>
          )}
        </div>

        <div className={styles.formActions}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Recipe'}
          </button>
          <button
            type="button"
            className={styles.resetButton}
            onClick={() => reset()}
            disabled={isSubmitting}
          >
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
}