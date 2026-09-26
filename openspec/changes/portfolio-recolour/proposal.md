## Why

The site's visual system landed on an acid-lime signal over an OLED-black base, and the hero spent
its right column on a portrait. Lime at that saturation reads as a novelty accent rather than as a
signal, a single-hue ramp made the labels, the glow and the primary action compete for the same
attention, and a photograph of the author proves nothing a recruiter came for. Two of the four
project cards also described work that is no longer the strongest evidence on the résumé.

## What changes

- Replace the acid-lime signal (`#cdfa4e`) with a **periwinkle** signal (`#9db4ff`) over a
  **deep-indigo** base (`#060814`), so the neutrals and the accent share one temperature. (The
  intermediate graphite/teal step was reviewed and superseded before this change landed.)
- Add one **violet atmosphere** tone (`#7c5cff`), used only for large soft glows — the drifting orbs,
  the scroll-progress bar and the card halo — never for text, borders or UI state, so periwinkle
  stays the single signal.
- Remove the portrait card from the hero and replace it with a **résumé colophon** (`Now`,
  `Based in`, `Focus`, `Graduated`), and re-derive the headline numbers from the résumé
  (06 shipped projects / 03 internships / 26 technologies).
- Rebuild the work section around the résumé in résumé order: **OptiDetect**, **StudyPlanner**, the
  **blog platform** and **ResQConnect**, each with a palette-matched cover, a scope line, stack tags
  and links — and draw the fourth cover (`images/blog.svg`) so the whole set is diagrams.
- Layer the scroll motion: directional reveal variants plus a bounded, scroll-linked parallax for the
  backdrop orbs and the project covers, all of it skipped under `prefers-reduced-motion`.
- Rewrite the skills bento around the résumé's five groups, extend the technology marquee to match,
  and refresh the shareable link-preview card.
- Rewrite the skills bento around the résumé's five groups, extend the technology marquee to match,
  and refresh the shareable link-preview card.

## Impact

- Affected specs: `single-page-portfolio` — colour discipline, hero composition, work set, link
  preview and scroll motion are added as requirements.
- Affected code: `src/styles/global.css` (tokens, orbs, reveals, drift), `src/components/Hero.{jsx,css}`,
  `Skills.jsx`, `Work.jsx`, `ProjectCard.{jsx,css}`, `Reveal.jsx`, `SectionHead.jsx`, `About.jsx`,
  `Contact.jsx`, `TechMarquee.jsx`, `Navbar.css`, `src/hooks/useParallax.js`, `src/data/profile.js`,
  `src/data/projects.js`, `images/*.svg`, `public/og-cover.png`, `index.html`, `README.md`.
- No dependency, hosting, routing or accessibility change; every link and fact stays verifiable.
