import { useState, useCallback } from 'react';

interface UseHeroReturn {
 handleActionClick: (actionId: string, href: string) => void;
 trackAction: (actionId: string) => void;
 getWhatsAppLink: (message?: string) => string;
}

export const useHero = (): UseHeroReturn => {
 const [, setLastAction] = useState<string>('');

 const handleActionClick = useCallback((actionId: string, href: string) => {
  setLastAction(actionId);

  if (typeof window !== 'undefined' && 'gtag' in window) {
   (window as any).gtag('event', 'hero_action_click', {
    action_id: actionId,
    destination: href,
   });
  }

  if (href.startsWith('#')) {
   const element = document.getElementById(href.replace('#', ''));
   if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
   }
  }
 }, []);

 const trackAction = useCallback((actionId: string) => {
  setLastAction(actionId);

  if (typeof window !== 'undefined' && 'gtag' in window) {
   (window as any).gtag('event', 'hero_interaction', {
    action_id: actionId,
   });
  }
 }, []);

 const getWhatsAppLink = useCallback((customMessage?: string) => {
  const phone = '5548988591509';
  const defaultMessage = 'Olá, vim através do seu site Gomes Digital';
  const message = customMessage || defaultMessage;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
 }, []);

 return {
  handleActionClick,
  trackAction,
  getWhatsAppLink,
 };
};