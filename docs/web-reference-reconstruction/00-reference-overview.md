# Reference overview and evidence

Reference: https://oci.madebybuzzworthy.com/ (homepage, inspected 5 October 2026). Scope is the public homepage. The source is an inspiration for CFDO, whose direction comes from `bried.txt`; this document does not prescribe reuse of OCI identity, copy, images, or implementation.

## Method and confidence

- **OBSERVED** means visible in the rendered page or directly exercised in headless Chrome.
- **MEASURED** means read from browser geometry or computed styles at the named viewport; figures may change with browser rendering.
- **INFERRED** means a likely design or implementation explanation.
- **ESTIMATED** means a visual approximation.
- **UNKNOWN** means the evidence did not establish the fact.

The page was inspected at 1440 × 900, 768 × 1024, and 390 × 844, including the top, multiple intermediate scroll positions, and bottom. Menu, a service accordion item, and the testimonial next button were exercised. The source text and link inventory were also checked. Browser screenshots were used for visual observation; exact scroll easing, hover timing, and reduced-motion behavior were not established.

**OBSERVED:** The experience tells a credibility story in this order: a large statement over architectural media, an expertise introduction, services, process, projects, testimonials, news, and a large contact/navigation footer. It uses a stringent grid, very large plain sans typography, small monospaced labels, cool blue, light neutral surfaces, thin blue rules, and blue duotone photography.

**OBSERVED:** The header remains at the top while the document scrolls. A right-side menu panel opens over the current page. **INFERRED:** The persistent header likely uses fixed positioning; the exact CSS method is not material to the adaptation.

**OBSERVED:** The site uses screen-reader-only semantic headings in some places and larger visible display text in separate elements. CFDO should preserve semantic heading structure without needing this exact split.

## CFDO boundary

`bried.txt` defines CFDO as a Mwanza-based Tanzanian NGO with development programmes and consultancy services. Its proposed journey is Discover → Understand → Believe → Explore → Connect → Participate. The brief supplies programme and service categories, registration number, and proposed language. It explicitly withholds verified project counts, stories, testimonials, and partner logos. Those must stay content placeholders or conditional modules until supplied.

The reference appears to be a Nuxt site from its response header, but **INFERRED:** that has no bearing on a fresh CFDO stack choice. This workspace contains only `prompt.md` and `bried.txt`, with no package manifest, source tree, or existing app.
