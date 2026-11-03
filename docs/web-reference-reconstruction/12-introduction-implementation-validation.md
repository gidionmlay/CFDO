# Institutional introduction: third approved section

Implemented after separate authorization. Scope: one introduction section following the hero, plus a working hero scroll cue to reach it. No programme section was built.

## Matches and adaptations

- **MATCH:** The brief's belief statement is the dominant editorial element; the purpose paragraph sits in a smaller supporting column.
- **MATCH:** The credibility strip contains only the four facts supplied in the brief: established in 2022, Tanzania Mainland area of operation, Mwanza head office, and registration 00NGO/R/3113.
- **ADAPT:** Warm paper and forest type continue the original CFDO working palette. A clay emphasis on “communities” adds a human focal point rather than copying the reference's technical blue treatment.
- **ADAPT:** The section flows naturally after the hero and uses a modest one-time viewport reveal. Reduced-motion preference keeps the content static.

## Browser validation

- Headless Chrome inspected the section at 1440×900, 768×1024, 390×844, 390×667, and 320×640.
- Desktop uses a heading/supporting-copy split and four fact columns; mobile stacks the copy and uses a two-by-two fact grid.
- The hero's “Meet CFDO” link updates the hash to `#introduction` and scrolls to the section.
- The first pass left a strip of hero visible when the introduction was shorter than the viewport. Its desktop/tablet minimum height now reaches the viewport, and the tablet anchor aligns at y=0.
- At 320 px, removing the body minimum width eliminated horizontal overflow. The hero title was resized at that width to prevent clipping. The registration value was resized to stay on one line.
- `npm run build` passes after these changes.

## Remaining limits

- The final CFDO font and brand identity have not been supplied; typography and colors remain working choices.
- The four facts are brief-derived, not independently verified public claims. Review them with CFDO before publication.
- At this milestone, the primary hero action labels lacked real destinations, while the separate scroll cue worked. “Explore our work” became a link in the following programmes milestone.
- The next programme section and its transition remain outside this milestone.

## Later motion revision

- **IMPLEMENTED:** The belief statement and “Our purpose” block now reveal independently as they approach the viewport. The purpose block follows with a short delay, preserving reading order on desktop and mobile.
- **ACCESSIBILITY:** The content is visible immediately under reduced motion or without `IntersectionObserver`.
- **MEASURED:** Headless Chrome at 1440×900, 768×1024, 390×844, and 320×640 confirmed both blocks become fully visible, no horizontal overflow appears, and reduced-motion mode keeps both blocks static. `npm run build` passed.
