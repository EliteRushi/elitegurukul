const socials = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-24 pt-16 text-ink-foreground/70 sm:pb-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-label text-lg uppercase tracking-[0.18em] text-ink-foreground">
              Elite Gurukul Limited
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Business Growth &amp; Business 5.0 — Systems, Structure आणि Scalability साठी Business
              Consultancy.
            </p>
          </div>

          <div className="text-sm">
            <p className="label-eyebrow text-gold">Contact</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://www.elitegurukul.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  www.elitegurukul.com
                </a>
              </li>
              <li>
                <a href="mailto:info@elitegurukul.com" className="hover:text-gold">
                  info@elitegurukul.com
                </a>
              </li>
              <li>
                <a href="tel:+918956334211" className="hover:text-gold">
                  8956334211
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="label-eyebrow text-gold">Follow</p>
            <ul className="mt-4 space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 gold-rule" />
        <p className="mt-6 text-xs text-ink-foreground/40">
          © {new Date().getFullYear()} Elite Gurukul Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}