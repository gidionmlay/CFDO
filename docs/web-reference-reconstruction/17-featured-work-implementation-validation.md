# Featured Work implementation: eighth approved phase

Implemented after separate authorization. Scope: a conditional, image-led project showcase. The brief and project contain no actual project records or approved photographs, so the section is currently omitted from the live page. The following Voices phase is covered by `18-voices-implementation-validation.md`.

## Matches and adaptations

- **MATCH:** The prepared section uses the brief's “Featured Work” heading and project fields: name, programme, and location.
- **ADAPT:** Projects are typed records in `src/content/featuredWork.ts`. A card renders only when publication and image approval flags are true and all required fields, including image alternative text, are present.
- **ADAPT:** The visual template uses three equal 4:3 image frames on desktop, two columns on tablet, and a single reading-order stack on mobile. Cards are informative until real project detail routes or verified descriptions exist.
- **MATCH:** No invented project, image, outcome, or link is shipped.

## Browser validation

- `npm run build` passes.
- Three temporary, explicitly synthetic local preview records were used to inspect the layout in headless Chrome at 1440×900, 768×1024, 390×844, and 320×640. The image frames loaded, metadata remained legible, and document scroll width matched client width at each size.
- The preview records were removed. A final browser check confirmed `#featured-work` is absent and zero project cards render with the live empty data list.

## Remaining limits

- The live section cannot be evaluated with real content until CFDO supplies factual project names, programme and location details, and approved imagery with alternative text.
