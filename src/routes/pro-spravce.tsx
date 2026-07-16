import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  ClipboardCheck,
  FileText,
  MessageSquare,
  Repeat,
  Search,
  ShieldCheck,
  SprayCan,
} from "lucide-react";

import { pageImages } from "@/content/site";
import {
  Accent,
  CheckList,
  CTASection,
  IconCard,
  PageHero,
  SectionIntro,
  SiteShell,
  StepCard,
} from "@/components/site-shell";

export const Route = createFileRoute("/pro-spravce")({
  head: () => ({
    meta: [
      { title: "Čištění šachet pro správce nemovitostí | Čisté šachty" },
      {
        name: "description",
        content:
          "Partner pro správce nemovitostí v Hodoníně a okolí. Čištění odvětrávacích šachet s dokumentací, přehlednou komunikací a minimálním zásahem do provozu domu.",
      },
    ],
  }),
  component: ForManagersPage,
});

function ForManagersPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Pro správce nemovitostí"
        title={
          <>
            Partner pro správce, kteří potřebují
            <br />
            <Accent dark>jasný postup a podklady.</Accent>
          </>
        }
        description="Správce nemovitostí potřebuje dodavatele, který komunikuje věcně, dodrží domluvený postup a po práci předá vše potřebné pro klienta i vlastní interní evidenci. Přesně na tom stavíme naši spolupráci."
        image={pageImages.hero}
        imageAlt="Technik na střeše panelového domu"
        primaryCta={{ label: "Domluvit bezplatnou kontrolu", to: "/", hash: "kontakt" }}
        secondaryCta={{ label: "Zjistit orientační cenu", to: "/", hash: "kalkulacka" }}
        badges={[
          {
            icon: MessageSquare,
            title: "Věcná komunikace",
            body: "Jeden kontaktní bod pro celý případ",
          },
          {
            icon: ShieldCheck,
            title: "Bez vstupu do bytů",
            body: "Minimální zásah do provozu domu",
          },
          {
            icon: Building2,
            title: "Více objektů",
            body: "Opakovatelné řešení pro celé portfolio",
          },
        ]}
      />

      {/* What managers need */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Co je pro správce důležité</span>
            <h2 className="mt-4 text-4xl leading-[1.08] md:text-5xl">
              Správce nehledá jen dodavatele,
              <br />
              <Accent>ale spolehlivý proces.</Accent>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Pomáháme správcům bytových domů řešit stav odvětrávacích šachet bez zbytečných
              komplikací pro obyvatele a bez nejasností po dokončení. Zakázka má předem jasný
              rozsah, domluvený termín a doložitelný výstup.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Díky tomu můžete klientovi kdykoli ukázat, co se v domě provedlo, v jakém stavu šachty
              byly a co doporučujeme dál.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <IconCard
              icon={MessageSquare}
              title="Rychlá a přehledná komunikace"
              body="Jedna komunikace pro celý případ. Věcně, bez zdlouhavého dohledávání, kdo co slíbil."
            />
            <IconCard
              icon={ClipboardCheck}
              title="Jasný rozsah před realizací"
              body="Rozsah prací, postup i cenu znáte předem — žádná překvapení v průběhu zakázky."
            />
            <IconCard
              icon={ShieldCheck}
              title="Minimální zatížení provozu"
              body="Pracujeme ze střechy a společných prostor, obyvatele domu zatěžujeme co nejméně."
            />
            <IconCard
              icon={FileText}
              title="Dokumentace po dokončení"
              body="Fotodokumentace a protokol, které rovnou předáte klientovi nebo založíte do evidence."
            />
          </div>
        </div>
      </section>

      {/* How cooperation works */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <SectionIntro
            eyebrow="Jak spolupráce funguje"
            title={
              <>
                Jeden kontaktní bod,
                <Accent> přehledný postup a podklady po práci.</Accent>
              </>
            }
            body="Nejprve společně projdeme typ objektu, stav domu a požadovaný rozsah. Následně připravíme doporučení dalšího postupu a po odsouhlasení zakázky provedeme práce tak, aby bylo vše doložené a snadno předatelné vašemu klientovi."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <StepCard
              index={1}
              icon={Search}
              title="Úvodní posouzení"
              body="Projdeme typ objektu, přístupové možnosti a to, co potřebuje klient vyřešit."
            />
            <StepCard
              index={2}
              icon={ClipboardCheck}
              title="Doporučení postupu"
              body="Navrhneme rozsah prací podle skutečného stavu — nic navíc, co dům nepotřebuje."
            />
            <StepCard
              index={3}
              icon={SprayCan}
              title="Realizace"
              body="Práce proběhnou v domluveném termínu s co nejmenším zásahem do provozu domu."
            />
            <StepCard
              index={4}
              icon={FileText}
              title="Podklady pro klienta"
              body="Předáme fotodokumentaci, protokol a doporučení další údržby pro vaši evidenci."
            />
          </div>
        </div>
      </section>

      {/* Portfolio advantage */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="card-soft overflow-hidden">
            <img
              src={pageImages.documentation}
              alt="Dokumentace stavu odvětrávací šachty"
              className="h-[400px] w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">
              <Repeat className="h-3.5 w-3.5" /> Výhoda pro portfolio objektů
            </span>
            <h2 className="mt-4 text-4xl leading-[1.08] md:text-5xl">
              Pokud řešíte více domů,
              <Accent> potřebujete opakovatelné řešení.</Accent>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Cílem je, aby se dala služba jednoduše nasadit i na více objektů — srozumitelně,
              předvídatelně a bez toho, aby každá zakázka začínala od nuly.
            </p>
            <div className="mt-8">
              <CheckList
                items={[
                  "stejný průběh a výstup u každého objektu",
                  "možnost řešit více domů postupně podle priorit",
                  "jednotný a srozumitelný výstup pro vaši evidenci",
                  "služba zaměřená čistě na bytové domy",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Spravujete více bytových domů
            <Accent dark> a potřebujete partnera pro další postup?</Accent>
          </>
        }
        body="Ozvěte se nám a připravíme řešení podle konkrétního portfolia objektů."
        primary={{ label: "Domluvit bezplatnou kontrolu", to: "/", hash: "kontakt" }}
        secondary={{ label: "Zjistit orientační cenu", to: "/", hash: "kalkulacka" }}
      />
    </SiteShell>
  );
}
