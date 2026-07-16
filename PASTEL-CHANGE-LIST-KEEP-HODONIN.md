# Pastel Change List - Keep Hodonin Positioning

Source review: https://usepastel.com/link/o8m7rg13/  
CSV source: `C:\Users\hurle_1pxotab\Downloads\pastel-comments-o8m7rg13-exported-2026-07-16.csv`  
Export date: 2026-07-16  
Status: 21 active comments accounted for

## Version Rule

This is the secondary implementation list.

It keeps all local Hodonin / Hodonin-area positioning in place. Comments that only ask to remove or replace Hodonin/local-area wording are still recorded below, but they are marked as `Do not implement in this version`.

## Global Direction For This Version

- Keep the site positioned around Hodonin and the surrounding area.
- Keep local-firm messaging where it mentions Hodonin or nearby towns.
- Still prefer `odvetravaci sachty` / `odvetravacich sachet` over `vzduchove sachty` / `vzduchovych sachet` where the client said the wording sounds better.
- Treat disinfection as part of the standard cleaning service, not as an add-on.
- Remove `penove cisteni` as a separate service. The foam equipment is only a method for applying disinfectant.
- Remove camera inspection, disinfection, foam cleaning, and roof access from price-affecting add-on logic.
- Replace weak photos where Pastel marks `better photo`.
- Remove duplicated or low-value homepage sections marked for removal.

## Homepage `/`

Local file: `src/routes/index.tsx`  
Shared/supporting files: `src/content/site.ts`, `src/components/site-shell.tsx`, `src/routes/__root.tsx`

### Comment 17

- Pastel comment: `Čisté šachty jako základ požární prevence a bezpečí celého domu.`
- Target: Homepage hero H1.
- Current copy: `Čisté šachty, klidný dům a jasný protokol pro výbor.`
- Required change: Replace the H1 with the exact suggested line:
  - `Čisté šachty jako základ požární prevence a bezpečí celého domu.`
- Implementation area:
  - `src/routes/index.tsx`, `Hero()`

### Comment 18

- Pastel comment: `Remove`
- Target: Homepage hero eyebrow.
- Current copy: `Hodonín · Jižní Morava`
- Decision for this version: Do not implement.
- Reason: This version keeps local Hodonin-area positioning.
- Keep:
  - `Hodonín · Jižní Morava`
- Implementation area:
  - No code change for this comment.

### Comment 19

- Pastel comment: `REMOVE`
- Target: Homepage hero proof card.
- Current card:
  - Title: `Místní firma`
  - Body: `Hodonín a okolí, rychlá domluva`
- Decision for this version: Do not implement.
- Reason: This version keeps local Hodonin-area positioning.
- Keep the local proof card copy.
- Implementation area:
  - No code change for this comment.

### Comment 4

- Pastel comment: `Bez vstupu do bytů jako nadpis`
- Target: Homepage trust bar item.
- Current trust bar item:
  - Key: `Bez vstupu`
  - Value: `Do bytů ve většině případů`
- Required change: Use `Bez vstupu do bytů` as the heading.
- Suggested replacement:
  - Key: `Bez vstupu do bytů`
  - Value: `Ve většině případů`
- Implementation area:
  - `src/routes/index.tsx`, `TrustBar()`

### Comment 5

- Pastel comment: `For us would be better to clean everywhere in czech republic because there is not a lot of building in Hodonin and Břeclav area. So we can work everywhere`
- Target: Homepage trust bar item `Místní firma / Pro Hodonín a okolí`.
- Decision for this version: Do not implement.
- Reason: This version keeps local Hodonin-area positioning.
- Keep:
  - Key: `Místní firma`
  - Value: `Pro Hodonín a okolí`
- Implementation area:
  - No code change for this comment.

### Comment 6

- Pastel comment: `I would remove this section about roof access entirely. It's not that important to us.`
- Target: Homepage calculator control `Přístup na střechu`.
- Required change: Remove the full roof-access selector from the calculator.
- Also remove related pricing calculation logic:
  - `access` state
  - `accessFactor`
  - `easy` / `normal` / `hard`
  - dependencies on `access`
- Implementation area:
  - `src/routes/index.tsx`, `PriceCalculatorCard()`

### Comment 20

- Pastel comment: `Remove this section`
- Target: Homepage calculator `Doplňkové služby` row.
- Current controls:
  - `Kontrola kamerou`
  - `Dezinfekce`
  - `Pěnové čištění`
- Required change: Remove the entire add-on services row.
- Also remove related state and pricing additions:
  - `camera`
  - `disinfection`
  - `foam`
  - additions to estimate based on those values
  - `Toggle` component if no longer used
- Implementation area:
  - `src/routes/index.tsx`, `PriceCalculatorCard()`

### Comment 21

- Pastel comment: `remove this section, desinfection is not some extra service`
- Target: Homepage services grid card `Dezinfekce šachet`.
- Required change: Remove the separate disinfection add-on card.
- Suggested approach:
  - Fold disinfection into the main cleaning card copy.
  - Do not present disinfection as a separate or optional service.
