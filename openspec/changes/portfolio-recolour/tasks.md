## 1. Palette

- [x] 1.1 Move the tokens in `src/styles/global.css` to a graphite base (`#050708`) with a teal
  signal (`#2ee6c5`) and an azure atmosphere (`#4d9cff`), and add `--bg-rgb`, `--surface-rgb` and
  `--accent-2-rgb` so translucent surfaces compose from tokens.
- [x] 1.2 Rename the backdrop orbs `--teal`, `--azure` and `--steel` in `global.css` and `App.jsx`,
  and render the scroll-progress bar azure → teal.
- [x] 1.3 Replace the hard-coded `rgb(6 6 7)` / `rgb(9 9 11)` literals in `global.css`, `Navbar.css`
  and `ProjectCard.css` with the new tokens.
- [x] 1.4 Update `index.html`: theme-colour, description, Open Graph copy, absolute URL, link-preview
  dimensions and the favicon fill.

## 2. Hero

- [x] 2.1 Remove the portrait card and the `cap_pic_edit_1.jpg` import from `Hero.jsx` / `Hero.css`.
- [x] 2.2 Add the résumé colophon as a `<dl>` (`Now`, `Based in`, `Focus`, `Studying`) and widen the
  copy column to 1.45fr / 0.55fr.
- [x] 2.3 Re-cut the name gradient to ink → teal → azure and move the headline numbers onto a
  full-width band that collapses on mobile.
- [x] 2.4 Re-point the entrance animation selectors at the new elements.

## 3. Content

- [x] 3.1 Rewrite `src/data/profile.js`: `heroFacts`, résumé stats (04 / 03 / 26), five skill groups
  with `skills` derived by `flatMap`, and updated about facts.
- [x] 3.2 Rewrite `src/data/projects.js` around the blog platform, OptiDetect, ResQConnect and
  StudyPlanner.
- [x] 3.3 Draw the three SVG covers and import them.

## 4. Sections

- [x] 4.1 Rename the skills bento spans to the new group ids and re-word the lede.
- [x] 4.2 Derive the marquee rows by halving the list instead of hard-coding an item count.
- [x] 4.3 Update the work lede and the about facts to the résumé wording.

## 5. Share card and docs

- [x] 5.1 Build the 1200×630 link-preview card and serve it from `public/og-cover.png`.
- [x] 5.2 Update `README.md`: design system, page sections, file structure and work showcase.
- [x] 5.3 Verify the production build: four project cards with the résumé titles, zero images in the
  hero, teal tokens live, zero console messages, and no horizontal overflow at 1440 / 1024 / 390 px.
