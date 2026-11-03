# CFDO frontend architecture proposal

## Current workspace

**OBSERVED:** The folder has `prompt.md` and `bried.txt`; there is no `package.json`, application source, framework, route structure, style system, or animation dependency. There is no existing app architecture to preserve. This phase creates documentation only.

## Proposed stack and structure

**PROPOSED:** Vite + React + TypeScript is a small, flexible foundation for the planned editorial homepage and later CMS-backed routes. Plain CSS with custom properties or scoped CSS modules is sufficient for tokens and layout. Use native CSS transitions and Intersection Observer for simple reveals. Defer any GSAP/ScrollTrigger decision until a measured, approved section needs pinning or a coordinated continuous timeline. Keep content objects outside presentation so a future CMS can replace them without restructuring sections.

```text
src/
  app/                 routing, page shell, document metadata
  components/          Header, Footer, Button, SectionHeading, MediaFrame
  sections/            one component per approved homepage chapter
  content/             typed, clearly draft CFDO content records
  styles/              tokens, global type, layout, motion rules
  hooks/               only repeated interaction hooks
  assets/               supplied or original assets when approved
```

This is a target organization, not a request to create files now. Sections should own section-specific layout and content. Shared components should emerge from actual repetition. Avoid a universal animation wrapper.

## Content and data boundaries

- Keep programme areas and four consultancy lines as typed records sourced from the brief, with editorial copy flagged for CFDO approval.
- Do not invent project titles, impact figures, testimonials, partner logos, news, or event records. Conditional modules should render only when real entries are supplied.
- Support English initially and keep text outside components for future Swahili localization.
- Reserve CMS fields for title, summary, category, date, media, alt text, body, and publication status for stories/news. Data source and publishing workflow remain **UNKNOWN**.
- Calls to join, partner, contact, and donate require real routes or forms before activation. Donation/payment integration is **UNKNOWN**.

## Accessibility and performance rules

Use a visible semantic heading order, keyboard operable menu/accordion/slider, focus return after closing the menu, Escape handling, and reduced-motion equivalents. Avoid permanently hidden entrance text. Use responsive images, lazy load below the fold, and avoid per-frame layout reads. Measure performance after real media is supplied.

## Proposed token categories

Define `color.surface`, `color.ink`, `color.accent`, `color.line`, `type.display`, `type.heading`, `type.body`, `type.label`, `space.*`, `container.*`, `radius.*`, `motion.fast/normal/slow`, and `motion.ease`. Values should be finalized during the first approved visual section, after CFDO identity assets and brand decisions are known.
