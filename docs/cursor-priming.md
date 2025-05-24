# 🏛️ Empirecraft Learning Engine – Cursor Priming Document (Refined Vision)


---


## 🧠 Core Rules
- Follow `tasks.md` one task at a time.
- After each task, STOP for manual validation and strategic review.
- Touch only what the current task requires—no sweeping edits or assumptions.
- Write minimal, precise, and testable code.
- For manual setups (e.g., Supabase, API keys), clearly prompt the human operator.


---


## 🔹 Project Setup
1. Initialize the project with Next.js (App Router), Tailwind CSS, and libraries as per `architecture.md`.
2. Connect to Supabase as the backend (for user data, entries, connections, auth if used).
3. Confirm GPT API access for dynamic analysis, prods, and insights.
4. Verify Vercel deployment target is set.


---


## 🏗 Follow `tasks.md` Sequentially


### ✅ **First Task: Build Core Entry & Reflection Page**
- Create an **open-ended entry point** (`/entry` or `/focus`) where the user can input any focus topic (e.g., "Napoleon").
- Minimal, clean UI with Tailwind—open text input, placeholder for GPT prods/insights.
- Render empty, loading, error, and populated states as defined in `ux_states.md`.
- STOP for manual testing: ensure input works, states transition smoothly.


---


### 🔜 **Next Task: Integrate Dynamic GPT Prompts & Insights**
- Create an API endpoint (`/api/generate-prods`) to:
  - Accept the user’s input/synthesis.
  - Generate **follow-up questions**, **fresh insights**, and **analogies** to prod thinking.
- Render these prods/insights in a dynamic, engaging format (cards, sections).
- Minimal GPT prompt design for initial functionality.
- STOP for manual testing: check prompt relevance, response clarity.


---


### 🔜 **Proceed Sequentially**
- **Synthesis Refinement**: Enable the user to expand/refine ideas based on system prods.
- **Vault Storage**: Save entries (with synthesis, prods, insights) to Supabase.
- **Connection/Pattern Engine**: Implement initial logic to suggest related topics or entries based on synthesis and past data.
- **Visual Map (Optional MVP)**: Start with a list/grid of entries; expand to an interactive graph view to visualize connections and evolution of ideas.
- **Auth (Optional)**: Configure Supabase Auth for secure data storage and personalized experiences.
- **Progress Tracking (Optional)**: Implement basic stats (e.g., entry count, last session) to track engagement.


---


## 🛠 Human Operator Reminders
- For each feature, **test interactively**—ensure UI logic works, GPT prompts are relevant, and user experience feels natural and thought-provoking.
- Validate Supabase rules (RLS) and schema alignment with `architecture.md`.
- Monitor GPT outputs for quality, ensuring they prompt **deeper thinking** and **relevant insights** rather than generic text.
- For visual components, test with sample data before scaling to avoid performance bottlenecks.


---


## 🚨 Key Principle
_"The system must not be static—it should feel alive, responsive, and thought-provoking. Each entry is an invitation for deeper thinking, connection-making, and judgment sharpening."_


---


### 🚀 Ready to execute?
Start with the **core entry and prodding prompt system**, then progressively expand to synthesis refinement, connection mapping, and dynamic vault visualization.





