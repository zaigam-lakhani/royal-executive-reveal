import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const NAV = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/real-estate", label: t("nav.realEstate") },
    { to: "/mining", label: t("nav.mining") },
    { to: "/association", label: t("nav.association") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-[color-mix(in_oklab,var(--gold)_20%,transparent)]"
          : "bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-3 shrink-0">
          <span
            className="grid h-10 w-10 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_55%,transparent)]"
            style={{ background: "var(--gradient-gold)" }}
          >
            <span className="font-serif text-lg font-bold" style={{ color: "var(--charcoal)" }}>S</span>
          </span>
          <div className="leading-none">
            <div className="font-serif text-lg sm:text-xl font-semibold tracking-wide text-ivory">
              {t("brand.name")}
            </div>
            <div className="mt-1 hidden sm:block text-[10px] uppercase tracking-luxury text-muted-foreground">
              {t("brand.tagline")}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="royal-link text-[11px] uppercase tracking-[0.18em] text-ivory/85 hover:text-gold transition-colors whitespace-nowrap"
              activeProps={{ "data-active": "true", className: "text-gold" } as never}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher compact />
          <Link
            to="/contact"
            className="hidden md:inline-flex rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:-translate-y-0.5 whitespace-nowrap"
            style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
          >
            {t("cta.contact")}
          </Link>
          <button
            aria-label={t("menu.aria")}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] text-ivory lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-background/95 backdrop-blur-xl lg:hidden transition-all duration-500 ${
          open ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="border-b border-[color-mix(in_oklab,var(--gold)_12%,transparent)] py-4 font-serif text-2xl text-ivory hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6 rounded-full px-6 py-3 text-center text-xs font-semibold uppercase tracking-luxury shadow-gold"
            style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
          >
            {t("cta.contact")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
