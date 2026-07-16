import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Camera,
  ClipboardCheck,
  FileText,
  Scale,
  Search,
  ShieldCheck,
  SprayCan,
} from "lucide-react";

import { homeFaq, pageImages, serviceHighlights } from "@/content/site";
import {
  Accent,
  CheckList,
  CTASection,
  FaqSection,
  ImageCard,
  PageHero,
  SectionIntro,
  SiteShell,
  StepCard,
} from "@/components/site-shell";

export const Route = createFileRoute("/sluzby/")({
  head: () => ({
    meta: [
      { title: "Čištění odvětrávacích šachet | Čisté šachty Hodonín" },
      {
        name: "description",
        content:
          "Profesionální čištění a dezinfekce odvětrávacích šachet pro bytové domy, SVJ a správce nemovitostí v Hodoníně a okolí. Bez vstupu do bytů, s fotodokumentací a protokolem.",
      },
      { property: "og:title", content: "Čištění odvětrávacích šachet | Čisté šachty Hodonín" },
      {
        property: "og:description",
        content:
          "Profesionální čištění a dezinfekce odvětrávacích šachet pro bytové domy, SVJ a správce nemovitostí.",
      },
      { property: "og:url", content: "/sluzby" },
    ],
    links: [{ rel: "canonical", href: "/sluzby" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Naše služby"
        title={
          <>
            Čištění odvětrávacích šachet
            <br />
            <Accent dark>s doložitelným výsledkem.</Accent>
          </>
        }
        description="Čištění odvětrávacích šachet pomáhá udržet bytový dům v lepším technickém stavu, omezit šíření zápachu mezi byty a snížit rizika spojená se zanesením. Službu zajišťujeme pro panelové a bytové domy, SVJ, bytová družstva a správce nemovitostí v Hodoníně a okolí."
        image={pageImages.service}
        imageAlt="Čištění odvětrávací šachty v bytovém domě"
        primaryCta={{ label: "Domluvit bezplatnou kontrolu", to: "/", hash: "kontakt" }}
        secondaryCta={{ label: "Zjistit orientační cenu", to: "/", hash: "kalkulacka" }}
        badges={[
          {
            icon: ShieldCheck,
            title: "Bez vstupu do bytů",
            body: "Práce ze střechy a společných prostor",
          },
          {
            icon: Camera,
            title: "Kontrola kamerou",
            body: "Stav ověříme před prací i po ní",
          },
          {
            icon: Scale,
            title: "Součást péče o dům",
            body: "Kontrola snižuje požární i provozní rizika",
          },
        ]}
      />

      {/* Service overview */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionIntro
              eyebrow="Co pro vás zajistíme"
              title={
                <>
                  Jedna specializace,
                  <Accent> promyšlená do detailu.</Accent>
                </>
              }
              body="Nejsme obecný HVAC katalog. Soustředíme se na odvětrávací šachty bytových domů a podle typu objektu a míry zanesení volíme vhodnou kombinaci postupů."
            />
            <Link
              to="/"
              hash="kontakt"
              className="inline-flex items-center gap-1.5 font-semibold text-primary transition-all hover:gap-2.5"
            >
              Domluvit bezplatnou kontrolu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <ImageCard
              image={serviceHighlights[0].image}
              tag="Hlavní služba"
              title={serviceHighlights[0].title}
              body="Mechanické odstranění nánosů a nečistot z odvětrávacích šachet včetně dezinfekce jako standardní součásti služby."
            />
            <ImageCard
              image={serviceHighlights[1].image}
              tag="Kontrola"
              title={serviceHighlights[1].title}
              body="Stav šachty ověřujeme kamerou před prací i po dokončení, aby byl výsledek jasně doložitelný pro výbor nebo správce."
            />
            <ImageCard
              image={serviceHighlights[2].image}
              tag="Výstup"
              title={serviceHighlights[2].title}
              body="Po práci předáváme přehledný výstup pro výbor, správce nebo technickou evidenci domu."
            />
            <ImageCard
              image={serviceHighlights[3].image}
              tag="Další krok"
              title={serviceHighlights[3].title}
              body="Po kontrole nebo čištění navrhneme další postup podle skutečného stavu šachet."
            />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Co je součástí služby"
              title={
                <>
                  Nejen samotné čištění,
                  <Accent> ale i jasný výstup po práci.</Accent>
                </>
              }
              body="Každá zakázka má stejný, srozumitelný průběh — od úvodního posouzení až po srozumitelné předání výsledku výboru nebo správci."
            />
            <div className="mt-8">
              <CheckList
                items={[
                  "úvodní posouzení stavu šachet",
                  "návrh postupu a rozsahu prací",
                  "mechanické vyčištění a dezinfekce šachet",
                  "kontrola kamerou podle rozsahu zakázky",
                  "fotodokumentace po dokončení",
                  "protokol o provedených pracích",
                  "doporučení další údržby",
                ]}
              />
            </div>
          </div>

          <div className="space-y-5">
            <div className="card-soft overflow-hidden">
              <img
                src={pageImages.documentation}
                alt="Kontrola odvětrávací šachty kamerou"
                className="h-[260px] w-full object-cover"
              />
            </div>
            <div className="card-soft p-8">
              <h3 className="text-2xl">Pro koho je služba vhodná</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Pro bytové a panelové domy, kde je potřeba prověřit nebo řešit stav centrálních
                odvětrávacích šachet. Nejčastěji ji využívají SVJ a bytová družstva, která chtějí
                mít technický stav domu pod kontrolou, a správci nemovitostí, kteří potřebují
                spolehlivého partnera pro více objektů.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Ve většině případů pracujeme bez vstupu do bytů, aby průběh zakázky co nejméně
                zatížil běžný chod domu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionIntro
            eyebrow="Jak čistíme"
            title={
              <>
                Každý dům má jiné technické řešení,
                <Accent> proto nejprve posoudíme skutečný stav.</Accent>
              </>
            }
            body="Podle typu objektu zvolíme vhodný pracovní postup tak, aby byl výsledek dobře doložitelný a aby práce co nejméně zasáhla běžný chod domu."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Search, title: "Kontrola stavu" },
              { icon: ClipboardCheck, title: "Příprava postupu" },
              { icon: SprayCan, title: "Samotné čištění" },
              { icon: Camera, title: "Kontrola výsledku" },
              { icon: FileText, title: "Předání dokumentace" },
            ].map((step, index) => (
              <StepCard key={step.title} index={index + 1} icon={step.icon} title={step.title} />
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        title={
          <>
            Odpovědi na otázky,
            <Accent> které přicházejí nejčastěji.</Accent>
          </>
        }
        body="Nenašli jste odpověď? Ozvěte se nám a projdeme další postup podle konkrétního domu."
        items={homeFaq}
      />

      <CTASection
        title={
          <>
            Chcete vědět, v jakém stavu jsou
            <Accent dark> šachty ve vašem domě?</Accent>
          </>
        }
        body="Domluvte si bezplatnou kontrolu a projdeme s vámi další postup podle konkrétního objektu."
        primary={{ label: "Domluvit bezplatnou kontrolu", to: "/", hash: "kontakt" }}
        secondary={{ label: "Zjistit orientační cenu", to: "/", hash: "kalkulacka" }}
      />
    </SiteShell>
  );
}
