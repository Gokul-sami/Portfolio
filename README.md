# Portfolio

This repository contains my personal portfolio website, showcasing my skills, projects, and experience.

## Table of Contents
- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Page Sections](#page-sections)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [Available Scripts](#available-scripts)
- [Design System](#design-system)
- [Accessibility & Motion](#accessibility--motion)
- [Deployment](#deployment)
- [Legacy Static Site](#legacy-static-site)
- [Features](#features)
- [Contributors](#contributors)

## Introduction
This portfolio highlights my work and gives potential employers and collaborators one page to review:
who I am, what I have built, the tools I use and how to reach me. Everything is reachable by scrolling
or by a single click in the navigation — the site is one page with anchored sections, not a set of
separate documents.

## Tech Stack
- **React 19** with **Vite 8** for the dev server, asset handling and the production build.
- **No router**: the site is a single page, so navigation is plain anchors plus an
  `IntersectionObserver` scroll-spy for the active menu state.
- **Hand-written CSS** using custom-property design tokens (`src/styles/global.css`) and one
  stylesheet per component. No CSS framework, no animation library, no icon package.
- All copy, links and images live in `src/data`, so components stay presentational.
- Icons are inline SVG: 1.5px stroke UI icons plus the GitHub and LinkedIn brand marks.

## Page Sections
One document, five anchored sections, in the order the portfolio guidance recommends
(hero → work → about → skills → contact):

| Anchor | Section | Contents |
| --- | --- | --- |
| `#top` | Masthead | Roles, name, tagline, the contact line, the résumé colophon and the headline numbers as one line |
| `#work` | Selected work | OptiDetect, StudyPlanner, the blog platform and ResQConnect — scope, stack tags, cover art and links |
| `#about` | About | The biography in the first person and the six profile facts |
| `#skills` | Skills | Five skill groups in a bento grid |
| `#contact` | Contact | Visible email, copy action and four destinations |

## File Structure
- `index.html`: Vite entry — fonts, document metadata, link-preview tags and the `#root` mount point.
- `src/main.jsx`: React root. Imports `global.css` first so component styles win specificity ties.
- `src/App.jsx`: page composition (backdrop, scroll progress, navbar, sections, footer).
- `src/components/`: one component per page section (`Hero`, `Work`, `About`, `Skills`, `Contact`,
  `Footer`) plus the shell (`Navbar`, `ScrollProgress`, `BackToTop`, `Reveal`, `SectionHead`,
  `ProjectCard`, `Icon`, `icons`), each with its own stylesheet.
- `src/data/`: `profile.js` (identity, sections, socials, hero contact links, stats and the derived
  one-line version, skill groups, about facts, contact links) and `projects.js` (the four project
  cards, their images and links).
- `src/hooks/`: `useReveal`, `useScrollSpy`, `useLockBodyScroll`, `useCopyToClipboard`.
- `src/styles/global.css`: design tokens, base reset, fixed backdrop, shared primitives.
- `images/`: image assets, imported by the components so Vite fingerprints them. All four project
  covers are drawn SVG diagrams in the site palette (`optidetect.svg`, `studyplanner.svg`,
  `blog.svg`, `resqconnect.svg`) — to use a real screenshot instead, drop the file in, change the
  matching import in `src/data/projects.js` and set its `position` framing.
- `public/`: copied verbatim into the build — currently the 1200×630 social preview card
  (`og-cover.png`), which `index.html` references as an absolute URL.
- `legacy/`: the original multi-page static HTML/CSS/JS site, kept for reference.
- `openspec/`: change records (proposals, design notes, task lists and specs).
- `.github/workflows/deploy.yml`: GitHub Pages build & deploy workflow.

## Setup Instructions
To set up the project locally, follow these steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/Gokul-sami/Portfolio.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the dev server and open the printed URL (defaults to http://localhost:5173):
   ```sh
   npm run dev
   ```

## Available Scripts
- `npm run dev` – start Vite in development mode with hot reload.
- `npm run build` – build the production bundle into `dist/`.
- `npm run preview` – serve the built `dist/` locally to sanity-check the build.

## Design System
- **Surface**: deep-indigo base (`#060814`) with a fixed backdrop of drifting radial orbs, a masked
  grid and a subtle grain overlay. Cards use nested "shell + core" panels with white hairline
  borders instead of grey outlines.
- **Signal colour**: a single periwinkle accent (`#9db4ff`) for labels, the active nav entry, the
  primary action and the highlights, plus one violet (`#7c5cff`) reserved for large soft glows —
  never for text or UI state, so periwinkle stays the only signal.
- **Type**: Clash Display for headings, Plus Jakarta Sans for body copy, JetBrains Mono for labels
  and metadata.
- **Layout**: a CV-style masthead (name, tagline, contact line, résumé colophon), an asymmetric bento
  grid for skills, and a staggered project grid (7+5, then 5+7) that collapses to a single column on
  smaller screens. Section titles sit at document scale rather than campaign scale, and the work
  section opens tighter than the rest so the first cover lands on the first screen.
- **Tokens**: colours, radii, type stacks, easing curves and z-index layers are defined once in
  `:root`, so retheming is a handful of variable edits.

## Accessibility & Motion
- Skip link, visible focus rings, `aria-current` on the active nav entry, `aria-labelledby` on every
  section, and live regions for the contact hint and the copy confirmation.
- Animations only touch `transform`, `translate`, `opacity` and — on section headers only — `filter`;
  blurred overlays are limited to fixed elements (nav, menu panel, back-to-top) to avoid repainting
  scrolling content.
- Scroll motion is layered: sections enter through `Reveal` (fade-up, and directional `left` /
  `right` / `scale` / `blur` variants), while `useParallax` drifts the backdrop orbs and the project
  covers against the page. The parallax writes `--parallax` and is consumed through CSS's
  independent `translate` property, so it composes with the reveals instead of fighting them, and
  the hook measures every element before writing any style (two passes per frame, one passive
  scroll listener, no per-element listeners).
- `prefers-reduced-motion: reduce` disables the reveals, the masthead entrance, the parallax and their
  delays, leaving all content visible.
- Project images below the fold are lazy-loaded and sized with CSS `aspect-ratio` to avoid layout
  shift.

## Deployment
Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs dependencies, runs
`npm run build` and publishes `dist/` to GitHub Pages. Select **Settings → Pages → Source:
GitHub Actions** once in the repository settings.

`dist/` is also a plain static folder, so it can be dropped on any static host (S3, Netlify,
Vercel, `gh-pages` branch) instead.

## Legacy Static Site
The original multi-page site (`index.html`, `styles.css`, `script.js` and `pages/`, including the
colour splash page) was moved into `legacy/` unchanged, apart from its image references (now
`../../images/...`) so the archived pages still open. It is no longer part of the deployed site and
nothing in the React app links to it, but it stays in git history and in the working tree for
reference — including the colour splash page, which was removed from the live site.

## Features
- **Single-page navigation:** anchored sections with a scroll-spy menu, progress bar and back-to-top.
- **Portfolio masthead:** the résumé header — name, tagline, a plain contact line (email, GitHub,
  LinkedIn, résumé) and the current role, location, focus and graduation — with the headline numbers as
  one line of text instead of a metric band.
- **Work showcase:** the four featured projects in résumé order (OptiDetect, StudyPlanner, the blog
  platform, ResQConnect), each with scope, stack tags, cover art and source links — part of the six
  shipped projects counted in the masthead.
- **Skills bento:** skills grouped by where they sit in a project, listed once (no scrolling ticker).
- **Direct contact:** the email address in plain text, a mailto action and copy-to-clipboard.
- **Responsive & fast:** no runtime dependencies beyond React, lazy images, reduced-motion support.

## Contributors
- [Demon-hawwk](https://github.com/Demon-hawwk)

