# Page map and section inventory

## Reference page tree

```text
Persistent brand/header + menu trigger
└── Menu overlay: primary routes, company links, contact, newsletter
Main
├── 01 Hero: full viewport architectural image + oversized identity + short promise
├── 02 Introduction: full viewport blue statement + two small supporting notes
├── 03 Services: large section title + image + six-item accordion + all-services CTA
├── 04 Process: four numbered, staggered white cards around a vertical rule
├── 05 Recent projects: huge title + three image-led project columns + CTA
├── 06 Testimonials: large quote carousel, attribution/logo, previous/next controls
└── 07 Latest news: one large feature + three smaller article tiles + all-news link
Footer: giant mark, sitemap, social/contact, newsletter, legal/credit
```

**MEASURED at 1440 × 900:** approximate document boundaries are hero 0–900, introduction 900–1800, services 1800–2845, process 2845–3980, projects 3980–5387, testimonials 5387–6177, news 6177–7105, and footer 7105–7780 px. These are browser snapshots, not design tokens.

| Section | Purpose | Desktop composition | Complexity | Main interaction |
|---|---|---|---|---|
| Header/menu | Orientation | Compact brand block left; two-piece menu control right | Medium | Menu overlay |
| Hero | Positioning | Full-bleed duotone architecture, giant two-line name at lower edge, small side promise | High | Intro reveal; media treatment |
| Introduction | Expertise | Blue full-screen field, very large paragraph, two small side notes near bottom | Medium | Text reveal while entering |
| Services | Capability | Editorial split: media left, accordion right, thin column rule | High | One open accordion item, CTA |
| Process | Method | Large heading and explanation left; four staggered cards on line right | Medium | Scroll entrance/positioning |
| Projects | Proof | Giant centered heading, three narrow project columns | Medium | Project links and media hover |
| Testimonials | Social proof | White field, brand/attribution left, oversized quote right | Medium | Previous/next slider |
| News | Freshness | Large image-led feature left, three tile grid right | Medium | Article links; mobile horizontal overflow |
| Footer | Conversion/navigation | Blue surface, oversized graphic, link and newsletter zones | Medium | Links and newsletter form |

**OBSERVED:** Projects and news use named source records; for CFDO, those are structurally useful but must remain unpublished or clearly draft until real records are provided. The reference homepage does not show a separate conventional CTA section before the footer. The CFDO brief calls for one, so that is a deliberate adaptation.
