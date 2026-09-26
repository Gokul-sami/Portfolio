## 1. Preparation

- [x] 1.1 Review every existing page, stylesheet rule and jQuery behaviour to build the port inventory.
- [x] 1.2 Decide the toolchain (Vite + React, JavaScript, HashRouter) and record the rationale.
- [x] 1.3 Move the original site (`index.html`, `styles.css`, `script.js`, `pages/`) into `legacy/`
  with `git mv`, and repoint the archived image references so the old pages still open.

## 2. Application scaffold

- [x] 2.1 Add `package.json`, `vite.config.js` (`base: './'`), `.gitignore` and the Vite entry `index.html`.
- [x] 2.2 Add `src/main.jsx` (root + HashRouter), `src/App.jsx` (routes) and `src/styles/global.css`.
- [x] 2.3 Port the icon SVGs from the original markup into reusable components.

## 3. Component and data extraction

- [x] 3.1 Extract nav, socials, skills, hero copy and bio facts into `src/data/profile.js`, and the four
  project cards into `src/data/projects.js` (images imported so Vite handles the URLs).
- [x] 3.2 Build the shared `Menu` component with the active-route highlight replacing the jQuery
  `menuHighlight` calls.
- [x] 3.3 Build `SkillsMarquee` with the duplicated skill list and CSS animation, and `ProjectCard`
  for the project grid.
- [x] 3.4 Add `ScrollToTop` and `useDocumentTitle` so navigation mirrors a page load.

## 4. Page ports

- [x] 4.1 Port the home page (roles, tagline, skills ticker, colour page footer link).
- [x] 4.2 Port the projects page, including internal colour-page link and all external links.
- [x] 4.3 Port the about page, replacing `showDetails()` with state-driven hover hints and keeping the
  per-link hover colours.
- [x] 4.4 Port the colour page, scoping its Bootstrap utilities under `.color-page` and applying the
  light body theme only while the route is active.

## 5. QA and sign-off

- [x] 5.1 Produce a production build (`npm run build`) with no errors.
- [x] 5.2 Verify all four routes in a browser: correct titles, four project cards, six about links,
  six bio facts, hint text on hover, `#31a2ff` LinkedIn icon hover, active nav highlighting, the
  colour page light background and its removal after navigating away, and a clean console.
- [x] 5.3 Compare the rendered pages against the original layout and links.
- [x] 5.4 Update the README with the tech stack, file structure, scripts, routes, deployment steps and
  a note about `legacy/`.
