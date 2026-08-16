import { EVENT_DETAILS } from "@/lib/webinar";
import { FadeUp, SectionHeading, WhatsAppButton } from "./primitives";

const audience = [
  "Cashew Processing Unit Owners",
  "Cashew Manufacturers",
  "Cashew Traders",
  "Food Processing Business Owners",
  "MSME Business Owners",
  "Entrepreneurs looking for structured growth",
  "Businesses planning expansion",
  "Businesses looking to improve profitability",
  "Businesses looking to reduce Owner Dependency",
];

export function WhoShouldJoin() {
  return (
    <section className="surface-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeUp>
          <SectionHeading dark eyebrow="Who Should Join" title="हा Webinar कोणासाठी आहे?" />
        </FadeUp>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {audience.map((a, i) => (
            <FadeUp key={a} delay={i * 45}>
              <li className="flex items-start gap-3 rounded-xl border border-ink-foreground/10 bg-ink-foreground/5 px-5 py-4 text-ink-foreground/85">
                <span className="mt-1 text-gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-4 w-4">
                    <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base">{a}</span>
              </li>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SessionCard() {
  return (
    <section id="session" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <FadeUp>
          <div className="overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-premium">
            <div className="surface-ink px-8 py-10 text-center sm:px-12">
              <span className="label-eyebrow text-gold">About The Session</span>
              <h2 className="mt-5 text-2xl leading-tight text-ink-foreground sm:text-3xl">
                Cashew Industry
                <span className="block text-gradient-gold">Business Growth Webinar</span>
              </h2>
            </div>

            <dl className="grid gap-x-10 gap-y-6 px-8 py-10 sm:grid-cols-2 sm:px-12">
              {EVENT_DETAILS.map((d) => (
                <div key={d.label} className="border-b border-border pb-4">
                  <dt className="label-eyebrow text-gold-deep">{d.label}</dt>
                  <dd className="mt-2 text-base font-semibold text-ink">{d.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex justify-center px-8 pb-10 sm:px-12">
              <WhatsAppButton location="session_card" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}