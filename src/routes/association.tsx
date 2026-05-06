import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, GraduationCap, HandHeart, Moon } from "lucide-react";
import charityImg from "@/assets/association-charity.jpg";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/association")({
  head: () => ({
    meta: [
      { title: "Neurones Madagascar — Synaps Group Association" },
      { name: "description", content: "Non-profit improving education and social impact for Malagasy students." },
      { property: "og:title", content: "Neurones Madagascar" },
      { property: "og:image", content: charityImg },
    ],
  }),
  component: AssociationPage,
});

function AssociationPage() {
  const { t } = useI18n();

  const AREAS = [
    { icon: Heart, title: t("assoc.area.health"), text: t("assoc.area.health.text") },
    { icon: GraduationCap, title: t("assoc.area.edu"), text: t("assoc.area.edu.text") },
    { icon: HandHeart, title: t("assoc.area.social"), text: t("assoc.area.social.text") },
  ];

  return (
    <section className="relative pt-40 pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              <span className="text-xs uppercase tracking-luxury text-gold">{t("assoc.eyebrow")}</span>
              <h1 className="mt-6 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">{t("assoc.title")}</h1>
              <p className="mt-6 text-lg text-ivory/75">{t("assoc.subtitle")}</p>
            </div>
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl shadow-elegant">
                <img src={charityImg} alt="Neurones Madagascar charity" width={1600} height={1000} loading="lazy" className="h-72 w-full object-cover lg:h-80" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 glass-card rounded-3xl p-10">
            <h2 className="font-serif text-2xl text-ivory">{t("assoc.mission.title")}</h2>
            <div className="my-5 gold-divider opacity-50" />
            <p className="text-base leading-relaxed text-ivory/80">{t("assoc.mission.text")}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {AREAS.map((a, i) => (
            <Reveal key={a.title} delay={i * 120}>
              <div className="glass-card h-full rounded-2xl p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                  <a.icon className="h-5 w-5" style={{ color: "var(--charcoal)" }} strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-serif text-xl text-ivory">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 glass-card rounded-3xl p-10">
            <div className="flex items-start gap-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                <Moon className="h-5 w-5" style={{ color: "var(--charcoal)" }} strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-ivory">{t("assoc.zakat.title")}</h3>
                <p className="mt-3 text-base text-ivory/80 leading-relaxed">{t("assoc.zakat.text")}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
              {t("cta.support")}
            </Link>
            <Link to="/contact" className="inline-flex rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
              {t("cta.donate")}
            </Link>
            <Link to="/contact" className="inline-flex rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
              {t("cta.partner")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
