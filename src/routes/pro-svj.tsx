import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardCheck,
  FileText,
  Scale,
  Search,
  ShieldCheck,
  SprayCan,
  Users,
  Wind,
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

export const Route = createFileRoute("/pro-svj")({
  head: () => ({
    meta: [
      { title: "Čištění šachet pro SVJ | Čisté šachty Hodonín" },
      {
        name: "description",
        content:
          "Čištění odvětrávacích šachet pro SVJ bez vstupu do bytů. Přehledný postup, fotodokumentace a protokol pro výbor. Hodonín a okolí.",
      },
    ],
  }),
  component: ForSvjPage,
});

function ForSvjPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Pro SVJ a bytová družstva"
        title={
          <>
            Čištění šachet pro SVJ
            <br />
            <Accent dark>bez zbytečných starostí.</Accent>
          </>
        }
        description="Pomůžeme vám zjistit skutečný stav šachet, navrhnout vhodný postup a po práci předat dokumentaci, kterou má výbor k dispozici pro schvalování, evidenci i další správu domu."
        image={pageImages.roof}
        imageAlt="Střecha panelového domu s odvětrávacími šachtami"
        primaryCta={{ label: "Domluvit bezplatnou kontrolu", to: "/", hash: "kontakt" }}
        secondaryCta={{ label: "Zjistit orientační cenu", to: "/", hash: "kalkulacka" }}
        badges={[
          {
            icon: ShieldCheck,
            title: "Bez vstupu do bytů",
            body: "Obyvatele domu zatěžujeme co nejméně",
          },
          {
            icon: FileText,
            title: "Podklady pro výbor",
            body: "Foto, protokol a doporučení údržby",
          },
          {
            icon: Users,
            title: "Klid v domě",
            body: "Srozumitelný průběh od prvního kroku",
          },
        ]}
      />

      {/* Pain points */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Co výbor nejčastěji řeší</span>
            <h2 className="mt-4 text-4xl leading-[1.08] md:text-5xl">
              U SVJ nejde jen o techniku,
              <br />
              <Accent>ale i o schvalování a klid v domě.</Accent>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              U SVJ je důležité nejen technické provedení, ale i to, aby se celá zakázka dala dobře
              schválit a obhájit. Výbor potřebuje jasně vědět, co se bude dělat, jak práce proběhne,
              jestli budou obyvatelé omezeni a co po dokončení dostane do ruky.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Přesně proto stavíme každou zakázku na srozumitelném vysvětlení, klidném průběhu a
              podkladech, které výbor po dokončení skutečně využije.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <IconCard
              icon={Wind}
              title="Stížnosti na zápach"
              body="Zápach nebo kouř se šíří mezi byty a obyvatelé chtějí vědět, kdy a jak se to vyřeší."
            />
            <IconCard
              icon={Search}
              title="Nejasný stav šachet"
              body="Bez kontroly není zřejmé, v jakém stavu šachty skutečně jsou a jak velký zásah dům potřebuje."
            />
            <IconCard
              icon={Users}
              title="Obavy z komplikací"
              body="Výbor nechce obyvatelům organizovat vstupy do bytů ani omezovat běžný chod domu."
            />
            <IconCard
              icon={Scale}
              title="Odpovědnost a obhajoba před vlastníky"
              body="Zanedbaná údržba zvyšuje požární i provozní rizika. Výbor potřebuje umět doložit, že se o dům pečuje odpovědně a rozhodnutí obhájit před vlastníky."
            />
          </div>
        </div>
      </section>

      {/* What the board gets */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Co od nás výbor dostane"
              title={
                <>
                  Přehledný postup, klidný průběh
                  <Accent> a podklady po dokončení.</Accent>
                </>
              }
              body="Výbor nemusí složitě vysvětlovat, co se v domě dělo a co se za schválené prostředky provedlo. Má k dispozici jasné podklady, které lze založit do dokumentace domu a použít při dalším plánování údržby."
            />
            <div className="mt-8">
              <CheckList
                items={[
                  "úvodní vysvětlení postupu a rozsahu prací",
                  "co nejméně invazivní průběh zakázky",
                  "fotodokumentace po dokončení",
                  "protokol o provedených pracích",
                  "doporučení další údržby pro plánování",
                ]}
              />
            </div>
          </div>
          <div className="card-soft overflow-hidden">
            <img
              src={pageImages.documentation}
              alt="Kontrola stavu šachty kamerou"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How cooperation works */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionIntro
            eyebrow="Jak probíhá spolupráce se SVJ"
            title={
              <>
                Zakázka musí být
                <Accent> srozumitelná od prvního kroku.</Accent>
              </>
            }
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <StepCard
              index={1}
              icon={Search}
              title="Domluvíme kontrolu"
              body="Projdeme typ domu, přístupové možnosti a hlavní problém, který chcete řešit."
            />
            <StepCard
              index={2}
              icon={ClipboardCheck}
              title="Vysvětlíme návrh řešení"
              body="Dostanete jasné vysvětlení toho, co doporučujeme a proč — podklad, který se dá dobře schválit."
            />
            <StepCard
              index={3}
              icon={SprayCan}
              title="Provedeme práce"
              body="Zakázku provedeme tak, aby byl zásah do běžného chodu domu co nejmenší, zpravidla bez vstupu do bytů."
            />
            <StepCard
              index={4}
              icon={FileText}
              title="Předáme podklady"
              body="Po dokončení dostanete fotodokumentaci, protokol a doporučení pro další postup."
            />
          </div>
        </div>
      </section>

      {/* Responsible management */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.95fr]">
          <SectionIntro
            eyebrow="Přístup ke správě domu"
            title={
              <>
                Pravidelná kontrola šachet patří
                <Accent> k odpovědné správě domu.</Accent>
              </>
            }
            body="U starších objektů bývá důležité mít nejen samotnou práci hotovou, ale i doložené, v jakém stavu šachty byly a co bylo provedeno. Pokud si nejste jistí dalším postupem, začněte bezplatnou kontrolou a vše si vysvětlíme na konkrétním domě."
          />
          <div className="card-soft p-8">
            <div
              className="grid h-11 w-11 place-items-center rounded-xl"
              style={{ background: "color-mix(in oklab, var(--forest) 12%, transparent)" }}
            >
              <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 text-2xl">Proč je to pro SVJ výhodné</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Výbor má po zakázce v ruce jasný doklad o odpovědné údržbě: co se provedlo, v jakém
              stavu šachty byly a co doporučujeme dál. To usnadňuje komunikaci s vlastníky i
              plánování rozpočtu na další roky.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Chcete mít jasno, v jakém stavu jsou šachty
            <Accent dark> ve vašem domě?</Accent>
          </>
        }
        body="Domluvte si bezplatnou kontrolu a projdeme s vámi další postup krok za krokem."
        primary={{ label: "Domluvit bezplatnou kontrolu", to: "/", hash: "kontakt" }}
        secondary={{ label: "Zjistit orientační cenu", to: "/", hash: "kalkulacka" }}
      />
    </SiteShell>
  );
}
