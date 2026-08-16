import { track } from "@/lib/tracking";
import { GOOGLE_FORM_LINK, WHATSAPP_GROUP_LINK } from "@/lib/webinar";
import { WhatsAppIcon } from "./primitives";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-gold/25 bg-ink/95 px-3 py-3 backdrop-blur-md sm:hidden">
      <a
        href={WHATSAPP_GROUP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("WhatsAppGroupClick", { location: "sticky_mobile" })}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-whatsapp-foreground"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Join WhatsApp Group
      </a>
      <a
        href={GOOGLE_FORM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("GoogleFormClick", { location: "sticky_mobile" })}
        className="flex items-center justify-center rounded-full border border-gold/50 px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold"
      >
        Form
      </a>
    </div>
  );
}