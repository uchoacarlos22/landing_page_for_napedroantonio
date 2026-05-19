export const WHATSAPP_BASE = "https://wa.me/5511967796576";

export const buildWhatsAppLink = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
