import { GhostButton } from "./primitives";
import { track } from "@/lib/tracking";
import { WHATSAPP_GROUP_LINK } from "@/lib/webinar";
import { WhatsAppIcon } from "./primitives";

const navLinks = [
  { href: "#video", label: "Video" },
  { href: "#business-5", label: "Business 5.0" },
  { href: "#session", label: "Session" },
  { href: "#form", label: "Form" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-label text-base tracking-[0.18em] text-ink-foreground uppercase">
            Elite Gurukul
          </span>
          <span className="label-eyebrow mt-1 text-gold">Limited</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-foreground/70 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("WhatsAppGroupClick", { location: "header" })}
          className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-gold transition hover:brightness-110 sm:inline-flex"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          Join Webinar
        </a>
        <GhostButton href="#video" className="px-4 py-2 text-[0.65rem] sm:hidden">
          Video
        </GhostButton>
      </div>
    </header>
  );
}