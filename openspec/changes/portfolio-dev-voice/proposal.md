## Why

The page is built like a product landing page rather than like a portfolio. The first screen was a
brand billboard — an 8rem gradient wordmark, two pill calls to action and a 06 / 03 / 26 metric band —
the technology marquee under it read as a customer-logo wall, and every section title sold the section
to the reader ("Projects I have built end to end.", "The stack behind those builds.", "Let's build
something."). Someone opening a portfolio wants the work first, in the author's own voice, with an
obvious way to make contact — not a pitch.

## What changes

- Re-cut the hero as a **CV masthead**: the name at document scale in solid ink with a periwinkle full
  stop (no gradient wordmark), the `<p>`-tagged tagline kept as the personal cue, and the two calls to
  action replaced by a **plain contact line** — email, GitHub, LinkedIn and résumé. Those links point
  somewhere instead of asking the visitor to do something.
- Move the headline numbers out of the three-cell band and onto **one mono line** under the contact
  row, so the work sits on the first screen.
- **Delete the technology marquee** (two full-bleed bands covering the whole skills list). The same
  list is already readable in the skills section, and a scrolling chip wall is the strongest "company
  site" signal on the page.
- Rewrite the copy in the **first person** and stop selling: the About section carries the biography,
  and the section titles become "Selected work.", "Tools I work in." and "Get in touch." with short,
  factual ledes.
- Drop the section titles to **document scale**, so the page reads like a CV being scrolled.
- Swap the navigation's "Let's talk" pill for an **email icon button**, and add "Email me" to the
  mobile menu, so the header is a contact block rather than a conversion button.

## Impact

- Affected specs: `single-page-portfolio` — "Evidence-first hero" is modified (contact line instead of
  calls to action, numbers as one line), "Accessible motion and interaction" drops its marquee
  reference, and the copy rules are added as new requirements ("Portfolio voice", "No technology
  ticker").
- Affected code: `src/components/Hero.{jsx,css}`, `src/components/Navbar.{jsx,css}`,
  `src/components/{Work,About,Skills,Contact}.jsx`, `src/components/TechMarquee.{jsx,css}` (deleted),
  `src/App.jsx`, `src/data/profile.js`, `src/styles/global.css`, `README.md`.
- Unchanged: the palette and every token, the routing, the scroll motion, the project set, the covers
  and the link-preview card.
