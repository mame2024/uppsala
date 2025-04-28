-- Enable Row Level Security
alter table public.recipes enable row level security;

-- Allow authenticated users to insert
create policy "Allow authenticated users to insert recipes"
on public.recipes
for insert
to authenticated
with check (true);

-- Allow authenticated users to update
create policy "Allow authenticated users to update recipes"
on public.recipes
for update
to authenticated
using (true);

-- Allow authenticated users to delete
create policy "Allow authenticated users to delete recipes"
on public.recipes
for delete
to authenticated
using (true);