- Implementation area:
  - `src/routes/index.tsx`, `Services()`
  - Possibly `src/content/site.ts`, shared `services`

### Comment 23

- Pastel comment: `better photo`
- Target: Homepage services grid image for `Doporučení další údržby`.
- Required change: Replace the marked photo with a stronger/relevant image.
- Implementation area:
  - `src/routes/index.tsx`, `Services()`
  - Current image likely uses `domecek`

### Comment 7

- Pastel comment: `I would say that we operate throughout the Czech Republic.`
- Target: Homepage `Komu pomáháme` card `Kde působíme`.
- Decision for this version: Do not implement.
- Reason: This version keeps local Hodonin-area positioning.
- Keep the Hodonin-area towns/listing.
- Implementation area:
  - No code change for this comment.

### Comment 8

- Pastel comment: `I would remove this section entirely. It's not relevant to the price at all.`
- Target: Homepage `Co ovlivňuje cenu` section, specifically the pricing-factor cards.
- Current problematic card:
  - `Doplňkové práce`
  - Mentions `kontrola kamerou nebo dezinfekce`
- Required change: Remove this whole pricing-factor section or rewrite it without camera/disinfection/roof-access as price drivers.
- Recommended change: Remove the whole `PricingFactors()` section from the homepage because the client explicitly says the section is not relevant to price.
- Implementation area:
  - `src/routes/index.tsx`, `PricingFactors()`
  - `HomePage()` section order

### Comment 9

- Pastel comment: `Remove "Hodonín and the surrounding area."`
- Target: Footer company description.
- Decision for this version: Do not implement.
- Reason: This version keeps local Hodonin-area positioning.
- Keep:
  - `... pro bytové domy, SVJ a správce nemovitostí v Hodoníně a okolí.`
- Implementation area:
  - No code change for this comment.

### Comment 25

- Pastel comment: `remove`
- Target: Homepage bottom contact/request section.
- Current section:
  - `Bezplatná kontrola`
  - `Chcete zjistit stav šachet ve vašem domě?`
  - request form fields
- Required change: Remove the duplicated homepage contact section.
- Notes:
  - There is already a dedicated `/kontakt` page using the shared contact panel.
  - If the homepage needs a CTA after FAQ, use a small CTA linking to `/kontakt` instead of duplicating the full form.
- Implementation area:
  - `src/routes/index.tsx`, `Contact()`
  - `HomePage()` section order

## Services `/sluzby`

Local file: `src/routes/sluzby/index.tsx`  
Shared/supporting file: `src/content/site.ts`

### Comment 10

- Pastel comment: `Čištění odvětrávacích šachet. vzduchových sounds weird`
- Target: `/sluzby` hero H1 and related service wording.
- Required change:
  - Replace `Čištění vzduchových šachet` with `Čištění odvětrávacích šachet`.
  - Prefer `odvětrávací` wording across service titles/meta where it reads naturally.
- Version-specific note:
  - Keep Hodonin-area service-area wording on this page.
- Implementation areas:
  - `src/routes/sluzby/index.tsx`, route metadata and `PageHero`
  - `src/content/site.ts`, service titles

### Comment 11

- Pastel comment: `Dezinfekce a pěnové čištění This isn't an additional service—it is performed during every cleaning, so I would remove this section and put everything under a single "Cleaning and Disinfection" category. There is no such thing as "foam cleaning." The foaming equipment is simply used to apply the disinfectant—that's all.`
- Target: `/sluzby` services overview grid.
- Current separate cards:
  - `Dezinfekce`
  - `Pěnové čištění`
- Required change:
  - Remove both separate cards.
  - Create one combined standard-service category for cleaning and disinfection.
  - Do not use `pěnové čištění` as a service name.
  - If foam is mentioned at all, describe it only as equipment/method used to apply disinfectant.
- Suggested title:
  - `Čištění a dezinfekce odvětrávacích šachet`
- Implementation areas:
  - `src/routes/sluzby/index.tsx`, services overview cards
  - `src/content/site.ts`, `serviceHighlights`

### Comment 12

- Pastel comment: `I would remove the camera inspection and disinfection sections. They are always part of the standard service and do not affect the price.`
- Target: `/sluzby` FAQ answer `Co ovlivňuje cenu?`
- Current answer mentions:
  - `přístup na střechu`
  - `kontrola kamerou`
  - `dezinfekce`
- Required change:
  - Remove camera inspection and disinfection from price-affecting items.
  - Because comment 6 says roof access is not important, remove roof access from price-factor wording too.
- Suggested answer:
  - `Cenu ovlivňuje hlavně počet šachet, velikost a výška objektu, míra zanesení a rozsah požadované dokumentace. Přesnou cenu potvrdíme po úvodním posouzení konkrétního domu.`
- Implementation areas:
  - `src/content/site.ts`, `homeFaq`
  - `src/routes/index.tsx`, duplicated homepage FAQ if kept

### Comment 24

- Pastel comment: `better photo`
- Target: `/sluzby` section `Co je součástí služby`, right-side image.
- Current image:
  - `pageImages.documentation`
