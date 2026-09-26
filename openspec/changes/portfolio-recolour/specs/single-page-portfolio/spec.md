## ADDED Requirements

### Requirement: Colour discipline

The theme SHALL expose its palette as tokens: a deep-indigo base, neutral ink ramps, and exactly
two chromatic values — a periwinkle signal (`#9db4ff`) and a violet atmosphere (`#7c5cff`).
Periwinkle SHALL be the only chromatic colour on text, borders, focus rings and controls; violet
SHALL be confined to large soft glows and the scroll-progress bar.

#### Scenario: Signal colour

- **WHEN** a label, link, active navigation entry, focus ring or the primary action is rendered
- **THEN** it SHALL use the periwinkle token
- **AND** no other chromatic hue SHALL appear on text or controls

#### Scenario: Atmosphere colour

- **WHEN** a background glow or the scroll-progress bar is rendered
- **THEN** it MAY use the violet token at low opacity
- **AND** violet SHALL NOT be used for text, borders or state

#### Scenario: Token-only colour

- **WHEN** a component needs a translucent surface
- **THEN** it SHALL compose that colour from the `*-rgb` token companions rather than a hard-coded
  colour literal

### Requirement: Evidence-first hero

The hero SHALL state the discipline, the name, the tagline and the calls to action, SHALL carry the
headline numbers as text, and SHALL present the profile as a definition list of résumé facts —
"Now", "Based in", "Focus" and "Graduated" — instead of a photograph.

#### Scenario: Facts instead of a portrait

- **WHEN** the hero is rendered
- **THEN** it SHALL contain no photograph of the author
- **AND** its right column SHALL list the current role, location, focus and graduation

#### Scenario: Headline numbers

- **WHEN** the headline numbers are read without the surrounding design
- **THEN** they SHALL read 06 shipped projects, 03 industry internships and 26 technologies in use
- **AND** they SHALL match the résumé

### Requirement: Résumé-aligned work set

The work section SHALL list the four featured projects in résumé order — OptiDetect, StudyPlanner,
the blog platform and ResQConnect — and each entry SHALL carry a cover, a scope line, stack tags
and at least one working link.

#### Scenario: One card per project

- **WHEN** the work section is rendered
- **THEN** exactly four project cards SHALL appear, each with its own cover image, scope line, tags
  and links

#### Scenario: Covers are the author's own

- **WHEN** a project has no screenshot that belongs to it
- **THEN** its cover SHALL be a drawn diagram in the site palette
- **AND** every cover in the set SHALL be drawn the same way, so the cards read as one system

### Requirement: Shareable link preview

The document SHALL declare a link-preview card as an absolute URL that resolves from the deployed
site root, together with the preview copy and dimensions.

#### Scenario: Preview metadata

- **WHEN** the document metadata is inspected
- **THEN** `og:image` SHALL be an absolute URL and `og:image:width` / `og:image:height` SHALL
  describe a 1200×630 card
- **AND** the referenced file SHALL be served from the deployed site root

### Requirement: Scroll motion

Sections SHALL enter the viewport through a CSS transition, the backdrop SHALL drift against the
page as it scrolls, and neither SHALL run for a visitor who has asked for reduced motion.

#### Scenario: Section entrance

- **WHEN** a section, card or list item enters the viewport
- **THEN** it SHALL transition from a displaced, transparent state to its resting state
- **AND** the transition SHALL animate `transform`, `translate`, `opacity` or `filter` only

#### Scenario: Scroll-linked drift

- **WHEN** the page is scrolled
- **THEN** the backdrop orbs and the project covers SHALL each drift by a bounded distance
- **AND** the drift SHALL be written to a custom property and applied through the `translate`
  property, so it composes with the transform-based entrance instead of replacing it
- **AND** a cover SHALL keep its frame size, so the drift never crops or stretches the diagram

#### Scenario: Reduced motion

- **WHEN** `prefers-reduced-motion: reduce` matches
- **THEN** no entrance, drift or marquee animation SHALL run
- **AND** all content SHALL remain visible in its resting state
