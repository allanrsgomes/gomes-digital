import type { ProjectCategory, ProjectStatus } from '../types/project';

export const PROJECT_CATEGORIES: Record<ProjectCategory, string> = {
 'web-app': 'Aplicação Web',
 'landing-page': 'Landing Page',
 'dashboard': 'Dashboard',
 'e-commerce': 'E-commerce',
 'mobile-app': 'App Mobile',
 'tool': 'Ferramenta',
 'portfolio': 'Portfólio',
} as const;

export const PROJECT_STATUS: Record<ProjectStatus, string> = {
 'completed': 'Concluído',
 'in-progress': 'Em Desenvolvimento',
 'maintenance': 'Em Manutenção',
 'archived': 'Arquivado',
} as const;

export const PROJECT_STATUS_COLORS: Record<ProjectStatus, string> = {
 'completed': 'bg-green-500',
 'in-progress': 'bg-blue-500',
 'maintenance': 'bg-yellow-500',
 'archived': 'bg-gray-500',
} as const;