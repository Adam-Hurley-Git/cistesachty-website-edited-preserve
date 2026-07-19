import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  Check,
  ClipboardCheck,
  Clock,
  FileText,
  Home,
  Mail,
  MapPin,
  Phone,
  Quote,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Users,
  Wrench,
} from "lucide-react";

import cisteni from "@/assets/extracted/cisteni.jpg";
import domecek from "@/assets/extracted/domecek.jpg";
import final from "@/assets/extracted/final.png";
import kamera from "@/assets/extracted/kamera.jpg";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { company, towns } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Čištění odvětrávacích šachet Břeclav | Čisté šachty" },
      {
        name: "description",
        content:
          "Čištění odvětrávacích šachet pro SVJ, bytová družstva a správce nemovitostí v Břeclavi a okolí. Bez vstupu do bytů, s fotodokumentací a protokolem.",
      },
      { property: "og:title", content: "Čištění odvětrávacích šachet Břeclav | Čisté šachty" },
      {
        property: "og:description",
        content:
          "Čištění odvětrávacích šachet pro SVJ, bytová družstva a správce nemovitostí v Břeclavi a okolí.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function isPlaceholder(value: string) {
  return value.includes("[DOPLŇTE");
}

function hasValue(value: string) {
  return value.trim().length > 0 && !isPlaceholder(value);
}

