import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Banknote, Building2, Briefcase, Landmark, Plane, Anchor } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Synaps Group" },
      {
        name: "description",
        content: "Private wealth, executive advisory, real assets, family office and sovereign partnerships.",
      },
      { property: "og:title", content: "Services — Synaps Group" },
      { property: "og:description", content: "A private suite of services for principals, families and institutions." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Banknote,
    title: "Private Capital",
    text: "Discretionary deployment into majority and minority positions across regulated industries.",
    pts: ["Direct equity", "Structured credit", "Co-investment"],
  },
  {
    icon: Briefcase,
    title: "Executive Advisory",
    text: "Counsel to founders and boards on succession, governance and complex transactions.",
    pts: ["M&A advisory", "Succession planning", "Board mandates"],
  },
  {
    icon: Building2,
    title: "Real Assets",
    text: "Trophy real estate, hospitality and infrastructure across European and Gulf gateway cities.",
    pts: ["Prime real estate", "Hospitality", "Infrastructure"],
  },
  {
    icon: Landmark,
    title: "Family Office",
    text: "End-to-end stewardship of family wealth, philanthropy and intergenerational transfer.",
    pts: ["Wealth structuring", "Philanthropy", "Trust services"],
  },
  {
    icon: Plane,
    title: "Sovereign Partnerships",
    text: "Curated alliances with sovereign wealth funds and state-aligned investment vehicles.",
    pts: ["Joint ventures", "Co-investment", "Strategic mandates"],
  },
  {
    icon: Anchor,
    title: "Maritime & Aviation",
    text: "Acquisition, structuring and operation of private maritime and aviation assets.",
    pts: ["Yacht programs", "Private aviation", "Asset structuring"],
  },
];

function ServicesPage() {
  return (
    <section className="relative pt-40 pb-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-luxury text-gold">Our Practice</span>
            <h1 className="mt-6 font-serif text-5xl font-light leading-tight text-ivory sm:text-6xl lg:text-7xl">
              Services rendered with <span className="text-gradient-gold italic">absolute discretion.</span>
            </h1>
            <p className="mt-8 text-lg text-ivory/75">
              A complete suite of services delivered by a single, integrated house — never outsourced,
              never delegated.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 120}>
              <div className="glass-card group relative h-full rounded-2xl p-8">
                <div
                  className="grid h-14 w-14 place-items-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <s.icon className="h-6 w-6" style={{ color: "var(--charcoal)" }} strokeWidth={1.6} />
                </div>
                <h3 className="mt-8 font-serif text-2xl text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <div className="my-6 gold-divider opacity-50" />
                <ul className="space-y-2 text-xs uppercase tracking-luxury text-ivory/70">
                  {s.pts.map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="h-px w-4 bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
