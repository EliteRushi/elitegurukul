import heroImage from "@/assets/hero-factory.jpg";
import { Eyebrow, FadeUp, GhostButton, WhatsAppButton } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="Modern cashew processing unit with stainless steel machinery"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.13_0.01_60/0.96)_0%,oklch(0.13_0.01_60/0.82)_45%,oklch(0.13_0.01_60/0.45)_100%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <FadeUp>
            <Eyebrow tone="ink">Special Webinar for Cashew Industry</Eyebrow>
          </FadeUp>

          <FadeUp delay={90}>
            <h1 className="mt-6 text-[2rem] leading-[1.2] text-ink-foreground sm:text-5xl lg:text-[3.6rem]">
              Cashew Business चालतोय…
              <span className="mt-3 block text-gradient-gold">
                पण तो Scale करण्यासाठी तुमच्याकडे Clear Growth Roadmap आहे का?
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={160}>
            <div className="mt-8 max-w-2xl space-y-4 border-l border-gold/40 pl-5 text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
              <p>
                Raw Cashew Procurement पासून Processing, Labour, Quality, Sales, Finance आणि
                Compliance पर्यंत — Business Owner अनेक Operations मध्ये अडकतो.
              </p>
              <p>
                Business मोठा करण्यासाठी फक्त मेहनत नाही, तर Strategy, Systems, Team, Numbers आणि
                Growth Roadmap आवश्यक आहे.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={230}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppButton location="hero" />
              <GhostButton href="#video">Watch The Video</GhostButton>
            </div>
          </FadeUp>

          <FadeUp delay={300}>
            <p className="label-eyebrow mt-10 text-ink-foreground/50">
              Business Growth &amp; Business 5.0 &nbsp;•&nbsp; CA Ram Patil &nbsp;•&nbsp; Marathi
            </p>
          </FadeUp>
        </div>
      </div>
      <div className="gold-rule" />
    </section>
  );
}