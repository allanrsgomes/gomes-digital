import React from 'react';
import type { AboutStatsProps } from '../types/about';
import { aboutStatsClasses } from '../constants/aboutStyles';

export const AboutStats: React.FC<AboutStatsProps> = ({
 stats,
 className = '',
}) => {
 return (
  <div className={`${aboutStatsClasses.container} ${className}`}>
   <div className={aboutStatsClasses.grid}>
    {stats.map((stat) => (
     <div key={stat.id} className={aboutStatsClasses.card}>
      {stat.icon && (
       <div className={`${aboutStatsClasses.icon} ${stat.color}`}>
        {stat.icon}
       </div>
      )}
      <div className={aboutStatsClasses.content}>
       <div className={`${aboutStatsClasses.number} ${stat.color}`}>
        {stat.number}
       </div>
       <div className={aboutStatsClasses.label}>
        {stat.label}
       </div>
       {stat.description && (
        <div className={aboutStatsClasses.description}>
         {stat.description}
        </div>
       )}
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};