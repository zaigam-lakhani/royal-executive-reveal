import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Pickaxe, Globe2, Handshake, HeartHandshake } from "lucide-react";
import heroImg from "@/assets/mining-hero.jpg";
import mineralsImg from "@/assets/minerals.jpg";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synaps Group — Mining & Sustainable Development in Madagascar" },
      { name: "description", content: "Mining expertise, international trade and social impact projects from Madagascar." },
      { property: "og:title", content: "Synaps Group" },
      { property: "og:description", content: "Mining, trade and impact." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useI18n();

  const PILLARS = [
    { icon: Pickaxe, title: t("home.pillar1.title"), text: t("home.pillar1.text") },
    { icon: Globe2, title: t("home.pillar2.title"), text: t("home.pillar2.text") },
    { icon: Handshake, title: t("home.pillar3.title"), text: t("home.pillar3.text") },
    { icon: HeartHandshake, title: t("home.pillar4.title"), text: t("home.pillar4.text") },
  ];
  const STATS = [
    { v: "5,000+", l: t("home.stats.students") },
    { v: "12+", l: t("home.stats.regions") },
    { v: "20+", l: t("home.stats.partners") },
    { v: "1M", l: t("home.stats.tonnes") },
  ];

  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.08 0.008 60 / 0.55) 0%, oklch(0.08 0.008 60 / 0.85) 60%, oklch(0.09 0.008 60) 100%)" }} />
        <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-radial-gold)" }} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs uppercase tracking-luxury text-gold">{t("home.eyebrow")}</span>
            </div>
            <h1 className="font-serif text-4xl font-light leading-[1.08] text-ivory sm:text-5xl lg:text-6xl xl:text-7xl">
              {t("home.title")}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/80">{t("home.subtitle")}</p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-1"
                style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
                {t("cta.contact")} <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <Link to="/real-estate" className="inline-flex items-center gap-3 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                {t("cta.explore")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-luxury text-gold">{t("home.pillars.title")}</span>
              <div className="mx-auto mt-6 h-px w-24 bg-gradient-gold" />
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="glass-card group relative h-full rounded-2xl p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-xl transition-all duration-500 group-hover:scale-110" style={{ background: "var(--gradient-gold)" }}>
                    <p.icon className="h-6 w-6" style={{ color: "var(--charcoal)" }} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-8 font-serif text-2xl text-ivory">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <img src={mineralsImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" width={1600} height={1000} />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 100}>
                <div className="text-center lg:text-start">
                  <div className="font-serif text-5xl text-gradient-gold sm:text-6xl">{s.v}</div>
                  <div className="mt-3 text-xs uppercase tracking-luxury text-ivory/70">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <div className="glass-card relative overflow-hidden rounded-3xl p-12 text-center sm:p-20">
              <div className="pointer-events-none absolute inset-0 opacity-50" style={{ background: "var(--gradient-radial-gold)" }} />
              <div className="relative">
                <h2 className="font-serif text-3xl text-ivory sm:text-5xl">{t("contact.title")}</h2>
                <p className="mx-auto mt-6 max-w-xl text-base text-ivory/75">{t("contact.subtitle")}</p>
                <Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-full px-10 py-4 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-1"
                  style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
                  {t("cta.contact")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
