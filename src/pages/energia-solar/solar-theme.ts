// Solar-specific theme constants
export const colors = {
  navy: '#1a2e4e',
  navyLight: '#25416d',
  navyMid: '#1e365b',
  solar: '#daa520',
  solarLight: '#eed07a',
  solarDark: '#b88a1a',
  white: '#FFFFFF',
  offWhite: '#F8F9FA',
  gray: '#A0AEC0',
  green: '#00C896',
  border: 'rgba(218, 165, 32, 0.2)',
} as const;

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
};

export const WA_NUMBER = '5511967796576';
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;
export const GOOGLE_REVIEW = 'https://g.page/r/CaFmaTaVcaOsEAE/review';
export const WEB3FORMS_KEY = 'd88e0a50-0410-4c8b-9254-2f67d138bc8c';

export const trackWA = (label: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_whatsapp', {
      event_category: 'contato',
      event_label: label,
    });
  }
};
