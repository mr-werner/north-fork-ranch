# North Fork Ranch — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.northforkranch.com/ (Shawnee, CO).
Preview: https://nfr.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `north-fork-ranch` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `nfr.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, 2026-11-24). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site. The stay-request form posts to `api/contact.js`, which sends through Resend when `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` are set and otherwise answers in demo mode.

## Design

- Motif: a cast fly line drawn as a gold SVG line across the hero and the booking section, taken from the long gold flourishes in their logo, with a rainbow-trout pink fly at the end. The spur rowels from the logo are used as bullets and ornaments, and the "day at the ranch" section has a trout-spot texture.
- Their own logo (gold script and rainbow trout, transparent PNG in `src/assets`) and colors: header bark brown (#3b3629, deepened to #2f2b21), logo gold (#aa9d6b), the Orvis/trout green (#004e3c), and the pink from the trout's stripe as a small accent.
- Cormorant Garamond (to echo the calligraphic logo) with Jost (geometric caps like the "COLORADO" in the logo).
- Full-bleed sunset river hero with the 2023 Orvis badge, a facts strip (1985, 8,100 ft, 520 acres, 1 hr from Denver), then a planning bar with phone, email, check-in/out and "Request dates" in the first screen.
- Section order: welcome with hosts Nick and Hayley Horner → four lodgings with per-person rates and buyout prices → "A day on the North Fork" timeline built from the meal and activity times → the river, the independent guide service and both Orvis awards → activities → groups and retreats → verbatim guest reviews → good to know and driving times → stay-request form.

## What changed from the current site

- The current homepage shows a **lorem ipsum review** ("Lorem ipsum dolor sit amet…" attributed to "Lisafishslayer"); it's dropped here.
- The contact page shows builder placeholder text ("This is paragraph text. Click it or hit the Manage Text button…"), and the dining and hiking galleries show "Slide title / Write your caption here" on every slide. None of that carries over.
- "Book your trip" only opens a generic contact pop-up. The concept puts the phone, email, check-in times and a stay-request form (dates, guests, type of visit) within the first screen and again at the end.
- Rates, buyout prices and meal times were spread over the lodging, dining, FAQ and deposit pages; they're now on one page.
- Fixes the "ACCOMODATIONS" spelling in the nav.
- The guide service is clearly marked as separate (as the ranch's own pages require), with its own phone and email.

## Owner should confirm

- Service charge: the lodging page says 18%, the deposit policy page says 20%. The concept says "3.9% tax and service charge" without a number.
- Klondike Cabin buyout: the lodging page lists "Full Homestead Buyout (8 or 5 singles): $2,600" under Klondike (looks copied). The concept shows "Ask us" for Klondike.
- Pool and hot tub season: "May 30 through September 1" (lodging/activities) vs "Memorial Day to Labor Day, 24/7" (FAQ). The concept says "seasonal, summer only" and "open around the clock in season".
- Horseback riding appears in the FAQ (2-hour and 4-hour rides) but not on the activities page; it's left out. Archery is in the FAQ and the activities intro but has no rate.
- Rates ($285/$440 Wildhorse, $350/$545 cabins, buyouts $2,500/$2,600/$3,700, trap shooting $190) are copied from the current site and may change.
- The "6:00 coffee" timeline item comes from the Wildhorse Lodge listing ("Fresh ground coffee ready at 6am daily").
- The 2023 Orvis award is shown as "Orvis Endorsed Fly-Fishing Lodge of the Year 2023" (badge) and the 2021 badge as "Finalist"; both images are from their site. Confirm Orvis badge use is still fine.
- The homepage reviews are quoted word for word, including the original typos. Their source on the current site isn't labeled (the "See more reviews" link goes to Orvis), so they're credited as "Guest review via northforkranch.com". No Google rating is shown; there's a link to Google reviews.
- The email address is info@northforkranch.com (the site also lists info@nfrgs.com, which belongs to the guide service).
- Photos are hotlinked from the ranch's own site (irp.cdn-website.com) for this demo and must be replaced with licensed originals before launch. The logo and Orvis badges are copied into `src/assets`.
