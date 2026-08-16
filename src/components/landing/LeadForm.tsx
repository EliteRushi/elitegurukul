import { GOOGLE_FORM_EMBED_URL } from "@/lib/webinar";
import { FadeUp, FormButton, SectionHeading } from "./primitives";

const fields = [
  "Full Name",
  "Mobile Number",
  "WhatsApp Number",
  "Business Name",
  "Location",
  "Business Type",
  "Years in Business",
  "Approximate Annual Turnover",
  "Number of Employees",
  "Current Major Business Challenge",
  "Growth Goal",
  "Interested in Business Growth Discussion? Yes / No",
];

export function LeadForm() {
  return (
    <section id="form" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <FadeUp>
          <SectionHeading
            eyebrow="Business Growth Form"
            title="तुमच्या Business Growth बद्दल अधिक जाणून घ्या"
            subtitle="तुमच्या Business ची प्राथमिक माहिती आम्हाला द्या. आमची Team तुमच्याशी पुढील Business Growth Discussion साठी संपर्क करेल."
          />
        </FadeUp>

        <FadeUp delay={100}>
          <div className="mt-12 rounded-3xl border border-gold/30 bg-card p-3 shadow-premium sm:p-6">
            {GOOGLE_FORM_EMBED_URL ? (
              <iframe
                src={GOOGLE_FORM_EMBED_URL}
                title="Business details form"
                loading="lazy"
                className="h-[1200px] w-full rounded-xl border-0"
              />
            ) : (
              <div className="rounded-2xl bg-cream px-6 py-10 text-center sm:px-10">
                <p className="label-eyebrow text-gold-deep">
                  [PASTE GOOGLE FORM EMBED LINK HERE]
                </p>
                <p className="mt-6 text-lg font-semibold text-ink">
                  Form भरण्यासाठी खालील Button वर Click करा
                </p>
                <div className="mt-7 flex justify-center">
                  <FormButton location="form_section" className="px-10 py-5 text-base" />
                </div>
                <div className="my-8 gold-rule" />
                <p className="label-eyebrow text-muted-foreground">Form मध्ये विचारली जाणारी माहिती</p>
                <ul className="mx-auto mt-5 grid max-w-2xl gap-2 text-left sm:grid-cols-2">
                  {fields.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}