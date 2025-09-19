import {
 FaRocket,
 FaUsers,
 FaCode,
 FaChartLine,
 FaShieldAlt,
 FaHeart,
 FaLightbulb,
 FaClock,
} from 'react-icons/fa';
import type { AboutContent } from '../types/about';

export const aboutContentData: AboutContent = {
 id: 'main-about',
 title: 'Missão',
 subtitle: 'Criando soluções que transformam negócios',
 paragraphs: [
  {
   id: 'mission-1',
   text: 'Na Gomes Digital, enxergamos além do código. Nossa missão é criar soluções digitais que sejam tecnicamente impecáveis e, acima de tudo, que impulsionem o crescimento do seu negócio.',
   highlights: ['Gomes Digital'],
   emphasis: 'normal',
  },
  {
   id: 'mission-2',
   text: 'Nascemos da paixão por tecnologia e design estratégico, e acreditamos que a verdadeira base para o sucesso online é a união desses dois mundos para gerar valor real e resultados mensuráveis para nossos clientes.',
   highlights: ['tecnologia e design estratégico', 'valor real', 'resultados mensuráveis'],
   emphasis: 'normal',
  },
 ],
 highlights: [
  { text: 'Gomes Digital', color: 'cyan', weight: 'bold' },
  { text: 'tecnologia e design estratégico', color: 'blue', weight: 'semibold' },
  { text: 'valor real', color: 'green', weight: 'semibold' },
  { text: 'resultados mensuráveis', color: 'cyan', weight: 'semibold' },
 ],
 stats: [
  {
   id: 'projects',
   number: '50+',
   label: 'Projetos Entregues',
   description: 'Sites e sistemas desenvolvidos',
   icon: <FaRocket size={24} />,
   color: 'text-cyan-400',
  },
  {
   id: 'clients',
   number: '30+',
   label: 'Clientes Satisfeitos',
   description: 'Parcerias de sucesso',
   icon: <FaUsers size={24} />,
   color: 'text-blue-400',
  },
  {
   id: 'years',
   number: '4+',
   label: 'Anos de Experiência',
   description: 'Crescimento constante',
   icon: <FaClock size={24} />,
   color: 'text-green-400',
  },
  {
   id: 'technologies',
   number: '15+',
   label: 'Tecnologias',
   description: 'Stack moderno e atualizado',
   icon: <FaCode size={24} />,
   color: 'text-purple-400',
  },
 ],
 values: [
  {
   id: 'quality',
   title: 'Qualidade',
   description: 'Código limpo, performance otimizada e design impecável em cada projeto.',
   icon: <FaShieldAlt size={32} />,
   color: 'text-cyan-400',
  },
  {
   id: 'innovation',
   title: 'Inovação',
   description: 'Sempre utilizando as tecnologias mais modernas e melhores práticas do mercado.',
   icon: <FaLightbulb size={32} />,
   color: 'text-yellow-400',
  },
  {
   id: 'results',
   title: 'Resultados',
   description: 'Focamos em soluções que geram impacto real no crescimento do seu negócio.',
   icon: <FaChartLine size={32} />,
   color: 'text-green-400',
  },
  {
   id: 'partnership',
   title: 'Parceria',
   description: 'Construímos relacionamentos duradouros baseados na confiança e transparência.',
   icon: <FaHeart size={32} />,
   color: 'text-pink-400',
  },
 ],
 timeline: [
  {
   id: '2020',
   year: '2020',
   title: 'Início da Jornada',
   description: 'Primeiros projetos focados em landing pages e sites institucionais.',
   milestone: true,
  },
  {
   id: '2021',
   year: '2021',
   title: 'Expansão dos Serviços',
   description: 'Adição de desenvolvimento de sistemas web e dashboards personalizados.',
   milestone: false,
  },
  {
   id: '2022',
   year: '2022',
   title: 'Foco em E-commerce',
   description: 'Especialização em soluções de comércio eletrônico e otimização de conversão.',
   milestone: true,
  },
  {
   id: '2023',
   year: '2023',
   title: 'Tecnologias Avançadas',
   description: 'Implementação de React, Next.js e outras tecnologias modernas.',
   milestone: false,
  },
  {
   id: '2024',
   year: '2024',
   title: 'Crescimento Consolidado',
   description: 'Mais de 50 projetos entregues e equipe especializada consolidada.',
   milestone: true,
  },
 ],
} as const;

// Variação para página "Sobre"
export const detailedAboutContent: AboutContent = {
 id: 'detailed-about',
 title: 'Nossa História',
 subtitle: 'Como tudo começou e onde estamos hoje',
 paragraphs: [
  {
   id: 'story-1',
   text: 'A Gomes Digital nasceu em 2020 com um propósito claro: democratizar o acesso a soluções web de alta qualidade para empresas de todos os tamanhos.',
   emphasis: 'strong',
  },
  {
   id: 'story-2',
   text: 'Ao longo dos anos, evoluímos de uma startup focada em sites institucionais para uma empresa especializada em soluções web complexas, sempre mantendo nosso compromisso com a excelência técnica e o sucesso dos nossos clientes.',
   emphasis: 'normal',
  },
  {
   id: 'story-3',
   text: 'Hoje, orgulhamo-nos de ser parceiros estratégicos de empresas que confiam em nossa expertise para transformar suas ideias em realidade digital.',
   emphasis: 'strong',
  },
 ],
 highlights: [
  { text: 'Gomes Digital', color: 'cyan', weight: 'bold' },
  { text: '2020', color: 'blue', weight: 'bold' },
  { text: 'democratizar o acesso', color: 'green', weight: 'semibold' },
  { text: 'excelência técnica', color: 'cyan', weight: 'semibold' },
  { text: 'parceiros estratégicos', color: 'purple', weight: 'semibold' },
 ],
 stats: aboutContentData.stats,
 values: aboutContentData.values,
 timeline: aboutContentData.timeline,
} as const;