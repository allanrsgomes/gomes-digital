import React from 'react';
import type { AboutTimelineProps } from '../types/about';
import { aboutTimelineClasses } from '../constants/aboutStyles';

export const AboutTimeline: React.FC<AboutTimelineProps> = ({
 timeline,
 className = '',
}) => {
 return (
  <div className={`${aboutTimelineClasses.container} ${className}`}>
   <h3 className="text-2xl font-bold text-center mb-12 text-white">
    Nossa Jornada
   </h3>
   <div className={aboutTimelineClasses.timeline}>
    {timeline.map((item, index) => (
     <div
      key={item.id}
      className={`${aboutTimelineClasses.item} ${item.milestone ? aboutTimelineClasses.itemMilestone : ''
       }`}
     >
      <div
       className={`${aboutTimelineClasses.marker} ${item.milestone ? aboutTimelineClasses.markerMilestone : ''
        }`}
      />
      {index < timeline.length - 1 && (
       <div className={aboutTimelineClasses.line} />
      )}
      <div className={aboutTimelineClasses.content}>
       <div className={aboutTimelineClasses.year}>
        {item.year}
       </div>
       <h4 className={aboutTimelineClasses.title}>
        {item.title}
       </h4>
       <p className={aboutTimelineClasses.description}>
        {item.description}
       </p>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};