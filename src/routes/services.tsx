import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, HardHat, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Mining Services — Synaps Group" },
      { name: "description", content: "Mining consulting, mandate buy & sell, exploration, operations and technical consulting." },
      { property: "og:title", content: "Mining Services — Synaps Group" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();

  const SERVICES = [
    {
      icon: Briefcase,
      title: t("services.s1.title"),
      text: t("services.s1.text"),
      bullets: [t("services.s1.b1"), t("services.s1.b2"), t("services.s1.b3")],
    },
    {
      icon: HardHat,
      title: t("services.s2.title"),
      text: t("services.s2.text"),
      bullets: [t("services.s2.b1"), t("services.s2.b2"), t("services.s2.b3"), t("services.s2.b4")],
    },
  ];

  return (
    <section className="relative pt-40 pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-luxury text-gold">{t("services.eyebrow")}</span>
            <h1 className="mt-6 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">{t("services.title")}</h1>
            <p className="mt-6 text-lg text-ivory/75">{t("services.subtitle")}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 150}>
              <div className="glass-card h-full rounded-3xl p-10">
                <div className="grid h-14 w-14 place-items-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                  <s.icon className="h-6 w-6" style={{ color: "var(--charcoal)" }} strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
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
  );
}
