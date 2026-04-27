import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-royal.jpg";
import { Reveal } from "@/components/Reveal";
import { Crown, Compass, Scale, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Synaps Group" },
      {
        name: "description",
        content:
          "Founded in 1986, Synaps Group is a private executive holding stewarding capital, enterprises and family legacies.",
      },
      { property: "og:title", content: "About — Synaps Group" },
      { property: "og:description", content: "A heritage of discretion, prestige and generational stewardship." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Crown, title: "Sovereignty", text: "We act as principals — never as intermediaries — for every interest we represent." },
  { icon: Scale, title: "Stewardship", text: "Capital is treated as a multi-generational trust, not a quarterly metric." },
  { icon: Compass, title: "Conviction", text: "We commit only where our judgment is unconditional and our access is privileged." },
  { icon: Sparkles, title: "Refinement", text: "Excellence in execution, restraint in expression, prestige in result." },
];

function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-luxury text-gold">Our Heritage</span>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl font-light leading-tight text-ivory sm:text-6xl lg:text-7xl">
              Four decades of <span className="text-gradient-gold italic">quiet excellence.</span>
            </h1>
          </Reveal>

          <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl shadow-elegant">
                <img
                  src={aboutImg}
                  alt="Executives in private discussion"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-6 text-lg leading-relaxed text-ivory/80">
                <p>
                  Founded in 1986, <span className="text-gold">Synaps Group</span> emerged from the conviction
                  that lasting wealth is not built — it is composed, with the same rigour as a sonata
                  and the same patience as a vineyard.
                </p>
                <p>
                  We operate as a single, privately held house. Our partners are founders, principals
                  and sovereign families who entrust us with capital, enterprises, and legacies that
                  must endure across generations.
                </p>
                <p>
                  Every mandate is treated as a private engagement. Every decision is made with the
                  long arc of history in mind. Every result is delivered without spectacle.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-luxury text-gold">Founding Values</span>
              <h2 className="mt-6 font-serif text-4xl text-ivory sm:text-5xl">
                The principles that <span className="text-gradient-gold italic">govern us.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="glass-card flex h-full gap-6 rounded-2xl p-8">
                  <div
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-xl"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <v.icon className="h-6 w-6" style={{ color: "var(--charcoal)" }} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-ivory">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
