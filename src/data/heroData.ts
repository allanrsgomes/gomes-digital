import type { HeroContent, HeroAction } from '../types/hero';
import { HERO_CONFIG, SOCIAL_LINKS } from '../constants/heroConfig';

export const heroContentData: HeroContent = {
 id: 'main-hero',
 title: 'Gomes Digital',
 subtitle: 'Construindo o Futuro Digital do Seu Negócio',
 description: 'Na Gomes Digital, transformamos suas ideias em soluções web de alta performance. Criamos sites, landing pages e sistemas sob medida que impulsionam resultados e encantam usuários.',
 highlightText: 'Futuro Digital',
 image: {
  src: 'https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/avatar.png',
  alt: 'Ícone Gomes Digital - Representação visual da empresa',
  width: HERO_CONFIG.image.defaultWidth,
  height: HERO_CONFIG.image.defaultHeight,
 },
 badges: ['Sites Responsivos', 'Alta Performance', 'SEO Otimizado'],
} as const;

export const heroActionsData: HeroAction[] = [
 {
  id: 'portfolio',
  text: 'Veja nosso Portfólio',
  href: '#portfolio',
  variant: 'primary',
  ariaLabel: 'Navegar para seção de portfólio',
 },
 {
  id: 'quote',
  text: 'Solicite um Orçamento',
  href: SOCIAL_LINKS.whatsapp(
   HERO_CONFIG.whatsapp.phoneNumber,
   HERO_CONFIG.whatsapp.defaultMessage
  ),
  variant: 'outline',
  isExternal: true,
  ariaLabel: 'Entrar em contato via WhatsApp para solicitar orçamento',
 },
 {
  id: 'contact',
  text: 'Entre em Contato',
  href: '#contato',
  variant: 'secondary',
  ariaLabel: 'Navegar para seção de contato',
 },
] as const;

export const alternativeHeroContent: HeroContent = {
 id: 'about-hero',
 title: 'Sobre a Gomes Digital',
 subtitle: 'Nossa Missão é o Seu Sucesso Digital',
 description: 'Somos especialistas em desenvolvimento web com foco em resultados. Nossa equipe combina criatividade, tecnologia e estratégia para criar experiências digitais que convertem.',
 highlightText: 'Sucesso Digital',
 image: {
  src: 'https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/team-avatar.png',
  alt: 'Equipe Gomes Digital',
  width: 350,
  height: 280,
 },
} as const;