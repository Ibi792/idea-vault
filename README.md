# IdeaVault — Digital Ideas Journal

IdeaVault is a browser-based personal journal designed to capture, organize, and revisit ideas the moment inspiration strikes. It prioritizes speed and simplicity so that recording a thought never interrupts your creative flow. Built as a Mid-Term Project, the app demonstrates core React component architecture, client-side state management, and localStorage persistence — entirely without a backend.

## Features

- **Instant Idea Capture** — Add an idea with a title and optional notes; form clears and refocuses automatically after submission
- **Mood of the Day** — Select a daily mood via emoji buttons; the active mood is stamped on every idea captured that day
- **Idea Detail View** — Click any card to open a full-screen modal with the complete title, notes, and mood; scrollable for long content
- **Search & Filter** — Real-time full-text search across titles and notes, plus filter-by-mood buttons; search is debounced via `useDeferredValue` for performance
- **Local Persistence** — All ideas and the daily mood survive page refreshes via `localStorage`
- **Responsive Layout** — Stacks correctly on screens below 600px

## Tech Stack

| Layer | Technology |
|---|---|
| UI Library | React 18 |
| Build Tool | Vite 6 |
| Markup | JSX / HTML5 |
| Styling | CSS3 (custom properties, flexbox, CSS keyframe animations) |
| Persistence | Browser `localStorage` (custom read/write helper in `src/storage.js`) |
| Language | JavaScript ES2020+ |

## Setup

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
# → App runs at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project Structure

```
idea-vault/
├── src/
│   ├── components/
│   │   ├── IdeaForm.jsx       # Title + Notes form with auto-focus
│   │   ├── IdeaList.jsx       # Renders filtered idea cards
│   │   ├── IdeaModal.jsx      # Full-screen detail overlay
│   │   ├── MoodSelector.jsx   # Emoji mood button row
│   │   └── SearchFilter.jsx   # Search input + mood filter buttons
│   ├── App.jsx                # Root component; holds all shared state
│   ├── main.jsx               # React entry point
│   ├── index.css              # Global styles + media queries
│   └── storage.js             # localStorage CRUD helpers
├── index.html
├── vite.config.js
└── package.json
```

## Known Limitations

- **No cloud sync** — Data is stored in the browser's `localStorage` only. Clearing browser data or switching devices will lose all ideas.
- **No edit functionality** — Ideas cannot be edited after capture; only deletion is supported.
- **Single daily mood** — Only one mood can be set per day. Changing it mid-day updates the stored value but does not re-stamp ideas already captured.
- **No image or file attachments** — Notes are plain text only.
- **localStorage size limit** — Browsers cap `localStorage` at ~5MB. A very large number of long-note ideas could approach this limit.

What I learned:
This excercise furthered my understanding of AI development and really showed me just how broad it's applications can be when I don't have a specific northstar to gun for. I had a lot of options and plenty of ways of achiveving my goals in combination with my AI. It also taught me that AI is more prone to oversights when the scope is this broad. While nothing major went wrong i did have to correct some bits of behavior I assumed it would handle just fine. These included the proper storage and the behavior of detail view.
