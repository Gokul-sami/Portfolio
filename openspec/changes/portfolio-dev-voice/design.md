## Context

`single-page-portfolio` and `portfolio-recolour` settled the structure, the token system and the
palette. What was never settled was the **voice**: the components and the copy were written the way a
product page is written — a wordmark hero, a pair of calls to action, a headline-number band and a
scrolling technology wall. This change revisits the composition and the copy; the design system is
untouched.

## Goals / Non-Goals

**Goals:**
- Make the first screen read as a person's CV header: who, what they build, how to reach them.
- Put the work on the first screen instead of a metric band.
- Say everything in the first person, with no sentence written to sell a section.

**Non-Goals:**
- Changing the palette, the tokens, the radii, the type stacks or the motion budget.
- Removing the scroll reveals, the parallax, the scroll-spy or the project cards.
- Adding a résumé page, a blog, a theme toggle or any dependency.

## Decisions

- **The name is a heading, not a logo.** 8rem with an ink → periwinkle → violet gradient is a wordmark:
  it fills the viewport, reads as a brand and pushes the covers off the first screen. It is now
  `clamp(2.4rem, 6.4vw, 4.3rem)` in solid ink with a periwinkle full stop — still the largest thing on
  the page, but sized like the top of a document.
- **Contact links instead of calls to action.** "View selected work" and "Get in touch" are buttons that
  ask; a CV header lists ways to reach the person. The row is now email / GitHub / LinkedIn / résumé as
  mono links with a hairline underline on hover, so nothing reads as a primary action. The nav loses its
  "Let's talk" pill for the same reason and gains an email icon button; the mobile menu gains "Email me".
- **The numbers survive as a sentence.** "06 shipped projects · 03 industry internships · 26
  technologies in use" is one mono line under the contact row, derived from the same `stats` array — the
  fact is still checkable, the dashboard is gone.
- **The marquee is deleted, not restyled.** Two counter-scrolling bands covering 26 technologies is a
  logo wall. The skills section already prints the same list, grouped and labelled, so the component,
  its stylesheet and the flat `skills` export were removed rather than left as dead code.
- **Voice rules, written down.** Section titles are plain, ledes are one factual sentence, and the About
  section is the only place the page talks about the person — in the first person. The old marketing
  register ("user-focused digital experiences", "scalable web solutions") is gone.
- **Section titles at document scale.** `clamp(1.85rem, 3.3vw, 2.5rem)` instead of
  `clamp(2.1rem, 4.6vw, 3.5rem)`: campaign scale is what made four short sections feel like a landing
  page pitching products.
- **The masthead and the work section share the fold.** The work section opens with
  `padding-block-start: clamp(3rem, 6vw, 5rem)` instead of the standard `--section-pad`, and the
  masthead's foot and bottom padding were tightened. Measured in the built site at 1440×900: the
  masthead is 580px tall and the first cover starts at y=898.

## Risks / Trade-offs

- [Fewer obvious actions on the first screen] → the contact line and the nav keep email one click away,
  and "Selected work ↓" still points at the first section.
- [The header is quieter] → the personal cues carry it instead: the monogram, the `<p>`-tagged tagline,
  the first-person copy and the résumé colophon.
- [Deleting the marquee loses a motion beat] → the reveals, the pointer sheen and the parallax remain; a
  scrolling ticker was never the personality of the page.
- [First-person copy can read as informal] → the facts are unchanged; only the register moved.

## Migration

None. `stats`, `heroFacts` and `skillGroups` keep their shape, `heroLinks` is new, and the removed
`skills` export had exactly one consumer: the deleted marquee.
