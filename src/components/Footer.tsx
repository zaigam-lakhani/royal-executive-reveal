import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-[oklch(0.09_0.008_60)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-radial-gold)" }}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="grid h-10 w-10 place-items-center rounded-full"
              style={{ background: "var(--gradient-gold)" }}
            >
              <span className="font-serif text-lg font-bold" style={{ color: "var(--charcoal)" }}>
                S
              </span>
            </span>
            <span className="font-serif text-xl text-ivory">
              Synaps <span className="text-gradient-gold">Group</span>
            </span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A royal executive holding company stewarding capital, enterprises, and legacies across continents.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxury text-gold">Navigate</h4>
          <ul className="mt-6 space-y-3 text-sm text-ivory/80">
            <li><Link to="/" className="royal-link">Home</Link></li>
            <li><Link to="/about" className="royal-link">About</Link></li>
            <li><Link to="/services" className="royal-link">Services</Link></li>
            <li><Link to="/companies" className="royal-link">Companies</Link></li>
            <li><Link to="/contact" className="royal-link">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxury text-gold">Headquarters</h4>
          <ul className="mt-6 space-y-3 text-sm text-ivory/80">
            <li>One Royal Avenue</li>
            <li>Dubai International Financial Centre</li>
            <li>United Arab Emirates</li>
            <li className="pt-2">
              <a href="mailto:office@synapsgroup.com" className="royal-link inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" /> office@synapsgroup.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxury text-gold">Connect</h4>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-11 w-11 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] text-ivory/80 transition-all duration-500 hover:border-gold hover:text-gold hover:-translate-y-1"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs uppercase tracking-luxury text-muted-foreground">
            By appointment only
          </p>
        </div>
      </div>

      <div className="gold-divider opacity-50" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground lg:flex-row lg:px-10">
        <span>© {new Date().getFullYear()} Synaps Group. All rights reserved.</span>
        <span className="uppercase tracking-luxury">Crafted with discretion · Geneva · Dubai · London</span>
      </div>
    </footer>
  );
}
