## 1. Palette

- [x] 1.1 Move the tokens in `src/styles/global.css` to a deep-indigo base (`#060814`) with a
  periwinkle signal (`#9db4ff`) and a violet atmosphere (`#7c5cff`), and add `--bg-rgb`,
  `--surface-rgb` and `--accent-2-rgb` so translucent surfaces compose from tokens. (First drafted
  as graphite/teal — superseded by 6.1 before this change landed.)
- [x] 1.2 Rename the backdrop orbs `--glow`, `--counter` and `--steel` in `global.css` and `App.jsx`,
  and render the scroll-progress bar violet → periwinkle.
- [x] 1.3 Replace the hard-coded `rgb(6 6 7)` / `rgb(9 9 11)` literals in `global.css`, `Navbar.css`
  and `ProjectCard.css` with the new tokens.
- [x] 1.4 Update `index.html`: theme-colour, description, Open Graph copy, absolute URL, link-preview
  dimensions and the favicon fill.

## 2. Hero

- [x] 2.1 Remove the portrait card and the `cap_pic_edit_1.jpg` import from `Hero.jsx` / `Hero.css`.
- [x] 2.2 Add the résumé colophon as a `<dl>` (`Now`, `Based in`, `Focus`, `Graduated`) and widen the
  copy column to 1.45fr / 0.55fr. The fourth fact read `Studying` until the degree completed (7.1).
- [x] 2.3 Re-cut the name gradient to ink → periwinkle → violet and move the headline numbers onto a
  full-width band that collapses on mobile.
- [x] 2.4 Re-point the entrance animation selectors at the new elements.

## 3. Content

- [x] 3.1 Rewrite `src/data/profile.js`: `heroFacts`, résumé stats (06 / 03 / 26), five skill groups
  with `skills` derived by `flatMap`, and updated about facts.
- [x] 3.2 Rewrite `src/data/projects.js` in résumé order — OptiDetect, StudyPlanner, the blog platform
  and ResQConnect — in both the array order and the `index` labels (7.3).
- [x] 3.3 Draw the SVG covers and import them; the blog screenshot was retired by 7.4.

## 4. Sections

- [x] 4.1 Rename the skills bento spans to the new group ids and re-word the lede.
- [x] 4.2 Derive the marquee rows by halving the list instead of hard-coding an item count.
- [x] 4.3 Update the work lede and the about facts to the résumé wording.

## 5. Share card and docs

- [x] 5.1 Build the 1200×630 link-preview card and serve it from `public/og-cover.png`.
- [x] 5.2 Update `README.md`: design system, page sections, file structure and work showcase.
- [x] 5.3 Verify the production build: four project cards with the résumé titles, zero images in the
  hero, periwinkle tokens live, zero console messages, and no horizontal scrolling at
  1440 / 1024 / 390 px.

## 6. Palette revision (to Iris)

- [x] 6.1 Move the tokens again to the shipped Iris set: base `#060814`, signal `#9db4ff`, atmosphere
  `#7c5cff`, with the ink ramps re-checked (ink-soft 10.5:1, ink-muted 6.3:1 on the card surface).
- [x] 6.2 Rename the orbs `--glow` / `--counter` / `--steel` and re-tint the third layer.
- [x] 6.3 Re-colour the four SVG covers and the link-preview card, and update the `theme-color` meta
  and the favicon fill.
- [x] 6.4 Update `README.md`, this record and `single-page-portfolio` to the shipped palette.

## 7. Content order, graduation and motion

- [x] 7.1 `Studying` → `Graduated` in the hero colophon; the About education fact now reads
  "graduated 2026".
- [x] 7.2 Headline numbers to 06 / 03 / 26, and the link-preview card re-cut to match.
- [x] 7.3 Re-order the work section to OptiDetect → StudyPlanner → blog → ResQConnect (array order and
  labels, not the labels alone) and re-word the lede.
- [x] 7.4 Add `images/blog.svg` and point the blog card at it, so all four covers are drawn diagrams.
- [x] 7.5 Add `Reveal` variants (`up` / `left` / `right` / `scale` / `blur`), apply them per section,
  and stagger the second row of the work grid.
- [x] 7.6 Add `src/hooks/useParallax.js` and wire it to the backdrop orbs and the project covers, with
  a drift layer that keeps each diagram at its exact frame size and a reduced-motion guard.
- [x] 7.7 Update `README.md` (motion notes, cover list, work order) and re-verify the build in the
  browser.
