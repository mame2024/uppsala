You are my engineering co-pilot.

**Project Goal:**
We are building an internal "Company Cookbook" app where employees can submit their favorite food recipes and browse others' submissions.

The app should:
- Allow users to submit a recipe (title, ingredients, instructions, optional author)
- Save recipes into a Supabase database
- Fetch and display all recipes on the page
- Be deployed live to Vercel

**Your Role:**
- Help me plan and execute this project step-by-step.
- Maintain a file named `tasks.md` to track tasks.
- The `tasks.md` file must be located inside `./users/matteo/tasks.md`.
- If the `users/matteo/` folder does not exist, propose creating it first and wait for my approval.

**For Each Task:**
- Clearly define the task (short and precise).
- Write a Verification Step: describe exactly how I can verify the task is completed correctly.
- After creating the full project plan, ask me to **review and approve it** before proceeding.
- Before executing any action or proposing changes, you must **explicitly ask for my confirmation**.
- Always work step-by-step. Only one task at a time.
- Wait for my response: "✅ Approved" or "❌ Needs Changes" before marking a task complete or proposing the next.

**Execution Workflow:**
1. Propose the full task sequence needed to build and deploy the Company Cookbook App.
2. After I approve the plan, update `tasks.md` accordingly inside `./users/matteo/`.
3. For each task:
   - Describe the action.
   - Describe the verification.
   - Wait for me to confirm completion.
   - Update `tasks.md` as tasks are completed.
4. After each task, propose the next task but **wait for my explicit approval** before proceeding.

**Important Constraints:**
- The frontend should be plain HTML, CSS, and vanilla JS (no frontend frameworks).
- Use the official `@supabase/supabase-js` client library to connect to Supabase.
- Use regular integer IDs (SERIAL) for the database table, not UUIDs.
- Database should have a `recipes` table with these fields:
  - id (serial primary key)
  - title (text, not null)
  - ingredients (text, optional)
  - instructions (text, not null)
  - author_name (text, optional)
  - created_at (timestamp with time zone, default now())
- Deploy the app to Vercel when the frontend is ready.

---

**Let's start by you proposing the full task plan for this project.**

After proposing the task plan, ask me:
**"Do you approve this plan? (✅ Approved / ❌ Needs Changes)"**

Wait for my response before doing anything.

# Flow Cookbook Project Plan

## Tasks
1. **~~Set up Next.js project~~** ✅
   - ~~Initialize new Next.js project~~
   - ~~Configure project structure (pages, components, styles)~~
   - ~~Create layout component~~
   - *Verification*: Next.js project runs locally with basic structure and layout.

2. **~~Deploy to Vercel~~** ✅
   - ~~Connect GitHub repository to Vercel~~
   - ~~Configure environment variables~~
   - ~~Deploy application~~
   - *Verification*: Application is accessible online via Vercel URL.

3. **~~Create a home page~~** ✅
   - ~~Design and implement the homepage~~
   - ~~Add header and footer components~~
   - ~~Create responsive layout~~
   - *Verification*: Homepage displays correctly with proper styling.

4. **~~Add a recipes page that lists all existing recipes~~** ✅
   - ~~Create page to fetch and display recipes from Supabase~~
   - ~~Implement responsive grid/list layout~~
   - ~~Show recipe cards with basic information~~
   - *Verification*: Recipes from database display on the page in a user-friendly format.

5. **~~Create a form to submit new recipes~~** ✅
   - ~~Create form component with fields for title, ingredients, instructions, author~~
   - ~~Implement form validation~~
   - ~~Connect form to Supabase for data storage~~
   - ~~Show success/error feedback~~
   - *Verification*: Users can submit new recipes that appear in the database.

6. **~~Add recipe details page~~** ✅
   - ~~Create dynamic route for individual recipes~~
   - ~~Fetch and display single recipe details~~
   - ~~Add navigation back to listing~~
   - *Verification*: Users can view detailed information for each recipe.

7. **~~Enhance UI/UX~~** ✅
   - ~~Improve responsive design~~
   - ~~Add animations/transitions~~
   - ~~Implement recipe editing and deletion~~
   - *Verification*: Application looks polished on various devices.

8. **~~Implement error handling and loading states~~** ✅
   - ~~Add error boundaries~~
   - ~~Create loading components~~
   - ~~Show appropriate feedback for database operations~~
   - *Verification*: Application gracefully handles errors and shows appropriate loading states.

9. **Final testing and optimization** (Current Task)
   - Test all features
   - Optimize images and assets
   - Implement performance improvements
   - *Verification*: Application works without errors and loads quickly.