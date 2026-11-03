Use the `web-reference-reconstruction` skill for this task.

## REFERENCE WEBSITE

Reference URL:
https://oci.madebybuzzworthy.com/

The website above is an inspiration/reference only.

I want to study and recreate the **design thinking, layout structure, visual hierarchy, interaction patterns, motion language, and scrolling experience** in a new frontend project.

Do NOT blindly clone the source website.

Do NOT copy source-specific branding, logo, proprietary artwork, photography, illustrations, text, or other distinctive assets unless I explicitly provide or authorize them.

The goal is to understand how the reference works and translate the relevant design and interaction ideas into this project.

---

# PHASE 1 — COMPLETE REFERENCE FORENSICS

Do NOT modify my project.

Do NOT write implementation code.

Do NOT create production components.

Do NOT start building the page.

First inspect the reference website thoroughly from top to bottom.

Analyze the complete experience across:

* Desktop
* Tablet
* Mobile

Inspect the rendered experience, not just the obvious visual appearance.

## Analyze the page structure

Identify:

* Header
* Navigation
* Hero
* Every major section
* Subsections
* Feature areas
* Storytelling sections
* Galleries
* Cards
* Testimonials
* CTA sections
* Footer
* Overlapping sections
* Transitional sections
* Interactive areas

Create a complete page map.

Example:

PAGE
├── Header
├── Hero
├── Section 01
├── Section 02
│   ├── Subsection A
│   └── Subsection B
├── Section 03
├── CTA
└── Footer

---

# PHASE 2 — VISUAL FORENSICS

For every section analyze:

## Layout

Determine:

* Container width
* Max-width
* Section height
* Grid structure
* Flex relationships
* Columns
* Alignment
* Gaps
* Padding
* Margins
* Positioning
* Absolute elements
* Overlapping elements
* Z-index/layering
* Viewport-relative sizing

## Typography

Inspect:

* Font family
* Font category
* Font weight
* Font size
* Line height
* Letter spacing
* Text width
* Alignment
* Case
* Hierarchy
* Responsive changes

Do not invent exact values.

When values cannot be reliably determined, mark them as ESTIMATED.

## Colors

Identify:

* Background colors
* Primary text
* Secondary text
* Accent colors
* Borders
* Overlays
* Gradients
* Transparency
* Color transitions

## Spacing

Identify recurring relationships between:

* Section and section
* Heading and paragraph
* Paragraph and CTA
* Cards
* Grid items
* Images
* Navigation
* Content boundaries

Try to infer the underlying spacing system rather than documenting isolated values only.

## Components

Identify reusable patterns such as:

* Buttons
* Cards
* Navigation items
* Tags
* Labels
* Image containers
* Content blocks
* Feature blocks
* Testimonial patterns

Determine which elements appear to be instances of the same underlying component.

---

# PHASE 3 — MEDIA AND ASSET FORENSICS

For every image, video, illustration, icon, or decorative graphic document:

* Role
* Position
* Dimensions
* Aspect ratio
* Object-fit behavior
* Cropping
* Border radius
* Layering
* Background behavior
* Whether it moves during scrolling
* Whether it transforms
* Whether it is decorative or semantic

Do NOT copy source-specific assets into the new project.

Instead create a placeholder specification.

Example:

IMAGE PLACEHOLDER

Role:
Hero visual

Aspect ratio:
16:9

Desktop:
~620 × 480

Mobile:
100% width

Object fit:
cover

Radius:
24px

Position:
right side

Scroll behavior:
translateY + scale

The placeholder must preserve the geometry and behavior of the eventual asset.

---

# PHASE 4 — INTERACTION FORENSICS

Inspect all observable interactions.

Look for:

* Navigation interactions
* Menus
* Dropdowns
* Buttons
* Links
* Hover states
* Cards
* Tabs
* Accordions
* Sliders
* Carousels
* Cursor interactions
* Magnetic interactions
* Video behavior
* Image interactions
* Expand/collapse behavior
* Active states
* Transition states

For each interaction explain:

1. What triggers it?
2. What changes?
3. What is the starting state?
4. What is the ending state?
5. Is it time-based or user-controlled?
6. What is the approximate duration?
7. What easing/motion character does it use?

---

# PHASE 5 — SCROLL FORENSICS

This is a major part of the analysis.

Identify every meaningful scroll behavior.

Classify it as one or more of:

* Normal scrolling
* Smooth/inertial scrolling
* Sticky scrolling
* Pinned scrolling
* Parallax
* Multi-layer parallax
* Scroll-progress animation
* Horizontal scrolling
* Horizontal pinned scrolling
* Scroll snap
* Reveal-on-scroll
* Zoom-on-scroll
* Image transformation
* Text transformation
* Mask reveal
* Clip-path reveal
* Blur transition
* Opacity transition
* Rotation
* Scale transformation
* Section state change
* Scroll-controlled storytelling

