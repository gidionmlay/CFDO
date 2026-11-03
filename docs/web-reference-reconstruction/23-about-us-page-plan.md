# About Us page plan

## Goal and evidence

- **PROPOSED:** `/about` should explain who CFDO is, why it exists, and how its community development and consultancy work fit together. It should give visitors a clear path to explore programmes or get involved.
- **OBSERVED:** The homepage already states CFDO's purpose: enabling sustainable community development through social-economic programmes and environmental conservation. The brief also defines the four-stage Listen, Design, Deliver, Sustain method and the two practice areas: community development and consultancy.
- **OBSERVED:** The current footer links “About CFDO” to the homepage introduction. The primary menu has no About Us item.
- **OBSERVED:** The user removed the registration, establishment, area-of-operation, and head-office fact strip from the homepage. The footer gives an Arusha address, and the user confirmed Arusha as the current location on 2026-10-06.
- **UNKNOWN:** Approved history, founders, team names, governance details, official mission/vision wording, and permitted photographs.

## Proposed page narrative

1. **Opening — Who we are.** A concise “About CFDO” heading and an introductory statement drawn from the existing purpose copy. Use the established editorial scale, forest/paper palette, and an abstract decorative media area that can accept a real CFDO photograph later.
2. **Purpose and belief.** Expand the homepage's “Our purpose” statement into a readable short narrative about community-led, sustainable development. Keep any new prose clearly editorial until CFDO approves it; do not imply specific results or communities served.
3. **One organisation, two connected practices.** Show Community Development and Consultancy as two complementary paths, with links to `/our-work` and the homepage consultancy section. This distinguishes the About page from a duplicate programme list.
4. **Our approach.** Reuse the existing Listen, Design, Deliver, Sustain stages in a compact horizontal sequence on desktop and a vertical reading order on mobile. Link to the homepage's fuller How We Work section if needed.
5. **Institutional details, when verified.** Use Arusha as the current location. Reserve a small optional area for approved history, registration, governance, and team details. Do not fill it with the removed fact strip or placeholder people/metrics.
6. **Closing action.** Guide visitors to Our Work and the existing Get Involved section, using only available destinations and truthful availability states.

## Visual and motion direction

- Use a quieter, more personal rhythm than the Our Work page: large opening type, generous breathing room, and alternating text/media compositions.
- Keep image slots as abstract decorative placeholders for now. Their size and crop behavior should support real approved photographs later without redesign.
- Use subtle scroll reveals for section headings and a restrained decorative parallax layer only where it improves depth. Keep text stationary enough to read, and disable decorative motion for reduced-motion preference.
- Make the approach sequence usable with keyboard and touch, with no hover-only information.

## Navigation and implementation

- Add an explicit `/about` route using the current lightweight routing pattern. Update the footer “About CFDO” link to `/about` and add one About Us item in the primary menu without duplicating a close control.
- Keep shared organization copy in `src/content/` so the homepage and About page stay consistent. Avoid copying the homepage introduction component wholesale.
- Use semantic sections and headings, visible focus, and a useful page title. Verify direct visits, navigation, responsive widths, reduced motion, and horizontal overflow.

## Build boundary

The page shell, existing-purpose content, two-practice explanation, approach sequence, and confirmed Arusha location can be built now. Real photography, history, people, and governance details wait for approved source material. No application code changes are part of this planning step.
