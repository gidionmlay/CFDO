# Consultancy implementation: sixth approved section

Implemented after separate authorization. Scope: the consultancy transition and four service lines from `bried.txt`, plus the working consultancy menu anchor. Community Stories was the next phase and is covered by `16-community-stories-implementation-validation.md`.

## Matches and adaptations

- **MATCH:** The transition statement, heading, four service names, and four short descriptions use the brief's wording and order.
- **ADAPT:** A dark editorial section distinguishes consultancy from the community programmes and method sections. The transition statement leads into a large service heading and four expandable rows.
- **ADAPT:** “Explore service” expands the brief-provided description in place. One service is open at a time. No service page, contact route, or additional claim was invented.
- **REINTERPRET:** The reference's service accordion informed the interaction pattern; the copy, visual treatment, and four-area structure are CFDO-specific.

## Browser validation

- `npm run build` passes.
- Headless Chrome inspected 1440×900, 768×1024, 390×844, and 320×640. At each size, document scroll width matched client width and all four service controls were present.
- The initial 320px check found overflow from a decorative arrow. The arrow is now hidden below 360px; the final 320px browser check shows no horizontal overflow.
- Click and Enter key checks confirmed that opening another service closes the prior one and updates `aria-expanded` and panel visibility.
- The consultancy menu anchor points to `#consultancy`, reaches the section, and closes the menu.

## Remaining limits

- The brief provides only short service summaries. The current control reveals those summaries; richer details and destinations depend on approved content.
- The working palette and typography still await CFDO identity assets and approval.
