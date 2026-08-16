import speaker from "@/assets/speaker.jpg";
import { FadeUp, SectionHeading } from "./primitives";

const reasons = [
  { t: "Practical Business Approach", d: "प्रत्यक्ष Business परिस्थितीवर आधारित Guidance." },
  { t: "System-Driven Growth", d: "SOPs, Process आणि MIS वर आधारित Structure." },
  { t: "Industry-Focused Solutions", d: "Cashew व Food Processing संदर्भात Specific दृष्टिकोन." },
  { t: "Business Consultancy", d: "Strategy पासून Implementation पर्यंत Support." },
  { t: "Team & Process Development", d: "Right Person, Right Responsibility, Right KPI." },
  { t: "Growth & Scalability Focus", d: "Owner Dependency कमी करून Scalable Business." },
];

export function Speaker() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[0.85fr_1fr]">
        <FadeUp>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl border border-gold/30" aria-hidden="true" />
            <img
              src={speaker}
              alt="CA Ram Patil, Founder of Elite Gurukul Limited"
              loading="lazy"
              width={912}
              height={1104}
              className="relative w-full rounded-2xl object-cover shadow-premium"
            />
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Speaker"
              title="Learn From Practical Business Experience"
            />
            <p className="mt-8 font-label text-2xl text-ink">CA Ram Patil</p>
            <p className="label-eyebrow mt-2 text-gold-deep">Founder – Elite Gurukul Limited</p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              CA Ram Patil is a Chartered Accountant, Investment Banker, Entrepreneur and Business
              Mentor focused on transforming businesses into structured and scalable organisations.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function WhyEliteGurukul() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeUp>
          <SectionHeading eyebrow="Why Elite Gurukul" title="Why Elite Gurukul Limited?" />
        </FadeUp>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <FadeUp key={r.t} delay={i * 70}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-premium transition duration-300 hover:-translate-y-1 hover:border-gold/50">
                <h3 className="text-lg text-ink">{r.t}</h3>
                <div className="my-4 gold-rule" />
                <p className="text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}