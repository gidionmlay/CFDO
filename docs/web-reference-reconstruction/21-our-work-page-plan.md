# Our Work page plan

## Goal and current evidence

- **PROPOSED:** `/our-work` should explain CFDO's five programme areas in more depth than the homepage, help visitors navigate to a relevant area, and show real examples when CFDO supplies them.
- **OBSERVED:** The homepage already presents the five programme names in `src/content/programmes.ts`. The header's “Our work” link and hero action currently jump to `#programmes` on the homepage.
- **OBSERVED:** `featuredProjects` and `communityStories` are empty, and no image assets are present in the project. The brief supplies programme names but no area-specific descriptions, confirmed results, or photographs.
- **UNKNOWN:** Official descriptions, projects, photo permissions, geographic scope for each area, and any programme-specific contact destination.

## Page structure

1. **Opening:** “Our work” heading, a concise approved introduction, and an in-page link to the programme index. Use CFDO's existing paper, sage, forest, and clay palette. Keep abstract artwork as a clearly decorative treatment until approved photography is available.
2. **Programme index:** Five numbered anchor links using the established programme names. On mobile, present them in a readable vertical list.
3. **Five programme chapters:** Each chapter has the name, an approved two- or three-sentence overview, a short description of actual activities, and optional approved media. Alternate the text/media arrangement on desktop while keeping a single reading order on mobile. Do not add invented outcomes or generic stock photos.
4. **Evidence area:** Render project or community-story links only when a verified record exists. Each card should identify the programme and clearly name the story or project it opens. Omit this area until records are ready.
5. **Closing action:** A route to the existing Get Involved section, accurately reflecting the current availability of partnership and donation actions. Replace it with a direct programme enquiry path when CFDO provides one.

## Navigation and implementation

- Add an explicit `/our-work` route using the app's current lightweight path handling. Make direct visits and refreshes work with the deployment host's SPA fallback. Add a clear unknown-route state while updating route handling.
- Point the header “Our work” item and the hero's “Explore our work” action to `/our-work`. Point the footer's “Our programmes” item there if the page becomes the primary programme destination. Homepage programme cards may link to their matching `/our-work#area-id` chapters once those chapters contain approved detail.
- Keep one programme data source for the homepage and new page. Extend each record with optional approved overview, activities, media, and publication state; render only fields that are supplied.
- Use semantic headings and landmark navigation. Preserve visible focus, direct hash navigation, keyboard access, and reduced-motion behavior. Informative photos need meaningful alternative text; decorative art needs empty alternative text or `aria-hidden`.
- Use restrained section reveals already established on the homepage. Keep the first visible image eager and defer below-the-fold images when real media is available.

## Build sequence and acceptance

1. Create the route, page shell, heading, and five-area index from existing verified names.
2. Add responsive chapter layouts with stable media slots and no invented content.
3. Integrate approved copy and media, then enable links from the homepage cards to individual chapters.
4. Add conditional verified stories/projects and the closing destination when source material exists.
5. Check desktop, tablet, and narrow mobile widths; direct `/our-work` visits, hash links, keyboard focus, reduced motion, image crops and alt text, and horizontal overflow.

## Content CFDO needs to provide

- An approved short overview and actual activities for each of the five areas.
- Real project or story records, including title, programme, location, summary, and publication approval, if the page should show proof of work.
- Approved images with use permission and enough context to write accurate alternative text.
- A usable contact or enquiry destination for programme-specific calls to action.

The page shell and navigation can be built with current information. A useful full programme page depends on the approved descriptions; without them, the five chapters would mostly repeat the homepage.
