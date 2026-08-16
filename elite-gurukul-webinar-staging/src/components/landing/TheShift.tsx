import { FadeUp, SectionHeading } from "./primitives";

const traditional = [
  "Owner-dependent",
  "Manual processes",
  "Reactive decisions",
  "Unclear responsibilities",
  "Limited growth visibility",
  "Operations-focused",
];

const business50 = [
  "Strategy-driven",
  "System-driven",
  "Data-based decisions",
  "Clear organisation structure",
  "Accountable team",
  "Scalable business",
];

export function TheShift() {
  return (
    <section className="surface-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeUp>
          <SectionHeading
            dark
            eyebrow="The Shift"
            title="Business चालवण्यापासून Business Scale करण्यापर्यंत"
          />
        </FadeUp>

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <FadeUp>
            <div className="rounded-2xl border border-ink-foreground/12 bg-ink-foreground/5 p-7">
              <span className="label-eyebrow text-ink-foreground/50">Traditional Business</span>
              <ul className="mt-6 space-y-3.5">
                {traditional.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-ink-foreground/65">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-foreground/35" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={80}>
            <div className="flex flex-col items-center gap-3 py-2">
              <span className="font-label text-2xl text-ink-foreground/60">1.0</span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                  <path d="M4 12h14" strokeLinecap="round" />
                  <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-label text-2xl text-gradient-gold">5.0</span>
            </div>
          </FadeUp>

          <FadeUp delay={140}>
            <div className="rounded-2xl border border-gold/35 bg-gold/8 p-7 shadow-gold">
              <span className="label-eyebrow text-gold">Business 5.0</span>
              <ul className="mt-6 space-y-3.5">
                {business50.map((t) => (
                  <li key={t} className="flex items-start gap-3 font-medium text-ink-foreground">
                    <span className="mt-1.5 text-gold">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-3.5 w-3.5">
                        <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}