import React from 'react';
import type { AboutValuesProps } from '../types/about';
import { aboutValuesClasses } from '../constants/aboutStyles';

export const AboutValues: React.FC<AboutValuesProps> = ({
 values,
 className = '',
}) => {
 return (
  <div className={`${aboutValuesClasses.container} ${className}`}>
   <h3 className="text-2xl font-bold text-center mb-8 text-white">
    Nossos Valores
   </h3>
   <div className={aboutValuesClasses.grid}>
    {values.map((value) => (
     <div key={value.id} className={aboutValuesClasses.card}>
      <div className={`${aboutValuesClasses.icon} ${value.color}`}>
       {value.icon}
      </div>
      <div className={aboutValuesClasses.content}>
       <h4 className={aboutValuesClasses.title}>
        {value.title}
       </h4>
       <p className={aboutValuesClasses.description}>
        {value.description}
       </p>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};