## Purpose

This capability defines the portfolio as a single scrollable document: anchored sections for work,
about, skills and contact, a navigation that reflects the scroll position, a modern dark design
system, and no colour splash route.

## ADDED Requirements

### Requirement: Single-page delivery

The portfolio SHALL be one document whose content is organised into anchored sections, in the order
hero, work, about, skills and contact, with no colour splash route or other secondary page.

#### Scenario: One document

- **WHEN** a visitor loads the site root
- **THEN** the hero, work, about, skills and contact sections SHALL all be present in that document
- **AND** no client-side routing SHALL be required to reach any of them

#### Scenario: Colour splash route removed

- **WHEN** any part of the site is inspected for the colour splash page
- **THEN** no route, component, stylesheet or link referring to it SHALL remain

### Requirement: In-page navigation with scroll-spy

The navigation SHALL link to the sections by anchor and SHALL mark the section currently in view as
the active entry.

#### Scenario: Active entry follows the scroll

- **WHEN** the visitor scrolls so that a section crosses the middle of the viewport
- **THEN** that section's navigation entry SHALL be the only one marked active

#### Scenario: Nothing active at the top

- **WHEN** the visitor is at the top of the page where the hero is in view
- **THEN** no navigation entry SHALL be marked active

#### Scenario: Anchor navigation

- **WHEN** a navigation entry, footer link, hero call to action or project link is activated
- **THEN** the target section SHALL be scrolled into view without reloading the document

### Requirement: Modern design system

The interface SHALL use a documented token set for colour, radii, typography, motion and layering,
and SHALL use hairline borders and inset highlights rather than grey borders and hard drop shadows.

#### Scenario: Tokens drive the theme

- **WHEN** a maintainer changes a colour, radius, font or easing token
- **THEN** the affected components SHALL pick up the change without per-component edits

#### Scenario: Cards

- **WHEN** a card is rendered
- **THEN** it SHALL use the nested shell-and-core structure with hairline borders and a diffuse
  shadow

### Requirement: Accessible motion and interaction

Motion SHALL be restricted to transform and opacity, SHALL avoid blurred overlays on scrolling
content, and SHALL be fully suppressible.

#### Scenario: Reduced motion

- **WHEN** the visitor has `prefers-reduced-motion: reduce`
- **THEN** reveal transitions, marquee animation, entrance animations and their delays SHALL be
  neutralised and all content SHALL be immediately visible

#### Scenario: Keyboard and assistive technology

- **WHEN** the page is used with a keyboard or a screen reader
- **THEN** a skip link SHALL be the first focusable element, focus rings SHALL be visible, the
  active navigation entry SHALL expose `aria-current`, and the contact hint and copy confirmation
  SHALL be announced through live regions

#### Scenario: Small screens

- **WHEN** the viewport is narrowed to mobile width
- **THEN** the grids SHALL collapse to a single column, the navigation SHALL reduce to the brand,
  social links and menu toggle, the menu SHALL open as an overlay with background scrolling locked,
  and there SHALL be no horizontal overflow
