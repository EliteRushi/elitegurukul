import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { VideoSection } from "@/components/landing/VideoSection";
import { Problems } from "@/components/landing/Problems";
import { TheShift } from "@/components/landing/TheShift";
import { Business50 } from "@/components/landing/Business50";
import { GrowthRoadmap } from "@/components/landing/GrowthRoadmap";
import { HealthCheckup } from "@/components/landing/HealthCheckup";
import { WhoShouldJoin, SessionCard } from "@/components/landing/WhoAndSession";
import { Speaker, WhyEliteGurukul } from "@/components/landing/SpeakerAndWhy";
import { LeadForm } from "@/components/landing/LeadForm";
import { WhatsAppSection } from "@/components/landing/WhatsAppSection";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";
import { track } from "@/lib/tracking";

const TITLE = "Cashew Business Growth Webinar | Business 5.0 | Elite Gurukul";
const DESCRIPTION =
  "Join the Business Growth & Business 5.0 Webinar specially designed for Cashew Industry business owners. Learn about systems, profitability, team, value addition, AI and scalable business growth.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Cashew Business Growth, Cashew Industry, Cashew Business, Cashew Processing Business, Cashew Industry Webinar, Business Growth Webinar, Business 5.0, Cashew Business Strategy, Cashew Business Scaling, Food Processing Business Growth, MSME Business Growth",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Cashew Industry Business Growth Webinar — Business 5.0",
          description: DESCRIPTION,
          eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
          inLanguage: "mr",
          performer: { "@type": "Person", name: "CA Ram Patil" },
          organizer: {
            "@type": "Organization",
            name: "Elite Gurukul Limited",
            url: "https://www.elitegurukul.com/",
          },
        }),
      },
    ],
  }),
});

function Index() {
  useEffect(() => {
    track("PageView", { page: "cashew_webinar_landing" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <VideoSection />
        <Problems />
        <TheShift />
        <Business50 />
        <GrowthRoadmap />
        <HealthCheckup />
        <WhoShouldJoin />
        <SessionCard />
        <Speaker />
        <WhyEliteGurukul />
        <LeadForm />
        <WhatsAppSection />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </div>
  );
}
