import type { ReactElement } from 'react';

export interface Skill {
 id: string;
 name: string;
 icon: ReactElement;
 category: SkillCategory;
}

export interface SkillCardProps {
 skill: Skill;
}

export type SkillCategory =
 | 'frontend'
 | 'backend'
 | 'database'
 | 'testing'
 | 'tools'
 | 'deployment';