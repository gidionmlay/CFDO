# Responsive specification

The 1440×900, 768×1024, and 390×844 renderings were inspected. These are sample sizes, not established CSS breakpoints.

| Region | Desktop | Tablet | Mobile |
|---|---|---|---|
| Header | Brand left; compact menu controls right; fixed-looking placement | Same compact pattern | Brand and two small controls consume most width; menu text appears in a small white segment |
| Hero | Full-bleed architectural frame; huge two-line title lower left, promise on right | Full-height frame; title wraps into narrower width | Full-height crop changes significantly; title/side copy reposition and wrap |
| Introduction | Full-screen blue field, large statement spanning broad width; two small notes low/right | Text width reduces; still about one viewport high | Large text becomes many lines; small notes stack/reflow |
| Services | Image left, accordion right, strong vertical divider | Split narrows; service section about a viewport high | Accordion dominates width; image is reduced/repositioned; rows and button become full width |
| Process | Large title left and four staggered cards right | Cards and title compress | Title stacks at about 76 px; cards become full-width vertical white panels; decorative rotation/offset is reduced |
| Projects | Three visible columns | Much taller section; cards become more vertical | One project per row; title stacks; images roughly full content width |
| Testimonials | Logo left, oversized quote right; vertical arrows | Quote and logo have less horizontal separation | Quote first; attribution and left/right controls collect at bottom; arrows horizontal |
| News | Large feature left and smaller tile group right | Less room for grid | Feature card leads a horizontally overflowing row; partial next card is visible |
| Footer | Horizontal information zones around large mark | Taller grouping | Mark leads; navigation/contact stack; footer approaches 986 px high |

**MEASURED:** Hero and introduction each occupy approximately one viewport height at all three samples. At 390 px, the projects section spans about 1,829 px and its three card images are stacked; at 768 px it spans about 2,542 px. The mobile page is structurally rearranged, not a scaled desktop composition.

**PROPOSED CFDO strategy:** design mobile reading order first for identity → mission → action, then widen to a two-column institutional introduction, programme mosaic, and consultancy modules. Keep cards and editorial content accessible without motion. Any mobile horizontal story rail must provide visible next affordances and keyboard scrolling; if that cannot be delivered well, stack cards instead.
