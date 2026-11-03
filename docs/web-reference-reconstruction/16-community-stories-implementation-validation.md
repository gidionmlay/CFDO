# Community Stories implementation: seventh approved section

Implemented after separate authorization. Scope: the Community in Action section and a conditional featured-story template. No story record or photograph was available in the brief or project. The following Featured Work phase is covered by `17-featured-work-implementation-validation.md`.

## Matches and adaptations

- **MATCH:** The visible theme uses the brief's “Community in Action” and “People. Places. Activities. Stories.” wording.
- **ADAPT:** With no verified story, the live section presents a typographic chapter instead of a fabricated person, activity, outcome, quotation, or image.
- **ADAPT:** `src/content/communityStories.ts` defines the story fields. A featured story appears only when a record has an approved publication flag, confirmed image consent, and the required story and image fields. Its article layout includes a photograph, programme/location metadata, summary, and a native expandable full story.
- **REINTERPRET:** The reference's image-led proof chapter informed the large-scale chapter rhythm. The live treatment uses only CFDO brief copy while evidence is absent.

## Browser validation

- `npm run build` passes.
- Headless Chrome inspected 1440×900, 768×1024, 390×844, and 320×640. The heading and four themes stayed in reading order; no story card appeared without data.
- The consultancy-to-stories boundary was visually inspected at desktop width. The dark-to-sage surface change clearly starts a new chapter.
- A decorative arrow initially caused 320px overflow. It is now hidden below 360px; the final browser check showed document scroll width equal to client width at all four sizes.

## Remaining limits

- The featured-story branch cannot be visually validated with real media until CFDO supplies a factual account and an approved, consented photograph with alternative text.
- No impact figures were added because the brief supplies none.
