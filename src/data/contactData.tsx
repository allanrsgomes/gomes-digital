import {
 FaWhatsapp,
 FaEnvelope,
 FaPhone,
 FaLinkedin,
 FaGithub,
 FaInstagram,
 FaComment
} from 'react-icons/fa';
import type { ContactInfo, ContactMethod } from '../types/contact';
import { CONTACT_CONFIG, MESSAGE_TEMPLATES } from '../constants/contactConfig';

export const contactInfoData: ContactInfo = {
 id: 'main-contact',
 title: 'Entre em Contato',
 subtitle: 'Vamos conversar sobre seu projeto',
 description: 'Tem alguma pergunta ou proposta? Sinta-se à vontade para me enviar uma mensagem. Respondo rapidamente e estou sempre disposto a ajudar.',
 phone: CONTACT_CONFIG.phone.business,
 email: CONTACT_CONFIG.email.main,
 address: {
  city: CONTACT_CONFIG.location.city,
  state: CONTACT_CONFIG.location.state,
  country: CONTACT_CONFIG.location.country,
 },
 businessHours: {
  weekdays: '09:00 - 18:00',
  weekends: '10:00 - 16:00',
  timezone: CONTACT_CONFIG.location.timezone,
 },
 socialLinks: [
  {
   id: 'linkedin',
   name: 'LinkedIn',
   url: 'https://linkedin.com/in/gomesdigital',
   icon: <FaLinkedin size={24} />,
   color: 'text-blue-600',
   username: '@gomesdigital',
  },
  {
   id: 'github',
   name: 'GitHub',
   url: 'https://github.com/gomesdigital',
   icon: <FaGithub size={24} />,
   color: 'text-gray-400',
   username: '@gomesdigital',
  },
  {
   id: 'instagram',
   name: 'Instagram',
   url: 'https://instagram.com/gomesdigital',
   icon: <FaInstagram size={24} />,
   color: 'text-pink-500',
   username: '@gomesdigital',
  },
 ],
} as const;

export const contactMethodsData: ContactMethod[] = [
 {
  id: 'whatsapp',
  name: 'WhatsApp',
  description: 'Resposta rápida e direta',
  href: `https://wa.me/${CONTACT_CONFIG.whatsapp.phoneNumber}?text=${encodeURIComponent(MESSAGE_TEMPLATES.general)}`,
  icon: <FaWhatsapp size={24} />,
  variant: 'primary',
  isExternal: true,
  color: 'bg-green-500 hover:bg-green-600',
 },
 {
  id: 'email',
  name: 'E-mail',
  description: 'Para projetos e propostas',
  href: `mailto:${CONTACT_CONFIG.email.main}?subject=Contato através do site`,
  icon: <FaEnvelope size={24} />,
  variant: 'secondary',
  isExternal: true,
  color: 'bg-blue-500 hover:bg-blue-600',
 },
 {
  id: 'phone',
  name: 'Telefone',
  description: 'Ligue diretamente',
  href: `tel:${CONTACT_CONFIG.whatsapp.phoneNumber}`,
  icon: <FaPhone size={24} />,
  variant: 'outline',
  isExternal: true,
  color: 'border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900',
 },
] as const;

// Variação com mais métodos de contato
export const extendedContactMethods: ContactMethod[] = [
 ...contactMethodsData,
 {
  id: 'quote-whatsapp',
  name: 'Solicitar Orçamento',
  description: 'Via WhatsApp com template',
  href: `https://wa.me/${CONTACT_CONFIG.whatsapp.phoneNumber}?text=${encodeURIComponent(MESSAGE_TEMPLATES.quote)}`,
  icon: <FaComment size={24} />,
  variant: 'primary',
  isExternal: true,
  color: 'bg-cyan-500 hover:bg-cyan-600',
 },
] as const;