For every scroll interaction provide:

### Trigger

What causes the behavior?

### Start state

Describe the element before the interaction.

### End state

Describe the element after the interaction.

### Scroll range

Estimate where the transformation begins and ends.

### Progress relationship

Determine whether it appears:

* discrete
* viewport-triggered
* continuous
* scroll-progress-driven
* sticky + scroll-progress-driven

### Transformation

Document:

* translateX
* translateY
* scale
* rotate
* opacity
* blur
* clip-path
* mask
* width
* height
* border radius
* color
* other visible changes

### Motion character

Describe:

* linear
* ease-out
* ease-in
* ease-in-out
* spring-like
* smooth/inertial
* custom/unknown

Do not claim an implementation technique unless it can actually be verified.

Example:

OBSERVED:
The image remains visually fixed while text continues moving.

INFERRED:
The effect is likely produced using sticky/pinned positioning.

Do not present the inference as fact.

---

# PHASE 6 — RESPONSIVE FORENSICS

Compare the reference across:

## Desktop

Document:

* Layout
* Typography
* Spacing
* Animations
* Scroll behavior

## Tablet

Document:

* Layout changes
* Typography changes
* Spacing changes
* Component changes
* Interaction changes

## Mobile

Document:

* Stacking
* Reordering
* Hidden elements
* Typography
* Spacing
* Image behavior
* Animation simplification
* Scroll behavior changes

Determine whether mobile is:

* the same composition scaled down
* a structurally different composition
* a simplified interaction model

---

# PHASE 7 — DESIGN SYSTEM EXTRACTION

Do not just document individual elements.

Extract the visual system behind the reference.

Identify likely:

## Typography system

* Display
* H1
* H2
* H3
* Body
* Small text
* Labels

## Spacing system

Identify recurring spacing units and relationships.

## Color system

Identify recurring visual tokens.

## Shape system

Identify:

* Border radius
* Borders
* Shadows
* Cards
* Containers
* Buttons

## Motion system

Identify recurring:

* Durations
* Easing patterns
* Reveal patterns
* Parallax patterns
* Scroll interactions
* Transition behavior

## Layout system

Identify:

* Container model
* Grid
* Section rhythm
* Alignment system
* Content width patterns

---

# PHASE 8 — "WHY DOES THIS DESIGN WORK?"

Analyze the design intention.

Explain:

## Visual hierarchy

Where does the eye go first, second, and third?

## Composition

How are large and small elements balanced?

## Whitespace

How is whitespace used to create rhythm or emphasis?

## Typography

What role does typography play in the visual identity?

## Motion

Which animations are meaningful and which are decorative?

## Scroll storytelling

How does scrolling reveal or sequence information?

## Emotional character

Describe the overall experience:

Examples:

* calm
* editorial
* cinematic
* playful
* technical
* luxurious
* minimal
* experimental
* energetic

Do not merely describe the website. Explain the design principles that create that feeling.

---

# PHASE 9 — INSPIRATION MAP

Create a structured map showing what should be learned from the reference.

Use these categories:

### PRESERVE

Patterns worth reproducing closely.

### ADAPT

Patterns worth using but redesigned for this project.

### REINTERPRET

Ideas that should inspire a different implementation.

### REPLACE

Source-specific elements that must become original content, assets, branding, or visuals.

### AVOID

Elements that should not be carried into the new project.

Example:

| Reference finding        | Classification | New project direction        |
| ------------------------ | -------------- | ---------------------------- |
| Sticky storytelling      | Preserve       | Recreate interaction pattern |
| Large editorial heading  | Adapt          | Use project's typography     |
| Custom photography       | Replace        | Placeholder / original image |
| Brand colors             | Replace        | Project color system         |
| Parallax depth           | Preserve       | Recreate behavior            |
| Proprietary illustration | Replace        | Original illustration        |

---

# PHASE 10 — NEW PROJECT ARCHITECTURE

Only after the reference analysis is complete should you design the architecture for this project.

First inspect the current repository and determine:

* Existing framework
* Existing dependencies
* Existing source structure
* Existing styling approach
* Existing animation libraries
* Existing utility patterns
* Existing conventions

Since this may be a new project, propose an appropriate architecture rather than blindly creating a generic template.

Define:

## Project structure

For example:

src/
├── components/
├── sections/
├── animations/
├── layouts/
├── hooks/
├── styles/
├── lib/
└── assets/

Adapt this to the actual project.

## Component architecture

Determine:

* Reusable components
* Section components
* Layout components
* Animation components
* Utility components

Avoid both:

* one huge page component
* unnecessary micro-components

## Design tokens

