import { FadeUp, SectionHeading } from "./primitives";

const problems = [
  { t: "Owner Dependency", d: "प्रत्येक निर्णयासाठी Owner वर अवलंबून राहणं" },
  { t: "Rising Costs", d: "Processing, Labour आणि Operations चा वाढता खर्च" },
  { t: "Working Capital", d: "Cash Flow आणि Working Capital Management मधील अडचणी" },
  { t: "Team & Accountability", d: "Right Person – Right Responsibility नसणे" },
  { t: "Compliance", d: "GST, RCM आणि इतर Compliance च्या समस्या" },
  { t: "Market Competition", d: "फक्त Commodity विकण्यापेक्षा Value Addition ची गरज" },
  { t: "Lack of Systems", d: "SOPs, MIS, CRM आणि Process Systems ची कमतरता" },
  { t: "Growth Clarity", d: "New Product, New Market, Expansion यासाठी Clear Roadmap नसणे" },
];

export function Problems() {
  return (
    <section id="problems" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeUp>
          <SectionHeading
            eyebrow="Industry Reality"
            title="Cashew Industry मध्ये तुमचा Business या समस्यांना सामोरा जातोय का?"
          />
        </FadeUp>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <FadeUp key={p.t} delay={i * 60}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 shadow-premium transition duration-300 hover:-translate-y-1 hover:border-gold/50">
                <span className="label-eyebrow text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg text-ink">{p.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}