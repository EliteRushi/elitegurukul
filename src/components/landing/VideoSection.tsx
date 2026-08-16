import { useEffect, useRef, useState } from "react";
import { FadeUp, SectionHeading, WhatsAppButton } from "./primitives";
import { track } from "@/lib/tracking";
import { VIDEO_EMBED_URL } from "@/lib/webinar";
import kernels from "@/assets/cashew-kernels.jpg";

/** Fires VideoStart / 25 / 50 / 75 / Complete once each, driven by playback time. */
function useVideoMilestones() {
  const fired = useRef<Set<string>>(new Set());
  return (progress: number, started: boolean) => {
    const fire = (name: Parameters<typeof track>[0]) => {
      if (fired.current.has(name)) return;
      fired.current.add(name);
      track(name, { location: "video_section" });
    };
    if (started) fire("VideoStart");
    if (progress >= 0.25) fire("Video25");
    if (progress >= 0.5) fire("Video50");
    if (progress >= 0.75) fire("Video75");
    if (progress >= 0.97) fire("VideoComplete");
  };
}

export function VideoSection() {
  const [activated, setActivated] = useState(false);
  const report = useVideoMilestones();

  useEffect(() => {
    if (activated) report(0, true);
  }, [activated, report]);

  return (
    <section id="video" className="surface-ink relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeUp>
          <SectionHeading
            dark
            eyebrow="Informative Video"
            title="Cashew Business पुढच्या Level वर नेण्यासाठी काय बदल आवश्यक आहेत?"
          />
        </FadeUp>

        <FadeUp delay={100}>
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-gold/25 bg-black/40 p-2 shadow-premium sm:p-3">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
              {VIDEO_EMBED_URL && activated ? (
                <iframe
                  src={`${VIDEO_EMBED_URL}${VIDEO_EMBED_URL.includes("?") ? "&" : "?"}autoplay=1`}
                  title="CA Ram Patil – Business Growth & Business 5.0 for Cashew Industry"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActivated(true)}
                  className="group relative h-full w-full"
                  aria-label="Play the webinar video"
                >
                  <img
                    src={kernels}
                    alt="Cashew kernels in a processing tray"
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover opacity-45 transition duration-500 group-hover:opacity-60"
                  />
                  <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold shadow-gold transition group-hover:scale-105">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1 h-8 w-8 text-primary-foreground"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <span className="label-eyebrow text-ink-foreground/80">
                      CA Ram Patil — Business Growth &amp; Business 5.0
                    </span>
                    {!VIDEO_EMBED_URL ? (
                      <span className="rounded-full border border-gold/40 px-4 py-1.5 text-xs text-ink-foreground/60">
                        [PASTE VIDEO EMBED LINK]
                      </span>
                    ) : null}
                  </span>
                </button>
              )}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={160}>
          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
              हा Video पूर्ण पाहा आणि समजून घ्या: आजच्या Cashew Industry मध्ये Business Growth साठी
              कोणते Systems, Structures आणि Strategies आवश्यक आहेत.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton location="video_section" label="Join The WhatsApp Group" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}