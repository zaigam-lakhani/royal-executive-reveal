import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe, Check } from "lucide-react";
import { useI18n, LANGUAGES, type Lang } from "@/i18n/I18nProvider";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
        aria-label="Select language"
        aria-expanded={open}
        className={`flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] bg-background/60 backdrop-blur ${
          compact ? "px-2.5 py-1.5" : "px-3 py-2"
        } text-xs uppercase tracking-luxury text-ivory hover:border-gold hover:text-gold transition-all`}
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="text-base leading-none">{current.flag}</span>
        <span className="font-semibold">{current.code.toUpperCase()}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-background/95 shadow-elegant backdrop-blur-xl z-50"
        >
          {LANGUAGES.map((l) => {
            const active = l.code === lang;
            return (
              <button
                key={l.code}
                onClick={() => { setLang(l.code as Lang); setOpen(false); }}
                className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-sm transition-colors ${
                  active ? "bg-[color-mix(in_oklab,var(--gold)_12%,transparent)] text-gold" : "text-ivory/85 hover:bg-[color-mix(in_oklab,var(--gold)_8%,transparent)] hover:text-gold"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl leading-none">{l.flag}</span>
                  <span className="font-medium">{l.native}</span>
                </span>
                {active && <Check className="h-4 w-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
