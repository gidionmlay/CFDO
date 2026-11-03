# News implementation: tenth approved phase

Implemented after separate authorization. Scope: a conditional editorial news section, article data model, and article routes. The brief and project contain no real articles, so News is currently omitted from the live homepage. The following closing section is covered by `20-closing-section-implementation-validation.md`.

## Matches and adaptations

- **MATCH:** The prepared section uses the brief's “Latest From CFDO” heading, one large feature, three smaller stories, and an “Explore all news” control when more entries exist.
- **ADAPT:** `src/content/news.ts` requires publication approval, a valid ISO date, slug, category, title, summary, and body before an article appears. Images display only with separate image approval and alternative text.
- **ADAPT:** Articles open at `/news/:slug`. A direct URL for an unpublished or unknown slug shows “Article unavailable.” The article page includes category, date, summary, optional approved image, full body, and a return link. Header section links return to the homepage from an article page.
- **ADAPT:** When more than four articles are published, “Explore all news” expands the list in place. No CMS or backend was invented.
- **MATCH:** No fabricated article, date, image, or link is shipped.

## Browser validation

- `npm run build` passes.
- Five temporary, explicitly synthetic local articles tested the feature/list layout in headless Chrome at 1440×900, 768×1024, 390×844, and 320×640. Document scroll width matched client width at every size.
- The preview featured image loaded; category and date appeared; expanding and collapsing the list changed the visible story count and `aria-expanded`.
- A direct preview article URL displayed the correct title, date, image, and two body paragraphs. An unknown URL displayed “Article unavailable.” Article-page menu links pointed back to homepage sections.
- All preview records were removed. A final browser check confirmed `#news` and all news cards are absent, and the removed preview route is unavailable.

## Remaining limits

- No real articles, approved images, or CMS connection are available for live publication.
- Production hosting must serve the SPA entry point for `/news/:slug` direct visits; the final deployment platform is not yet specified.
