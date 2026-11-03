# About Us page implementation

## Implemented

- Added `/about` with a page opening, purpose statement, community development and consultancy paths, the existing four-stage method, an Arusha location line, and links to Our Work and Get Involved.
- Updated the primary menu and footer About link to the new route. The current About menu item exposes `aria-current="page"`.
- Reused existing purpose, method, organisation name, and address content. Decorative artwork occupies the future photo area; no photographs or invented impact claims were added.
- Added restrained section reveals with a visible default state and a reduced-motion path.

## Validation

- `npm run build` passed on 2026-10-06.
- Direct `/about` visits were checked in headless Chrome at 1440, 768, 390, and 320 px. The page title, two practice paths, four method stages, and Arusha address rendered.
- Desktop and mobile screenshots of the opening and practice sections were inspected. A 320 px card overflow was found and corrected; final document widths matched the viewport's content widths at all tested sizes.
- The mobile menu exposed About as the current page and focused its close button when opened. The homepage footer About link targeted `/about`.

## Pending source material

- Real approved photography and alternative text.
- Confirmed history, team, governance, and any institutional facts CFDO wants to publish on this page.
