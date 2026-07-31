import { MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "@/lib/hospital-data";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-6">
      <a
        href={contactInfo.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elevated transition duration-200 hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={contactInfo.phoneHref}
        aria-label="Emergency call"
        className="grid h-14 w-14 place-items-center rounded-full gradient-brand text-white shadow-brand transition duration-200 hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
