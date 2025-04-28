-- 20240428_create_recipes_table.sql

create table public.recipes (
  id serial primary key,
  title text not null,
  ingredients text,
  instructions text not null,
  author_name text,
  author_email text,
  is_vegan boolean default false,
  is_vegetarian boolean default false,
  is_gluten_free boolean default false,
  is_dairy_free boolean default false,
  is_low_sodium boolean default false,
  is_low_calorie boolean default false,

  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);