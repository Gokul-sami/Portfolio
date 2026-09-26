## Context

One page, one reader, one question: can this person do the work. The portfolio has four projects,
a grouped skill list, six profile facts and a handful of destinations. Splitting that across four
routes added clicks without adding information, and the colour splash route was an experiment
rather than part of the story.

The redesign was driven by a short review of current portfolio guidance: sections ordered
hero → work → about → skills → contact; a hero that states the discipline within a second; project
entries that say what the work does, with what stack and where to find it; grouped, text-labelled
skills with no proficiency meters; a visible email address; and page weight, metadata, focus states
and reduced-motion support treated as part of the work sample.

## Goals / Non-Goals

**Goals:**
- One scrollable document with anchored sections and a navigation that tracks the scroll position.
- Remove the colour splash route and every link to it.
- A modern, intentional visual system — not a default template look.
- One consistent answer to "what does he do" in the hero, backed by real numbers from the profile.
- Motion that is deliberate, transform/opacity-only and switchable off.
- Keep every real project, link, fact and hint from the previous site.

**Non-Goals:**
- No CMS, backend, analytics or contact form (the mailto address is the contact channel).
- No new runtime dependencies — no animation library, no CSS framework, no component library.
- No inventing content: metrics, availability claims, employers and testimonials are not added.
- Not touching the archived static site in `legacy/`.

## Decisions

- **One page, no router.** `react-router-dom` is uninstalled; sections are `<section id="…">` and
  navigation is plain anchors. `html { scroll-behavior: smooth }` plus `scroll-margin-top` on
  sections handles scrolling, so there is no scroll-jacking library and no history handling.
- **Scroll-spy via IntersectionObserver**, using a `-45% 0px -45% 0px` root margin so the active
  section is the one crossing the middle of the viewport. `#top` (the hero) maps to "nothing
  active", which keeps the nav clean at the top of the page. `ids` is a module-level array so the
  observer is created once.
- **Design read: Ethereal Glass with an editorial-technical voice.** Graphite-black base (`#050708`,
  revised from `#060607` by `portfolio-recolour`), a single teal signal colour (`#2ee6c5`) instead
  of the default purple-gradient look and of the original acid-lime (`#cdfa4e`) — see
  `portfolio-recolour` — one azure atmosphere tone (`#4d9cff`) for large soft glows only, white
  hairlines (`rgb(255 255 255 / 0.08)`) instead of grey 1px borders, and diffuse shadows. Dials:
  variance 8 (asymmetric), motion 6, density 4 (airy).
- **Typography:** Clash Display for headings, Plus Jakarta Sans for body, JetBrains Mono for labels
  and metadata — the mono labels (`01 — SELECTED WORK`) carry the developer signal without
  decoration. Fonts load from Fontshare and Google Fonts with `display=swap`.
- **Layout archetypes:** an editorial split hero (type left, résumé colophon right — the portrait
  card was retired by `portfolio-recolour`), an asymmetric
  bento for capabilities (7+5 then 4+4+4), and a staggered project grid (7+5, then 5+7 with
  vertical offsets) so the page never reads as a uniform card wall.
- **Cards use the double-bezel pattern** — an outer hairline shell plus an inner core — with `2rem`
  squircles, and the pointer sheen writes `--mx/--my` straight to the node instead of re-rendering
  React.
- **Motion budget:** one wow moment (the hero's drifting orbs, oversized gradient name and
  staggered entrance), then quiet reveals elsewhere. Animations only touch `transform` and
  `opacity`; `backdrop-filter` is used only on the fixed nav, the menu panel and the back-to-top
  button; the grain overlay is fixed and `pointer-events: none`.
- **The portrait is blended, not boxed.** The photo has a black background, so it uses
  `mix-blend-mode: screen` over the card gradient, which removes the visible image rectangle. (The
  card itself was removed by `portfolio-recolour` in favour of a definition-list colophon of résumé
  facts — see that change for the reasoning.)
- **CSS import order matters.** `global.css` is imported before `App` in `main.jsx` so component
  stylesheets win specificity ties with the shared `.btn`/`.chip` primitives (found in testing: the
  mobile `display: none` on the nav CTA was being overridden by `.btn`).
- **Reduced motion is a first-class path:** a global block neutralises animation/transition
  durations *and* delays, and the reveal hook applies the visible state immediately.
- **Contact stays honest and convertible:** the email address is visible text, with a mailto button
  and a copy button (async clipboard with a `textarea` fallback). The old per-link hints return as
  a live region under the destination list.

### Alternatives considered

- **Keeping the routes and adding a splash landing page:** rejected — the problem was the clicks,
  not the landing.
- **A `framer-motion` / GSAP-driven scroll narrative:** rejected — it would add ~50 kB or more for
  motion that CSS transitions and one IntersectionObserver already deliver, against a "performance
  is part of the work sample" criterion.
- **A single-column stack of uniform cards:** rejected — it is the templated look the redesign is
  meant to avoid.
- **Replacing the about-page hover hints with icon-only tooltips:** rejected — the hint line doubles
  as the default "email is the fastest way to reach me" message and is announced by the live region.

## Risks / Trade-offs

- [Removing routes breaks a `#/projects` bookmark] → the site has no inbound deep links of record,
  and the new anchors (`#work`, `#about`, `#skills`, `#contact`) are stable.
- [A single page is a longer scroll] → the floating nav, progress bar and back-to-top keep
  orientation, and every section is one click away.
- [Two font vendors add requests] → preconnects are in place, `display=swap` avoids blocking, and
  both stacks fall back to system fonts.
- [A bright accent is a strong choice] → the accent is used only as a signal (labels, active nav,
  primary action, focus) and text pairings were checked against the base. The original lime was
  later swapped for teal on the same rule — see `portfolio-recolour`.
- [Heavy screenshots below the fold] → project images are lazy-loaded and sized by CSS
  `aspect-ratio`, so there is no layout shift.
- [Reduced-motion users lose the entrance choreography] → intentional; content is fully visible
  without motion.

## Migration Plan

1. Delete the route-based pages, the old menu/marquee/scroll-restore components and the router
   dependency.
2. Rebuild `src/styles/global.css` as the token system plus shared primitives.
3. Add the section components (Hero, TechMarquee, Work, About, Skills, Contact, Footer) with their
   stylesheets, plus Navbar, ScrollProgress, BackToTop and the four hooks.
4. Update the data modules: grouped skills, headline stats, section labels, project tags and scope
   lines, and the removed colour link.
5. Rebuild, then verify in a browser at 1440 / 1024 / 390 px: sections, scroll-spy, mobile menu with
   body lock, hint line, copy action, marquee, reveal states, no horizontal overflow and a clean
   console.
6. Update the README and record that the earlier route-based requirements are withdrawn.

Rollback: revert this change; the route-based implementation is one commit away and the archived
static site in `legacy/` was not touched.

## Open Questions

None. The remaining judgement calls (accent tone, section titles) are copy and palette choices that
can be changed in `src/data` and `src/styles/global.css` without touching structure.

