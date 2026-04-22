// Type augmentation for GA4 dataLayer and gtag
interface Window {
  dataLayer: Record<string, unknown>[];
  gtag: (...args: unknown[]) => void;
}
