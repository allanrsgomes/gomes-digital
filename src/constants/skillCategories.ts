import type { SkillCategory } from '../types/skill';

export const SKILL_CATEGORIES: Record<SkillCategory, string> = {
 frontend: 'Frontend',
 backend: 'Backend',
 database: 'Database',
 testing: 'Testing',
 tools: 'Tools',
 deployment: 'Deployment',
} as const;

export const SKILL_CATEGORY_COLORS: Record<SkillCategory, string> = {
 frontend: 'text-blue-400',
 backend: 'text-green-400',
 database: 'text-purple-400',
 testing: 'text-yellow-400',
 tools: 'text-orange-400',
 deployment: 'text-pink-400',
} as const;