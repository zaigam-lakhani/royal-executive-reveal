import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/companies", label: "Companies" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "FR">("EN");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-[color-mix(in_oklab,var(--gold)_20%,transparent)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span
            className="grid h-10 w-10 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_55%,transparent)]"
            style={{ background: "var(--gradient-gold)" }}
          >
            <span className="font-serif text-lg font-bold" style={{ color: "var(--charcoal)" }}>
              S
            </span>
          </span>
          <div className="leading-none">
            <div className="font-serif text-xl font-semibold tracking-wide text-ivory">
              Synaps <span className="text-gradient-gold">Group</span>
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-luxury text-muted-foreground">
              Royal Executive Holding
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="royal-link text-sm uppercase tracking-[0.18em] text-ivory/85 hover:text-gold transition-colors"
              activeProps={{ "data-active": "true", className: "text-gold" } as never}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={() => setLang(lang === "EN" ? "FR" : "EN")}
            className="flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] px-3 py-1.5 text-xs uppercase tracking-luxury text-ivory/80 hover:border-gold hover:text-gold transition-all"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang}
          </button>
          <Link
            to="/contact"
            className="rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-luxury shadow-gold transition-all duration-500 hover:shadow-[0_0_40px_-6px_var(--gold)] hover:-translate-y-0.5"
            style={{
              background: "var(--gradient-gold)",
              color: "var(--charcoal)",
            }}
          >
            Private Inquiry
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] text-ivory lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-background/95 backdrop-blur-xl lg:hidden transition-all duration-500 ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="border-b border-[color-mix(in_oklab,var(--gold)_12%,transparent)] py-4 font-serif text-2xl text-ivory hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6 rounded-full px-6 py-3 text-center text-xs font-semibold uppercase tracking-luxury shadow-gold"
            style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
          >
            Private Inquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}
