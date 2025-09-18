import {
 FaReact,
 FaJsSquare,
 FaHtml5,
 FaCss3Alt,
 FaNodeJs,
 FaSass,
 FaGitAlt,
 FaFigma,
 FaGithub,
 FaAngular,
} from 'react-icons/fa';
import {
 SiTypescript,
 SiTailwindcss,
 SiNextdotjs,
 SiVite,
 SiRedux,
 SiExpress,
 SiPrisma,
 SiPostgresql,
 SiMongodb,
 SiFirebase,
 SiJest,
 SiCypress,
 SiVercel,
 SiNgrx,
} from 'react-icons/si';
import type { Skill } from '../types/skill';

const ICON_SIZE = 40;

export const skillsData: Skill[] = [
 // Frontend
 {
  id: 'javascript',
  icon: <FaJsSquare size={ICON_SIZE} />,
  name: 'JavaScript',
  category: 'frontend',
 },
 {
  id: 'typescript',
  icon: <SiTypescript size={ICON_SIZE} />,
  name: 'TypeScript',
  category: 'frontend',
 },
 {
  id: 'html5',
  icon: <FaHtml5 size={ICON_SIZE} />,
  name: 'HTML5',
  category: 'frontend',
 },
 {
  id: 'css3',
  icon: <FaCss3Alt size={ICON_SIZE} />,
  name: 'CSS3',
  category: 'frontend',
 },
 {
  id: 'react',
  icon: <FaReact size={ICON_SIZE} />,
  name: 'React',
  category: 'frontend',
 },
 {
  id: 'nextjs',
  icon: <SiNextdotjs size={ICON_SIZE} />,
  name: 'Next.js',
  category: 'frontend',
 },
 {
  id: 'angular',
  icon: <FaAngular size={ICON_SIZE} />,
  name: 'Angular',
  category: 'frontend',
 },
 {
  id: 'vite',
  icon: <SiVite size={ICON_SIZE} />,
  name: 'Vite',
  category: 'tools',
 },
 {
  id: 'redux',
  icon: <SiRedux size={ICON_SIZE} />,
  name: 'Redux',
  category: 'frontend',
 },
 {
  id: 'ngrx',
  icon: <SiNgrx size={ICON_SIZE} />,
  name: 'NgRx',
  category: 'frontend',
 },
 {
  id: 'tailwindcss',
  icon: <SiTailwindcss size={ICON_SIZE} />,
  name: 'Tailwind CSS',
  category: 'frontend',
 },
 {
  id: 'sass',
  icon: <FaSass size={ICON_SIZE} />,
  name: 'Sass',
  category: 'frontend',
 },

 // Backend
 {
  id: 'nodejs',
  icon: <FaNodeJs size={ICON_SIZE} />,
  name: 'Node.js',
  category: 'backend',
 },
 {
  id: 'express',
  icon: <SiExpress size={ICON_SIZE} />,
  name: 'Express',
  category: 'backend',
 },
 {
  id: 'prisma',
  icon: <SiPrisma size={ICON_SIZE} />,
  name: 'Prisma',
  category: 'backend',
 },

 // Database
 {
  id: 'postgresql',
  icon: <SiPostgresql size={ICON_SIZE} />,
  name: 'PostgreSQL',
  category: 'database',
 },
 {
  id: 'mongodb',
  icon: <SiMongodb size={ICON_SIZE} />,
  name: 'MongoDB',
  category: 'database',
 },
 {
  id: 'firebase',
  icon: <SiFirebase size={ICON_SIZE} />,
  name: 'Firebase',
  category: 'database',
 },

 // Testing
 {
  id: 'jest',
  icon: <SiJest size={ICON_SIZE} />,
  name: 'Jest',
  category: 'testing',
 },
 {
  id: 'cypress',
  icon: <SiCypress size={ICON_SIZE} />,
  name: 'Cypress',
  category: 'testing',
 },

 // Tools
 {
  id: 'git',
  icon: <FaGitAlt size={ICON_SIZE} />,
  name: 'Git',
  category: 'tools',
 },
 {
  id: 'github',
  icon: <FaGithub size={ICON_SIZE} />,
  name: 'GitHub',
  category: 'tools',
 },
 {
  id: 'figma',
  icon: <FaFigma size={ICON_SIZE} />,
  name: 'Figma',
  category: 'tools',
 },

 // Deployment
 {
  id: 'vercel',
  icon: <SiVercel size={ICON_SIZE} />,
  name: 'Vercel',
  category: 'deployment',
 },
] as const;