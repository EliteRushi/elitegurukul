/**
 * Conversion tracking helper.
 * Fires into Meta Pixel (fbq), Google Analytics / GTM (gtag + dataLayer)
 * whenever those scripts are present. Safe no-op until the tags are added.
 */
type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type TrackEvent =
  | "PageView"
  | "VideoStart"
  | "Video25"
  | "Video50"
  | "Video75"
  | "VideoComplete"
  | "GoogleFormClick"
  | "WhatsAppGroupClick"
  | "ShareClick";

export function track(event: TrackEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...params });
    window.gtag?.("event", event, params);
    window.fbq?.(event === "PageView" ? "track" : "trackCustom", event, params);
  } catch {
    /* tracking must never break the page */
  }
}