# Section-by-section CFDO implementation roadmap

The sequence follows `bried.txt` and the evidence map. No UI implementation is authorized in this phase. For each approved section: build structure, responsive layout, visuals, interaction/motion, compare across desktop/tablet/mobile, fix major mismatches, report, and stop for authorization of the next section.

| Phase | Structure/content | Media and interaction | Definition of done |
|---|---|---|---|
| 0 Foundation | App shell, routes, typography/token draft, semantic navigation | No source assets; reduced-motion and focus standards | Runs cleanly at three viewports; content model separated |
| 1 Header | CFDO name/identity, primary route groups, menu | Original mark placeholder; accessible drawer | Open/close, Escape, focus, mobile fit verified |
| 2 Hero | Identity + mission + Explore Work / Partner CTAs + registration detail | Original community image placeholder with full-bleed geometry | Hierarchy and crop work at three sizes; actions resolve to real destinations |
| 3 Institutional introduction | Belief statement, mission, verified registration/location facts | No fabricated stats | Editorial split and mobile reading order approved |
| 4 Programmes | Five brief-defined areas in an editorial grid | Story/media placeholders, no invented outcomes | Each area legible and actionable; grid reflows cleanly |
| 5 Method | Listen, Design, Deliver, Sustain | Subtle card/step reveal | Sequence clear without animation; no unnecessary pinning |
| 6 Consultancy transition and services | Distinct transition plus four brief-defined service lines | Service detail interaction if useful | Programmes and consultancy both feel first class |
| 7 Community stories | Conditional verified story entries | Original/approved media only | Publish only with factual story and consented image |
| 8 Featured work | Conditional real projects | Stable project-card aspect ratios | No fabricated project data |
| 9 Voices | Conditional real testimonials/partner marks | Slider only when multiple genuine records exist | Attribution verified; controls accessible |
| 10 News | CMS-ready editorial feature and smaller entries | Real articles only | Date/category/article routes correct |
| 11 Final CTA and footer | Partner, join, contact, support plus institutional footer | Original CFDO brand treatment | Every action has a real destination or clear unavailable state |
| 12 Full audit | Whole-page hierarchy, transitions, and content integrity | Visual/motion/responsive/performance checks | No broken sections, false claims, or inaccessible controls |

**Dependencies:** CFDO identity assets, approved copy, real image/story/project/testimonial/news records, and form destinations are external inputs. Their absence must not be disguised with fake content. It is acceptable for later conditional sections to be omitted from a first release; the roadmap records their intended place.
