# Interactions, scrolling, and motion

## Exercised interactions

| Element | Trigger and observed state change | Timing/easing | CFDO recommendation |
|---|---|---|---|
| Menu | Click top-right menu button: a white right-half panel overlays the current page, shows large primary links, smaller company/contact blocks, and newsletter; button reports `aria-expanded=true` and label `close menu`. Click closes. **OBSERVED.** | Opens within about a second. **ESTIMATED**; easing **UNKNOWN**. | Original responsive panel/drawer with focus management, Escape and backdrop handling. |
| Services accordion | Initially first of six is open. Click second: first `aria-expanded` becomes false, second true, detail/action switches. Buttons have `aria-controls` and panel IDs. **OBSERVED.** | Content settles within about a second. **ESTIMATED**. | One-open-at-a-time only if the CFDO content benefits; keyboard accessible. |
| Testimonial | Previous/next buttons with accessible labels; next was clicked and slide screenshot captured. **OBSERVED** controls. | Exact transition and wrapping **UNKNOWN** from this pass. | Conditional slider for verified quotes, or static quote if only one. |
| Project/news | Card-sized link hit areas lead to detail routes. **OBSERVED** from rendered link geometry. | Hover transition **UNKNOWN**. | Use whole-card links and clear focus/hover treatment. |
| Newsletter | Email input and submit control visible in menu/footer. **OBSERVED**. Submission result **UNKNOWN**. | **UNKNOWN**. | Do not expose until data handling and consent are defined. |

## Scroll inventory

| Section | Element | Trigger and start → end | Relation | Evidence |
|---|---|---|---|---|
| Hero | Image and title | Initial image fills viewport; after settling, large title and side promise appear. | Time-based entrance appears likely; exact sequencing unknown. | Image/title states **OBSERVED**; timing **ESTIMATED**. |
| Introduction | Large text | Enters after hero; text occupies most of blue viewport and gives way to services. | Viewport entrance; individual text split visible in DOM, but precise scroll link **UNKNOWN**. | **OBSERVED/UNKNOWN**. |
| Services | Media and accordion | Split layout remains while ordinary page scroll moves through it. | Normal scroll; panel state is click-controlled. | **OBSERVED**. |
| Process | Four cards | Cards appear staggered down a line as the page advances. | Normal scroll plus likely viewport reveal. No evidence of long pinning. | Geometry **OBSERVED**; animation mapping **UNKNOWN**. |
| Projects | Card grid | Heading then three linked cards move through viewport. | Normal scroll; no desktop horizontal pin was seen. | **OBSERVED**. |
| Testimonials | Quote slider | Section enters after projects; navigation is button-controlled. | Normal scroll. | **OBSERVED**. |
| News | Card row | Desktop feature plus tile group; mobile shows a horizontally overflowing card track. | Mobile horizontal overflow **OBSERVED**; drag/swipe mechanics **UNKNOWN**. | **OBSERVED/UNKNOWN**. |
| Footer | Graphic and details | Enters after news, ending at document bottom. | Normal scroll. | **OBSERVED**. |

**MEASURED:** Document height was about 7,780 px at 1440×900, 9,950 px at 768×1024, and 8,201 px at 390×844. The header stayed near y=15 during sampled scroll positions. **UNKNOWN:** Whether the page uses smooth/inertial scrolling internally. Browser-controlled `scrollTo` reached the requested positions, but that does not prove wheel/touch behavior. No verified pinned scene, scroll snap, multi-layer parallax, zoom-on-scroll, mask reveal, or scroll-controlled horizontal pin should be specified as fact.

## Motion character and implementation guidance

**OBSERVED:** The site relies on typographic reveal, large visual continuity, minor card rotation, and stateful controls more than constant moving objects. **INFERRED:** Most CFDO analogues can use CSS transitions and Intersection Observer. Use a timeline library only if a future approved section truly needs continuous scroll mapping. Honor reduced motion and keep content readable before animations finish.
