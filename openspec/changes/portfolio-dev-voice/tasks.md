## 1. Voice and data

- [x] 1.1 Rewrite `person.tagline` and `person.summary` in the first person: the tagline now says what
  is built and with what, the summary is the biography that About renders as its lede ("I finished my
  B.E. in Computer Science at LICET in 2026…"). The old marketing paragraph is gone.
- [x] 1.2 Add `heroLinks` (email, GitHub, LinkedIn, résumé) to `src/data/profile.js` — the hero's
  contact line, email first, built from `socials`.
- [x] 1.3 Add `statsLine`, derived from `stats`, so the three headline numbers can be one line of text
  without a second source of truth.
- [x] 1.4 Delete the `skills` flat-list export; its only consumer was the marquee.

## 2. Masthead

- [x] 2.1 Replace the gradient name with a solid-ink heading at `clamp(2.4rem, 6.4vw, 4.3rem)` and a
  periwinkle full stop (`.hero__name-stop`); delete `.hero__name-line`.
- [x] 2.2 Remove both calls to action and render `heroLinks` as `.hero__links` — mono links with a
  transparent underline that fills in on hover, icons at 0.75 opacity.
- [x] 2.3 Remove the three-cell `.hero__stats` band and its mobile rules; print `statsLine` as
  `.hero__glance` under the contact row, capped at 22rem below 560px.
- [x] 2.4 Rewrite the hero doc comment: it is a CV masthead, and the entrance selector list no longer
  references `.hero__stats`.
- [x] 2.5 Retune the spacing — bottom padding `clamp(1.5rem, 3.5vw, 2.5rem)`, foot
  `clamp(1.5rem, 3.5vw, 2.5rem)` — and shrink the copy column to `max-width: 44rem` on a 1.3fr / 0.7fr
  grid.

## 3. Remove the ticker

- [x] 3.1 Drop `<TechMarquee />` from `src/App.jsx` and rename the composition comment.
- [x] 3.2 Delete `src/components/TechMarquee.jsx` and `src/components/TechMarquee.css`.
- [x] 3.3 Confirm the skills list is still complete in the skills section (the marquee's only
  contribution was decoration).

## 4. Copy and scale

- [x] 4.1 Work: index `01 — Work`, title "Selected work.", lede "Four projects, in the order I would
  talk about them…".
- [x] 4.2 Skills: index `03 — Skills`, title "Tools I work in.".
- [x] 4.3 Contact: title "Get in touch." with the email line in the lede.
- [x] 4.4 About: keep "Hi, I'm Gokul Sami." and the new biography; remove the duplicate role eyebrow
  (the masthead already carries the roles).
- [x] 4.5 Section titles to `clamp(1.85rem, 3.3vw, 2.5rem)` in `global.css`.

## 5. Header and mobile menu

- [x] 5.1 Replace the nav's "Let's talk" pill with an email icon button (`mailto:`), leaving GitHub,
  LinkedIn and email as the three icon actions; delete `.nav__cta` and its media-query reference.
- [x] 5.2 Add "Email me" as the first ghost button in the mobile menu footer.

## 6. Verification and docs

- [x] 6.1 `npm run build` is green; `dist/` ships index.html plus one CSS and one JS bundle.
- [x] 6.2 Checked in the built site through Playwright at 1440×900, 1024×768 and 390×844: root mounts,
  hero name reads "Gokul Sami.", the contact line lists the email / GitHub / LinkedIn / résumé, the
  glance line reads "06 shipped projects · 03 industry internships · 26 technologies in use", zero
  marquee nodes, section titles are the new four, nav icons are GitHub / LinkedIn / Email, no
  horizontal scrolling at any width, and the console reports no messages.
- [x] 6.3 Fold check: masthead 580px tall with the first cover starting at y=898 in a 900px viewport.
- [x] 6.4 Update `README.md` (page sections, file structure, design system, motion, features) and record
  this change under `openspec/changes/portfolio-dev-voice/`.
