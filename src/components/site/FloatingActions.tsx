import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-6">
      <a
        href="https://wa.me/919838951052"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-brand transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+915122282111"
        aria-label="Emergency call"
        className="grid h-14 w-14 place-items-center rounded-full gradient-brand text-white shadow-brand transition hover:scale-105"
      >
        <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-[color:var(--brand)] opacity-30" />
        <Phone className="relative h-6 w-6" />
      </a>
    </div>
  );
}