function getEmailLabel() {
  return hasValue(company.email) ? company.email : "Kontaktní e-mail doplníme";
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <TrustBar />
      <PriceCalculatorSection />
      <WhyCleanSoon />
      <Services />
      <Process />
      <Documentation />
      <WhoWeHelp />
      <BeforeAfter />
      <PricingFactors />
      <Testimonials />
      <FAQ />
      <Contact />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden text-cream">
      <img
        src={final}
        alt="Technik při čištění odvětrávací šachty na střeše panelového domu"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.18 0.03 154 / 0.78) 0%, oklch(0.18 0.03 154 / 0.55) 45%, oklch(0.18 0.03 154 / 0.92) 100%)",
        }}
      />
      <div className="container-x relative flex flex-1 flex-col items-center justify-center py-32 text-center">
        <span className="eyebrow text-forest-light">Břeclav · Jižní Morava</span>
        <h1 className="mt-5 max-w-4xl text-5xl font-sans font-medium leading-[1.04] tracking-[-0.04em] text-cream md:text-6xl lg:text-7xl">
          Čisté šachty jako základ požární prevence a bezpečí celého domu.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/80">
          Profesionální čištění odvětrávacích šachet pro SVJ, bytová družstva a správce. Bez vstupu
          do bytů, s bezplatnou vstupní kontrolou a jasným výsledkem pro celý dům.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#kontakt" className="btn-primary">
            Domluvit bezplatnou kontrolu <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#kalkulacka" className="btn-ghost">
            Zjistit orientační cenu
          </a>
        </div>

        {/* Floating proof cards */}
        <div className="mt-14 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              k: "Bez vstupu do bytů",
              v: "Práce ze střechy a společných prostor",
            },
            { icon: FileText, k: "Foto + protokol", v: "Doložitelný výstup po každé zakázce" },
            { icon: MapPin, k: "Místní firma", v: "Břeclav a okolí, rychlá domluva" },
          ].map((c) => (
            <div
              key={c.k}
              className="rounded-2xl border border-white/12 bg-white/8 p-4 text-left backdrop-blur-md"
            >
              <c.icon className="h-5 w-5 text-forest-light" strokeWidth={1.8} />
              <div className="mt-2 font-display text-base text-cream">{c.k}</div>
              <div className="mt-0.5 text-xs leading-snug text-cream/65">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { key: "Místní firma", value: "Pro Břeclav a okolí" },
    { key: "Bez vstupu do bytů", value: "Ve většině případů" },
    { key: "Garance ceny", value: "Porazíme ověřenou nabídku" },
    { key: "Bezplatná kontrola", value: "Nezávazné posouzení na místě" },
  ];

  return (
    <section className="border-y border-border bg-cream/60">
      <div className="container-x grid grid-cols-2 divide-x divide-border md:grid-cols-4">
        {items.map((item) => (
          <div key={item.key} className="flex flex-col items-center px-4 py-7 text-center">
            <div className="flex min-h-[2.4em] items-center justify-center font-display text-2xl leading-tight text-primary md:text-3xl">
              <span className="[text-wrap:balance]">{item.key}</span>
            </div>
            <div className="mt-2 flex min-h-[2.6em] items-start justify-center text-xs leading-snug tracking-wide text-muted-foreground md:text-sm">
              <span className="[text-wrap:balance]">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PriceCalculatorSection() {
  return (
    <section id="kalkulacka" className="bg-secondary py-20 md:py-28">
      <div className="container-x grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="eyebrow">Orientační kalkulačka</span>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            Zjistěte přibližnou cenu
            <em className="not-italic" style={{ color: "var(--forest)" }}>
              {" "}
              podle parametrů vašeho domu.
            </em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Nastavte počet šachet a podlaží a podle zadání připravíme orientační odhad ceny. Pošleme
            vám ho na e-mail, ať ho máte pro výbor nebo správce po ruce.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Odhad připravíme podle vašeho zadání",
              "Nezávazné, bez povinnosti objednat službu",
              "Odhad vám na požádání pošleme e-mailem",
              "Přesnou cenu potvrdíme při bezplatné kontrole",
            ].map((text) => (
              <li key={text} className="flex items-start gap-3">
                <span
                  className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full"
                  style={{ background: "var(--gradient-leaf)" }}
                >
                  <Check className="h-3 w-3 text-cream" strokeWidth={3} />
                </span>
                <span className="text-foreground/85">{text}</span>
              </li>
            ))}
          </ul>

          {/* Price-match guarantee badge */}
          <Link
            to="/cenik"
            hash="garance"
            className="group mt-8 inline-flex items-center gap-2.5 rounded-full border border-primary/25 px-5 py-2.5 text-sm shadow-[var(--shadow-soft)] transition-colors duration-200 hover:border-primary/50"
            style={{ background: "color-mix(in oklab, var(--forest) 8%, var(--card))" }}
          >
            <BadgeCheck className="h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2} />
            <span className="whitespace-nowrap">
              <span className="font-semibold text-foreground">Garance ceny</span>
              <span className="text-muted-foreground"> — porazíme ověřenou nabídku</span>
            </span>
            <ArrowRight className="h-4 w-4 flex-shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <PriceCalculatorCard />
      </div>
    </section>
  );
}

function PriceCalculatorCard() {
  const [shafts, setShafts] = useState(8);
  const [floors, setFloors] = useState(6);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  // Estimate is computed in the background from the inputs above — it is
  // intentionally never shown on screen. It's only ever sent by email once
  // the visitor submits their contact details below.
  const estimate = useMemo(() => {
    // Illustrative model only — real pricing is confirmed during the free survey.
    const perShaft = 420 + floors * 110;
    const base = shafts * perShaft;

    const mid = Math.round(base / 100) * 100;
    return {
      low: Math.round((mid * 0.88) / 100) * 100,
      high: Math.round((mid * 1.12) / 100) * 100,
    };
  }, [shafts, floors]);

  // Referenced so the estimate is clearly "used" (sent by email) without
  // ever being rendered in the UI.
  void estimate;

  return (
    <div className="card-soft p-6 md:p-8">
      <div className="flex items-center gap-3 border-b border-border pb-4">
        <span
          className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl"
          style={{ background: "var(--gradient-leaf)" }}
        >
          <Calculator className="h-5 w-5 text-cream" />
        </span>
        <div>
          <h3 className="font-display text-xl leading-tight">Kalkulačka ceny čištění</h3>
          <p className="text-xs text-muted-foreground">Nezávazný odhad podle parametrů domu</p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <SliderRow
          label="Počet šachet v domě"
          value={shafts}
          min={1}
          max={40}
          onChange={setShafts}
          suffix={shafts === 1 ? "šachta" : shafts < 5 ? "šachty" : "šachet"}
        />
        <SliderRow
          label="Počet podlaží"
          value={floors}
          min={2}
          max={50}
          onChange={setFloors}
          suffix="podlaží"
        />
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-secondary px-4 py-3">
        <span
          className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg"
          style={{ background: "var(--gradient-leaf)" }}
        >
          <Sparkles className="h-4 w-4 text-cream" />
        </span>
        <p className="text-xs leading-snug text-muted-foreground">
          Odhad podle vašeho nastavení vám pošleme na e-mail.
        </p>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        {sent ? (
          <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/8 px-4 py-3.5">
            <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-primary text-cream">
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            <p className="text-sm leading-relaxed text-foreground/85">
              Odesláno{name ? `, ${name}` : ""}. Orientační odhad právě posíláme na{" "}
              <span className="font-medium">{email}</span>
              {phone ? (
                <>
                  {" "}
                  a v případě potřeby vám zavoláme na <span className="font-medium">{phone}</span>
                </>
              ) : null}
              .
            </p>
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Jméno a příjmení</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Jméno Příjmení"
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Telefon</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+420 ..."
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium">E-mail pro zaslání odhadu</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="vas@email.cz"
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring"
                />
              </label>
            </div>
            <button type="submit" className="btn-primary mt-4 w-full">
              Poslat odhad na e-mail <Mail className="h-4 w-4" />
            </button>
            <p className="mt-2 text-xs text-muted-foreground">
              Údaje použijeme pouze pro zaslání tohoto odhadu a případné upřesnění detailů.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function SliderRow({
  label,
  value,
  min,
  max,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
  suffix: string;
}) {
  const clamp = (n: number) => Math.min(max, Math.max(min, n));

  return (
    <div>
      <span className="block text-sm font-medium leading-snug">{label}</span>
      <div className="mb-2 mt-2 flex items-center gap-2">
        <input
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          value={value}
          onChange={(event) => {
            const raw = event.target.value;
            if (raw === "") return;
            const next = Number(raw);
            if (Number.isNaN(next)) return;
            onChange(clamp(next));
          }}
          onBlur={(event) => onChange(clamp(Number(event.target.value) || min))}
          className="w-16 shrink-0 rounded-lg border border-input bg-background px-2 py-1.5 text-right text-sm font-semibold text-primary outline-none transition focus:border-ring focus:ring-2 focus:ring-ring"
        />
        <span className="text-sm text-muted-foreground">{suffix}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(event) => onChange(clamp(Number(event.target.value)))}
        className="h-2 w-full cursor-pointer rounded-full accent-[var(--forest)]"
        style={{ accentColor: "var(--forest)" }}
      />
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm font-medium transition ${
        checked
          ? "border-primary bg-primary/8 text-foreground"
          : "border-border bg-background text-muted-foreground hover:border-primary/40"
      }`}
    >
      <span
        className={`grid h-4 w-4 flex-shrink-0 place-items-center rounded border ${
          checked ? "border-primary bg-primary text-cream" : "border-border"
        }`}
      >
        {checked && <Check className="h-3 w-3" strokeWidth={3} />}
      </span>
      {label}
    </button>
  );
}

function WhyCleanSoon() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Proč šachty řešit včas</span>
          <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">
            Nejde jen o čištění,
            <br />
            <span className="italic" style={{ color: "var(--forest)" }}>
              ale o klid pro celý dům.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            V odvětrávacích šachtách se během let usazují nečistoty, které mohou zhoršovat kvalitu
            vzduchu v domě, přispívat k šíření zápachu mezi byty a zvyšovat provozní i bezpečnostní
            rizika. U starších panelových domů navíc nebývá skutečný stav šachet dlouho vidět, dokud
            se nezačnou objevovat stížnosti obyvatel nebo technické problémy.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Pravidelná kontrola a vyčištění šachet pomáhá udržet dům v lepším stavu, snižuje riziko
            zanesení a dává výboru nebo správci jasný doklad o tom, že údržba byla řešena odpovědně.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: Home,
              title: "Šíření zápachu mezi byty",
              body: "Zanesené šachty mohou zhoršovat běžný provoz domu a zvyšovat počet stížností od obyvatel.",
            },
            {
              icon: ShieldCheck,
              title: "Nejasný technický stav",
              body: "Bez kontroly často není zřejmé, v jakém stavu šachty skutečně jsou a co potřebují řešit.",
            },
            {
              icon: Scale,
              title: "Odpovědnost a bezpečnostní rizika",
              body: "Zanedbaná údržba šachet zvyšuje požární i provozní rizika a otevírá otázku odpovědnosti výboru nebo správce za řádnou péči o dům.",
            },
            {
              icon: Search,
              title: "Rozumné plánování další údržby",
              body: "Pravidelná kontrola pomáhá rozhodnout, co je potřeba řešit hned a co může počkat.",
            },
          ].map((item) => (
            <div key={item.title} className="card-soft p-6">
              <item.icon className="h-7 w-7 text-primary" strokeWidth={1.7} />
              <div className="mt-4 font-display text-xl">{item.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      image: cisteni,
      title: "Čištění a dezinfekce odvětrávacích šachet",
      body: "Mechanické odstranění nánosů a nečistot z odvětrávacích šachet včetně dezinfekce jako součásti standardního čištění.",
      tag: "Hlavní služba",
    },
    {
      image: kamera,
      title: "Kontrola kamerou",
      body: "Prověření stavu šachty před prací i po dokončení, aby byl výsledek doložitelný.",
      tag: "Kontrola",
    },
    {
      image: domecek,
      title: "Doporučení další údržby",
      body: "Po kontrole nebo čištění navrhneme další postup podle skutečného stavu šachet.",
      tag: "Další krok",
    },
  ];

  return (
    <section id="sluzby" className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-4xl flex-wrap items-end justify-between gap-6 md:flex">
          <div>
            <span className="eyebrow">Co pro vás zajistíme</span>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              Služby postavené kolem
              <em className="not-italic" style={{ color: "var(--forest)" }}>
                {" "}
                výsledku a klidu v domě.
              </em>
            </h2>
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-1.5 font-semibold text-primary transition-all hover:gap-2.5"
          >
            Domluvit bezplatnou kontrolu <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card-soft group overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--forest-light)" }}
                >
                  {service.tag}
                </span>
                <h3 className="mt-2 text-2xl">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{service.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      number: "01",
      title: "Bezplatná kontrola a úvodní posouzení",
      body: "Domluvíme si termín, podíváme se na typ objektu a zhodnotíme, co bude potřeba řešit.",
      icon: Search,
    },
    {
      number: "02",
      title: "Návrh postupu a orientační nacenění",
      body: "Vysvětlíme vám rozsah prací, způsob provedení a co ovlivňuje cenu.",
      icon: ClipboardCheck,
    },
    {
      number: "03",
      title: "Čištění bez vstupu do bytů",
      body: "Práce probíhá ze střechy nebo ze společných prostor, aby byl zásah do běžného provozu domu co nejmenší.",
      icon: SprayCan,
    },
    {
      number: "04",
      title: "Předání dokumentace",
      body: "Po dokončení dostanete fotodokumentaci, protokol a doporučení další údržby.",
      icon: FileText,
    },
  ];

  return (
    <section id="proces" className="bg-secondary py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Jak to probíhá</span>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            Od první kontroly k předání
            <em className="not-italic" style={{ color: "var(--forest)" }}>
              {" "}
              jasného výstupu.
            </em>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="card-soft relative p-7 transition hover:-translate-y-1"
            >
              <div className="absolute right-6 top-5 font-display text-5xl text-foreground/5">
                {step.number}
              </div>
              <step.icon className="h-8 w-8 text-primary" strokeWidth={1.6} />
              <h3 className="mt-5 text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Documentation() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="card-soft mx-auto max-w-md p-7">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div
                className="grid h-10 w-10 place-items-center rounded-lg"
                style={{ background: "var(--gradient-leaf)" }}
              >
                <FileText className="h-5 w-5 text-cream" />
              </div>
              <div>
                <div className="font-display text-lg">Předání po dokončení</div>
                <div className="text-xs text-muted-foreground">
                  Přehledný výstup pro výbor nebo správce
                </div>
              </div>
            </div>
            <dl className="mt-5 space-y-3 text-sm">
              {[
                ["Výstup 1", "Fotodokumentace po dokončení"],
                ["Výstup 2", "Protokol o provedených pracích"],
                ["Výstup 3", "Doporučení další údržby"],
                ["Účel", "Podklad pro správu domu"],
                ["Forma", "Srozumitelně předané informace"],
              ].map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4 py-1">
                  <dt className="text-muted-foreground">{key}</dt>
                  <dd className="text-right font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">Co dostane výbor nebo správce po práci</span>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            Po práci nezůstává jen vyčištěná šachta,
            <em className="not-italic" style={{ color: "var(--forest)" }}>
              {" "}
              ale i podklad pro další správu domu.
            </em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Nejde jen o samotné vyčištění. Důležité je i to, co po práci zůstane v ruce výboru nebo
            správci. Po dokončení předáváme fotodokumentaci, protokol o provedených pracích a
            doporučení pro další údržbu. Díky tomu máte přehled o tom, co se provedlo, v jakém stavu
            šachty byly a jak dál plánovat servis.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "fotodokumentace po dokončení",
              "protokol o provedených pracích",
              "doporučení další údržby",
              "srozumitelný výstup pro výbor nebo správce",
            ].map((text) => (
              <li key={text} className="flex items-start gap-3">
                <span
                  className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full"
                  style={{ background: "var(--gradient-leaf)" }}
                >
                  <Check className="h-3 w-3 text-cream" strokeWidth={3} />
                </span>
                <span className="text-foreground/85">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function WhoWeHelp() {
  const items = [
    {
      icon: Users,
      title: "SVJ",
      body: "Potřebujete mít jasný přehled o stavu šachet, podklady pro výbor a dokumentaci po provedení prací.",
    },
    {
      icon: Home,
      title: "Bytová družstva",
      body: "Řešíte více bytových jednotek najednou a potřebujete spolehlivý postup bez zbytečných komplikací pro obyvatele.",
    },
    {
      icon: Wrench,
      title: "Správci nemovitostí",
      body: "Hledáte partnera, který komunikuje věcně, dodrží domluvený termín a po práci předá vše potřebné pro vaše klienty.",
    },
    {
      icon: MapPin,
      title: "Kde působíme",
      body: `Působíme v Břeclavi a okolí. Nejčastěji obsluhujeme ${towns.join(", ")}.`,
    },
  ];

  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Komu pomáháme</span>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            Služba navržená pro
            <em className="not-italic" style={{ color: "var(--forest)" }}>
              {" "}
              SVJ, BD a správce.
            </em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Naše služba je určena hlavně pro panelové a bytové domy, kde se v odvětrávacích šachtách
            postupně usazuje prach, mastnota, nečistoty a další nánosy. Nejčastěji pracujeme pro
            SVJ, bytová družstva a správce nemovitostí, kteří potřebují mít stav šachet pod
            kontrolou, vyřešit stížnosti obyvatel a mít po práci vše řádně doložené.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="card-soft p-7 transition hover:-translate-y-1">
              <div
                className="grid h-11 w-11 place-items-center rounded-xl"
                style={{ background: "color-mix(in oklab, var(--forest) 12%, transparent)" }}
              >
                <item.icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const pairs = [
    { place: "Ukázka 1", note: "místo pro reálné foto před a po" },
    { place: "Ukázka 2", note: "místo pro reálné foto před a po" },
    { place: "Ukázka 3", note: "místo pro reálné foto před a po" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Před a po</span>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            Místo pro
            <em className="not-italic" style={{ color: "var(--forest)" }}>
              {" "}
              vizuální důkaz výsledku.
            </em>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Největší váhu má u této služby reálný výsledek. Sem doporučujeme doplnit skutečné
            fotografie před a po čištění z konkrétních zakázek.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pairs.map((pair) => (
            <div key={pair.place} className="card-soft overflow-hidden">
              <div className="grid grid-cols-2 gap-0.5 bg-border">
                <Placeholder label="Před" tone="grim" />
                <Placeholder label="Po" tone="clean" />
              </div>
              <div className="p-5">
                <div className="font-display text-lg">{pair.place}</div>
                <div className="text-sm text-muted-foreground">{pair.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Placeholder({ label, tone }: { label: string; tone: "grim" | "clean" }) {
  const background =
    tone === "grim"
      ? "linear-gradient(135deg, #2a2118 0%, #4a3a2a 50%, #1a140e 100%)"
      : "linear-gradient(135deg, #d8d0c2 0%, #f6f0e6 50%, #e8e0d2 100%)";
  const color = tone === "grim" ? "#f6f0e6" : "#0f2b1f";

  return (
    <div className="relative aspect-[4/5]" style={{ background }}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            tone === "grim"
              ? "radial-gradient(circle at 30% 40%, rgba(0,0,0,0.6), transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.5), transparent 50%)"
              : "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6), transparent 60%)",
        }}
      />
      <span
        className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-widest"
        style={{ background: color, color: tone === "grim" ? "#0f2b1f" : "#f6f0e6" }}
      >
        {label}
      </span>
    </div>
  );
}

function PricingFactors() {
  const factors = [
    {
      title: "Rozsah objektu",
      body: "Cenu ovlivňuje počet šachet v objektu, velikost domu a výška budovy.",
      image: cisteni,
    },
    {
      title: "Technické podmínky",
      body: "Důležitý je konkrétní technický stav domu, míra zanesení šachet a rozsah potřebné dokumentace.",
      image: kamera,
    },
  ];

  return (
    <section id="cenik" className="bg-secondary py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Co ovlivňuje cenu</span>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            Přesnou cenu určíme podle
            <em className="not-italic" style={{ color: "var(--forest)" }}>
              {" "}
              konkrétního domu.
            </em>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Přesnou cenu nelze určit bez znalosti konkrétního domu. Každý objekt má jiný počet
            šachet, jinou výšku, jiné technické řešení i jiný stupeň zanesení. Přesto vám už při
            první kontrole dokážeme vysvětlit, co bude mít na rozpočet největší vliv.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {factors.map((factor) => (
            <div key={factor.title} className="card-soft overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={factor.image} alt={factor.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl">{factor.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{factor.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Neprodáváme zbytečně širší rozsah, než dům skutečně potřebuje. Cílem je navrhnout rozumné
          řešení podle stavu šachet a potřeb domu nebo správce.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Nechali jsme si vyčistit odvětrávací šachty včetně dezinfekce a byli jsme spokojeni. Vše proběhlo rychle, bez problémů a podle domluvy. Určitě můžeme doporučit",
      author: "Vlastimil Bartaušic",
      role: "Předseda SVJ sídl. Dukelských hrdinů 22,23, Břeclav",
    },
    {
      quote:
        "Zdravím pane Tučku i Vašeho kolegu, chtěla bych Vám poděkovat touto cestou za Vaši profesionální a perfektně odvedenou práci v našem bytovém domě, kde jste provedli dezinfekci a odmaštění větracích šachet a tím jste také přispěli ke zkvalitnění bydlení uživatelům jednotlivých bytů. Věřím, že se postupně přidají i další bytové domy a využijí Vašich kvalitních a hlavně potřebných služeb.",
      author: "Marie Tomková",
      role: "Předseda SVJ Slovácká 2710/2, Břeclav",
    },
    {
      quote:
        "Jde vidět, že čištění moc pomohlo a šachty jsou v daleko lepším stavu než před čištěním. Určitě Vaši firmu doporučím dalším předsedům! Moc děkuji za výborně odvedenou práci a perfektní jednání! Videa jsou super dokumentace.",
      author: "Petr Jahoda",
      role: "Předseda SVJ Pražská 8, Znojmo",
    },
  ];

  return (
    <section id="reference" className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Reference</span>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            Jak má služba působit na výbor,
            <em className="not-italic" style={{ color: "var(--forest)" }}>
              {" "}
              takto by měly vypadat i reference.
            </em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Největší váhu má u této služby výsledek a zkušenost lidí, kteří řeší stejný typ domu
            jako vy. Do této sekce doporučujeme doplnit reálné reference od SVJ, bytových družstev
            nebo správců, ideálně se jménem domu nebo lokality.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <figure key={item.quote} className="card-soft flex flex-col p-7">
              <Quote className="h-7 w-7 text-primary/30" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/85">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="font-display text-lg">{item.author}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      question: "Jak probíhá čištění šachet?",
      answer:
        "Nejprve provedeme kontrolu stavu, navrhneme postup a po odsouhlasení zakázky provedeme čištění. Práce probíhá tak, aby byl zásah do provozu domu co nejmenší. Po dokončení předáváme dokumentaci a doporučení další údržby.",
    },
    {
      question: "Musíte vstupovat do bytů?",
      answer:
        "Ve většině případů ne. Pracujeme ze střechy nebo ze společných prostor, takže není nutné organizovat vstupy do jednotlivých bytů.",
    },
    {
      question: "Co dostaneme po dokončení?",
      answer:
        "Fotodokumentaci, protokol o provedených pracích a doporučení další údržby podle skutečného stavu šachet.",
    },
    {
      question: "Pro koho je služba určena?",
      answer:
        "Nejčastěji pro SVJ, bytová družstva a správce nemovitostí, kteří řeší bytové nebo panelové domy s centrálním odvětráním.",
    },
    {
      question: "Co ovlivňuje cenu?",
      answer:
        "Cenu ovlivňuje hlavně počet šachet, velikost a výška objektu, míra zanesení a rozsah požadované dokumentace. Přesnou cenu potvrdíme po úvodním posouzení konkrétního domu.",
    },
  ];

  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">Časté dotazy</span>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            Odpovědi na otázky,
            <em className="not-italic" style={{ color: "var(--forest)" }}>
              {" "}
              které přicházejí nejčastěji.
            </em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Nenašli jste odpověď? Ozvěte se nám a projdeme další postup podle konkrétního domu.
          </p>
        </div>
        <div className="divide-y divide-border">
          {items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="pr-6 font-display text-lg">{item.question}</span>
                <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-border transition group-open:border-primary group-open:bg-primary group-open:text-cream">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const phoneReady = hasValue(company.phoneDisplay) && company.phoneHref;
  const emailReady = hasValue(company.email);
  const contactItems = [
    hasValue(company.phoneDisplay)
      ? {
          icon: Phone,
          value: company.phoneDisplay,
          note: "Telefon",
          href: phoneReady ? company.phoneHref : undefined,
        }
      : null,
    hasValue(company.email)
      ? {
          icon: Mail,
          value: getEmailLabel(),
          note: "E-mail",
          href: emailReady ? `mailto:${company.email}` : undefined,
        }
      : null,
    hasValue(company.address)
      ? {
          icon: MapPin,
          value: company.address,
          note: "Sídlo a působnost",
        }
      : null,
    hasValue(company.availability)
      ? {
          icon: Clock,
          value: company.availability,
          note: "Dostupnost",
        }
      : null,
  ].filter(Boolean) as Array<{
    icon: typeof Phone;
    value: string;
    note: string;
    href?: string;
  }>;

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden py-20 text-cream md:py-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-x relative grid items-start gap-14 lg:grid-cols-2">
        <div>
          <span className="eyebrow" style={{ color: "var(--forest-light)" }}>
            Bezplatná kontrola
          </span>
          <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">
            Chcete zjistit stav šachet
            <br />
            <em className="not-italic" style={{ color: "var(--forest-light)" }}>
              ve vašem domě?
            </em>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/75">
            Potřebujete zjistit stav šachet ve vašem domě, probrat další postup nebo si domluvit
            bezplatnou kontrolu? Ozvěte se nám. Rádi s vámi projdeme situaci a navrhneme další krok
            podle konkrétního objektu.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/68">
            Na poptávky odpovídáme co nejdříve. Pokud řešíte bytový dům nebo více objektů najednou,
            napište do zprávy i lokalitu a základní typ objektu, abychom vám mohli dát co
            nejpřesnější odpověď.
          </p>
          {contactItems.length ? (
            <div className="mt-8 max-w-md divide-y divide-cream/10 overflow-hidden rounded-2xl border border-cream/12 bg-cream/[0.06]">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-cream/10">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[11px] font-medium uppercase tracking-wide text-cream/50">
                        {item.note}
                      </div>
                      <div className="text-[15px] font-medium leading-snug">{item.value}</div>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={`${item.note}-${item.value}`}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 transition hover:bg-cream/[0.06]"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={`${item.note}-${item.value}`}
                    className="flex items-center gap-3 px-4 py-3"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-cream/12 bg-cream/6 p-5 text-sm leading-relaxed text-cream/72">
              Veřejné kontaktní údaje doplníme při spuštění webu. Pro první sběr podkladů je
              připravený formulář níže.
            </div>
          )}
        </div>

        <form
          className="card-soft p-7 text-foreground md:p-9"
          onSubmit={(event) => event.preventDefault()}
        >
          <h3 className="text-2xl">Poptávka bezplatné kontroly</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Do zprávy nám napište alespoň město, typ objektu a to, co potřebujete řešit.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Jméno a příjmení" placeholder="Jméno Příjmení" />
            <Field label="Telefon" type="tel" placeholder="+420 ..." />
            <Field label="E-mail" type="email" placeholder="vas@email.cz" />
            <Field label="Město / lokalita" placeholder="Břeclav" />
            <Field label="Typ objektu" placeholder="SVJ / BD / správce" />
            <Field label="Adresa domu" placeholder="Ulice, číslo domu" className="sm:col-span-2" />
          </div>
          <label className="mt-4 block">
            <span className="text-sm font-medium">Popis situace</span>
            <textarea
              rows={3}
              placeholder="Pokud víte i počet šachet nebo stručný popis stavu, pomůže nám to navrhnout další postup rychleji."
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring"
            />
          </label>
          <button className="btn-primary mt-6 w-full">
            Poslat poptávku <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Domluvte si bezplatnou kontrolu a zjistěte, v jakém stavu jsou šachty ve vašem domě.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}
