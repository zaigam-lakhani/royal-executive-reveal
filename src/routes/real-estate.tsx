import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Ruler, Tag, Building2, Calendar, FileText, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PropertyGallery } from "@/components/PropertyGallery";
import { useI18n, propertiesByLang } from "@/i18n/I18nProvider";
import sahaza1 from "@/assets/sahaza-i/01.jpg";
import sahaza2 from "@/assets/sahaza-i/02.jpg";
import sahaza3 from "@/assets/sahaza-i/03.jpg";
import sahaza4 from "@/assets/sahaza-i/04.jpg";
import sahaza5 from "@/assets/sahaza-i/05.jpg";
import sahaza6 from "@/assets/sahaza-i/06.jpg";
import sahaza7 from "@/assets/sahaza-i/07.jpg";
import sahaza8 from "@/assets/sahaza-i/08.jpg";
import sahaza9 from "@/assets/sahaza-i/09.jpg";
import sahaza10 from "@/assets/sahaza-i/10.jpg";
import sahaza11 from "@/assets/sahaza-i/11.jpg";
import sahazaii1 from "@/assets/sahaza-ii/01.jpg";
import sahazaii2 from "@/assets/sahaza-ii/02.jpg";
import sahazaii3 from "@/assets/sahaza-ii/03.jpg";
import sahazaii4 from "@/assets/sahaza-ii/04.jpg";
import sahazaii5 from "@/assets/sahaza-ii/05.jpg";
import sahazaii6 from "@/assets/sahaza-ii/06.jpg";
import sahazaii7 from "@/assets/sahaza-ii/07.jpg";
import sahazaii8 from "@/assets/sahaza-ii/08.jpg";
import sahazaii9 from "@/assets/sahaza-ii/09.jpg";
import sahazaiiMap from "@/assets/sahaza-ii/10-map.jpg";

const SAHAZA_II_IMAGES = [
  { src: sahazaii2, alt: "SAHAZA II — Plotted parcels with cleared access roads, Sabotsy Namehana" },
  { src: sahazaii6, alt: "SAHAZA II — Panoramic plots under open sky" },
  { src: sahazaii1, alt: "SAHAZA II — Hilltop view over Sabotsy Namehana" },
  { src: sahazaii3, alt: "SAHAZA II — Lush green parcels and surrounding hills" },
  { src: sahazaii5, alt: "SAHAZA II — Marked plots ready for construction" },
  { src: sahazaii7, alt: "SAHAZA II — Subdivided land with prepared roads" },
  { src: sahazaii9, alt: "SAHAZA II — Wide open buildable land" },
  { src: sahazaii4, alt: "SAHAZA II — Site perimeter and access path" },
  { src: sahazaii8, alt: "SAHAZA II — Pine-lined plots with secured boundary" },
  { src: sahazaiiMap, alt: "SAHAZA II — Aerial location map, Antsahamaharafoza" },
];

const SAHAZA_I_IMAGES = [
  { src: sahaza10, alt: "SAHAZA I — Plotted parcels, Ambatolampy Tsimahafotsy" },
  { src: sahaza2, alt: "SAHAZA I — Panoramic view, Ambatolampy Tsimahafotsy" },
  { src: sahaza9, alt: "SAHAZA I — Become an owner today" },
  { src: sahaza1, alt: "SAHAZA I — Secured access road" },
  { src: sahaza3, alt: "SAHAZA I — Open green parcels" },
  { src: sahaza4, alt: "SAHAZA I — Lifestyle at sunset" },
  { src: sahaza5, alt: "SAHAZA I — Brick-walled site entrance" },
  { src: sahaza6, alt: "SAHAZA I — Spacious land plots" },
  { src: sahaza7, alt: "SAHAZA I — Buildable plot ready for construction" },
  { src: sahaza8, alt: "SAHAZA I — Site perimeter wall" },
  { src: sahaza11, alt: "SAHAZA I — Marked plots with mountain horizon" },
];

