import type { ServiceCategory } from '../types/service';

export const SERVICE_CATEGORIES: Record<ServiceCategory, string> = {
 development: 'Desenvolvimento',
 design: 'Design',
 optimization: 'Otimização',
 consulting: 'Consultoria',
 maintenance: 'Manutenção',
} as const;

export const SERVICE_CATEGORY_COLORS: Record<ServiceCategory, string> = {
 development: 'text-blue-400',
 design: 'text-purple-400',
 optimization: 'text-green-400',
 consulting: 'text-yellow-400',
 maintenance: 'text-orange-400',
} as const;