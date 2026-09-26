## 1. Removal

- [x] 1.1 Confirm which features leave the site: the `#/color` route, the route-based pages, the
  `react-router-dom` dependency and every link that pointed at the colour page.
- [x] 1.2 Delete `src/pages/` (Home, Projects, About, Color and their stylesheets), the old
  `Menu*`, `SkillsMarquee*`, `ProjectCard.css`, `ScrollToTop.jsx` and `useDocumentTitle.js`.
- [x] 1.3 Remove `react-router-dom` from `package.json` and refresh the lockfile.

## 2. Design system

- [x] 2.1 Rewrite `src/styles/global.css`: colour/radius/type/motion/layering tokens, base reset,
  fixed backdrop (orbs, grid, grain), shared primitives (`.shell`, `.section`, `.bezel`,
  `.chip`, `.btn`, `.reveal`, `.skip-link`, `.sr-only`, `.scroll-progress`, `.to-top`).
- [x] 2.2 Load Clash Display (Fontshare) plus Plus Jakarta Sans and JetBrains Mono (Google Fonts) in
  `index.html`, and add description, theme-colour and link-preview metadata.
- [x] 2.3 Redraw the icon set as 1.5px stroke UI icons and keep the GitHub/LinkedIn brand marks.

## 3. Page build

- [x] 3.1 Hero: eyebrow roles, gradient display name, `<p>`-tagged tagline, primary/secondary CTAs,
  three headline stats, portrait card with screen-blended image, and a scroll cue. *(The portrait
  card was replaced by a résumé colophon in [`portfolio-recolour`](../portfolio-recolour/tasks.md).)*
- [x] 3.2 Technology bands: two marquee rows scrolling in opposite directions, paused on hover,
  decorative and hidden from assistive tech in favour of the textual list.
- [x] 3.3 Work: staggered project grid with media, scope line, tags and per-link buttons.
- [x] 3.4 About: editorial split with the biography and the six facts as a definition grid.
- [x] 3.5 Skills: asymmetric bento of the five skill groups with text-labelled chips.
- [x] 3.6 Contact: visible email, mailto and copy actions, destination list with hover/focus hints.
- [x] 3.7 Footer, floating pill navbar with scroll-spy, mobile overlay menu, scroll progress bar and
  back-to-top control.

## 4. Interaction layer

- [x] 4.1 `useReveal` (shared IntersectionObserver, reduced-motion aware) with a `Reveal` wrapper
  and per-item stagger delays.
- [x] 4.2 `useScrollSpy` for the active navigation entry and `useLockBodyScroll` for the mobile menu
  (scrollbar-gap compensated, Escape to close, focus returned to the toggle).
- [x] 4.3 `useCopyToClipboard` for the address copy action with its confirmation state.
- [x] 4.4 Pointer sheen on cards written directly to CSS custom properties (no re-render), and a
  scroll progress bar updated inside `requestAnimationFrame`.

## 5. QA and sign-off

- [x] 5.1 Production build from a clean `dist/` with no errors.
- [x] 5.2 Browser verification at 1440 / 1024 / 390 px: all five section anchors, scroll-spy
  (`Work` and `Contact` states), four project cards, five skill cards, four contact links, hint text
  swapping on hover, reveal states, marquee animation, mobile menu open/close with body lock, and a
  clean console (0 errors, 0 warnings).
- [x] 5.3 Breakpoint checks: asymmetric grids above 1000px, single-column stacks at 390px with no
  horizontal overflow (`scrollWidth === innerWidth`).
- [x] 5.4 Fix the two defects found in testing: the hard-edged contact glow and the `.btn` specificity
  tie that kept the mobile nav CTA visible.
- [x] 5.5 Update the README and record that the route-based requirements from `react-migration` are
  withdrawn.
