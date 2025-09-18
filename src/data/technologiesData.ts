import type { Technology } from '../types/project';

export const technologiesData: Record<string, Technology> = {
 'Angular': { name: 'Angular', category: 'frontend', color: 'bg-red-500' },
 'React': { name: 'React', category: 'frontend', color: 'bg-blue-500' },
 'Next.js': { name: 'Next.js', category: 'frontend', color: 'bg-gray-900' },
 'Node.js': { name: 'Node.js', category: 'backend', color: 'bg-green-600' },
 'JavaScript': { name: 'JavaScript', category: 'frontend', color: 'bg-yellow-500' },
 'TypeScript': { name: 'TypeScript', category: 'frontend', color: 'bg-blue-600' },
 'Firebase': { name: 'Firebase', category: 'database', color: 'bg-orange-500' },
 'HTML': { name: 'HTML', category: 'frontend', color: 'bg-orange-600' },
 'CSS': { name: 'CSS', category: 'frontend', color: 'bg-blue-400' },
 'Vite': { name: 'Vite', category: 'tool', color: 'bg-purple-500' },
 'Material UI': { name: 'Material UI', category: 'frontend', color: 'bg-blue-700' },
 'Figma': { name: 'Figma', category: 'design', color: 'bg-pink-500' },
 'Github': { name: 'Github', category: 'tool', color: 'bg-gray-800' },
} as const;