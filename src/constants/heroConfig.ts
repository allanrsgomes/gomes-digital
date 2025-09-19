export const HERO_CONFIG = {
 whatsapp: {
  phoneNumber: '5548988591509',
  defaultMessage: 'Olá, vim através do seu site Gomes Digital',
 },
 image: {
  defaultWidth: 400,
  defaultHeight: 300,
  aspectRatio: '4/3',
 },
 animation: {
  duration: 600,
  delay: 200,
 },
} as const;

export const SOCIAL_LINKS = {
 whatsapp: (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
 email: (email: string, subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`,
 phone: (phone: string) => `tel:${phone}`,
} as const;