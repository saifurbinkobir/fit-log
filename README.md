🏋️ FitLog — Workout Library
Next.js
React
Tailwind CSS
daisyUI
License
FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up. Browse a curated library of twelve lifts covering every major muscle group, dive into full workout details, build today's plan, save lifts for later, and track your session metrics live — all wrapped in a bold, accent-driven dark UI.

🚀 Live Demo:  https://fit-log-flax-psi.vercel.app/

🛠️ Technologies Used
Technology	Purpose
Next.js 16 (App Router)	React framework — server components, file-based routing
React 19	UI library
Tailwind CSS v4	Utility-first styling (CSS-first config)
daisyUI 5	Component classes (navbar, dropdown, spinner, toast styling)
react-toastify	Toast notifications
react-icons	Icon set (stats, buttons, chevrons)
next/image	Optimized remote workout images
FitLog REST API	Remote workout data (api.abcz.workers.dev/api/fitlog)
✨ Key Features
1. Workout Library Grid — Twelve exercises fetched server-side from a remote API, displayed in a responsive 3×4 grid with category pills, equipment, duration, calories, and rating on every card.
2. Detailed Workout Pages — Each lift opens a dedicated detail page with a large illustration, key specs panel (equipment, difficulty, sets, reps, duration, calories, rating), and step-by-step instructions.
3. Plan & Save with Live Counters — Add any workout to "Today's Plan" or "Save for later" from the detail page; the navbar's Plan and Saved badges update instantly, with duplicate-add protection.
4. Session Metrics That Update Live — The My Plan page tracks Exercises, Minutes, and Calories in real time as lifts are added, marked done, or removed — across both plan tabs with a Sort By dropdown (Duration / Calories / Rating).
5. Polished States Everywhere — Toast notifications on every action, a loading animation while workout data fetches, a friendly empty state when your plan is bare, and a themed 404 page for unknown routes.
🏁 Getting Started
# Clone the repository
git clone https://github.com/your-username/fit-log.git

# Install dependencies
npm install

# Run the dev server
npm run dev
Open http://localhost:3000 to view the app.
⚠️ The workout data is fetched from a remote API, so an internet connection is required for the library and detail pages to render.
📁 Project Structure
src/
├── app/                  # App Router pages (home, my-plan, exercise/[id], not-found)
│   └── components/shared/ # Navbar, Footer
├── components/           # Page components (banner, cards, plan cards, buttons)
└── context/              # PlanContext — plan/saved state + actions
© 2026 FitLog — Workout Library. Train hard, log honest. 💪