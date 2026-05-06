import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import tradeImg from "@/assets/trade-export.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/trade")({
  head: () => ({
    meta: [
      { title: "Trade & Export — Synaps Group" },
      { name: "description", content: "Sea sands, river sands, red soils and chrome ore exported from Madagascar." },
      { property: "og:title", content: "Trade & Export — Synaps Group" },
      { property: "og:image", content: tradeImg },
    ],
  }),
  component: TradePage,
});

function TradePage() {
  const { t } = useI18n();

  const PRODUCTS = [
    {
      name: t("trade.p1.name"),
      rows: [
        [t("trade.location"), "Atsinanana Region, Madagascar"],
        [t("trade.size"), "0.5mm – 2mm"],
        [t("trade.quantity"), "50,000 MT – 1,000,000 MT"],
        [t("trade.terms"), "FOB Toamasina Port / CIF ASWP"],
        [t("trade.delivery"), "60–360 days"],
        [t("trade.payment"), "80% TT SWIFT, 20% against documents"],
      ],
    },
    {
      name: t("trade.p2.name"),
      rows: [
        [t("trade.location"), "Brickaville, Atsinanana"],
        [t("trade.size"), "0.5mm – 2mm"],
        [t("trade.quantity"), "50,000 MT – 1,000,000 MT"],
        [t("trade.terms"), "FOB Toamasina Port / CIF ASWP"],
        [t("trade.delivery"), "60–360 days"],
        [t("trade.payment"), "80% TT SWIFT, 20% against documents"],
      ],
    },
    {
      name: t("trade.p3.name"),
      rows: [
        [t("trade.location"), "Atsinanana Region, Madagascar"],
        [t("trade.size"), "0.5mm – 2mm"],
        [t("trade.quantity"), "50,000 MT – 1,000,000 MT"],
        [t("trade.terms"), "FOB Toamasina Port / CIF ASWP"],
        [t("trade.delivery"), "60–360 days"],
        [t("trade.payment"), "80% TT SWIFT, 20% against documents"],
      ],
    },
    {
      name: t("trade.p4.name"),
      rows: [
        [t("trade.quantity"), "1,000 MT – 5,000 MT / month"],
        [t("trade.grade"), "Cr 22% – 35%"],
        [t("trade.price"), "USD 180 / MT FOB"],
        [t("trade.terms"), "FOB Toamasina Port"],
        [t("trade.delivery"), "35–360 days"],
        [t("trade.payment"), "80% TT SWIFT, 20% against documents"],
      ],
    },
  ];

  return (
    <section className="relative pt-40 pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              <span className="text-xs uppercase tracking-luxury text-gold">{t("trade.eyebrow")}</span>
              <h1 className="mt-6 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">{t("trade.title")}</h1>
              <p className="mt-6 text-lg text-ivory/75">{t("trade.subtitle")}</p>
              <Link to="/contact" className="mt-8 inline-flex rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
                style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
                {t("cta.quote")}
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl shadow-elegant">
                <img src={tradeImg} alt="Cargo export" width={1600} height={1000} loading="lazy" className="h-72 w-full object-cover lg:h-80" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
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
  );
}
