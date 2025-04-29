'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import supabase from '@/lib/supabase/client';
import styles from './edit-recipe.module.css';

export default function EditRecipePage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    author_name: '',
    is_vegetarian: false,
    is_vegan: false,
    is_gluten_free: false,
    is_dairy_free: false
  });
  
  useEffect(() => {
    async function fetchRecipe() {
      try {
        const { data, error } = await supabase
          .from('recipes')
          .select('*')
          .eq('id', params.id)
          .single();
        
        if (error) throw error;
        if (!data) throw new Error('Recipe not found');
        
        setFormData({
          title: data.title || '',
          ingredients: data.ingredients || '',
          instructions: data.instructions || '',
          author_name: data.author_name || '',
          is_vegetarian: data.is_vegetarian || false,
          is_vegan: data.is_vegan || false,
          is_gluten_free: data.is_gluten_free || false,
          is_dairy_free: data.is_dairy_free || false
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    if (params.id) {
      fetchRecipe();
    }
  }, [params.id]);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from('recipes')
        .update(formData)
        .eq('id', params.id);
      
      if (error) throw error;
      
      setSuccess(true);
      
      // Navigate back to recipe details after short delay
      setTimeout(() => {
        router.push(`/recipes/${params.id}`);
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };
  
  if (loading) return (
    <div className={styles.container}>
      <div className={styles.loading}>Loading recipe...</div>
    </div>
  );
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Edit Recipe</h1>
      
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}
      
      {success && (
        <div className={styles.success}>
          <p>Recipe updated successfully! Redirecting...</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Recipe Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter recipe title"
            className={styles.input}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="ingredients">Ingredients *</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
            placeholder="Enter ingredients, one per line"
            className={styles.textarea}
            rows={8}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="instructions">Instructions *</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
            placeholder="Enter step-by-step instructions"
            className={styles.textarea}
            rows={10}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="author_name">Your Name</label>
          <input
            type="text"
            id="author_name"
            name="author_name"
            value={formData.author_name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={styles.input}
          />
        </div>
        
        <div className={styles.checkboxGroup}>
          <h3>Dietary Information</h3>
          <div className={styles.checkboxes}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="is_vegetarian"
                checked={formData.is_vegetarian}
                onChange={handleChange}
              />
              Vegetarian
            </label>
            
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="is_vegan"
                checked={formData.is_vegan}
                onChange={handleChange}
              />
              Vegan
            </label>
            
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="is_gluten_free"
                checked={formData.is_gluten_free}
                onChange={handleChange}
              />
              Gluten Free
            </label>
            
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="is_dairy_free"
                checked={formData.is_dairy_free}
                onChange={handleChange}
              />
              Dairy Free
            </label>
          </div>
        </div>
        
        <div className={styles.buttonGroup}>
          <Link href={`/recipes/${params.id}`} className={styles.cancelButton}>
            Cancel
          </Link>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={submitting}
          >
            {submitting ? 'Updating...' : 'Update Recipe'}
          </button>
        </div>
      </form>
    </div>
  );
}
