# Pastel Change List

Source review: https://usepastel.com/link/o8m7rg13/  
CSV source: `C:\Users\hurle_1pxotab\Downloads\pastel-comments-o8m7rg13-exported-2026-07-16.csv`  
Export date: 2026-07-16  
Status: 21 active comments accounted for

## Global Direction

- Reposition the site away from a Hodonin-only service area.
- Use copy that says the company is from the Breclav region and can provide cleaning services throughout the Czech Republic.
- Prefer `odvetravaci sachty` / `odvetravacich sachet` over `vzduchove sachty` / `vzduchovych sachet`.
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
- Required change: Remove this eyebrow or replace it with non-Hodonin-only positioning.
- Suggested direction:
  - `Z Břeclavska · působnost po celé ČR`
- Implementation area:
  - `src/routes/index.tsx`, `Hero()`

### Comment 19

- Pastel comment: `REMOVE`
- Target: Homepage hero proof card.
- Current card:
  - Title: `Místní firma`
  - Body: `Hodonín a okolí, rychlá domluva`
- Required change: Remove Hodonin-area wording from this proof card.
- Suggested replacement:
  - Title: `Působnost po celé ČR`
  - Body: `Z Břeclavska vyjíždíme za bytovými domy po celé republice`
- Implementation area:
  - `src/routes/index.tsx`, `Hero()`

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
- Required change: Replace Hodonin-area coverage with Czech-Republic coverage.
- Suggested replacement:
  - Key: `Působnost po celé ČR`
  - Value: `Vyjíždíme za bytovými domy napříč republikou`
- Implementation area:
  - `src/routes/index.tsx`, `TrustBar()`

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
- Current copy mentions Hodonin and towns:
  - `Působíme v Hodoníně a okolí. Nejčastěji obsluhujeme Hodonín, Kyjov, Veselí nad Moravou, Strážnice, Rohatec, Dubňany, Bzenec.`
- Required change: Replace with Czech-Republic coverage.
- Suggested replacement:
  - `Sídlíme v Břeclavském regionu, ale zakázky realizujeme po celé České republice.`
- Implementation area:
  - `src/routes/index.tsx`, `WhoWeHelp()`
  - `src/content/site.ts`, `towns` if reused elsewhere

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
- Current copy:
  - `... pro bytové domy, SVJ a správce nemovitostí v Hodoníně a okolí.`
- Required change: Replace with broader coverage.
- Suggested replacement:
  - `... pro bytové domy, SVJ a správce nemovitostí po celé České republice.`
- Implementation area:
  - `src/components/site-shell.tsx`, `SiteFooter()`

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
- Also update hero description to remove Hodonin-only service area.
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
- Required change: Remove Hodonin-area wording.
- Suggested replacement:
  - Title: `Z Břeclavska`
  - Body: `Zakázky realizujeme po celé České republice`
- Implementation area:
  - `src/routes/o-nas.tsx`, `PageHero` badges

### Comment 15

- Pastel comment: `we operate throughout the Czech Republic.`
- Target: `/o-nas` approach card.
- Current card:
  - `Místní firma z Hodonína`
  - `Lepší dostupnost, rychlejší domluva a znalost typických objektů v regionu.`
- Required change: Replace with Czech-Republic coverage.
- Suggested replacement:
  - Title: `Z Břeclavského regionu`
  - Body: `Sídlíme v regionu, ale čištění odvětrávacích šachet zajišťujeme pro bytové domy po celé České republice.`
- Implementation areas:
  - `src/content/site.ts`, `whyItems`
  - `src/routes/o-nas.tsx`, if card is customized there later

### Comment 16

- Pastel comment: `I would just write here that we are from the Břeclav region, but that there is no problem providing cleaning services throughout the Czech Republic or something along those lines.`
- Target: `/o-nas` region section.
- Current section:
  - Heading: `Hodonín a okolí — jsme kousek od vás.`
  - Body: `Nejčastěji obsluhujeme tato města a jejich okolí...`
  - Town chips: Hodonin, Kyjov, Veseli nad Moravou, Straznice, Rohatec, Dubnany, Bzenec
- Required change:
  - Replace heading/body with Breclav-region + Czech-Republic coverage.
  - Remove or replace town-chip list.
- Suggested heading:
  - `Z Břeclavského regionu — působíme po celé České republice.`
- Suggested body:
  - `Jsme z Břeclavského regionu, ale u bytových domů není problém přijet za zakázkou kamkoli po České republice. Pokud řešíte SVJ, bytové družstvo nebo více objektů, napište nám lokalitu a základní informace o domě.`
- Implementation area:
  - `src/routes/o-nas.tsx`, region section

## Shared Content And Metadata Cleanup

These are implied by the comments even where no marker was placed directly.

### `src/content/site.ts`

- `company.region`
  - Current: `Hodonín a okolí`
  - Suggested: `Břeclavský region · celá ČR`
- `homeTrustPoints`
  - Replace `Místní firma pro Hodonín a okolí`.
- `services`
  - Rename `Čištění vzduchových šachet` to `Čištění odvětrávacích šachet`.
  - Avoid separate `Dezinfekce` / `Pěnové čištění` as services.
- `serviceHighlights`
  - Remove separate disinfection and foam-cleaning cards.
  - Fold into `Čištění a dezinfekce odvětrávacích šachet`.
- `homeFaq`
  - Update `Co ovlivňuje cenu?` to remove roof access, camera inspection, disinfection, and add-on framing.
- `whyItems`
  - Replace `Místní firma z Hodonína`.
- `towns`
  - The town list should not drive region sections unless explicitly still needed somewhere else.

### Metadata And SEO

Search and update title/description metadata containing:

- `Hodonín`
- `Hodoníně a okolí`
- `vzduchových šachet`

Affected files found:

- `src/routes/__root.tsx`
- `src/routes/index.tsx`
- `src/routes/sluzby/index.tsx`
- `src/routes/o-nas.tsx`
- `src/routes/kontakt.tsx`
- `src/routes/pro-svj.tsx`
- `src/routes/pro-spravce.tsx`
- `src/routes/cenik.tsx`

Suggested direction:

- Use `odvětrávacích šachet`.
- Use `Břeclavský region` and/or `celá Česká republika` where service area matters.

## Implementation Notes

- Keep changes scoped to copy/content and visible section structure unless photo assets need replacement.
- The current homepage duplicates contact/FAQ content locally instead of using shared shell components. Removing the homepage contact section should be done in `HomePage()` rather than deleting shared `ContactPanel`, because `/kontakt` still uses it.
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

