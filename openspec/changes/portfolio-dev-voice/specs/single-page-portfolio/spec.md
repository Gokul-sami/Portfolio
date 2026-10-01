## MODIFIED Requirements

### Requirement: Evidence-first hero

The masthead SHALL state the discipline, the name, the tagline and the headline numbers as text, SHALL
list the ways to reach the author — email, GitHub, LinkedIn and the résumé — as plain links rather than
as calls to action, and SHALL present the profile as a definition list of résumé facts — "Now", "Based
in", "Focus" and "Graduated" — instead of a photograph.

#### Scenario: Facts instead of a portrait

- **WHEN** the masthead is rendered
- **THEN** it SHALL contain no photograph of the author
- **AND** its right column SHALL list the current role, location, focus and graduation

#### Scenario: Headline numbers

- **WHEN** the headline numbers are read without the surrounding design
- **THEN** they SHALL read 06 shipped projects, 03 industry internships and 26 technologies in use
- **AND** they SHALL appear as a single line of text rather than as a band of separate cells
- **AND** they SHALL match the résumé

#### Scenario: Ways to reach the author

- **WHEN** the first screen is read
- **THEN** it SHALL offer the email address, GitHub, LinkedIn and the résumé as links
- **AND** none of them SHALL be presented as a call to action, a button or a primary action

### Requirement: Accessible motion and interaction

Motion SHALL be restricted to transform and opacity, SHALL avoid blurred overlays on scrolling
content, and SHALL be fully suppressible.

#### Scenario: Reduced motion

- **WHEN** the visitor has `prefers-reduced-motion: reduce`
- **THEN** reveal transitions, entrance animations and their delays SHALL be neutralised and all content
  SHALL be immediately visible

#### Scenario: Keyboard and assistive technology

- **WHEN** the page is used with a keyboard or a screen reader
- **THEN** a skip link SHALL be the first focusable element, focus rings SHALL be visible, the active
  navigation entry SHALL expose `aria-current`, and the contact hint and copy confirmation SHALL be
  announced through live regions

#### Scenario: Small screens

- **WHEN** the viewport is narrowed to mobile width
- **THEN** the grids SHALL collapse to a single column, the navigation SHALL reduce to the brand, the
  icon actions and the menu toggle, the menu SHALL open as an overlay with background scrolling locked,
  and there SHALL be no horizontal overflow

## ADDED Requirements

### Requirement: Portfolio voice

Section titles, ledes and the biography SHALL be written in plain language and, where they describe the
author, in the first person; they SHALL NOT sell the section to the reader or describe the page itself.

#### Scenario: Section titles

- **WHEN** the section titles are read in document order
- **THEN** they SHALL read "Selected work.", "Hi, I'm Gokul Sami.", "Tools I work in." and "Get in
  touch."

#### Scenario: No selling ledes

- **WHEN** a section lede is read
- **THEN** it SHALL state one factual sentence about that section's content
- **AND** it SHALL NOT address the reader as a prospect or explain what the section is for

### Requirement: No technology ticker

The page SHALL NOT carry a scrolling or auto-animating band of technology names; the skills list SHALL
be presented once, grouped and labelled, in the skills section.

#### Scenario: Skills appear once

- **WHEN** the document is searched for a marquee, ticker or auto-scrolling list
- **THEN** none SHALL be present
- **AND** every skill SHALL still be listed in the skills section
