import React from 'react';
import { FaCheck } from 'react-icons/fa';
import type { ServiceCardProps } from '../types/service';
import { serviceCardClasses } from '../constants/servicesStyles';

export const ServiceCard: React.FC<ServiceCardProps> = ({
 service,
 variant = 'default'
}) => {
 const containerClass = variant === 'featured'
  ? `${serviceCardClasses.container} ${serviceCardClasses.featuredContainer}`
  : serviceCardClasses.container;

 return (
  <div className={containerClass}>
   {service.isPopular && (
    <div className={serviceCardClasses.popularBadge}>
     Popular
    </div>
   )}

   <div className={serviceCardClasses.iconWrapper}>
    {service.icon}
   </div>

   <h3 className={serviceCardClasses.title}>
    {service.title}
   </h3>

   <p className={serviceCardClasses.description}>
    {service.description}
   </p>

   {service.features && service.features.length > 0 && (
    <div className={serviceCardClasses.features}>
     {service.features.map((feature, index) => (
      <div key={index} className={serviceCardClasses.featureItem}>
       <FaCheck className="text-cyan-400 text-xs mr-2 flex-shrink-0 mt-0.5" />
       <span>{feature}</span>
      </div>
     ))}
    </div>
   )}
  </div>
 );
};