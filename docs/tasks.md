# 🏛️ Empirecraft Learning Engine – Master Feature Document (Refined Vision)


---


## 🔹 Feature: Focus Topic Entry
### 1. Goal
- Allow the user to enter any topic or focus area, kicking off a dynamic, engaging session that sets the stage for deeper synthesis and system-driven expansion.


### 2. Frontend Components
- Core entry point (e.g., `/entry` or `/focus`)
- Open-ended text input for focus topic
- Optional "Surprise Me" button for serendipitous suggestions
- Loading/error states with engaging feedback


### 3. Backend Logic
- Simple session initiation with user topic input
- Future option: GPT or Supabase-driven topic suggestion generator for inspiration


### 4. API Endpoints
- None for MVP (static suggestions); optional `/api/suggestions` if dynamic suggestions are added


### 5. Edge Cases
- No topic entered → prevent session start with helpful message
- Suggestion fetch failure → display retry option with fallback prompt


### 6. Pseudocode
- User lands on entry page → inputs topic → stored in session state → proceeds to dynamic synthesis


---


## 🔹 Feature: Dynamic Synthesis & Reflection Editor
### 1. Goal
- Capture user’s initial thoughts, insights, and reflections to seed dynamic interactions.


### 2. Frontend Components
- Rich text editor with autosave functionality
- Clean, minimal UI to encourage focused thinking
- Optional manual save button for user control


### 3. Backend Logic
- Supabase entries table: `id, user_id, focus_topic, synthesis, created_at, updated_at`


### 4. API Endpoints
- `/api/save-synthesis` POST  
  - Input: `{ entryId, synthesisText }`  
  - Output: success/failure response


### 5. Edge Cases
- User not logged in (if auth is added) → prompt to sign in or continue as guest
- DB save failure → retry logic with user notification


### 6. Pseudocode
- User writes synthesis → autosave triggers periodically → backend updates DB → confirmation shown


---


## 🔹 Feature: Dynamic Prodding & Insight Engine
### 1. Goal
- Actively expand user’s thinking with GPT-driven follow-ups:
  - Provocative questions
  - Fresh analogies and cross-domain comparisons
  - New insights linked to past learnings


### 2. Frontend Components
- Dynamic display area for GPT prods (cards, modals, or inline)
- Button: “Generate Follow-ups & Insights” (or auto-trigger after synthesis)


### 3. Backend Logic
- GPT API integration to generate contextual prods and insights based on focus and synthesis


### 4. API Endpoints
- `/api/generate-prods` POST  
  - Input: `{ focusTopic, synthesis }`  
  - Output: `{ prods, insights, analogies }`


### 5. Edge Cases
- GPT call fails → show retry option
- No synthesis provided → disable prod generation with prompt to add content


### 6. Pseudocode
- User requests prods → API calls GPT → returns dynamic prompts/insights → displayed interactively


---


## 🔹 Feature: Vault & Insight Map
### 1. Goal
- Store and visually display past entries, insights, and evolving mental connections—becoming a living knowledge map.


### 2. Frontend Components
- Vault view with grid/list toggle, filters, and search
- Optional: Interactive graph/network visualization showing entry relationships and patterns
- Entry cards with summaries, tags, and prods


### 3. Backend Logic
- Supabase entries table: `id, user_id, focus_topic, synthesis, prods, insights, created_at`


### 4. API Endpoints
- `/api/entries` GET  
  - Output: list of entries with metadata  
- `/api/entry/:id` GET  
  - Output: detailed entry data


### 5. Edge Cases
- No entries yet → display inviting empty state
- Search yields no results → show friendly prompt with suggestion to expand filters


### 6. Pseudocode
- Load vault → fetch entries from DB → display entries and/or graph → user interacts via filters or navigation


---


## 🔹 Feature: Entry Detail & Connection Exploration
### 1. Goal
- Present a comprehensive view of a selected entry, including all dynamic interactions and connections.


### 2. Frontend Components
- Detailed view with:
  - User synthesis
  - GPT prods, insights, and analogies
  - Linked entries with relationship highlights
- Interactive elements for follow-ups or deeper connections


### 3. Backend Logic
- Fetch specific entry by ID from Supabase


### 4. API Endpoints
- `/api/entry/:id` GET  
  - Output: detailed entry with linked data


### 5. Edge Cases
- Entry not found → show error message with option to return to vault


### 6. Pseudocode
- User selects entry → fetches data → renders detailed view with dynamic elements


---


## ✅ Updated Task List
- Build Entry Page with open text input and “Surprise Me” option
- Implement Dynamic Synthesis Editor with autosave
- Integrate GPT-powered Prods & Insights Engine
- Develop Vault view with filters, search, and optional knowledge map
- Create Entry Detail View for in-depth exploration
- (Optional) Add Visual Map (graph) with connections
- (Optional) Implement Authentication (login, register, profile)
- Set up Supabase backend (DB, rules, queries)
- Test interactivity, insight generation, and user flow smoothness
- Optimize for performance and mobile responsiveness
- Prepare for seamless deployment (e.g., Vercel + Supabase)


---


🔥 **Key Principle**:  
_"Empirecraft isn’t just a journaling app—it’s your personal mental gym that challenges, expands, and evolves your strategic thinking."_  





