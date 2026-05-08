import { useState } from "react";
import { ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt?: string;
}

interface Props {
  images?: GalleryImage[];
  placeholderCount?: number;
  label?: string;
}

export function PropertyGallery({ images = [], placeholderCount = 6, label = "Gallery" }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const has = images.length > 0;
  const slots = has ? images : Array.from({ length: placeholderCount }, () => null);

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {slots.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => has && setOpen(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--gold)_20%,transparent)] bg-[oklch(0.14_0.008_60)] transition-all duration-500 hover:border-gold hover:shadow-gold"
          >
            {img ? (
              <img
                src={img.src}
                alt={img.alt ?? `${label} ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ivory/40">
                <ImageIcon className="h-7 w-7" strokeWidth={1.2} />
                <span className="text-[10px] uppercase tracking-luxury">Photo {i + 1}</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {!has && (
        <p className="mt-4 text-center text-xs uppercase tracking-luxury text-ivory/45">
          High-resolution gallery coming soon
        </p>
      )}

      {open !== null && has && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-ivory hover:text-gold"
            onClick={() => setOpen(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="Previous"
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-ivory hover:text-gold sm:left-10"
            onClick={(e) => { e.stopPropagation(); setOpen((o) => (o! - 1 + images.length) % images.length); }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <img
            src={images[open].src}
            alt={images[open].alt ?? ""}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            aria-label="Next"
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-ivory hover:text-gold sm:right-10"
            onClick={(e) => { e.stopPropagation(); setOpen((o) => (o! + 1) % images.length); }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
