# Programmes implementation: fourth approved section

Implemented after separate authorization. Scope: the five programme areas from `bried.txt` only, plus the first working “Explore our work” and menu links. No method or consultancy section was built.

## Matches and adaptations

- **MATCH:** All five brief-defined areas appear in the requested order under “Where we create change.”
- **ADAPT:** The desktop composition is an asymmetric editorial grid with one large full-bleed media slot, open typographic areas, and two color fields. Tablet uses a full-width feature followed by pairs. Mobile stacks the areas in reading order.
- **ADAPT:** The feature's abstract landscape is a placeholder. An approved photo can be supplied through `src/content/programmes.ts`; the frame preserves `cover` crop and focal position. No OCI media or invented programme photography was used.
- **MATCH:** Programme areas are informative content rather than links to nonexistent detail pages or fabricated impact stories.

## Browser validation

- `npm run build` passes.
- Headless Chrome inspected 1440×900, 768×1024, 390×844, and 320×640. All five headings remained visible, document width equaled the available client width, and the grid stacked cleanly on mobile.
- The first hero CTA updates the hash to `#programmes` and aligns the section at the top. The “Our work” menu link reaches the same section, closes the menu, and restores `aria-expanded=false`.
- A first visual pass felt too much like five independent cards. The second and fourth areas now use the section surface and thin rules, making the composition more editorial.

## Remaining limits

- The brief supplies area names but no approved programme descriptions, detail pages, outcomes, or photographs. Those were not invented.
- The feature media remains a placeholder and its eventual alternative text must describe the supplied image.
- The working palette and fonts still await CFDO identity assets and approval.
- The transition into “How We Work” was deferred at this milestone; it is covered by `14-method-implementation-validation.md`.

## Later motion revision

- **IMPLEMENTED:** Each programme card now reveals when it approaches the viewport. Cards entering together receive a brief desktop stagger. The feature media settles from 1.05 scale to its normal size; no text or control is moved continuously with scroll.
- **ACCESSIBILITY:** All cards remain visible without `IntersectionObserver` and under reduced motion. The reveal uses transform and opacity, and the feature media stays clipped within its card.
- **MEASURED:** Headless Chrome at 1440×900, 768×1024, 390×844, and 320×640 confirmed cards appear as they enter, the feature scale settles, and the document has no horizontal overflow. Reduced-motion mode retained the static card layout. `npm run build` passed.
