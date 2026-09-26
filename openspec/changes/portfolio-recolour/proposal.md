## Why

The site's visual system landed on an acid-lime signal over an OLED-black base, and the hero spent
its right column on a portrait. Lime at that saturation reads as a novelty accent rather than as a
signal, a single-hue ramp made the labels, the glow and the primary action compete for the same
attention, and a photograph of the author proves nothing a recruiter came for. Two of the four
project cards also described work that is no longer the strongest evidence on the résumé.

## What changes

- Replace the acid-lime signal (`#cdfa4e`) with a **teal** signal (`#2ee6c5`) and move the base to a
  **cool graphite** (`#050708`), so the neutrals and the accent share one temperature.
- Add one **azure atmosphere** tone (`#4d9cff`), used only for large soft glows — the drifting orbs,
  the scroll-progress bar and the card halo — never for text, borders or UI state, so teal stays the
  single signal.
- Remove the portrait card from the hero and replace it with a **résumé colophon** (`Now`,
  `Based in`, `Focus`, `Studying`), and re-derive the headline numbers from the résumé.
- Rebuild the work section around the résumé: the blog platform plus **OptiDetect**,
  **ResQConnect** and **StudyPlanner**, each with a cover, a scope line, stack tags and links.
- Rewrite the skills bento around the résumé's five groups, extend the technology marquee to match,
  and refresh the shareable link-preview card.

## Impact

- Affected specs: `single-page-portfolio` — colour discipline, hero composition, work set and link
  preview are added as requirements.
- Affected code: `src/styles/global.css` (tokens, orbs, progress bar), `src/components/Hero.{jsx,css}`,
  `Skills.{jsx,css}`, `Work.jsx`, `TechMarquee.jsx`, `Navbar.css`, `ProjectCard.css`,
  `src/data/profile.js`, `src/data/projects.js`, `images/optidetect.svg`, `images/resqconnect.svg`,
  `images/studyplanner.svg`, `public/og-cover.png`, `index.html`, `README.md`.
- No dependency, hosting, routing or accessibility change; every link and fact stays verifiable.
