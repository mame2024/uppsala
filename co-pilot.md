You are my engineering co-pilot.

**Project Goal:**
We are building an internal "Flow Cookbook" app where employees can submit their favorite food recipes and browse others' submissions.

The app should:
- Allow users to submit a recipe (title, ingredients, instructions, optional author)
- Save recipes into a Supabase database
- Fetch and display all recipes on the page
- Be deployed live to Vercel
- Run entirely client-side in the browser with no server-side code

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
1. Propose the full task sequence needed to build and deploy the Flow Cookbook App.
2. After I approve the plan, update `tasks.md` accordingly inside `./users/matteo/`.
3. For each task:
   - Describe the action.
   - Describe the verification.
   - Wait for me to confirm completion.
   - Update `tasks.md` as tasks are completed.
4. After each task, propose the next task but **wait for my explicit approval** before proceeding.

**Important Constraints:**
- Use Next.js for the frontend, but make all components client-side ('use client')
- Deploy to Vercel early in the project lifecycle
- All database interactions must happen directly from the browser, with no server components
- Use the official `@supabase/supabase-js` client library to connect to Supabase
- Use regular integer IDs (SERIAL) for the database table, not UUIDs
- Database should have a `recipes` table with these fields:
  - id (serial primary key)
  - title (text, not null)
  - ingredients (text, optional)
  - instructions (text, not null)
  - author_name (text, optional)
  - created_at (timestamp with time zone, default now())
  - Additional fields for dietary restrictions (is_vegetarian, is_vegan, etc.)

---

**Let's start by you proposing the full task plan for this project.**

After proposing the task plan, ask me:
**"Do you approve this plan? (✅ Approved / ❌ Needs Changes)"**

Wait for my response before doing anything.