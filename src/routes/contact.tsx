import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import contactImg from "@/assets/contact-royal.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Synaps Group" },
      {
        name: "description",
        content: "Request a private audience with the partners of Synaps Group. By appointment only.",
      },
      { property: "og:title", content: "Contact — Synaps Group" },
      { property: "og:description", content: "Begin a private conversation. By appointment only." },
      { property: "og:image", content: contactImg },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section className="relative pt-40 pb-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-luxury text-gold">Private Inquiry</span>
            <h1 className="mt-6 font-serif text-5xl font-light leading-tight text-ivory sm:text-6xl lg:text-7xl">
              Request a <span className="text-gradient-gold italic">private audience.</span>
            </h1>
            <p className="mt-8 text-lg text-ivory/75">
              Each inquiry is reviewed personally by a partner. We respond within two business days,
              with absolute discretion.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="glass-card rounded-3xl p-8 sm:p-12"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="First Name" name="first" />
                <Field label="Last Name" name="last" />
                <Field label="Email" name="email" type="email" />
                <Field label="Telephone" name="phone" type="tel" />
              </div>
              <div className="mt-6">
                <Field label="Subject of Inquiry" name="subject" />
              </div>
              <div className="mt-6">
                <label className="text-xs uppercase tracking-luxury text-gold">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-3 w-full resize-none rounded-xl border border-[color-mix(in_oklab,var(--gold)_22%,transparent)] bg-background/40 px-5 py-4 text-ivory placeholder:text-ivory/40 outline-none transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--gold)_25%,transparent)]"
                  placeholder="Briefly describe the nature of your inquiry…"
                />
              </div>
              <button
                type="submit"
                className="mt-8 w-full rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_0_50px_-6px_var(--gold)]"
                style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
              >
                {sent ? "Inquiry received — thank you" : "Submit Inquiry"}
              </button>
            </form>
          </Reveal>

          {/* Side */}
          <Reveal delay={150} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="glass-card rounded-3xl p-8">
                <h3 className="font-serif text-2xl text-ivory">Direct Channels</h3>
                <div className="my-5 gold-divider opacity-50" />
                <ul className="space-y-5 text-sm text-ivory/85">
                  <li className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                    <span>One Royal Avenue<br />DIFC, Dubai · UAE</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="mt-0.5 h-4 w-4 text-gold" />
                    <a href="mailto:office@synapsgroup.com" className="royal-link">office@synapsgroup.com</a>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="mt-0.5 h-4 w-4 text-gold" />
                    <span>+971 4 000 0000</span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="https://wa.me/971400000000"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-6 py-3 text-xs font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Concierge
                  </a>
                  <a
                    href="mailto:office@synapsgroup.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
                    style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
                  >
                    <Mail className="h-4 w-4" /> Email the Partners
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl shadow-elegant">
                <img
                  src={contactImg}
                  alt="Synaps Group headquarters skyline"
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-5 left-6 text-xs uppercase tracking-luxury text-ivory">
                  Headquarters · Dubai
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-luxury text-gold">{label}</label>
      <input
        required
        name={name}
        type={type}
        className="mt-3 w-full rounded-xl border border-[color-mix(in_oklab,var(--gold)_22%,transparent)] bg-background/40 px-5 py-3.5 text-ivory placeholder:text-ivory/40 outline-none transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--gold)_25%,transparent)]"
      />
    </div>
  );
}
