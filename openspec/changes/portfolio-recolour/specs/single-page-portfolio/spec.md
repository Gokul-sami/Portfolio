## ADDED Requirements

### Requirement: Colour discipline

The theme SHALL expose its palette as tokens: a graphite-black base, neutral ink ramps, and exactly
two chromatic values — a teal signal and a cool azure atmosphere. Teal SHALL be the only chromatic
colour on text, borders, focus rings and controls; azure SHALL be confined to large soft glows and
the scroll-progress bar.

#### Scenario: Signal colour

- **WHEN** a label, link, active navigation entry, focus ring or the primary action is rendered
- **THEN** it SHALL use the teal token
- **AND** no other chromatic hue SHALL appear on text or controls

#### Scenario: Atmosphere colour

- **WHEN** a background glow or the scroll-progress bar is rendered
- **THEN** it MAY use the azure token at low opacity
- **AND** azure SHALL NOT be used for text, borders or state

#### Scenario: Token-only colour

- **WHEN** a component needs a translucent surface
- **THEN** it SHALL compose that colour from the `*-rgb` token companions rather than a hard-coded
  colour literal

### Requirement: Evidence-first hero

The hero SHALL state the discipline, the name, the tagline and the calls to action, SHALL carry the
headline numbers as text, and SHALL present the profile as a definition list of résumé facts —
"Now", "Based in", "Focus" and "Studying" — instead of a photograph.

#### Scenario: Facts instead of a portrait

- **WHEN** the hero is rendered
- **THEN** it SHALL contain no photograph of the author
- **AND** its right column SHALL list the current role, location, focus and study

#### Scenario: Headline numbers

- **WHEN** the headline numbers are read without the surrounding design
- **THEN** they SHALL match the résumé

### Requirement: Résumé-aligned work set

The work section SHALL list the blog platform and the three résumé projects — OptiDetect,
ResQConnect and StudyPlanner — and each entry SHALL carry a cover, a scope line, stack tags and at
least one working link.

#### Scenario: One card per project

- **WHEN** the work section is rendered
- **THEN** exactly four project cards SHALL appear, each with its own cover image, scope line, tags
  and links

#### Scenario: Covers are the author's own

- **WHEN** a project has no screenshot that belongs to it
- **THEN** its cover SHALL be a drawn diagram in the site palette

### Requirement: Shareable link preview

The document SHALL declare a link-preview card as an absolute URL that resolves from the deployed
site root, together with the preview copy and dimensions.

#### Scenario: Preview metadata

- **WHEN** the document metadata is inspected
- **THEN** `og:image` SHALL be an absolute URL and `og:image:width` / `og:image:height` SHALL
  describe a 1200×630 card
- **AND** the referenced file SHALL be served from the deployed site root
