# Voices implementation: ninth approved phase

Implemented after separate authorization. Scope: a conditional testimonial feature and optional approved partner marks. The brief and project contain no genuine attributed quotations or partner mark assets, so the section is currently omitted from the live page. The following News phase is covered by `19-news-implementation-validation.md`.

## Matches and adaptations

- **MATCH:** The prepared section uses the brief's “Voices From Our Community” heading, a large quotation, and small attribution.
- **ADAPT:** `src/content/voices.ts` requires publication approval, permission, quote text, attribution, and context before a voice renders. Partner marks require their own approval and image fields.
- **ADAPT:** One published voice appears as a static feature. Two or more voices add manual previous and next buttons with accessible labels and a polite live announcement. There is no autoplay.
- **MATCH:** No fabricated quotation, attribution, or partner logo is shipped.

## Browser validation

- `npm run build` passes.
- Temporary, explicitly synthetic local quotes tested the single and multiple states in headless Chrome at 1440×900, 768×1024, 390×844, and 320×640. Document scroll width matched client width at every size.
- With two preview quotes, clicking Next changed the quote, attribution, and count; pressing Enter on Previous returned to the first. With one preview quote, no carousel controls rendered.
- All preview quotes were removed. A final browser check confirmed `#voices` is absent and zero quote figures render with the live empty data list.

## Remaining limits

- Real quotation length, attribution wording, and any partner mark layout cannot be judged until CFDO supplies permissioned content and approved assets.
