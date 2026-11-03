# Components and media placeholder inventory

## Reference component patterns

| Pattern | Repetition and states | CFDO direction |
|---|---|
| Brand/header | Persistent compact mark and route trigger; menu open/closed | Original CFDO identity, menu semantics, visible focus |
| Section label | Small uppercase mono label and optional index | Adapt as a flexible eyebrow/index pattern |
| Display heading | Oversized split/line-wrapped text | Adapt scale and wrap to CFDO language |
| Rule/grid line | Thin repeated structural borders | Reinterpret more subtly |
| Filled CTA | Rectangular high-contrast button | Create CFDO primary/secondary variants |
| Accordion row | Title, plus/minus, panel, action; exactly one item open in observed test | Use for consultancy or programme detail only where content warrants |
| Process card | Number/title/description and thin rules | Use four CFDO method stages with original descriptions |
| Project card | Number/category/title/image, linked card | Render only with verified project data |
| Quote slide | Quote, attribution/logo, previous/next | Conditional until genuine testimonies exist |
| News card | Date/category/title; feature and compact variants | CMS-ready structure; publish only real entries |
| Newsletter input | Email field and submit affordance | Include only when backend/consent flow exists |

## Media inventory and placeholder specifications

| ID | Reference role and observed geometry | CFDO placeholder rule |
|---|---|---|
| M01 | Hero architectural photograph, full bleed 1440×900 and 390×844 viewport crop, focal diagonal; blue halftone treatment. **OBSERVED.** | Full-bleed original CFDO community/environment media placeholder with mobile focal position and text contrast layer. Do not use source architecture. |
| M02 | Service supporting architecture image, landscape frame in left half, roughly 342×242 px visible at 1440 viewport. **MEASURED/ESTIMATED.** | 4:3 or close media slot aligned with active service; neutral placeholder; preserve placement and transition. |
| M03–M05 | Three recent project images, similarly sized landscape frames under titles; desktop three columns and mobile stacked. **OBSERVED.** | Equal-ratio project slots, conditional on supplied work; no invented project photographs. |
| M06 | Testimonial brand/wordmark at large scale. **OBSERVED.** | Text attribution placeholder; no borrowed partner logo. |
| M07 | News feature photograph, left half desktop; in mobile first card fills most viewport width. **OBSERVED.** | Original story image slot with `cover` crop and accessible alternative text when published. |
| M08 | Other news article tiles with optional images or solid-color surfaces. **OBSERVED.** | Variants for image and text-only entries, authored through future CMS. |
| M09 | Oversized footer mark, technical crosshair/circle. **OBSERVED.** | Replace with original CFDO symbol or abstract community/pathway graphic; do not reproduce source mark. |

**OBSERVED:** Source images carry a high-contrast blue dot/print texture. This treatment is tied to source identity. **PROPOSED:** CFDO imagery should feel human and truthful, with controlled color grading and consistent crop instead of cloning that texture.

No source media is copied into this workspace. Placeholder geometry should be implemented through aspect ratios, object fit/position, and responsive frame rules so that later approved assets can be swapped without layout redesign.
