## Why

> **Superseded in part (2026-09-25):** the routing, page-split and colour-page requirements below
> were withdrawn by `openspec/changes/single-page-portfolio/`. The portfolio is now one page with
> anchored sections, `react-router-dom` is no longer a dependency, and the colour splash page was
> removed from the live site. The component extraction, data modules and deployment work from this
> change are unaffected.

The portfolio is currently a set of hand-maintained static HTML pages that repeat the same
header, footer and markup across `index.html`, `pages/projects.html`, `pages/about.html` and
`pages/color.html`. Every shared change (navigation, hover behaviour, project entries) has to
be edited page by page, which has already caused styling to drift between pages. The site
needs a single component-based source of truth without changing how it looks to visitors.

## What Changes

- Replace the static pages with a React single page application built by Vite.
- Keep the visual output identical: dark theme, grey-to-white hover treatment, skills ticker,
  project cards, About hover hints and the colour splash page.
- Move the repeated header (GitHub link, nav, LinkedIn link) into one shared `Menu` component
  and the repeated Skills/Projects/About markup into reusable components and data modules.
- Replace the jQuery behaviour layer (`script.js`) with React state and routing:
  - menu highlight per section becomes the active route style,
  - `showDetails()` hover hints on the About page become component state,
  - links between pages become client-side routes.
- Preserve the previous static site inside `legacy/` instead of deleting it.
- Document the new setup, scripts, routes and deployment path in the README.

## Capabilities

### New Capabilities
- react-portfolio: the portfolio is delivered as a single React application with shared
  components, route-based navigation and data-driven page content that preserves the existing
  dark visual identity.

### Modified Capabilities
- None

## Impact

- Build tooling: adds `package.json`, `vite.config.js`, `.gitignore` and a GitHub Pages
  deployment workflow.
- Source layout: new `src/` tree (pages, components, data, hooks, styles) replaces the root
  `index.html`, `styles.css` and `script.js`; the old files are archived in `legacy/`.
- Assets: `images/` is unchanged and now imported by the components so the build fingerprints
  them.
- No backend, API or data-layer changes; all content remains front-end only.
