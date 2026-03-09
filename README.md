# IdeaVault — Digital Ideas Journal

IdeaVault is a browser-based personal journal designed to capture, organize, and revisit ideas the moment inspiration strikes. It prioritizes speed and simplicity so that recording a thought never interrupts your creative flow. Built as a Mid-Term Project, the app demonstrates core React component architecture and client-side state management without any backend dependency.

## Planned Features (MVP)

- [ ] **Instant Idea Capture** — One-click input to add a new idea with a title and optional note
- [ ] **Mood of the Day** — Select your current mood via emoji buttons, stamped on every idea you capture that day
- [ ] **Idea Detail View** — Expand an idea card into a full-screen detail panel for longer notes
- [ ] **Search & Filter** — Real-time full-text search and tag-based filtering across all ideas
- [ ] **Local Persistence** — Save and restore ideas using `localStorage` so data survives refreshes

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| UI Library  | React 18 (CDN / Babel standalone)   |
| Markup      | HTML5                               |
| Styling     | CSS3 (custom properties, grid/flex) |
| Scripting   | JavaScript (ES2020+, JSX via Babel) |
| Persistence | Browser `localStorage`              |
| Tooling     | No build step required              |
