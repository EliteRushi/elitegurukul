import { FadeUp, FormButton, WhatsAppButton } from "./primitives";

export function FinalCta() {
  return (
    <section className="surface-ink relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 gold-rule" />
      <div className="mx-auto max-w-3xl px-5 text-center">
        <FadeUp>
          <h2 className="text-3xl leading-tight text-ink-foreground sm:text-[2.75rem]">
            Business फक्त चालवू नका.
            <span className="block text-gradient-gold">तो Systematically Scale करा.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={100}>
          <p className="mt-7 text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
            Cashew Industry मध्ये पुढच्या Growth साठी तुमचा Business आज कुठे आहे आणि उद्या कुठे
            पोहोचू शकतो — हे समजून घेण्याची ही संधी आहे.
          </p>
        </FadeUp>
        <FadeUp delay={160}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton location="final_cta" />
            <FormButton label="Fill The Form" location="final_cta" />
          </div>
          <p className="label-eyebrow mt-8 text-ink-foreground/45">
            Limited Business Growth Discussions Available
          </p>
        </FadeUp>
      </div>
    </section>
  );
}