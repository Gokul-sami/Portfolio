## Purpose

> **Partly superseded (2026-09-25):** the route-based navigation and colour-page requirements in this
> spec were withdrawn by `openspec/changes/single-page-portfolio/`. The portfolio is one page with
> anchored sections and no colour splash route. The shared-shell, content-parity and build/deploy
> requirements still hold.

This capability defines how the portfolio is delivered: a single React application with shared
components, route-based navigation and data-driven content that reproduces the original dark
visual identity, interactions and links of the previous static multi-page site.

## ADDED Requirements

### Requirement: Single-source shared shell
The portfolio SHALL render the header (GitHub link, navigation, LinkedIn link) from one shared
component so that it is identical on every page that uses it.

#### Scenario: Header on multiple pages
- **WHEN** a visitor opens the home, projects or about page
- **THEN** the same header markup SHALL be rendered on each of them without page-specific duplication

#### Scenario: Active section highlight
- **WHEN** a visitor is on the home, projects or about page
- **THEN** the navigation entry for that section SHALL be highlighted in white and the other entries SHALL keep the default grey

### Requirement: Route-based navigation
The application SHALL serve the home, projects, about and colour pages as client-side routes and
SHALL resolve any unknown path to the home page.

#### Scenario: Navigating between pages
- **WHEN** a visitor selects a navigation entry or an in-page link
- **THEN** the matching page SHALL render without a full document reload and the scroll position SHALL reset to the top

#### Scenario: Unknown route
- **WHEN** a visitor opens a URL that does not match a known route
- **THEN** the application SHALL redirect to the home page

### Requirement: Content parity with the previous site
The application SHALL present the same content as the previous static pages, including the three
headline roles, the tagged salutation, the full skills list, all four projects with their dates
and links, the biography facts, and all six contact links.

#### Scenario: Projects page content
- **WHEN** a visitor opens the projects page
- **THEN** the four original projects SHALL be listed with their descriptions, dates, preview images and external links intact

#### Scenario: About page content
- **WHEN** a visitor opens the about page
- **THEN** the biography headline, role, summary and six profile facts SHALL be displayed together with the six contact links

### Requirement: Preserved interactions and styling
The application SHALL preserve the original interactive styling, including the grey-to-white
hover feedback, the infinite skills ticker, the about page hover hints, the per-link hover
colours and the light colour page theme.

#### Scenario: Skills ticker
- **WHEN** the home page is displayed
- **THEN** the skills list SHALL scroll continuously with the duplicated list producing the seamless loop

#### Scenario: About hover hints
- **WHEN** a visitor hovers one of the contact icons on the about page
- **THEN** the matching hint text SHALL appear below the icons and SHALL be cleared again when the pointer leaves

#### Scenario: Colour page theme
- **WHEN** a visitor opens the colour page
- **THEN** the light background and gradient sections SHALL be applied, and the dark default theme SHALL be restored after navigating away

### Requirement: Buildable and deployable static output
The project SHALL build to a static bundle that works when served from any path without server
rewrite rules, and the previous static site SHALL remain available for reference.

#### Scenario: Production build
- **WHEN** the build script runs
- **THEN** a deployable bundle SHALL be produced with no build errors and the assets referenced by relative URLs

#### Scenario: Archived site
- **WHEN** a maintainer needs the previous implementation
- **THEN** the original HTML, CSS and JavaScript files SHALL still be present in the repository under `legacy/`
