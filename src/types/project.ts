export interface Project {
 id: string;
 title: string;
 description: string;
 image: string;
 tags: string[];
 category: ProjectCategory;
 liveUrl?: string;
 repoUrl?: string;
 showActions: boolean;
 isFeatured?: boolean;
 status: ProjectStatus;
 technologies: Technology[];
 year: number;
 client?: string;
}

export interface ProjectCardProps {
 project: Project;
 variant?: 'default' | 'featured' | 'compact';
}

export type ProjectCategory =
 | 'web-app'
 | 'landing-page'
 | 'dashboard'
 | 'e-commerce'
 | 'mobile-app'
 | 'tool'
 | 'portfolio';

export type ProjectStatus =
 | 'completed'
 | 'in-progress'
 | 'maintenance'
 | 'archived';

export interface Technology {
 name: string;
 category: 'frontend' | 'backend' | 'database' | 'tool' | 'design';
 color: string;
}