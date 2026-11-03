# Hero implementation: second approved section

Implemented after separate authorization on 6 October 2026. Scope: hero only, integrated with the existing header. No introduction or later homepage section was built.

## Matches and adaptations

- **MATCH:** Full-viewport opening, oversized organization name, secondary mission statement, two action labels, and verified NGO registration detail follow the CFDO concept brief.
- **ADAPT:** The reference's architectural photograph and technical blue treatment were replaced by an original abstract landscape placeholder in CFDO's working palette. A later approved photo can be set in `src/content/hero.ts`; the frame keeps full-bleed `cover` behavior and separate desktop/mobile focal positions.
- **ADAPT:** A short staggered entrance reveals the hero text. Reduced-motion preference removes the animation.
- **MATCH:** Desktop uses an editorial title/mission split; mobile stacks them and retains the hierarchy.

## Browser validation

- Headless Chrome inspected 1440×900, 1100×800, 768×1024, 390×844, 390×667, and 320×640.
- At every width, document scroll width equaled viewport width, the hero was at least one viewport tall, and title, mission, action labels, and registration fit without clipping.
- At 768×1024, the first pass placed the title too low. Tablet spacing was adjusted; the final title begins around y=552 and the registration remains visible at the bottom.
- `npm run build` passed after the content/media separation. The hero uses no copied OCI media or branding.

## Remaining limits

- The image is a designed placeholder. CFDO has not supplied an approved photograph or its alternative text.
- At this milestone, both action labels lacked destinations. “Explore our work” became a working link when the programmes section was added later; “Partner with us” still awaits a real contact route or verified address.
- The present palette and typography are working choices pending CFDO brand assets. Exact OCI animation timing and scroll behavior are unknown and were not copied.
- At this milestone, scroll progression into the next chapter could not yet be validated. The introduction added in the following milestone provides that transition.

## Later hero copy revision

At the user's request, the hero's top labels (“Community-led development” and “Mwanza · Tanzania”) and bottom row (“Registered NGO,” the registration number, and “Meet CFDO”) were removed. The title, mission, and two action links remain. Related markup, styles, and the hero content field were removed; the registration number remains in other institutional locations.

`npm run build` passed. Headless Chrome checked 1440×900, 768×1024, 390×844, and 320×640: all requested text was absent from the hero, both actions retained their destinations, and no horizontal overflow or clipping appeared.

## Later parallax revision

- **INFERRED design choice:** The hero landscape is the strongest available layer for subtle scroll depth. Text and controls remain stationary; other sections retain their existing motion until real media justifies more.
- **IMPLEMENTED:** The hero media moves up by at most 90px on desktop and less on mobile. Its frame extends beyond the hero so the movement never reveals an edge. A passive scroll listener schedules transform updates through `requestAnimationFrame`.
- **ACCESSIBILITY:** `prefers-reduced-motion: reduce` removes the movement and restores the normal media bounds, including when the preference changes during a session.
- **MEASURED:** Headless Chrome at 1440×900, 390×844, and 320×640 confirmed movement at 50% and 90% hero scroll, full media coverage, and no horizontal overflow. The reduced-motion check returned no inline offset and `transform: none`. `npm run build` passed.
