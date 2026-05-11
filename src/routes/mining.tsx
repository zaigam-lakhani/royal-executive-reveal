import { createFileRoute, Link } from "@tanstack/react-router";
import { Pickaxe, HardHat, Briefcase, Ship, Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import mineralsImg from "@/assets/minerals.jpg";
import tradeImg from "@/assets/trade-export.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/mining")({
  head: () => ({
    meta: [
      { title: "Synaps Mining — Exploration, Operations & Export" },
      { name: "description", content: "Mining exploration, operations, consulting and international trade of sea sands, river sands, red soils and chrome ore from Madagascar." },
      { property: "og:title", content: "Synaps Mining" },
      { property: "og:image", content: mineralsImg },
    ],
  }),
  component: MiningPage,
});

function MiningPage() {
  const { t } = useI18n();

  const PILLARS = [
    { icon: Pickaxe, title: t("mining.p1.title"), text: t("mining.p1.text") },
    { icon: HardHat, title: t("mining.p2.title"), text: t("mining.p2.text") },
    { icon: Briefcase, title: t("mining.p3.title"), text: t("mining.p3.text") },
    { icon: Ship, title: t("mining.p4.title"), text: t("mining.p4.text") },
  ];

  const PRODUCTS = [
    {
      name: t("trade.p1.name"),
      rows: [
        [t("trade.location"), t("trade.loc.atsinanana")],
        [t("trade.size"), "0.5mm – 2mm"],
        [t("trade.quantity"), "50,000 MT – 1,000,000 MT"],
        [t("trade.terms"), t("trade.terms.fobCif")],
        [t("trade.delivery"), t("trade.delivery.long")],
        [t("trade.payment"), t("trade.payment.standard")],
      ],
    },
    {
      name: t("trade.p2.name"),
      rows: [
        [t("trade.location"), t("trade.loc.brickaville")],
        [t("trade.size"), "0.5mm – 2mm"],
        [t("trade.quantity"), "50,000 MT – 1,000,000 MT"],
        [t("trade.terms"), t("trade.terms.fobCif")],
        [t("trade.delivery"), t("trade.delivery.long")],
        [t("trade.payment"), t("trade.payment.standard")],
      ],
    },
    {
      name: t("trade.p3.name"),
      rows: [
        [t("trade.location"), t("trade.loc.atsinanana")],
        [t("trade.size"), "0.5mm – 2mm"],
        [t("trade.quantity"), "50,000 MT – 1,000,000 MT"],
        [t("trade.terms"), t("trade.terms.fobCif")],
        [t("trade.delivery"), t("trade.delivery.long")],
        [t("trade.payment"), t("trade.payment.standard")],
      ],
    },
    {
      name: t("trade.p4.name"),
      rows: [
        [t("trade.quantity"), "1,000 MT – 5,000 MT / month"],
        [t("trade.grade"), "Cr 22% – 35%"],
        [t("trade.price"), "USD 180 / MT FOB"],
        [t("trade.terms"), t("trade.terms.fob")],
        [t("trade.delivery"), t("trade.delivery.short")],
        [t("trade.payment"), t("trade.payment.standard")],
      ],
    },
  ];

  const SERVICES = [
    {
      title: t("services.s1.title"),
      text: t("services.s1.text"),
      bullets: [t("services.s1.b1"), t("services.s1.b2"), t("services.s1.b3")],
    },
    {
      title: t("services.s2.title"),
      text: t("services.s2.text"),
      bullets: [t("services.s2.b1"), t("services.s2.b2"), t("services.s2.b3"), t("services.s2.b4")],
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <img src={mineralsImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-luxury text-gold">{t("mining.eyebrow")}</span>
              <h1 className="mt-6 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">
                {t("mining.title")}
              </h1>
              <p className="mt-6 text-lg text-ivory/75">
                {t("mining.subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
                  {t("cta.quote")} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-7 py-3.5 text-xs font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                  {t("cta.contact")}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="glass-card h-full rounded-2xl p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                    <p.icon className="h-5 w-5" style={{ color: "var(--charcoal)" }} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-ivory">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-luxury text-gold">Mining Services</span>
              <h2 className="mt-4 font-serif text-3xl font-light text-ivory sm:text-4xl">{t("services.title")}</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="glass-card h-full rounded-3xl p-10">
                  <h3 className="font-serif text-2xl text-ivory">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-ivory/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <img src={tradeImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-luxury text-gold">{t("trade.eyebrow")}</span>
              <h2 className="mt-4 font-serif text-3xl font-light text-ivory sm:text-4xl">{t("trade.title")}</h2>
              <p className="mt-4 text-base text-ivory/75">{t("trade.subtitle")}</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className="glass-card h-full rounded-3xl p-8">
                  <h3 className="font-serif text-2xl text-ivory">{p.name}</h3>
                  <div className="my-5 gold-divider opacity-50" />
                  <dl className="space-y-3 text-sm">
                    {p.rows.map(([k, v]) => (
                      <div key={k} className="grid grid-cols-3 gap-3">
                        <dt className="col-span-1 text-xs uppercase tracking-luxury text-gold">{k}</dt>
                        <dd className="col-span-2 text-ivory/85">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
