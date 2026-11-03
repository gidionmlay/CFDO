# Our Work page implementation

## Implemented

- Added the `/our-work` route with an opening, five programme links, five chapters, and a closing action. Programme titles come from the same content records as the homepage.
- Connected the header, homepage hero, and footer programme links to the new page. Unknown paths now show a page-not-found state.
- Each chapter accepts an approved overview, activity list, and photo record. A photo renders only when `approvedForPublication` is true. Project cards remain hidden while no verified project records exist.
- Kept abstract decorative media in the photo slots because the repository and brief contain no approved programme photographs. The design can accept them without changing the layout.

## Verification

- `npm run build` passed on 2026-10-06.
- Checked direct `/our-work` visits at 1440, 768, 390, and 320 px in headless Chrome. All five chapters and index links rendered; no horizontal overflow was measured.
- Checked a direct `/our-work#community-health` visit; the chapter settled at its 85 px scroll margin.
- Checked that homepage header, hero, and footer links target `/our-work`, and that an unknown path shows the page-not-found state.
- Inspected desktop and mobile screenshots of the opening, index, and first chapter.

## Content still needed

- Approved photographs for the programme chapters, with permission and enough context for accurate alternative text.
- Approved chapter descriptions and actual activity details. Current chapters only show verified programme names and decorative artwork.
- Verified project or story records before the evidence area can be shown.
