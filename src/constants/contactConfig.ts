export const CONTACT_CONFIG = {
 whatsapp: {
  phoneNumber: '5548988591509',
  defaultMessage: 'Olá, vim através do seu site Gomes Digital',
  businessMessage: 'Olá! Gostaria de solicitar um orçamento para meu projeto.',
  supportMessage: 'Olá! Preciso de suporte técnico.',
 },
 email: {
  main: 'contato@gomesdigital.com.br',
  business: 'comercial@gomesdigital.com.br',
  support: 'suporte@gomesdigital.com.br',
 },
 phone: {
  main: '(48) 98859-1509',
  business: '+55 48 98859-1509',
 },
 location: {
  city: 'Alvorada',
  state: 'Rio Grande do Sul',
  country: 'Brasil',
  timezone: 'America/Sao_Paulo',
 },
} as const;

export const MESSAGE_TEMPLATES = {
 quote: 'Olá! Gostaria de solicitar um orçamento para meu projeto. Pode entrar em contato comigo?',
 support: 'Olá! Preciso de suporte técnico. Pode me ajudar?',
 general: 'Olá, vim através do seu site Gomes Digital e gostaria de conversar.',
 partnership: 'Olá! Tenho interesse em uma parceria. Podemos conversar?',
} as const;