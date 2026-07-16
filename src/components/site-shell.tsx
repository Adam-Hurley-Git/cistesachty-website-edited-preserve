import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Mail, MapPin, Menu, Phone } from "lucide-react";

import logo from "@/assets/extracted/logo.svg";
import { company, navItems } from "@/content/site";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function isPlaceholder(value: string) {
  return value.includes("[DOPLŇTE");
}

function hasValue(value: string) {
  return value.trim().length > 0 && !isPlaceholder(value);
}

/**
 * Green headline accent — identical to the homepage pattern:
 * `<em class="not-italic" style="color: var(--forest)">`.
 * Use `dark` on dark backgrounds (hero, contact) for the lighter green.
 */
export function Accent({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <em className="not-italic" style={{ color: dark ? "var(--forest-light)" : "var(--forest)" }}>
      {children}
    </em>
  );
}

/* ------------------------------------------------------------------ */
/*  Shell                                                              */
/* ------------------------------------------------------------------ */

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header — homepage nav, shared everywhere                           */
/* ------------------------------------------------------------------ */

export function SiteHeader() {
  const phoneReady = hasValue(company.phoneDisplay) && company.phoneHref;

  return (
    <header className="absolute left-0 right-0 top-0 z-40">
      <div className="container-x relative flex items-center justify-between pt-6">
        <Link to="/" className="flex shrink-0 items-center">
          <span className="rounded-xl bg-cream/95 p-2 shadow-lg shadow-black/20 backdrop-blur-sm">
            <img src={logo} alt="Čisté šachty — logo" className="h-8 w-auto" />
          </span>
        </Link>

        <nav className="hidden items-center gap-5 whitespace-nowrap text-sm text-cream/80 lg:flex lg:gap-6 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition hover:text-cream"
              activeProps={{ className: "text-cream" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {phoneReady ? (
          <a
            href={company.phoneHref}
            className="hidden shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-cream sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> {company.phoneDisplay}
          </a>
        ) : (
          <Link
            to="/"
            hash="kontakt"
            className="hidden shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-cream sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> Domluvit kontrolu
          </Link>
        )}

        {/* Mobile menu */}
        <details className="group lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-cream/25 text-cream backdrop-blur-sm">
            <Menu className="h-5 w-5" />
          </summary>
          <div className="absolute right-5 top-full z-50 mt-3 w-64 rounded-3xl border border-border bg-card p-4 shadow-2xl">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl px-4 py-3 text-sm text-foreground transition hover:bg-secondary"
                  activeProps={{ className: "bg-secondary text-primary" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Page hero — dark gradient hero with glass proof cards              */
/* ------------------------------------------------------------------ */

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  primaryCta,
  secondaryCta,
  badges,
  imageFit = "cover",
  imageAspect,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image?: string;
  imageAlt?: string;
  primaryCta?: { label: string; to: string; hash?: string };
  secondaryCta?: { label: string; to: string; hash?: string };
  badges?: Array<{ icon: LucideIcon; title: string; body: string }>;
  imageFit?: "cover" | "contain";
  /** CSS aspect-ratio string (e.g. "1200 / 1543") matching the source photo, used with imageFit="contain". */
  imageAspect?: string;
}) {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-32 text-cream md:pb-24 md:pt-40"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className={`container-x relative ${image ? "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]" : ""}`}
      >
        <div className={image ? "" : "mx-auto max-w-3xl text-center"}>
          <span className="eyebrow text-forest-light">{eyebrow}</span>
          <h1 className="mt-5 text-4xl leading-[1.04] text-cream md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p
            className={`mt-7 text-lg leading-relaxed text-cream/78 ${image ? "max-w-2xl" : "mx-auto max-w-2xl"}`}
          >
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className={`mt-9 flex flex-wrap gap-3 ${image ? "" : "justify-center"}`}>
              {primaryCta ? (
                <Link to={primaryCta.to} hash={primaryCta.hash} className="btn-primary">
                  {primaryCta.label} <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link to={secondaryCta.to} hash={secondaryCta.hash} className="btn-ghost">
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
          {badges?.length ? (
            <div
              className={`mt-12 grid gap-3 sm:grid-cols-3 ${image ? "max-w-xl" : "mx-auto max-w-3xl text-left"}`}
            >
              {badges.map((badge) => (
                <div
                  key={badge.title}
                  className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-md"
                >
                  <badge.icon className="h-5 w-5 text-forest-light" strokeWidth={1.8} />
                  <div className="mt-2 font-display text-base text-cream">{badge.title}</div>
                  <div className="mt-0.5 text-xs leading-snug text-cream/65">{badge.body}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {image && imageFit === "contain" ? (
          // Portrait mode: the frame is sized to the photo's own aspect ratio (via
          // `imageAspect`), so the image fills it exactly with zero cropping and zero
          // letterboxing — no landscape box being forced onto a portrait photo.
          <div className="relative mx-auto hidden w-full max-w-[22rem] lg:block">
            <div
              className="absolute -inset-3 rounded-[2rem] opacity-40 blur-2xl"
              style={{ background: "var(--gradient-leaf)" }}
            />
            <figure
              className="relative overflow-hidden rounded-[2rem] bg-cream p-3 shadow-2xl ring-1 ring-white/10"
              style={{ aspectRatio: imageAspect ?? "4 / 5" }}
            >
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </figure>
          </div>
        ) : image ? (
          <div className="relative hidden lg:block">
            <div
              className="absolute -inset-6 rounded-[2rem] opacity-40 blur-2xl"
              style={{ background: "var(--gradient-leaf)" }}
            />
            <figure className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10">
              <img
                src={image}
                alt={imageAlt}
                className="h-[420px] w-full object-cover xl:h-[500px]"
              />
            </figure>
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section building blocks                                            */
/* ------------------------------------------------------------------ */

export function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-4xl leading-[1.08] md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{body}</p> : null}
    </div>
  );
}

/** Gradient check-bullet list — identical to the homepage documentation list. */
export function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-4">
      {items.map((text) => (
        <li key={text} className="flex items-start gap-3">
          <span
            className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full"
            style={{ background: "var(--gradient-leaf)" }}
          >
            <Check className="h-3 w-3 text-cream" strokeWidth={3} />
          </span>
          <span className={dark ? "text-cream/85" : "text-foreground/85"}>{text}</span>
        </li>
      ))}
    </ul>
  );
}

/** Icon card — the homepage "why" card: icon tile, title, body. */
export function IconCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div className="card-soft p-7 transition hover:-translate-y-1">
      <div
        className="grid h-11 w-11 place-items-center rounded-xl"
        style={{ background: "color-mix(in oklab, var(--forest) 12%, transparent)" }}
      >
        <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
      </div>
      <h3 className="mt-5 text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

/** Numbered step card with the homepage ghost numeral. */
export function StepCard({
  index,
  icon: Icon,
  title,
  body,
}: {
  index: number;
  icon?: LucideIcon;
  title: string;
  body?: string;
}) {
  return (
    <div className="card-soft relative p-7 transition hover:-translate-y-1">
      <div className="absolute right-6 top-5 font-display text-5xl text-foreground/5">
        {String(index).padStart(2, "0")}
      </div>
      {Icon ? <Icon className="h-8 w-8 text-primary" strokeWidth={1.6} /> : null}
      <h3 className={Icon ? "mt-5 text-xl" : "mt-1 text-xl"}>{title}</h3>
      {body ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p> : null}
    </div>
  );
}

/** Image-led card — the homepage services card: photo, tag, title, body. */
export function ImageCard({
  image,
  tag,
  title,
  body,
}: {
  image: string;
  tag?: string;
  title: string;
  body: string;
}) {
  return (
    <article className="card-soft group overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        {tag ? (
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--forest-light)" }}
          >
            {tag}
          </span>
        ) : null}
        <h3 className={tag ? "mt-2 text-2xl" : "text-2xl"}>{title}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </article>
  );
}

/** FAQ block — homepage layout: intro left, expandable list right. */
export function FaqSection({
  eyebrow = "Časté dotazy",
  title,
  body,
  items,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4 text-4xl leading-[1.08] md:text-5xl">{title}</h2>
          {body ? <p className="mt-6 text-lg text-muted-foreground">{body}</p> : null}
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

/* ------------------------------------------------------------------ */
/*  CTA band                                                           */
/* ------------------------------------------------------------------ */

export function CTASection({
  eyebrow = "Další krok",
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body: string;
  primary: { label: string; to: string; hash?: string };
  secondary?: { label: string; to: string; hash?: string };
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-[2rem] px-8 py-12 text-cream shadow-[var(--shadow-deep)] md:px-14 md:py-16"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow text-forest-light">{eyebrow}</span>
              <h2 className="mt-4 text-4xl leading-[1.08] md:text-5xl">{title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-cream/75">{body}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to={primary.to} hash={primary.hash} className="btn-primary">
                {primary.label} <ArrowRight className="h-4 w-4" />
              </Link>
              {secondary ? (
                <Link to={secondary.to} hash={secondary.hash} className="btn-ghost">
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact panel — homepage contact section, reusable                 */
/* ------------------------------------------------------------------ */

export function ContactPanel({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  const phoneReady = hasValue(company.phoneDisplay) && company.phoneHref;
  const emailReady = hasValue(company.email);
  const contactItems = [
    hasValue(company.phoneDisplay)
      ? {
          icon: Phone,
          value: company.phoneDisplay,
          note: "Telefon pro domluvení kontroly",
          href: phoneReady ? company.phoneHref : undefined,
        }
      : null,
    hasValue(company.email)
      ? {
          icon: Mail,
          value: company.email,
          note: "Veřejný kontaktní e-mail",
          href: emailReady ? `mailto:${company.email}` : undefined,
        }
      : null,
    hasValue(company.address)
      ? {
          icon: MapPin,
          value: company.address,
          note: "Adresa / sídlo a oblast působení",
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
      className={`relative overflow-hidden text-cream ${standalone ? "pb-20 pt-32 md:pb-28 md:pt-40" : "py-20 md:py-28"}`}
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
          <Heading className="mt-4 text-4xl leading-[1.05] md:text-5xl">
            Chcete zjistit stav šachet
            <br />
            <Accent dark>ve vašem domě?</Accent>
          </Heading>
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
            <div className="mt-10 space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-cream/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-display text-xl">{item.value}</div>
                      <div className="text-sm text-cream/65">{item.note}</div>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={`${item.note}-${item.value}`}
                    href={item.href}
                    className="flex items-start gap-4 rounded-3xl border border-cream/12 bg-cream/6 p-4 transition hover:bg-cream/10"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={`${item.note}-${item.value}`} className="flex items-start gap-4">
                    {content}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-cream/12 bg-cream/6 p-5 text-sm leading-relaxed text-cream/72">
              Veřejné kontaktní údaje doplníme při spuštění webu. Pro první sběr podkladů je
              připravený formulář vedle.
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
            <Field label="Město / lokalita" placeholder="Hodonín" />
            <Field label="Typ objektu" placeholder="SVJ / BD / správce" />
            <Field label="Název SVJ / správce" placeholder="Název subjektu" />
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
            Kontaktní údaje slouží pouze pro vyřízení poptávky.
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

/* ------------------------------------------------------------------ */
/*  Footer — homepage footer, shared everywhere                        */
/* ------------------------------------------------------------------ */

export function SiteFooter() {
  const footerItems = [
    hasValue(company.phoneDisplay) ? company.phoneDisplay : null,
    hasValue(company.email) ? company.email : null,
    hasValue(company.address) ? company.address : null,
    hasValue(company.ico) ? `IČO ${company.ico}` : null,
  ].filter(Boolean) as string[];

  return (
    <footer className="bg-ink text-cream/70">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <span className="rounded-xl bg-cream/95 p-2 shadow-lg shadow-black/20">
              <img src={logo} alt="Čisté šachty — logo" className="h-7 w-auto" />
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Čisté šachty - místní specialista na čištění odvětrávacích šachet pro bytové domy, SVJ a
            správce nemovitostí v Hodoníně a okolí.
          </p>
        </div>
        <div>
          <div className="mb-4 text-sm font-semibold text-cream">Služby</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/sluzby" className="hover:text-cream">
                Čištění odvětrávacích šachet
              </Link>
            </li>
            <li>
              <Link to="/sluzby" className="hover:text-cream">
                Kontrola kamerou
              </Link>
            </li>
            <li>
              <Link to="/pro-svj" className="hover:text-cream">
                Fotodokumentace a protokol
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="hover:text-cream">
                Doporučení další údržby
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-sm font-semibold text-cream">Kontakt</div>
          {footerItems.length ? (
            <ul className="space-y-2 text-sm">
              {footerItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed">Kontaktní údaje doplníme při spuštění webu.</p>
          )}
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-6 text-xs">
          <div>
            © {new Date().getFullYear()} Čisté šachty · {company.owner}
            {hasValue(company.ico) ? ` · IČO ${company.ico}` : ""}
          </div>
          <div className="flex gap-5">
            <Link to="/ochrana-soukromi" className="hover:text-cream">
              Ochrana soukromí
            </Link>
            <Link to="/cookies" className="hover:text-cream">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
