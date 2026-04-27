import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Gem, Globe2, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-royal.jpg";
import marbleImg from "@/assets/marble-bg.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synaps Group — Royal Executive Holding" },
      {
        name: "description",
        content:
          "A private holding stewarding capital, enterprises and legacies. Discretion, prestige, generational performance.",
      },
      { property: "og:title", content: "Synaps Group — Royal Executive Holding" },
      { property: "og:description", content: "Discretion. Prestige. Generational performance." },
    ],
  }),
  component: HomePage,
});

const PILLARS = [
  { icon: Shield, title: "Discretion", text: "Confidentiality is the cornerstone of every engagement we undertake." },
  { icon: Gem, title: "Prestige", text: "We curate ventures of singular distinction across regulated markets." },
  { icon: Globe2, title: "Reach", text: "An international footprint spanning Europe, the Gulf and the Americas." },
  { icon: TrendingUp, title: "Performance", text: "Capital deployed with a multi-generational compounding mindset." },
];

const STATS = [
  { v: "$3.4B", l: "Assets under stewardship" },
  { v: "27", l: "Portfolio enterprises" },
  { v: "14", l: "Countries of operation" },
  { v: "1986", l: "Founding year" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.08 0.008 60 / 0.6) 0%, oklch(0.08 0.008 60 / 0.85) 60%, oklch(0.09 0.008 60) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: "var(--gradient-radial-gold)" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs uppercase tracking-luxury text-gold">
                Established 1986 · By appointment only
              </span>
            </div>
            <h1 className="font-serif text-5xl font-light leading-[1.05] text-ivory sm:text-6xl lg:text-7xl xl:text-8xl">
              The Quiet Architecture of <span className="text-gradient-gold italic">Lasting Wealth.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/75">
              Synaps Group is a private royal executive holding entrusted by founders, families
              and sovereign partners to compound capital, ventures, and legacies across generations.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_50px_-6px_var(--gold)]"
                style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
              >
                Request Audience
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold"
              >
                Our Philosophy
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-luxury text-ivory/60">
            <span>Scroll</span>
            <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-luxury text-gold">Our Pillars</span>
              <h2 className="mt-6 font-serif text-4xl text-ivory sm:text-5xl">
                Four virtues. <span className="text-gradient-gold italic">One standard.</span>
              </h2>
              <div className="mx-auto mt-8 h-px w-24 bg-gradient-gold" />
            </div>
          </Reveal>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="glass-card group relative h-full rounded-2xl p-8">
                  <div
                    className="grid h-14 w-14 place-items-center rounded-xl transition-all duration-500 group-hover:scale-110"
                    style={{ background: "var(--gradient-gold)" }}
                  >
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

      {/* STATS / Marble band */}
      <section className="relative overflow-hidden py-24">
        <img
          src={marbleImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 100}>
                <div className="text-center lg:text-left">
                  <div className="font-serif text-5xl text-gradient-gold sm:text-6xl">{s.v}</div>
                  <div className="mt-3 text-xs uppercase tracking-luxury text-ivory/70">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <div className="glass-card relative overflow-hidden rounded-3xl p-12 text-center sm:p-20">
              <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{ background: "var(--gradient-radial-gold)" }}
              />
              <div className="relative">
                <span className="text-xs uppercase tracking-luxury text-gold">Private engagement</span>
                <h2 className="mt-6 font-serif text-4xl text-ivory sm:text-5xl lg:text-6xl">
                  An invitation to a <span className="text-gradient-gold italic">private conversation.</span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base text-ivory/75">
                  Each engagement begins with mutual discretion and a careful study of fit.
                </p>
                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-3 rounded-full px-10 py-4 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-1"
                  style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
                >
                  Begin the dialogue <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
