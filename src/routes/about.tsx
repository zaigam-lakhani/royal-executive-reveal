import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Truck, Sprout } from "lucide-react";
import aboutImg from "@/assets/about-corporate.jpg";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Synaps Group" },
      { name: "description", content: "Madagascar mining, trade and consulting group with global reach." },
      { property: "og:title", content: "About Synaps Group" },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const VALUES = [
    { icon: ShieldCheck, title: t("about.value1.title"), text: t("about.value1.text") },
    { icon: Truck, title: t("about.value2.title"), text: t("about.value2.text") },
    { icon: Sprout, title: t("about.value3.title"), text: t("about.value3.text") },
  ];

  return (
    <section className="relative pt-40 pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-luxury text-gold">{t("about.eyebrow")}</span>
            <h1 className="mt-6 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">{t("about.title")}</h1>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-6 text-base leading-relaxed text-ivory/80">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={aboutImg} alt="Synaps Group boardroom" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-6 sm:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className="glass-card h-full rounded-2xl p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                  <v.icon className="h-5 w-5" style={{ color: "var(--charcoal)" }} strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-serif text-xl text-ivory">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
