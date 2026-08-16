import { useState } from "react";
import { FadeUp, SectionHeading } from "./primitives";

const faqs = [
  {
    q: "हा Webinar कोणासाठी आहे?",
    a: "Cashew Processing Unit Owners, Manufacturers, Traders आणि Food Processing / MSME Business Owners यांच्यासाठी — ज्यांना Business Systematically Scale करायचा आहे.",
  },
  {
    q: "Cashew Industry बाहेरील Food Processing businesses सहभागी होऊ शकतात का?",
    a: "होय. Business 5.0 ची Framework कोणत्याही Manufacturing किंवा Food Processing Business ला लागू होते.",
  },
  {
    q: "Webinar Online आहे का?",
    a: "Mode आणि Schedule ची अंतिम माहिती [ONLINE / OFFLINE] म्हणून Update केली जाईल. Confirm details WhatsApp Group मध्ये दिली जातील.",
  },
  {
    q: "Business 5.0 म्हणजे काय?",
    a: "Business ला Strategy, Organisation Structure, Systems & SOPs, Team Accountability, Numbers & MIS आणि AI / Technology या आधारावर Structured व Scalable बनवण्याची Growth Approach.",
  },
  {
    q: "Business Growth discussion साठी कोणती माहिती द्यावी लागेल?",
    a: "Business Name, Location, Business Type, Years in Business, Turnover Range, Team Size, Current Challenge आणि Growth Goal — ही प्राथमिक माहिती Google Form मध्ये द्यावी लागेल.",
  },
  {
    q: "WhatsApp Group कशासाठी आहे?",
    a: "Webinar Updates, Business Growth Insights आणि Important Information Cashew Industry Business Owners पर्यंत पोहोचवण्यासाठी.",
  },
  {
    q: "Business Health Checkup म्हणजे काय?",
    a: "Strategy, Finance, Sales, Marketing, Operations, Team, Systems, Compliance, Technology आणि Profitability या क्षेत्रांचा Structured Review — ज्यातून Clear Action Plan तयार होतो.",
  },
  {
    q: "Webinar नंतर पुढील प्रक्रिया काय आहे?",
    a: "Webinar → Business Health Checkup → Business Action Plan → Implementation Support अशी पुढील प्रक्रिया असते.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <FadeUp>
          <SectionHeading eyebrow="FAQ" title="वारंवार विचारले जाणारे प्रश्न" />
        </FadeUp>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <FadeUp key={f.q} delay={i * 40}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-card transition-colors ${
                    isOpen ? "border-gold/50" : "border-border"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-ink">{f.q}</span>
                    <span
                      className={`shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}