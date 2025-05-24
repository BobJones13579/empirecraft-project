# 🏛️ Empirecraft Learning Engine – cursor-rules.md (Refined Vision)


---


## 1️⃣ File and Folder Structure Rules
- **Frontend Pages** (`/app`)
  - UI views go in `/app` with route-aligned folders (`/entry`, `/vault`, `/entry/[id]`).
  - Shared layout components in `/components/Layout`.
  - Dynamic prodding and insight features in dedicated subfolders (e.g., `/components/Prodding`).
- **API Routes** (`/pages/api`)
  - GPT integration endpoints: `/api/generate-prods`.
  - Entry management endpoints: `/api/entries`, `/api/entry/[id]`, `/api/save-synthesis`.
- **Supabase Logic** (`/lib/db`)
  - Database access helpers and RPC functions live in `/lib/db`.
  - Enforce Row-Level Security (RLS) where needed.
- **Shared Utilities** (`/utils`)
  - GPT prompt templates, context builders, and helper functions go here.
- **Components** (`/components`)
  - Reusable UI components grouped by feature: `/components/FocusInput`, `/components/SynthesisEditor`, `/components/ProddingEngine`, `/components/VaultView`.


---


## 2️⃣ Coding Conventions
- Use TypeScript for all files (`.ts`, `.tsx`).
- Prefer `async/await` for asynchronous calls.
- Tailwind CSS is mandatory for styling; avoid inline styles and CSS modules.
- Components should be atomic and reusable, ideally <300 lines each.
- State management should be local or via simple React Context; avoid unnecessary global state.
- API handlers must return clear, typed JSON responses with appropriate status codes.


---


## 3️⃣ Supabase Rules
- Verify user authentication before DB access (if auth is enabled).
- Use Row-Level Security (RLS) to isolate user data if needed.
- Define indexes and constraints in Supabase schema for performance and consistency.
- Back up Supabase schema and data during development milestones.


---


## 4️⃣ GPT Integration Rules
- Store prompt templates and generation logic in `/utils/prompts.ts`.
- Keep GPT prompts concise, context-rich, and adaptive to user input.
- All GPT calls go through `/api/generate-prods`; no direct frontend calls.
- Log prompt requests and truncated responses for debugging and iteration.
- Ensure prods and insights are contextually relevant and not generic.


---


## 5️⃣ Task Management & Modularity
- Break down features into 4–8 subtasks to avoid monolithic code.
- Split files >500 lines into logical modules (e.g., `/components/ProddingEngine`, `/components/VaultGraph`).
- Modularize DB logic into hooks or helpers (e.g., `useSaveEntry`, `useFetchVault`).
- Use atomic commits for each task generated via Cursor.


---


## 6️⃣ Context & Chat Management
- Clear Cursor chat context after:
  - Completing a major task.
  - Detecting off-topic or degraded responses.
- Keep chats focused on the current task; avoid overload.


---


## 7️⃣ Self-Improvement Rule
- When recurring logic or design patterns emerge (e.g., GPT prompt styles, layout structures), generate a new Cursor rule for consistency.
- Maintain an evolving `cursor-rules.md`, updated with lessons learned and optimizations.


---


## 🔥 Key Principle
_"Empirecraft isn’t just a project—it’s a dynamic, evolving system that must challenge, expand, and sharpen the user’s mind. Every component and decision should reinforce this mission."_ 





