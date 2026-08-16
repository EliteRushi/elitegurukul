import { FadeUp, SectionHeading } from "./primitives";

const pillars = [
  { t: "Business Strategy", d: "Clear Goals + Growth Direction" },
  { t: "Organisation Structure", d: "Right Position + Right Responsibility" },
  { t: "Systems & SOPs", d: "Process + Standardisation" },
  { t: "Team & Accountability", d: "KPIs + Performance + Ownership" },
  { t: "Numbers & MIS", d: "Sales + Cost + Profit + Cash Flow" },
  { t: "AI & Technology", d: "Automation + Productivity + Better Decisions" },
];

export function Business50() {
  return (
    <section id="business-5" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeUp>
          <SectionHeading
            eyebrow="Business 5.0"
            title="Business 5.0 म्हणजे काय?"
            subtitle="Business 5.0 म्हणजे फक्त Technology नाही. ही Business ला Systematic, Structured आणि Scalable बनवण्याची Growth Approach आहे."
          />
        </FadeUp>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <FadeUp key={p.t} delay={i * 70}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-premium transition duration-300 hover:-translate-y-1 hover:border-gold/50">
                <span className="font-label text-3xl text-gradient-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="my-5 gold-rule" />
                <h3 className="label-eyebrow text-ink">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}