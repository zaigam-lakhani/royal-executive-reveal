import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "261340000000"; // placeholder Madagascar number

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 left-8 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-all duration-500 hover:scale-110"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      <span
        className="absolute inset-0 -z-10 rounded-full"
        style={{ animation: "pulse-gold 2.4s ease-out infinite", background: "rgba(37,211,102,0.4)" }}
      />
    </a>
  );
}
