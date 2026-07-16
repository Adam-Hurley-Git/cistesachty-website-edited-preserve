import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import { homeFaq, towns } from "@/content/site";
import { Accent, ContactPanel, FaqSection, SectionIntro, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt | Čisté šachty Hodonín" },
      {
        name: "description",
        content:
          "Kontaktujte Čisté šachty. Bezplatná kontrola odvětrávacích šachet pro SVJ, bytová družstva a správce nemovitostí v Hodoníně a okolí.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <ContactPanel standalone />

      {/* Region */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionIntro
            eyebrow="Kde působíme"
            title={
              <>
                Hodonín a okolí —<Accent> přijedeme za vámi.</Accent>
              </>
            }
            body="Nejčastěji obsluhujeme tato města a jejich okolí. Pokud vaše lokalita v seznamu není, napište nám i tak — rádi se domluvíme."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {towns.map((town) => (
              <span
                key={town}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-[var(--shadow-soft)]"
              >
                <MapPin className="h-4 w-4 text-primary" strokeWidth={1.8} />
                {town}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        title={
          <>
            Než napíšete —<Accent> odpovědi na časté dotazy.</Accent>
          </>
        }
        body="Pokud odpověď nenajdete, napište nám do formuláře výše a ozveme se vám co nejdříve."
        items={homeFaq}
      />
    </SiteShell>
  );
}
