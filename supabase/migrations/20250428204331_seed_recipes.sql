-- 20240429XXXXXX_seed_recipes.sql

insert into public.recipes 
  (title, ingredients, instructions, author_name, author_email, is_vegan, is_vegetarian, is_gluten_free, is_dairy_free, is_low_sodium, is_low_calorie)
values
  (
    'Spaghetti al Pomodoro',
    '- 200g spaghetti
- 300g ripe tomatoes
- 2 cloves garlic
- Fresh basil leaves
- 2 tablespoons extra virgin olive oil
- Salt to taste',
    '1. Bring a large pot of salted water to boil. Cook spaghetti until al dente.
2. In a separate pan, heat olive oil and gently sauté garlic until fragrant.
3. Add chopped tomatoes and cook for about 10 minutes.
4. Tear basil leaves and add them to the sauce.
5. Drain spaghetti and toss it with the sauce.
6. Serve hot with extra basil if desired.',
    'Matteo Melani',
    'matteo@example.com',
    false, true, false, true, false, false
  ),
  (
    'Risotto alla Milanese',
    '- 300g Arborio rice
- 1 packet saffron
- 1 small onion
- 1L beef broth
- 50g butter
- 50g Parmesan cheese, grated',
    '1. Heat broth and keep it warm.
2. In a pan, melt half of the butter and sauté finely chopped onion.
3. Add rice and toast lightly for 2-3 minutes.
4. Dissolve saffron in a ladle of warm broth.
5. Gradually add broth to rice, stirring constantly until absorbed.
6. Continue adding broth until rice is cooked (about 18 minutes).
7. Stir in remaining butter and Parmesan. Serve immediately.',
    'Sofia Rossi',
    'sofia@example.com',
    false, true, false, false, false, false
  ),
  (
    'Melanzane alla Parmigiana',
    '- 2 large eggplants
- 500ml tomato sauce
- 200g mozzarella cheese
- 100g Parmesan cheese, grated
- Olive oil for frying
- Fresh basil leaves',
    '1. Slice eggplants and salt them to remove bitterness; let sit 30 minutes.
2. Rinse and dry slices, then fry in olive oil until golden.
3. In a baking dish, layer fried eggplant, tomato sauce, mozzarella, and Parmesan.
4. Repeat layers until ingredients are used.
5. Bake at 180°C (350°F) for 30-35 minutes.
6. Garnish with fresh basil before serving.',
    'Nicola Bianchi',
    'nicola@example.com',
    false, true, false, false, false, false
  ),
  (
    'Insalata Caprese',
    '- 3 ripe tomatoes
- 250g mozzarella di bufala
- Fresh basil leaves
- Extra virgin olive oil
- Salt and pepper to taste',
    '1. Slice tomatoes and mozzarella into even rounds.
2. On a plate, alternate slices of tomato and mozzarella.
3. Add fresh basil leaves between slices.
4. Drizzle generously with olive oil.
5. Season with salt and pepper.
6. Serve immediately as a fresh starter.',
    'Chiara Verdi',
    'chiara@example.com',
    false, true, true, false, true, true
  ),
  (
    'Minestrone Soup',
    '- 1 zucchini
- 2 carrots
- 1 onion
- 2 potatoes
- 100g green beans
- 1 can cannellini beans
- 100g small pasta (ditalini or elbow)
- 2 tablespoons tomato paste
- 1L vegetable broth
- Olive oil
- Salt and pepper to taste',
    '1. Dice all vegetables into small pieces.
2. In a large pot, heat olive oil and sauté onion until translucent.
3. Add all fresh vegetables and cook for 5 minutes.
4. Stir in tomato paste, then add vegetable broth.
5. Simmer for 20 minutes until vegetables are tender.
6. Add pasta and cannellini beans; cook until pasta is al dente.
7. Season with salt and pepper.
8. Serve hot with a drizzle of olive oil.',
    'Luca Neri',
    'luca@example.com',
    true, true, false, true, true, true
  );