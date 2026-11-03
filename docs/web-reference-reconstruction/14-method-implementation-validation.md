# Method implementation: fifth approved section

Implemented after separate authorization. Scope: “How We Create Sustainable Change” and its four brief-defined stages, plus the working “How we work” menu anchor. The consultancy transition remains the next phase.

## Matches and adaptations

- **MATCH:** The heading and descriptions for Listen, Design, Deliver, and Sustain use the brief's wording and order.
- **ADAPT:** An original two-column editorial layout presents the title beside an ordered timeline. At tablet and mobile widths, the timeline follows the heading in the same reading order.
- **ADAPT:** A short entry animation applies only when motion is allowed. The complete sequence remains visible without animation or JavaScript.
- **MATCH:** The method is informational content, with no fabricated case study, result, or destination.

## Browser validation

- `npm run build` passes.
- Headless Chrome inspected 1440×900, 768×1024, 390×844, and 320×640. All four titles and descriptions were present, and document width matched the available client width at each size.
- The programmes-to-method boundary was visually inspected at desktop width. The surface changes from sage to paper, with enough separation for the new heading and timeline.
- The “How we work” menu item points to `#method`, scrolls the section to the top, closes the drawer, and returns `aria-expanded=false`.

## Remaining limits

- The working palette and fonts still await CFDO identity assets and approval.
- The consultancy transition was deferred at this milestone; it is covered by `15-consultancy-implementation-validation.md`.

## Later motion revision

- **IMPLEMENTED:** Each stage now reveals when it reaches the reading area of the viewport. A thin accent line grows between the markers as stages appear. The earlier section-wide stagger was removed.
- **ACCESSIBILITY:** All stage text remains in the document. Reduced-motion users and browsers without `IntersectionObserver` see the complete timeline immediately.
- **MEASURED:** Headless Chrome at 1440×900, 390×844, and 320×640 showed progressive reveals, line progress from 0 to 1, and no horizontal overflow. At 390px, the reveal threshold was adjusted so visible stage text does not leave a large blank area. Reduced-motion showed all four stages immediately.
