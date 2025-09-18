import {
 FaCode,
 FaPaintBrush,
 FaRocket,
 FaMobile,
 FaUsers,
 FaTools
} from 'react-icons/fa';
import type { Service } from '../types/service';

const ICON_SIZE = 40;

export const servicesData: Service[] = [
 {
  id: 'web-development',
  title: 'Desenvolvimento Web',
  description: 'Criamos sites e sistemas web robustos, escaláveis e otimizados para performance, utilizando as tecnologias mais modernas do mercado.',
  icon: <FaCode size={ICON_SIZE} className="text-cyan-400" />,
  category: 'development',
  features: [
   'Sites responsivos',
   'Aplicações web complexas',
   'E-commerce',
   'Sistemas personalizados'
  ],
  isPopular: true,
 },
 {
  id: 'ui-ux-design',
  title: 'UI/UX Design',
  description: 'Projetamos interfaces intuitivas e atraentes, focadas na experiência do usuário para garantir engajamento e conversão.',
  icon: <FaPaintBrush size={ICON_SIZE} className="text-cyan-400" />,
  category: 'design',
  features: [
   'Design de interfaces',
   'Prototipagem',
   'Testes de usabilidade',
   'Identidade visual'
  ],
 },
 {
  id: 'seo-optimization',
  title: 'Otimização e SEO',
  description: 'Melhoramos a velocidade do seu site e aplicamos as melhores práticas de SEO para garantir que seu negócio seja encontrado no Google.',
  icon: <FaRocket size={ICON_SIZE} className="text-cyan-400" />,
  category: 'optimization',
  features: [
   'Otimização de performance',
   'SEO técnico',
   'Análise de métricas',
   'Relatórios detalhados'
  ],
 },
 {
  id: 'mobile-development',
  title: 'Desenvolvimento Mobile',
  description: 'Desenvolvemos aplicações mobile nativas e híbridas para iOS e Android, com foco em performance e experiência do usuário.',
  icon: <FaMobile size={ICON_SIZE} className="text-cyan-400" />,
  category: 'development',
  features: [
   'Apps nativos',
   'Apps híbridos',
   'React Native',
   'Flutter'
  ],
 },
 {
  id: 'consulting',
  title: 'Consultoria Técnica',
  description: 'Oferecemos consultoria especializada para ajudar sua empresa a tomar as melhores decisões tecnológicas.',
  icon: <FaUsers size={ICON_SIZE} className="text-cyan-400" />,
  category: 'consulting',
  features: [
   'Arquitetura de software',
   'Code review',
   'Mentoria técnica',
   'Planejamento de projetos'
  ],
 },
 {
  id: 'maintenance',
  title: 'Manutenção e Suporte',
  description: 'Mantemos seus sistemas funcionando perfeitamente com suporte técnico contínuo e atualizações regulares.',
  icon: <FaTools size={ICON_SIZE} className="text-cyan-400" />,
  category: 'maintenance',
  features: [
   'Suporte 24/7',
   'Monitoramento',
   'Backup automático',
   'Atualizações de segurança'
  ],
 },
] as const;

export const mainServicesData: Service[] = servicesData.slice(0, 3);