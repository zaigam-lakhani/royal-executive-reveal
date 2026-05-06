import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-[oklch(0.09_0.008_60)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-gold)" }} />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-radial-gold)" }} />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full" style={{ background: "var(--gradient-gold)" }}>
              <span className="font-serif text-lg font-bold" style={{ color: "var(--charcoal)" }}>S</span>
            </span>
            <span className="font-serif text-xl text-ivory">{t("brand.name")}</span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">{t("footer.about")}</p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxury text-gold">{t("nav.home")}</h4>
          <ul className="mt-6 space-y-3 text-sm text-ivory/80">
            <li><Link to="/" className="royal-link">{t("nav.home")}</Link></li>
            <li><Link to="/about" className="royal-link">{t("nav.about")}</Link></li>
            <li><Link to="/services" className="royal-link">{t("nav.services")}</Link></li>
            <li><Link to="/trade" className="royal-link">{t("nav.trade")}</Link></li>
            <li><Link to="/association" className="royal-link">{t("nav.association")}</Link></li>
            <li><Link to="/contact" className="royal-link">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxury text-gold">{t("contact.hq")}</h4>
          <ul className="mt-6 space-y-3 text-sm text-ivory/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> {t("contact.address")}</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> <a href="mailto:contact@synapsgroup.com" className="royal-link">contact@synapsgroup.com</a></li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /> +261 34 00 000 00</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxury text-gold">Follow</h4>
          <div className="mt-6 flex gap-3">
            <a href="#" className="grid h-11 w-11 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] text-ivory/80 transition-all duration-500 hover:border-gold hover:text-gold hover:-translate-y-1">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="gold-divider opacity-50" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground lg:flex-row lg:px-10">
        <span>© {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}</span>
        <span className="uppercase tracking-luxury">Madagascar · Antananarivo · Toamasina</span>
      </div>
    </footer>
  );
}
