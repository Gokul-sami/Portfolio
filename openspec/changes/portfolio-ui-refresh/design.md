## Context

The portfolio is a static HTML/CSS/JavaScript site with a consistent dark background and a legacy visual identity centered on grey typography and white hover states. The current implementation mixes the older aesthetic with newer copy and page content, so the design needs to bring those elements back into alignment without changing the underlying static architecture.

## Goals / Non-Goals

**Goals:**
- Restore the original grey-to-white interactive text treatment for the salutation and name.
- Refresh project and about content to better reflect current work and profile details.
- Maintain the existing navigation structure and dark, minimal portfolio presentation.

**Non-Goals:**
- Replacing the site with a framework or new app architecture.
- Introducing a new backend, CMS, or dynamic data layer.
- Rebuilding the entire portfolio from a different design language beyond the established visual pattern.

## Decisions

- Preserve the existing dark aesthetic and borrowed premium typography while restoring the previous grey default states. This keeps the portfolio recognizable and avoids a disruptive redesign.
- Keep the update scoped to shared CSS and page content rather than introducing a full component system. The site is intentionally lightweight and does not need a broad structural refactor.
- Refresh copy in a way that stays personal and credible: highlight current work, skills, and notable projects without overpromising or adding unrealistic claims.

### Alternatives considered

- Full redesign to a brighter or more modern aesthetic: rejected because it would depart too aggressively from the site's established identity.
- Replacing the portfolio with a framework-driven implementation: rejected because the project remains static and small, making a full migration unnecessary for the requested goal.

## Risks / Trade-offs

- [Text contrast and readability] → Keep copy concise and ensure light hover states remain legible on dark backgrounds.
- [Outdated profile content] → Refresh a limited set of pages with carefully reviewed, current content instead of flooding the site with speculative additions.
- [Visual consistency drift] → Update shared styling rules so the same color and hover behavior applies consistently across pages.

## Migration Plan

No migration is required. This is a visual and content refresh applied directly to the existing static portfolio pages and shared styles, then checked visually for consistency across the home and subpages.

## Open Questions

None. The requested direction is specific enough to proceed with a focused update based on the original style reference and the current content needs.