- Required change: Replace with a better/more relevant photo.
- Implementation area:
  - `src/routes/sluzby/index.tsx`

## Pricing `/cenik`

Local file: `src/routes/cenik.tsx`

### Comment 13

- Pastel comment: `Just remove the camera inspection and disinfection sections`
- Target: `/cenik` pricing factor cards and checklist.
- Current problematic content:
  - `Technické podmínky` card mentions `přístup na střechu`.
  - `Doplňkové práce` card mentions `kontrola kamerou nebo dezinfekce`.
  - Checklist includes `doplňkové služby — kontrola kamerou, dezinfekce`.
- Required change:
  - Remove camera inspection and disinfection from pricing factors.
  - Remove or rewrite the `Doplňkové práce` card.
  - Remove roof-access emphasis if aligning with homepage comment 6.
- Suggested remaining price factors:
  - number of shafts
  - building size/height
  - actual condition / level of contamination
  - required documentation scope
- Version-specific note:
  - Keep any Hodonin-area metadata/copy if encountered.
- Implementation area:
  - `src/routes/cenik.tsx`

## About `/o-nas`

Local file: `src/routes/o-nas.tsx`  
Shared/supporting file: `src/content/site.ts`

### Comment 14

- Pastel comment: `Remove "Hodonín and the surrounding area."`
- Target: `/o-nas` hero badge.
- Current badge:
  - Title: `Místní firma`
  - Body: `Hodonín a okolí, rychlá domluva`
- Decision for this version: Do not implement.
- Reason: This version keeps local Hodonin-area positioning.
- Keep this local badge copy.
- Implementation area:
  - No code change for this comment.

### Comment 15

- Pastel comment: `we operate throughout the Czech Republic.`
- Target: `/o-nas` approach card.
- Current card:
  - `Místní firma z Hodonína`
  - `Lepší dostupnost, rychlejší domluva a znalost typických objektů v regionu.`
- Decision for this version: Do not implement.
- Reason: This version keeps local Hodonin-area positioning.
- Keep the `Místní firma z Hodonína` card.
- Implementation area:
  - No code change for this comment.

### Comment 16

- Pastel comment: `I would just write here that we are from the Břeclav region, but that there is no problem providing cleaning services throughout the Czech Republic or something along those lines.`
- Target: `/o-nas` region section.
- Current section:
  - Heading: `Hodonín a okolí — jsme kousek od vás.`
  - Body: `Nejčastěji obsluhujeme tato města a jejich okolí...`
  - Town chips: Hodonin, Kyjov, Veseli nad Moravou, Straznice, Rohatec, Dubnany, Bzenec
- Decision for this version: Do not implement.
- Reason: This version keeps local Hodonin-area positioning.
- Keep the Hodonin-area region heading/body and town chips.
- Implementation area:
  - No code change for this comment.

## Shared Content And Metadata Cleanup

These are implied by the non-location comments.

### `src/content/site.ts`

Apply:

- Rename relevant `Čištění vzduchových šachet` labels to `Čištění odvětrávacích šachet`.
- Remove separate `Dezinfekce` / `Pěnové čištění` cards or service framing.
- Fold disinfection into a standard cleaning/disinfection service.
- Update `homeFaq` answer `Co ovlivňuje cenu?` to remove roof access, camera inspection, disinfection, and add-on framing.

Do not apply in this version:

- Do not change `company.region` solely because it says `Hodonín a okolí`.
- Do not remove `Místní firma pro Hodonín a okolí`.
- Do not remove `Místní firma z Hodonína`.
- Do not remove the `towns` list solely because it is local.

### Metadata And SEO

Apply:

- Where titles/descriptions use `vzduchových šachet` as the service phrase, consider changing to `odvětrávacích šachet`.

Do not apply in this version:

- Do not remove `Hodonín`, `Hodoníně a okolí`, or local SEO positioning.
- Keep local-search relevance intact.

Affected files to check:

- `src/routes/__root.tsx`
- `src/routes/index.tsx`
- `src/routes/sluzby/index.tsx`
- `src/routes/o-nas.tsx`
- `src/routes/kontakt.tsx`
- `src/routes/pro-svj.tsx`
- `src/routes/pro-spravce.tsx`
- `src/routes/cenik.tsx`

## Implementation Notes

- Keep changes scoped to copy/content and visible section structure unless photo assets need replacement.
- The current homepage duplicates contact/FAQ content locally instead of using shared shell components. Removing the homepage contact section should be done in `HomePage()` rather than deleting shared `ContactPanel`, because `/kontakt` still uses it.
- Preserve local Hodonin-area content in:
  - hero eyebrows
  - proof cards
  - trust bars
  - footer
  - about badges/cards
  - region/town sections
  - SEO metadata
- After edits, run:
  - `npm run build`
  - optionally `npm run lint`
- Then visually check:
  - homepage hero and trust bar
  - homepage calculator
  - homepage services grid
  - homepage bottom area after FAQ
  - `/sluzby`
  - `/cenik`
  - `/o-nas`
  - footer on all pages

