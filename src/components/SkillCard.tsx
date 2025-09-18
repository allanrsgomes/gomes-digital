import React from 'react';
import type { SkillCardProps } from '../types/skill';
import { skillCardClasses } from '../constants/toolsStyles';

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
 return (
  <div
   className={skillCardClasses.container}
   title={skill.name}
   role="button"
   tabIndex={0}
   aria-label={`Tecnologia: ${skill.name}`}
  >
   <div className={skillCardClasses.iconWrapper}>
    {skill.icon}
   </div>
   <span className={skillCardClasses.name}>
    {skill.name}
   </span>
  </div>
 );
};