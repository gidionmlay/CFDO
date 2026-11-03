# Closing section and footer: eleventh approved phase

Implemented in response to the reported live page ending at Community in Action. The conditional Featured Work, Voices, and News modules remain absent because no approved records exist; the page now closes with Get Involved and an institutional footer.

## Matches and adaptations

- **MATCH:** The closing headline follows the brief's suggested wording. Partner With Us, Join CFDO, Contact Us, and a separate Donate path all appear.
- **ADAPT:** The brief supplies no verified email, phone, application form, or payment destination. Each path is presented as informative content with an explicit online-unavailable state, rather than as a broken control.
- **MATCH:** The footer uses the brief's organization name, Mwanza location, and registration number. Its links target implemented homepage sections.
- **MATCH:** The hero's Partner with us action and the menu's Get involved item now lead to `#get-involved`.

## Browser validation

- `npm run build` passes.
- Headless Chrome inspected 1440×900, 768×1024, 390×844, and 320×640. The Community in Action to Get Involved transition and the footer were visually checked. Document scroll width matched client width at each size.
- The menu link reached `#get-involved`, closed the drawer, and reset `aria-expanded=false`. The hero's partner action points to the same section.
- Footer links on an article URL include the homepage path before section hashes.

## Remaining limits

- The headline is a working version of the brief's suggested copy, pending CFDO approval.
- Real partnership, joining, contact, and donation actions require verified destinations from CFDO.
