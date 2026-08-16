import ownerPlant from "@/assets/owner-plant.jpg";
import { FadeUp, FormButton, SectionHeading } from "./primitives";

const areas = [
  "Strategy",
  "Finance",
  "Sales",
  "Marketing",
  "Operations",
  "Team",
  "Systems",
  "Compliance",
  "Technology",
  "Profitability",
];

const steps = [
  { n: "01", t: "Identify", d: "Business Problem" },
  { n: "02", t: "Implement", d: "Action Plan + Systems" },
  { n: "03", t: "Measure", d: "Performance + Results" },
];

export function HealthCheckup() {
  return (
    <>
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <FadeUp>
            <img
              src={ownerPlant}
              alt="Business owner reviewing production data inside a food processing plant"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full rounded-2xl border border-gold/25 object-cover shadow-premium"
            />
          </FadeUp>

          <FadeUp delay={100}>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Business Health Checkup"
                title="तुमच्या Business ची Health तुम्हाला किती माहिती आहे?"
                subtitle="Business Health Checkup मध्ये तपासले जाऊ शकते:"
              />
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-gold/40 bg-card px-4 py-2 text-sm font-medium text-ink"
                  >
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-l border-gold pl-5 text-lg font-semibold text-ink">
                Analysis नंतर तयार होतो — Clear Business Action Plan.
              </p>
              <div className="mt-8">
                <FormButton label="Get Business Growth Guidance" location="health_checkup" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <FadeUp>
            <SectionHeading eyebrow="Business Action Plan" title="Problem → Solution → Result" />
          </FadeUp>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 90}>
                <article className="h-full rounded-2xl border border-border bg-card p-8 shadow-premium">
                  <span className="font-label text-4xl text-gradient-gold">{s.n}</span>
                  <h3 className="label-eyebrow mt-5 text-ink">{s.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                </article>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={200}>
            <p className="mx-auto mt-10 max-w-2xl text-center leading-relaxed text-muted-foreground">
              प्रत्येक Business साठी एकच Formula नसतो. म्हणून Growth Plan तुमच्या Business च्या
              Current Position आणि Future Goals नुसार असायला हवा.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}