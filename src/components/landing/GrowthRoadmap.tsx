import { FadeUp, SectionHeading } from "./primitives";

const steps = [
  "Traditional Processing",
  "Process Optimisation",
  "Cost Control",
  "Value Addition",
  "Branding",
  "New Products",
  "New Markets",
  "Export Opportunities",
  "Capacity Expansion",
  "Scalable Business",
];

export function GrowthRoadmap() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeUp>
          <SectionHeading
            eyebrow="Growth Roadmap"
            title="Cashew Business मध्ये Growth कुठून येऊ शकते?"
          />
        </FadeUp>

        <FadeUp delay={100}>
          <ol className="mt-14 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:thin] lg:grid lg:grid-cols-5 lg:overflow-visible">
            {steps.map((s, i) => (
              <li
                key={s}
                className="relative flex min-w-[13rem] shrink-0 snap-start flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-premium lg:min-w-0"
              >
                <span className="label-eyebrow text-gold-deep">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base font-semibold text-ink">{s}</p>
                {i < steps.length - 1 ? (
                  <span className="mt-4 block h-px w-10 bg-gold/60" aria-hidden="true" />
                ) : (
                  <span className="mt-4 block h-px w-10 bg-gold" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </FadeUp>

        <FadeUp delay={160}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            उद्देश फक्त Sales वाढवणे नाही. उद्देश आहे — Profitability, Systems, Value Addition आणि
            Scalability वाढवणे.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}