# Transcript Highlights

## Catching a blank page caused by a CORS issue (Session 1, early)

After the landing page was scaffolded, opening `index.html` directly in the browser showed a completely blank screen. The root cause turned out to be a browser CORS restriction on `file://` URLs that silently blocked the external Babel script from loading — not something I would have spotted immediately on my own. This matters because it led directly to stripping out the CDN/Babel approach and replacing it with clean static HTML, which actually made the landing page more reliable.

## Questioning the React setup and understanding the tradeoff (Session 1, early)

I noticed the project was built with plain HTML and CSS even though I asked for React, so I stopped and asked why instead of just accepting it. Claude explained the three-file structure I requested implied a no-build-step setup, and that proper React needs a bundler. That conversation gave me a real understanding of the difference between CDN React and production React, and eventually led me to migrate the whole project to Vite later in the session.

## Designing the localStorage data model before writing any code (Session 1, midway)

Before building any persistence logic, I asked Claude to explain the approach — what the data structure would look like, why ideas would be stored as a JSON array rather than one flat string, and how the mood would be kept separate with a daily expiry. Understanding the schema upfront meant the `storage.js` helper was clean and purposeful from the start, and every other component could trust it completely.

## Lifting mood state to fix disconnected components (Session 1, later)

The `MoodSelector` and `IdeaForm` were not actually connected — the form was reading mood directly from `localStorage` instead of from React state. I caught this when thinking through what "include the currently selected mood" actually meant at the component level. Lifting the mood state up to `App` fixed it properly and also made the whole data flow easier to reason about going forward.

## Refactoring search to use `useDeferredValue` instead of just filtering on every keystroke (Session 1, later)

I asked for the search bar to be more performant, which prompted a discussion about React 18's `useDeferredValue` hook. Rather than reaching for a debounce timeout or an external library, we used a built-in React primitive that lets the input update at high priority while the filtering work runs at lower priority. This was a good example of reaching for the right tool rather than the familiar one.
