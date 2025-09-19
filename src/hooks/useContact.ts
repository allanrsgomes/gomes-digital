import { useCallback } from 'react';
import { CONTACT_CONFIG, MESSAGE_TEMPLATES } from '../constants/contactConfig';

interface UseContactReturn {
 buildWhatsAppLink: (template?: keyof typeof MESSAGE_TEMPLATES, customMessage?: string) => string;
 buildEmailLink: (subject?: string, body?: string) => string;
 handleContactMethod: (methodId: string, href: string) => void;
 formatPhoneNumber: (phone: string) => string;
 getBusinessHours: () => { isOpen: boolean; nextOpen?: string };
}

export const useContact = (): UseContactReturn => {
 const buildWhatsAppLink = useCallback((
  template: keyof typeof MESSAGE_TEMPLATES = 'general',
  customMessage?: string
 ) => {
  const message = customMessage || MESSAGE_TEMPLATES[template];
  return `https://wa.me/${CONTACT_CONFIG.whatsapp.phoneNumber}?text=${encodeURIComponent(message)}`;
 }, []);

 const buildEmailLink = useCallback((
  subject = 'Contato através do site',
  body = ''
 ) => {
  const params = new URLSearchParams();
  params.append('subject', subject);
  if (body) params.append('body', body);

  return `mailto:${CONTACT_CONFIG.email.main}?${params.toString()}`;
 }, []);

 const handleContactMethod = useCallback((methodId: string, href: string) => {

  if (typeof window !== 'undefined' && 'gtag' in window) {
   (window as any).gtag('event', 'contact_method_click', {
    method_id: methodId,
    destination: href,
   });
  }

  console.log(`Contact method ${methodId} clicked: ${href}`);
 }, []);

 const formatPhoneNumber = useCallback((phone: string) => {

  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

  if (match) {
   return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phone;
 }, []);

 const getBusinessHours = useCallback(() => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay();
  const isWeekday = currentDay >= 1 && currentDay <= 5;
  const isWeekend = currentDay === 0 || currentDay === 6;

  let isOpen = false;

  if (isWeekday && currentHour >= 9 && currentHour < 18) {
   isOpen = true;
  } else if (isWeekend && currentHour >= 10 && currentHour < 16) {
   isOpen = true;
  }

  return { isOpen };
 }, []);

 return {
  buildWhatsAppLink,
  buildEmailLink,
  handleContactMethod,
  formatPhoneNumber,
  getBusinessHours,
 };
};