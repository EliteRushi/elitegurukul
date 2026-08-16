import { FadeUp, SectionHeading, ShareButton, WhatsAppButton } from "./primitives";
import { WHATSAPP_GROUP_LINK } from "@/lib/webinar";

export function WhatsAppSection() {
  return (
    <section id="whatsapp" className="surface-ink py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <FadeUp>
          <SectionHeading
            dark
            eyebrow="Exclusive Group"
            title="Cashew Industry Business Owners साठी Exclusive WhatsApp Group"
            subtitle="Webinar Updates, Business Growth Insights आणि Important Information मिळवण्यासाठी आमच्या WhatsApp Group मध्ये Join करा."
          />
        </FadeUp>

        <FadeUp delay={110}>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton location="whatsapp_section" className="px-10 py-5 text-base" />
          </div>
          <p className="mt-4 text-xs text-ink-foreground/40">
            Group Link: {WHATSAPP_GROUP_LINK}
          </p>
        </FadeUp>

        <FadeUp delay={170}>
          <div className="mt-14 rounded-2xl border border-gold/25 bg-ink-foreground/5 px-6 py-8">
            <p className="text-base leading-relaxed text-ink-foreground/75">
              हा Webinar Video Cashew Industry मधील Business Owners, Partners आणि Professionals सोबत
              जरूर Share करा.
            </p>
            <div className="mt-6 flex justify-center">
              <ShareButton location="whatsapp_section" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}