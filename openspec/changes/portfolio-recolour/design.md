## Context

`single-page-portfolio` settled the structure: one scrollable document, one signal colour, hairline
cards, a fixed motion budget. This change revisits three of its decisions — the accent hue, the
hero's right column and the project set — without touching the structure itself.

## Goals / Non-Goals

**Goals:**
- Keep one signal colour and let the neutrals carry the atmosphere.
- Put checkable facts on the first screen instead of a photograph.
- Make the work section match the résumé a recruiter is already holding.

**Non-Goals:**
- Restructuring the page, the navigation, the scroll-spy or the motion budget.
- Using imagery that is not the author's own work or a drawing of it.
- Adding a dependency, a CMS, or a second chromatic colour for text.

## Decisions

- **Periwinkle survives both roles.** `#9db4ff` clears 9.9:1 on `#060814` (9.5:1 on `--surface`), so
  it can be text (labels, links, the active nav entry, focus) *and* a fill for the primary action
  with `--accent-ink` (`#0a0f2e`) on top, which is another 9.2:1 — the lime accent needed that
  pairing to be argued separately.
- **One signal, one atmosphere, no third hue.** Violet (`#7c5cff`) is deliberately excluded from
  text, borders and state: it appears only in large low-opacity radial glows (the `--glow` /
  `--counter` / `--steel` orbs), the violet → periwinkle progress bar and the section halo. The
  "everything else is neutral" rule therefore survives while the backdrop stops reading as flat
  black.
- **Cool neutrals to match.** The base moved from the OLED black `#060607` to the blue-leaning
  `#060814`, with `--bg-rgb`, `--surface-rgb` and `--accent-2-rgb` added so translucent surfaces
  compose from the same values instead of hard-coded `rgb(6 6 7)` literals in three stylesheets. The
  accent itself went lime → teal → periwinkle across review, and only the tokens changed, because no
  component stylesheet holds a colour literal.
- **The colophon replaces the portrait.** A `<dl>` of four résumé facts (current role, location,
  focus, graduation) sits where the photo was, so the hero column answers "who is this and where are
  they now" in text that can be checked — and the first screen no longer depends on one large image.
  The fourth fact reads `Graduated` now that the degree is complete, and the About facts say the same.
- **The project set follows the résumé, strongest first.** OptiDetect, StudyPlanner, the blog
  platform (Node.js / Express.js / EJS / PostgreSQL) and ResQConnect, each with its own scope line and
  stack tags. The array order *and* the `index` values were both rewritten — renumbering alone left
  the DOM in the old order, which the browser check caught.
- **Covers are drawn, not borrowed.** All four ship as hand-authored SVG diagrams in the palette,
  including a new `images/blog.svg` that retired the only real screenshot on the page (a purple
  product UI that fought the palette). Vite inlines an SVG under 4 kB as a data URI and emits larger
  ones as fingerprinted assets, so the set stays cheap; swapping in a real capture is one import in
  `projects.js`.
- **Motion is layered, not decorative.** Two mechanisms inside the existing budget: `Reveal` variants
  (`up`, `left`, `right`, `scale`, `blur`) for entrances, and `useParallax` for scroll-linked drift on
  the backdrop orbs and the project covers. The hook writes `--parallax`, which is consumed through
  CSS's independent `translate` property so it composes with the transform-based reveal and hover
  lift instead of overwriting them, and it uses one passive scroll listener with a two-pass
  read-then-write frame. Each cover sits in a drift layer taller than its frame, so a drifting
  diagram is never cropped — the first implementation used a taller *image* box instead and quietly
  cut the corner labels.
- **Skills and the marquee follow the same list.** Five groups (frameworks, languages, AI, data,
  tools) in the existing 7+5 / 4+4+4 bento, and the marquee now derives its two rows by halving the
  list rather than hard-coding an item count, so the 26-item list stays balanced at any length.

## Risks / Trade-offs

- [Glow and sheen are both chromatic] → they are separated by role: glows are large and blurred,
  highlights are hairlines, and neither expresses state.
- [Removing the portrait loses a human cue] → the résumé facts, the tagline and the initials mark
  carry the personality, and the About section still holds the biography.
- [Drawn covers are not screenshots] → they are labelled as placeholders in the data module and the
  README, and every card links to its source so the code can be inspected directly.
- [Violet could creep into text later] → the rule is written into the spec as a requirement, not just
  a comment in `global.css`.
- [Parallax can read as jank on a slow frame] → the drift is bounded (40 px on the orbs, 10 px on the
  covers), runs on the compositor through `translate`, and is skipped entirely under reduced motion.
- [Indigo is a cooler and darker base than graphite] → contrast was re-checked against the new
  surfaces: ink-soft 10.5:1, ink-muted 6.3:1, periwinkle 9.9:1 on `--bg`.

## Migration

None. The tokens are the interface: the component stylesheets read `--accent`, `--accent-2` and the
`*-rgb` companions, so the palette can be moved again from one file — this change moved it twice
(graphite/teal → indigo/periwinkle) and the only files that needed a hex edit were the four SVG
covers and the link-preview card, which are assets rather than stylesheets.
