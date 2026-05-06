import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Synaps Group" },
      { name: "description", content: "Get in touch with Synaps Group for mining inquiries, trade quotes or association partnerships." },
      { property: "og:title", content: "Contact — Synaps Group" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section className="relative pt-40 pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-luxury text-gold">{t("contact.eyebrow")}</span>
            <h1 className="mt-6 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">{t("contact.title")}</h1>
            <p className="mt-6 text-lg text-ivory/75">{t("contact.subtitle")}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form onSubmit={onSubmit} className="glass-card rounded-3xl p-8 sm:p-12">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label={t("contact.form.name")} name="name" />
                <Field label={t("contact.form.company")} name="company" required={false} />
                <Field label={t("contact.form.email")} name="email" type="email" />
                <Field label={t("contact.form.phone")} name="phone" type="tel" required={false} />
              </div>
              <div className="mt-6">
                <Field label={t("contact.form.subject")} name="subject" />
              </div>
              <div className="mt-6">
                <label className="text-xs uppercase tracking-luxury text-gold">{t("contact.form.message")}</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  maxLength={1000}
                  className="mt-3 w-full resize-none rounded-xl border border-[color-mix(in_oklab,var(--gold)_22%,transparent)] bg-background/40 px-5 py-4 text-ivory placeholder:text-ivory/40 outline-none transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--gold)_25%,transparent)]"
                />
              </div>
              <button type="submit" className="mt-8 w-full rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
                style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
                {sent ? t("contact.form.sent") : t("contact.form.submit")}
              </button>
            </form>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-serif text-2xl text-ivory">{t("contact.hq")}</h3>
              <div className="my-5 gold-divider opacity-50" />
              <ul className="space-y-5 text-sm text-ivory/85">
                <li className="flex items-start gap-4"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> {t("contact.address")}</li>
                <li className="flex items-start gap-4"><Mail className="mt-0.5 h-4 w-4 text-gold" /> <a href="mailto:contact@synapsgroup.com" className="royal-link">contact@synapsgroup.com</a></li>
                <li className="flex items-start gap-4"><Phone className="mt-0.5 h-4 w-4 text-gold" /> +261 34 00 000 00</li>
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <a href="https://wa.me/261340000000" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-6 py-3 text-xs font-semibold uppercase tracking-luxury text-ivory transition-all duration-500 hover:border-gold hover:text-gold">
                  <MessageCircle className="h-4 w-4" /> {t("cta.whatsapp")}
                </a>
                <a href="mailto:contact@synapsgroup.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}>
                  <Mail className="h-4 w-4" /> {t("contact.form.email")}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-luxury text-gold">{label}</label>
      <input
        required={required}
        name={name}
        type={type}
        maxLength={255}
        className="mt-3 w-full rounded-xl border border-[color-mix(in_oklab,var(--gold)_22%,transparent)] bg-background/40 px-5 py-3.5 text-ivory placeholder:text-ivory/40 outline-none transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--gold)_25%,transparent)]"
      />
    </div>
  );
}
