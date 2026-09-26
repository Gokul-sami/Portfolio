## Why

The portfolio is delivered as four routes (`#/`, `#/projects`, `#/about`, `#/color`), so a reader
who arrives at the site has to click through separate documents to see the work, the background and
the contact details, and the colour splash route is a leftover experiment that competes with the
work for attention. The styling is also the original static-site design (retro display font,
grey-on-grey hover feedback, no motion, no responsive type scale), which no longer reads as a
current developer portfolio.

## What Changes

- Collapse the four routes into **one page**: hero, work, about, skills and contact become sections
  of a single document, reached by in-page anchors.
- **Remove the colour splash page entirely** — the route, its component and stylesheet, and every
  link that pointed at it (home footer, about contact list, the third project card).
- Drop `react-router-dom`; the active nav state is now derived from an IntersectionObserver
  scroll-spy instead of the current route.
- Introduce a new visual system: graphite-black surfaces, a teal signal colour, hairline borders and
  inset highlights instead of grey borders, Clash Display / Plus Jakarta Sans / JetBrains Mono,
  floating pill navigation, double-bezel cards, asymmetric bento and staggered project grids.
- Add the modern interaction set: scroll reveals, reading-progress bar, pointer sheen on cards,
  two-direction technology marquee, copy-address-to-clipboard, back-to-top, and a full-screen
  mobile menu with staggered link reveals.
- The signal colour (lime → periwinkle), the base (OLED black → deep indigo) and the hero's right
  column (portrait → résumé colophon) were revised in
  [`portfolio-recolour`](../portfolio-recolour/proposal.md); the project set was aligned with the
  résumé, the scroll motion extended, and the link-preview card re-cut in the same change.
- Keep the content and behaviour that matter: all four projects with their descriptions, dates,
  images and external links; the full skills list, grouped by category; the six profile facts; the
  contact list with its hover/focus hints; the `<p>`-tagged tagline; and every existing URL.
- Meet the accessibility and metadata baseline that portfolios are judged on: skip link, visible
  focus rings, `aria-current` navigation, live regions for the hint and copy feedback, full
  `prefers-reduced-motion` support, document metadata and link preview tags, and lazy-loaded
  below-the-fold images.

## Capabilities

### New Capabilities
- single-page-portfolio: the portfolio is one scrollable document with anchored sections, a
  scroll-spy navigation, a modern design system and no colour splash route.

### Modified Capabilities
- react-portfolio: the requirement that home, projects, about and colour are client-side routes is
  withdrawn. The colour page requirement is removed outright, and the route-based navigation
  requirement is replaced by in-page anchor navigation with a scroll-spy.

## Impact

- Source: `src/pages/` (all four pages), `src/components/Menu*`, `SkillsMarquee*` and
  `ScrollToTop.jsx` are deleted; `src/components/` now holds one component per page section plus
  the shared design primitives, and `src/hooks/` holds the reveal, scroll-spy, body-lock and
  clipboard hooks.
- Dependencies: `react-router-dom` is removed; the app has no runtime dependency beyond React.
- Styling: `src/styles/global.css` becomes a token-based design system (colours, radii, type,
  motion curves, layering) plus shared primitives; each component owns its own stylesheet.
- Content: `src/data/profile.js` gains grouped skills, headline stats and section labels;
  `src/data/projects.js` gains stack tags and a scope line per project and loses the colour link.
- Assets: unchanged files in `images/`, now lazy-loaded below the fold; `index.html` gains fonts,
  metadata and link-preview tags.
- No backend, API or hosting changes. The archived static site under `legacy/` is untouched.