export const Route = createFileRoute("/real-estate")({
  head: () => ({
    meta: [
      { title: "Synaps Real Estate — Premium Properties in Madagascar" },
      { name: "description", content: "Premium residential, hospitality and investment land across Madagascar — Sahaza, Ambohimarina, Mahajanga and Sainte-Marie Island." },
      { property: "og:title", content: "Synaps Real Estate" },
      { property: "og:description", content: "Luxury investment properties from Madagascar." },
    ],
  }),
  component: RealEstatePage,
});

function RealEstatePage() {
  const { t, lang } = useI18n();
  const PROPERTIES = propertiesByLang[lang];

  return (
    <section className="relative pt-40 pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-luxury text-gold">{t("re.eyebrow")}</span>
            <h1 className="mt-6 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">
              {t("re.title")}
            </h1>
            <p className="mt-6 text-lg text-ivory/75">{t("re.subtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
                style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
                {t("cta.contact")} <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#properties" className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-7 py-3.5 text-xs font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                {t("re.explore")}
              </a>
            </div>
          </div>
        </Reveal>

        <div id="properties" className="mt-24 space-y-16">
          {PROPERTIES.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <article id={p.id} className="glass-card scroll-mt-32 rounded-3xl p-8 sm:p-12">
                <div className="grid gap-10 lg:grid-cols-5">
                  <div className="lg:col-span-2 space-y-5">
                    <span className="text-[10px] uppercase tracking-luxury text-gold">{t("re.property")} · {String(i + 1).padStart(2, "0")}</span>
                    <h2 className="font-serif text-2xl text-ivory sm:text-3xl">{p.title}</h2>
                    {p.subtitle && <p className="text-sm text-gold/90">{p.subtitle}</p>}
                    <div className="gold-divider opacity-50" />
                    <ul className="space-y-3 text-sm text-ivory/85">
                      <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {p.location}</li>
                      {p.area && <li className="flex items-start gap-3"><Ruler className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {p.area}</li>}
                    </ul>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
                        style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
                        {t("cta.contact")}
                      </Link>
                      <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                        <Calendar className="h-3.5 w-3.5" /> {t("re.scheduleVisit")}
                      </Link>
                      <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                        <FileText className="h-3.5 w-3.5" /> {t("re.requestDocs")}
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-3 space-y-6">
                    <PropertyGallery
                      placeholderCount={6}
                      label={p.title}
                      images={p.id === "sahaza-i" ? SAHAZA_I_IMAGES : p.id === "sahaza-ii" ? SAHAZA_II_IMAGES : []}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-background/40 p-5">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-luxury text-gold"><Building2 className="h-3.5 w-3.5" /> {t("re.features")}</div>
                        <ul className="mt-3 space-y-2 text-sm text-ivory/85">
                          {p.features.map((f) => <li key={f} className="leading-snug">— {f}</li>)}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-background/40 p-5">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-luxury text-gold"><Tag className="h-3.5 w-3.5" /> {t("re.pricing")}</div>
                        <ul className="mt-3 space-y-2 text-sm text-ivory/85">
                          {p.pricing.map((pr) => <li key={pr} className="leading-snug">— {pr}</li>)}
                        </ul>
                        {p.notes && (
                          <div className="mt-4 border-t border-[color-mix(in_oklab,var(--gold)_15%,transparent)] pt-3 text-[11px] text-ivory/60">
                            {p.notes.map((n) => <div key={n}>· {n}</div>)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 glass-card rounded-3xl p-10 text-center sm:p-14">
            <h3 className="font-serif text-3xl text-ivory">{t("re.cta.title")}</h3>
            <p className="mx-auto mt-4 max-w-xl text-sm text-ivory/70">
              {t("re.cta.text")}
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full px-9 py-4 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-1"
              style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
              {t("cta.contact")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
