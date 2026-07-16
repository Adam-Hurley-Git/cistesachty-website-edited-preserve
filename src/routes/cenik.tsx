import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Handshake, Layers, ScrollText, Search } from "lucide-react";

import cisteni from "@/assets/extracted/cisteni.jpg";
import domecek from "@/assets/extracted/domecek.jpg";
import kamera from "@/assets/extracted/kamera.jpg";
import {
  Accent,
  CheckList,
  CTASection,
  ImageCard,
  PageHero,
  SectionIntro,
  SiteShell,
} from "@/components/site-shell";

export const Route = createFileRoute("/cenik")({
  head: () => ({
    meta: [
      { title: "Cena čištění odvětrávacích šachet | Čisté šachty" },
      {
        name: "description",
        content:
          "Co ovlivňuje cenu čištění odvětrávacích šachet v bytových domech? Přehled faktorů, orientační vysvětlení a možnost bezplatné kontroly objektu.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Ceník"
        title={
          <>
            Přesnou cenu určíme podle
            <br />
            <Accent dark>konkrétního domu.</Accent>
          </>
        }
        description="Každý objekt má jiný počet šachet, jinou výšku, jiný rozsah zanesení i jiné požadavky na dokumentaci. Proto neuvádíme obecný ceník bez kontextu — už při první bezplatné kontrole vám ale dokážeme vysvětlit, co bude mít na rozpočet největší vliv."
        primaryCta={{ label: "Zjistit orientační cenu", to: "/", hash: "kalkulacka" }}
        secondaryCta={{ label: "Domluvit bezplatnou kontrolu", to: "/", hash: "kontakt" }}
        badges={[
          {
            icon: Search,
            title: "Kontrola zdarma",
            body: "Posouzení objektu bez závazků",
          },
          {
            icon: ScrollText,
            title: "Nacenění předem",
            body: "Rozsah i cenu znáte před realizací",
          },
          {
            icon: Handshake,
            title: "Nic navíc",
            body: "Jen rozsah, který dům potřebuje",
          },
        ]}
      />

      {/* Main factors */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionIntro
            eyebrow="Co ovlivňuje cenu"
            title={
              <>
                Cena bez kontextu je málo užitečná,
                <Accent> proto vysvětlujeme logiku rozpočtu.</Accent>
              </>
            }
            body="Tři oblasti, které rozhodují o výsledné ceně. Všechny s vámi projdeme při první kontrole přímo na místě."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <ImageCard
              image={cisteni}
              tag="Faktor 01"
              title="Rozsah objektu"
              body="Cenu ovlivňuje počet šachet v objektu, velikost domu a výška budovy."
            />
            <ImageCard
              image={kamera}
              tag="Faktor 02"
              title="Stav šachet"
              body="Důležitý je skutečný stav, míra zanesení a konkrétní technické řešení odvětrávacích šachet v domě."
            />
            <ImageCard
              image={domecek}
              tag="Faktor 03"
              title="Rozsah dokumentace"
              body="Cenu může ovlivnit požadovaný rozsah fotodokumentace, protokolu a podkladů pro výbor, správce nebo technickou evidenci domu."
            />
          </div>
        </div>
      </section>

      {/* How we price + values */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Jak postupujeme s cenou"
              title={
                <>
                  Srozumitelné doporučení
                  <Accent> místo obecné ceny.</Accent>
                </>
              }
              body="Nejdříve zjistíme stav objektu a rozsah prací. Potom vám vysvětlíme, co je pro dům vhodné řešit hned a co může počkat. Díky tomu dostanete srozumitelné doporučení místo obecné ceny bez kontextu."
            />
            <div className="mt-8">
              <CheckList
                items={[
                  "počet šachet v objektu",
                  "výška a velikost domu",
                  "skutečný stav a míra zanesení",
                  "požadovaný rozsah dokumentace",
                ]}
              />
            </div>
          </div>

          <div className="space-y-5">
            <div className="card-soft p-8">
              <div
                className="grid h-11 w-11 place-items-center rounded-xl"
                style={{ background: "color-mix(in oklab, var(--forest) 12%, transparent)" }}
              >
                <Handshake className="h-5 w-5 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-2xl">Na čem si zakládáme</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Neprodáváme zbytečně širší rozsah, než dům skutečně potřebuje. Cílem je navrhnout
                rozumné řešení podle stavu šachet a potřeb domu nebo správce.
              </p>
            </div>
            <div className="card-soft p-8">
              <div
                className="grid h-11 w-11 place-items-center rounded-xl"
                style={{ background: "color-mix(in oklab, var(--forest) 12%, transparent)" }}
              >
                <Layers className="h-5 w-5 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-2xl">Více objektů najednou</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Spravujete více domů? Při plánování více zakázek najednou dokážeme postup i rozpočet
                nastavit efektivněji — napište nám lokality a počet objektů.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price-match guarantee */}
      <section id="garance" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    background: "color-mix(in oklab, var(--forest) 12%, transparent)",
                    color: "var(--forest)",
                  }}
                >
                  <BadgeCheck className="h-4 w-4" strokeWidth={2} /> Garance nejlepší ceny
                </span>
                <h2 className="mt-5 text-4xl leading-[1.08] md:text-5xl">
                  Porazíme každou <Accent>ověřenou nabídku.</Accent>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Máte na stejný rozsah prací konkrétní písemnou nabídku od jiné firmy? Pošlete nám
                  ji. Pokud je ověřitelná a srovnatelná, vaši cenu porazíme — abyste za kvalitní
                  čištění odvětrávacích šachet nikdy neplatili víc, než je potřeba.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Garance platí pro srovnatelný objekt, stejný typ a rozsah prací i obdobnou úroveň
                  dokumentace. Nejde nám o to být nejlevnější za každou cenu, ale o férovou cenu za
                  odvedenou práci.
                </p>
              </div>
              <div className="card-soft p-7 md:p-8">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <span
                    className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl"
                    style={{ background: "var(--gradient-leaf)" }}
                  >
                    <BadgeCheck className="h-5 w-5 text-cream" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-tight">Jak garance funguje</h3>
                    <p className="text-xs text-muted-foreground">
                      Jednoduché podmínky, žádné skryté háčky
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <CheckList
                    items={[
                      "Nabídka musí být písemná a ověřitelná",
                      "Musí se týkat stejného rozsahu a typu prací",
                      "Platí pro srovnatelný objekt a podmínky",
                      "Stačí ji doložit při poptávce nebo bezplatné kontrole",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Chcete orientačně vědět,
            <Accent dark> co bude cenu ve vašem domě ovlivňovat?</Accent>
          </>
        }
        body="Domluvte si bezplatnou kontrolu a vysvětlíme vám to na konkrétním objektu."
        primary={{ label: "Zjistit orientační cenu", to: "/", hash: "kalkulacka" }}
        secondary={{ label: "Domluvit bezplatnou kontrolu", to: "/", hash: "kontakt" }}
      />
    </SiteShell>
  );
}
