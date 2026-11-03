# Header implementation: first approved section

Implemented on 6 October 2026 after approval. Scope at this milestone: Vite/React/TypeScript foundation and the CFDO header/menu only. The hero was added in the next approved milestone.

## Matches and adaptations

- **MATCH:** Compact persistent brand block and menu control maintain a clear top-edge composition at desktop, tablet, and mobile widths.
- **MATCH:** Large menu panel reveals route hierarchy and institutional detail. It opens/closes, locks background scroll, closes with Escape or backdrop, and returns focus to the trigger.
- **ADAPT:** Original pathway mark, forest/cream/clay palette, CFDO name and verified registration/location details replace OCI's identity and technical blue styling.
- **ADAPT:** Planned areas are displayed as text rather than broken links until their sections or routes exist.

## Validation

- Production build and TypeScript check pass.
- Headless Chrome inspected 1440×900, 768×1024, 390×844, and 320×640.
- At each width, document scroll width equaled viewport width, the menu opened with `aria-expanded=true`, focus moved to the close control, background overflow became hidden, and Escape/backdrop restored the trigger state and focus.
- At 320×640, the panel scrolls vertically to expose lower details.

## Remaining limits

- At this milestone, the hero had not yet been implemented.
- At this milestone, the four planned menu areas were not yet active navigation. “Our work” became a link when the programmes section was added later.
- Final logo, brand palette, fonts, and approved photography have not been supplied. The current mark and palette are original working design choices for this first section.
- Reference hover timing and exact source animation values remain unknown and were not copied.
