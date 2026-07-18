import { createFileRoute } from "@tanstack/react-router";

import { Accent, CTASection, PageHero, SiteShell } from "@/components/site-shell";
import { company } from "@/content/site";

function hasValue(value: string) {
  return value.trim().length > 0 && !value.includes("[DOPLŇTE");
}

export const Route = createFileRoute("/ochrana-soukromi")({
  head: () => ({
    meta: [{ title: "Ochrana soukromí | Čisté šachty" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Ochrana soukromí"
        title={
          <>
            Zásady ochrany
            <Accent dark> soukromí.</Accent>
          </>
        }
        description="Tato stránka je připravena jako místo pro finální zásady ochrany osobních údajů. Před spuštěním webu je potřeba doplnit právně schválené znění."
      />
      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl space-y-6">
          <div className="card-soft p-8 leading-relaxed text-muted-foreground md:p-10">
            <h2 className="mb-4 font-display text-xl text-foreground">Správce osobních údajů</h2>
            <ul className="space-y-1">
              <li>
                {company.name} — {company.owner}
              </li>
              {hasValue(company.ico) ? <li>IČO: {company.ico}</li> : null}
              {hasValue(company.address) ? <li>{company.address}</li> : null}
              {hasValue(company.email) ? (
                <li>
                  E-mail:{" "}
                  <a className="underline" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </li>
              ) : null}
              {hasValue(company.phoneDisplay) ? (
                <li>
                  Telefon:{" "}
                  <a className="underline" href={company.phoneHref}>
                    {company.phoneDisplay}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
          <div className="card-soft p-8 leading-relaxed text-muted-foreground md:p-10">
            Finální text zásad ochrany soukromí musí být doplněn podle skutečného způsobu zpracování
            osobních údajů, kontaktních formulářů a používaných služeb na webu.
          </div>
        </div>
      </section>
      <CTASection
        title={
          <>
            Máte dotaz k nakládání
            <Accent dark> s vašimi údaji?</Accent>
          </>
        }
        body="Napište nám a rádi vám vše vysvětlíme."
        primary={{ label: "Kontakt", to: "/kontakt" }}
      />
    </SiteShell>
  );
}
