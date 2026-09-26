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

- **Teal survives both roles.** `#2ee6c5` clears 13:1 on `#050708`, so it can be text (labels, links,
  the active nav entry, focus) *and* a fill for the primary action with dark ink on top — the lime
  accent needed that pairing to be argued separately.
- **One signal, one atmosphere, no third hue.** Azure (`#4d9cff`) is deliberately excluded from text,
  borders and state: it appears only in large low-opacity radial glows (the `--teal` / `--azure` /
  `--steel` orbs), the azure → teal progress bar and the section halo. The "everything else is
  neutral" rule therefore survives while the backdrop stops reading as flat black.
- **Cool neutrals to match.** The base moved from `#060607` to the blue-leaning graphite `#050708`,
  with `--bg-rgb`, `--surface-rgb` and `--accent-2-rgb` added so translucent surfaces compose from
  the same values instead of hard-coded `rgb(6 6 7)` literals in three stylesheets.
- **The colophon replaces the portrait.** A `<dl>` of four résumé facts (current role, location,
  focus, study) sits where the photo was, so the hero column answers "who is this and where are they
  now" in text that can be checked — and the first screen no longer depends on one large image.
- **The project set follows the résumé.** The blog platform (Node.js / Express.js / EJS /
  PostgreSQL) opens the list, followed by OptiDetect, ResQConnect and StudyPlanner, each with its own
  scope line and stack tags. The `index` values were renumbered to match the new order.
- **Covers are drawn, not borrowed.** The three résumé projects ship as hand-authored SVG diagrams
  in the palette. Vite inlines an SVG under 4 kB as a data URI and emits larger ones as fingerprinted
  assets, so all three stay cheap; swapping in a real capture is one import in `projects.js`.
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
- [Azure could creep into text later] → the rule is written into the spec as a requirement, not just
  a comment in `global.css`.

## Migration

None. The tokens are the interface: the component stylesheets read `--accent`, `--accent-2` and the
`*-rgb` companions, so the palette can be moved again from one file.
