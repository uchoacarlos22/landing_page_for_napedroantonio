// Type augmentation for GA4 dataLayer
interface Window {
  dataLayer: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
}
