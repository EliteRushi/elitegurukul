import { useEffect, useRef, useState, type ReactNode } from "react";
import { track, type TrackEvent } from "@/lib/tracking";
import { GOOGLE_FORM_LINK, WHATSAPP_GROUP_LINK } from "@/lib/webinar";

export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up ${className}`}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "ink" }) {
  return (
    <span
      className={`label-eyebrow inline-flex items-center gap-2 ${
        tone === "gold" ? "text-gold-deep" : "text-gold"
      }`}
    >
      <span className="inline-block h-px w-8 bg-current opacity-60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow tone={dark ? "ink" : "gold"}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-4 text-3xl leading-tight sm:text-4xl md:text-[2.75rem] ${
          dark ? "text-ink-foreground" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-ink-foreground/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

const baseBtn =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300";

export function WhatsAppButton({
  label = "Join WhatsApp Group",
  location,
  variant = "solid",
  className = "",
}: {
  label?: string;
  location: string;
  variant?: "solid" | "gold";
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_GROUP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("WhatsAppGroupClick", { location })}
      className={`${baseBtn} ${
        variant === "gold"
          ? "bg-gold text-primary-foreground shadow-gold hover:brightness-110"
          : "bg-whatsapp text-whatsapp-foreground shadow-premium hover:brightness-105"
      } hover:-translate-y-0.5 ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

export function FormButton({
  label = "Fill Business Details",
  location,
  className = "",
}: {
  label?: string;
  location: string;
  className?: string;
}) {
  return (
    <a
      href={GOOGLE_FORM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("GoogleFormClick", { location })}
      className={`${baseBtn} bg-gold text-primary-foreground shadow-gold hover:-translate-y-0.5 hover:brightness-110 ${className}`}
    >
      {label}
    </a>
  );
}

export function GhostButton({
  children,
  href,
  onClick,
  dark = true,
  className = "",
}: {
  children: ReactNode;
  href: string;
  onClick?: () => void;
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseBtn} border ${
        dark
          ? "border-gold/45 text-ink-foreground hover:border-gold hover:bg-gold/10"
          : "border-ink/20 text-ink hover:border-gold hover:bg-gold/10"
      } ${className}`}
    >
      {children}
    </a>
  );
}

export function ShareButton({ location }: { location: string }) {
  const onShare = async () => {
    track("ShareClick", { location });
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Cashew Industry Business Growth Webinar", url });
        return;
      } catch {
        /* user cancelled */
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <button
      type="button"
      onClick={onShare}
      className={`${baseBtn} border border-gold/45 text-ink-foreground hover:border-gold hover:bg-gold/10`}
    >
      Share This Video
    </button>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.55 3.75 1.5 5.28L2 22l5.02-1.66a9.9 9.9 0 0 0 5.02 1.36c5.44 0 9.84-4.4 9.84-9.84S17.48 2 12.04 2Zm0 17.9c-1.6 0-3.1-.44-4.38-1.2l-.32-.2-3 1 1-2.9-.2-.32a7.94 7.94 0 0 1-1.22-4.24c0-4.4 3.6-8 8.12-8s8.12 3.6 8.12 8-3.62 7.86-8.12 7.86Zm4.56-5.9c-.24-.12-1.46-.72-1.68-.8-.22-.08-.38-.12-.54.12-.16.24-.62.8-.76.96-.14.16-.28.18-.52.06a6.5 6.5 0 0 1-1.9-1.18 7.2 7.2 0 0 1-1.32-1.64c-.14-.24 0-.38.1-.5.12-.14.28-.36.42-.54.1-.14.14-.24.22-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.74-1.8-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.72 4.12 3.72 2.42 1 2.42.66 2.86.62.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}