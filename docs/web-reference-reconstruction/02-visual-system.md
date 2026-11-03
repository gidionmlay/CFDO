# Visual, layout, typography, color, and spacing specification

## Global system

**OBSERVED:** The source uses a near-white warm gray canvas, strong saturated blue for headings/rules/buttons, white for testimonial and process cards, and blue-overprinted images. It keeps decorative effects minimal apart from dotted/halftone photographic treatment, fine vertical and horizontal grid rules, and occasional background color transitions. Content relies on scale and position more than shadows or rounded cards. No prominent radius or elevation was visible.

**MEASURED:** Desktop horizontal edge inset is roughly 15 px for grid rules and content; major displayed headings reach roughly 160 px at 1440 px. Mobile inset is roughly 14 px; major headings were about 76 px at 390 px. The source's displayed font resolved as `PP Neue Montreal` and small labels use a monospaced family named in the CSS as `GTA Mono`. These are reference facts, not approved CFDO font choices. Some service titles are about 32 px desktop and 30 px mobile. Desktop introduction body is visually around 45–55 px. Exact font licenses are **UNKNOWN**.

**INFERRED:** Its layout follows a dense column grid. Thin blue lines expose section and column alignment, creating architectural precision. The hero and introduction use viewport-height sections. The service and process sections use two broad columns; project cards use thirds. Typography scales aggressively and wraps intentionally, so page identity comes from line breaks and whitespace as much as color.

## Section rules

| Section | Layout, visual hierarchy, spacing | Type and effects |
|---|---|---|
| Hero | Full viewport; media fills and crops behind content; brand/name sits close to lower edge; small promise sits toward right. Persistent header floats at top. | Large light sans display; white type; duotone blue image and visible fine grid. |
| Introduction | Full viewport blue plane; oversized white explanatory paragraph dominates top/center; two small notes form a lower secondary row. Stepped lower edge transitions to neutral. | Large regular sans paragraph; small uppercase mono notes. |
| Services | Light neutral; heading above split content; left visual occupies roughly one half and is smaller than its column; right accordion begins at a vertical rule. | Blue display title and thin dividers; one expanded row adds uppercase small copy and bracketed action. |
| Process | Light neutral; large stacked heading left, compact explanation beneath; right cards stagger around a central blue vertical line with slightly tilted white panels. | Blue display and card titles; small mono descriptions/numbers; restrained rotation. |
| Projects | Light neutral; extremely large heading nearly fills width; three equally spaced project columns with label/number, title, and similarly sized blue photographs. | Large sans headline; project titles ~36–40 px desktop; small mono metadata. |
| Testimonials | White; label at top; logo or attribution occupies left area; quote fills right; compact circular arrow controls below. | Quote about 45–55 px desktop, smaller but still dominant on mobile. |
| News | Light neutral; top label/link; one oversized image card and a 2×2-feeling article group on desktop. | Small date/category labels; compact article titles; feature uses blue image and tile. |
| Footer | Solid blue; oversized circular technical mark on left; fine-rule columns of links, contact, newsletter and legal. | Small mono navigation; white graphic and text. |

## Proposed CFDO tokens (design direction, not source measurements)

The CFDO brief asks for human, institutional, contemporary, and professional. **PROPOSED:** use a warm paper canvas, deep green or ink for trust, and a restrained ochre/clay accent; test these with CFDO before visual production. Keep one flexible sans display/body family paired with a readable utilitarian label style. Use fluid display sizing rather than the source's extreme fixed scale. Define a 4/8 px based spacing scale, section spacing responsive to viewport, 1 px rules, and minimal corner treatment. The grid should permit strong alignment but soften the reference's technical severity with generous image and text breathing room.

**UNKNOWN:** Exact source spacing scale, original image filters, animation easing values, and physical font files. These should not be copied or presented as exact specifications.
