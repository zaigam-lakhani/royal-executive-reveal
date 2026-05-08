import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Ruler, Tag, Building2, Calendar, FileText, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PropertyGallery } from "@/components/PropertyGallery";
import { useI18n } from "@/i18n/I18nProvider";

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

interface Property {
  id: string;
  title: string;
  subtitle?: string;
  location: string;
  description: string;
  features: string[];
  pricing: string[];
  notes?: string[];
  area?: string;
}

const PROPERTIES: Property[] = [
  {
    id: "sahaza-i",
    title: "SAHAZA I — Votre avenir commence ici !",
    location: "Ambatolampy Tsimahafotsy",
    description: "Premium residential plots in a strategic and peaceful area near SITE EXPO SADC ENARA, LAC IARIVO, and a luxury hotel project under development.",
    area: "260 m² to 365 m²",
    features: [
      "18 plots available",
      "Secured fenced site",
      "Ready to build",
      "Residential developing area",
      "Ideal for families",
    ],
    pricing: [
      "220,000 Ar/m² — cash payment",
      "240,000 Ar/m² — installment option",
      "Flexible payment with title available",
      "Turnkey construction projects available",
    ],
    notes: ["Visit fee: 20,000 Ar", "Net price by Aryah Promotion"],
  },
  {
    id: "sahaza-ii",
    title: "SAHAZA II — Devenez Propriétaire à Sabotsy Namehana",
    location: "Sabotsy Namehana, Antsahamarafoza — Near Tranombitsika, North of Antananarivo",
    description: "Residential land in peaceful green surroundings, only 30 minutes from Sabotsy Namehana with panoramic views of Antananarivo.",
    area: "300 m² to 472 m²",
    features: [
      "Ready-to-build plots",
      "Residential secured area",
      "Panoramic view of Antananarivo",
      "30 minutes from Sabotsy Namehana",
    ],
    pricing: [
      "Lots 1–12 : 85,000 Ar/m²",
      "Lots 13–24 : 80,000 Ar/m²",
      "Lots 25–29 : 75,000 Ar/m²",
    ],
    notes: ["Visit fee: 20,000 Ar", "Fast-selling plots"],
  },
  {
    id: "ilo-manana",
    title: "AMBOHIMARINA — ILO MANANA",
    location: "Ambohimarina, Ambatolampy Tsimahafotsy — Near Lake Iarivo & Ivato International Airport",
    description: "Premium titled and surveyed land with direct lake access. Ideal for tourism, hospitality and lake-side hotel investments.",
    area: "56,107 sqm (22,000 sqm entrance area + 34,107 sqm uphill with lake access)",
    features: [
      "Truck access",
      "Elevated natural environment",
      "Eucalyptus trees & banana plantation",
      "Electricity installed — high-voltage access nearby",
      "Ideal for tourism, hotels & resorts, hospitality investments, lake activities",
    ],
    pricing: [
      "350,000 Ar/sqm — Total: 19,637,450,000 Ar",
      "€70/sqm — Total: €3,927,490",
    ],
  },
  {
    id: "andohagara",
    title: "ANDOHAGARA — Airport Amborovy (Mahajanga)",
    location: "Andohagara Andrehitra, Antsanitia Road, Mahajanga Province",
    description: "Strategic investment land located near Amborovy Airport with high commercial potential.",
    area: "9,200 sqm (≈ 2.5 acres)",
    features: [
      "Flat land 100% — Ready to build",
      "Secured land",
      "Strategic airport expansion zone — dual access",
      "5 minutes from airport",
      "15 minutes from Antsanitia Beach",
      "Near University of Ambondrona",
    ],
    pricing: [
      "€12/sqm — Total: €110,400",
      "60,000 Ar/sqm — Total: 552,000,000 Ariary",
    ],
  },
  {
    id: "sainte-marie-seafront",
    title: "AMPANIHY — Sea Front Land, Sainte-Marie Island",
    subtitle: "Nosy Boraha — Whale sanctuary · Tourism paradise · Historical pirate island",
    location: "Sainte-Marie Island (Nosy Boraha), Madagascar",
    description: "Large secured beachfront investment property near Saint Mary Club Hotel — exclusive eco-tourism opportunity.",
    area: "645,944 sqm (65 hectares)",
    features: [
      "Direct sea access",
      "Tourism development opportunity",
      "Premium island location",
      "Adjacent to existing hospitality infrastructure",
    ],
    pricing: ["Contact Project Manager for pricing"],
  },
  {
    id: "saint-mary-club",
    title: "Saint Mary Club — Hotel 3 Stars",
    subtitle: "Turnkey hospitality investment on Sainte-Marie Island",
    location: "Sainte-Marie Island (Nosy Boraha)",
    description: "Operational 3-star resort offering with extensive grounds, beachfront and full ownership transfer permit.",
    area: "21 hectares",
    features: [
      "15 soundproof bungalows",
      "16 rooms",
      "Large restaurant & swimming pool",
      "VIP massage room",
      "5 km of beach",
      "Ownership transfer permit",
      "Adjacent protected area",
    ],
    pricing: ["Contact Project Manager for pricing"],
  },
  {
    id: "manompagna",
    title: "Large Lands for Sale — Manompagna",
    location: "Manompagna, Madagascar",
    description: "Strategic large-scale land investment opportunities in Madagascar.",
    area: "Detailed information coming soon",
    features: ["Large-scale investment land", "Strategic Madagascar location"],
    pricing: ["Detailed information coming soon."],
  },
];

function RealEstatePage() {
  const { t } = useI18n();
  return (
    <section className="relative pt-40 pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-luxury text-gold">Synaps Real Estate</span>
            <h1 className="mt-6 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">
              Premium Investment Properties in Madagascar
            </h1>
            <p className="mt-6 text-lg text-ivory/75">
              A curated portfolio of titled residential plots, beachfront tourism land and turnkey hospitality assets — across the highlands, Mahajanga and Sainte-Marie Island.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
                style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
                {t("cta.contact")} <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#properties" className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-7 py-3.5 text-xs font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                Explore Properties
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
                    <span className="text-[10px] uppercase tracking-luxury text-gold">Property · {String(i + 1).padStart(2, "0")}</span>
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
                        <Calendar className="h-3.5 w-3.5" /> Schedule Visit
                      </Link>
                      <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                        <FileText className="h-3.5 w-3.5" /> Request Documents
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-3 space-y-6">
                    <PropertyGallery placeholderCount={6} label={p.title} />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-background/40 p-5">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-luxury text-gold"><Building2 className="h-3.5 w-3.5" /> Features</div>
                        <ul className="mt-3 space-y-2 text-sm text-ivory/85">
                          {p.features.map((f) => <li key={f} className="leading-snug">— {f}</li>)}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-background/40 p-5">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-luxury text-gold"><Tag className="h-3.5 w-3.5" /> Pricing</div>
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
            <h3 className="font-serif text-3xl text-ivory">Considering a property?</h3>
            <p className="mx-auto mt-4 max-w-xl text-sm text-ivory/70">
              Our project managers handle visits, documentation and full transaction support — in English, French, Arabic, Italian and Mandarin.
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