Define reusable tokens for:

* Typography
* Colors
* Spacing
* Radius
* Shadows
* Containers
* Motion

## Animation architecture

Recommend the appropriate approach for each interaction.

Consider:

* CSS
* Native browser APIs
* Intersection Observer
* Motion/Framer Motion
* GSAP
* ScrollTrigger
* other appropriate tools

Do not add a library simply because the reference uses an effect.

Choose the simplest reliable implementation capable of reproducing the observed behavior.

---

# PHASE 11 — IMPLEMENTATION ROADMAP

Do not build the entire page at once.

Create a sequential implementation roadmap:

FOUNDATION
↓
HEADER
↓
HERO
↓
SECTION 01
↓
VALIDATE
↓
SECTION 02
↓
VALIDATE
↓
SECTION 03
↓
VALIDATE
↓
...
↓
FOOTER
↓
FULL FIDELITY AUDIT

For each section define:

* Structure
* Components
* Content
* Placeholder media
* Responsive behavior
* Animation
* Scroll behavior
* Dependencies
* Definition of done

---

# PHASE 12 — PLACEHOLDER-FIRST IMPLEMENTATION STRATEGY

All source-specific imagery and artwork should initially be represented by placeholders unless I explicitly provide approved assets.

Do not use random stock images just to fill space.

Placeholder elements must preserve:

* dimensions
* aspect ratio
* position
* crop
* radius
* layering
* animation
* scroll behavior
* responsive behavior

The final asset should be replaceable without redesigning the section.

---

# PHASE 13 — EVIDENCE DISCIPLINE

For every important finding use one of these labels:

OBSERVED
MEASURED
INFERRED
ESTIMATED
UNKNOWN

Rules:

OBSERVED:
Directly visible behavior or structure.

MEASURED:
A value or relationship that can be reliably determined.

INFERRED:
A likely implementation explanation based on observed behavior.

ESTIMATED:
A visual approximation.

UNKNOWN:
Cannot be determined from the available evidence.

Never turn an inference into a fact.

---

# PHASE 14 — DOCUMENTATION

Save the analysis inside:

docs/web-reference-reconstruction/

Use a clear structure such as:

01-page-map.md
02-visual-system.md
03-layout-specification.md
04-typography.md
05-spacing-and-color.md
06-components.md
07-media-and-placeholders.md
08-interactions.md
09-scroll-and-motion.md
10-responsive.md
11-design-principles.md
12-inspiration-map.md
13-frontend-architecture.md
14-implementation-roadmap.md
15-risks-and-unknowns.md

Adapt the structure when necessary, but keep the documentation organized and easy to revisit.

---

# FINAL ANALYSIS OUTPUT

Before implementation, provide:

## 1. Complete page architecture

## 2. Section inventory

| Section | Purpose | Layout | Complexity | Main interaction |
| ------- | ------- | ------ | ---------- | ---------------- |

## 3. Visual system

Typography, color, spacing, shape, and layout.

## 4. Component inventory

Reusable components and responsibilities.

## 5. Media placeholder inventory

Every image, illustration, video, and graphic requiring replacement.

## 6. Interaction inventory

Every meaningful interaction.

## 7. Scroll and motion inventory

| Section | Element | Trigger | Behavior | Scroll-driven | Evidence |
| ------- | ------- | ------- | -------- | ------------- | -------- |

## 8. Responsive strategy

Desktop → Tablet → Mobile.

## 9. Inspiration map

Preserve → Adapt → Reinterpret → Replace → Avoid.

## 10. Frontend architecture

Project structure, components, tokens, animation system, and data strategy.

## 11. Implementation roadmap

A controlled section-by-section sequence.

## 12. Complexity and risk assessment

Identify interactions most likely to require iteration.

## 13. Unknowns and assumptions

Clearly identify anything that could not be reliably determined.

---

# CRITICAL STOP CONDITION

After completing:

* forensic analysis
* design system extraction
* inspiration map
* architecture
* implementation roadmap

STOP.

Do not implement anything yet.

Do not create production UI.

Wait for my explicit authorization to begin implementation.

When I authorize implementation, work on ONE section at a time.

For each section:

1. Implement structure.
2. Implement responsive behavior.
3. Implement visual styling.
4. Implement interactions.
5. Implement scroll behavior.
6. Use placeholders for unapproved media.
7. Compare the result with the reference.
8. Correct significant mismatches.
9. Report what remains.
10. STOP and wait for authorization for the next section.

Do not silently implement future sections.

The objective is not merely to make a similar-looking website.

The objective is to produce a carefully engineered frontend that captures the **useful design language, layout logic, visual hierarchy, motion, scrolling behavior, and interaction principles** discovered from the reference while creating an appropriate original implementation for this project.
