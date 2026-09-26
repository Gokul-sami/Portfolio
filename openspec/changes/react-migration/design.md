## Context

The site is a small, fully static portfolio: four HTML pages, one shared stylesheet, one small
jQuery file, and a folder of images. The content is stable and there is no backend. The goal is
to stop duplicating markup per page while keeping the established dark aesthetic, the grey text
with white hover feedback, and every existing page, link and interaction.

The repository previously recorded a decision *not* to move to a framework (see the archived
`portfolio-ui-refresh` change). That decision is now reversed explicitly: the maintenance cost
of four duplicated pages outweighs the weight of a small React bundle.

## Goals / Non-Goals

**Goals:**
- One source of truth for the header, the skills ticker and the project cards.
- Pixel-equivalent output for the existing pages, including hover colours and the marquee.
- Route-based navigation instead of separate HTML documents, with the same three nav entries
  plus the colour splash page.
- Keep every existing link, project entry, bio line and image.
- Preserve the old static site for reference.

**Non-Goals:**
- Redesigning the portfolio or changing its copy, colours or layout.
- Introducing a CSS framework, a component library, TypeScript or a test runner.
- Adding a CMS, backend or dynamic data layer.
- Changing hosting providers.

## Decisions

- **Vite + React, JavaScript (no TypeScript).** Matches the size of the project and keeps the
  port mechanical; TypeScript would add type scaffolding with no current benefit.
- **HashRouter instead of BrowserRouter (withdrawn — see `single-page-portfolio`).** The router was
  dropped when the site became a single page; the decision is kept here for context. The site is
  deployed to static hosting (GitHub Pages project site), which is why no server-side routing was
  ever introduced, and that constraint still holds.
- **`base: './'`** in `vite.config.js` so the built assets resolve from any folder depth.
- **CSS copied rule-for-rule, one stylesheet per component/page.** The original look is defined
  by `styles.css`; porting the rules verbatim (rather than inventing new class names) keeps the
  rendering identical and makes regressions easy to spot in review.
- **Selectors that were global in the original stylesheet are scoped** (for example `footer`
  becomes `.home-footer`, `p:hover` becomes `.details p:hover`, `#linkN`/`#details` ids become
  classes) because the original CSS relied on full page loads to avoid collisions. The colour
  page's Bootstrap utilities are re-implemented under a `.color-page` scope so Bootstrap is not
  loaded globally.
- **Content extracted into `src/data`.** `profile.js` holds nav, socials, skills, hero copy,
  bio facts and contact links; `projects.js` holds the four project cards and their links.
- **jQuery dropped.** The menu highlight is derived from the active route and the About hover
  hints from `useState`, so no DOM scripting dependency is needed.
- **Document title per route** via a small `useDocumentTitle` hook, preserving the original
  per-page titles.

### Alternatives considered

- **Keeping the static site and adding a bundler only:** rejected because the duplication that
  motivated the change would remain.
- **Server-side rendering / a meta-framework:** rejected as unnecessary for a static portfolio
  with four routes.
- **Loading Bootstrap from the CDN for the colour page:** rejected because the global reset
  would leak into the dark pages; the used utilities are re-implemented scoped instead.
- **Deleting the old pages outright:** rejected in favour of archiving them under `legacy/`, so
  nothing is lost from the working tree.

## Risks / Trade-offs

- [Visual regressions from re-typing CSS] → rules were copied verbatim and verified in a browser
  against the original layout (home, projects, about, colour), including hover states.
- [Client bundle replaces zero-JS pages] → acceptable: the bundle is ~88 kB gzipped including
  React and the router, and the site was already JS-dependent for its hover behaviour.
- [Hash URLs (`#/projects`) instead of clean paths] → accepted trade-off for hosting simplicity.
- [Deployment source must change] → the readable README section documents switching GitHub Pages
  to the GitHub Actions source, and `dist/` remains droppable on any static host.

## Migration Plan

1. Archive the existing static files into `legacy/` with git history preserved.
2. Scaffold the Vite + React project at the repository root (`package.json`,
   `vite.config.js`, `index.html`, `src/`).
3. Port the shared shell, the home page, the projects page, the about page and the colour page,
   extracting content into `src/data`.
4. Rebuild the interactions in React (active nav, hover hints, scroll restore, titles).
5. Verify the production build in a browser and diff against the original pages.
6. Update the README with the new setup, scripts and deployment instructions.

Rollback is a single `git revert`/checkout of the archived files in `legacy/`; nothing else in
the repository depends on the new structure.

## Open Questions

None. The scope is limited to a like-for-like port of an existing four-page site.
