import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "Portfolio Companies — Synaps Group" },
      {
        name: "description",
        content: "A curated portfolio of enterprises across luxury, finance, real estate and technology.",
      },
      { property: "og:title", content: "Portfolio Companies — Synaps Group" },
      { property: "og:description", content: "Twenty-seven enterprises stewarded with prestige and precision." },
    ],
  }),
  component: CompaniesPage,
});

const COMPANIES = [
  { name: "Maison Velour", sector: "Luxury Hospitality", region: "Paris · Geneva", since: "1998" },
  { name: "Aurum Capital", sector: "Private Credit", region: "London · DIFC", since: "2004" },
  { name: "Royal Estates Holding", sector: "Prime Real Estate", region: "Dubai · Monaco", since: "1991" },
  { name: "Synaps Aero", sector: "Private Aviation", region: "Geneva · Riyadh", since: "2011" },
  { name: "Atelier Noir", sector: "Haute Couture House", region: "Milan", since: "2009" },
  { name: "Meridian Yachts", sector: "Maritime", region: "Monaco", since: "2007" },
  { name: "Sovereign Energy", sector: "Infrastructure", region: "Abu Dhabi · Houston", since: "2015" },
  { name: "Helios Tech Ventures", sector: "Frontier Technology", region: "London · Singapore", since: "2019" },
  { name: "Maison Privée Wines", sector: "Vineyards", region: "Bordeaux", since: "2002" },
];

function CompaniesPage() {
  return (
    <section className="relative pt-40 pb-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-luxury text-gold">Our Portfolio</span>
            <h1 className="mt-6 font-serif text-5xl font-light leading-tight text-ivory sm:text-6xl lg:text-7xl">
              Twenty-seven houses. <span className="text-gradient-gold italic">One philosophy.</span>
            </h1>
            <p className="mt-8 text-lg text-ivory/75">
              A discreet selection of enterprises stewarded by Synaps Group across continents and centuries of trade.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMPANIES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 120}>
              <div className="glass-card group relative h-full overflow-hidden rounded-2xl p-8">
                <div className="flex items-start justify-between">
                  <span className="text-xs uppercase tracking-luxury text-gold">Est. {c.since}</span>
                  <span className="font-serif text-3xl text-ivory/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-2xl text-ivory">{c.name}</h3>
                <div className="my-5 gold-divider opacity-50" />
                <div className="space-y-2 text-sm">
                  <div className="text-ivory/85">{c.sector}</div>
                  <div className="text-xs uppercase tracking-luxury text-muted-foreground">{c.region}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-16 text-center text-xs uppercase tracking-luxury text-muted-foreground">
            Additional holdings disclosed only upon engagement.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
