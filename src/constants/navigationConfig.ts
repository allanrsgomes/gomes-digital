export const DEFAULT_LOGO_URL = 'https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/logo-white.png';
export const DEFAULT_LOGO_ALT = 'Gomes Digital Logo';
export const DEFAULT_HOME_HREF = '/';

export const navigationConfig = {
 logo: {
  url: DEFAULT_LOGO_URL,
  alt: DEFAULT_LOGO_ALT,
  maxWidth: 120,
 },
 mobile: {
  breakpoint: 'md',
  animationDuration: 300,
 },
 zIndex: 50,
} as const;