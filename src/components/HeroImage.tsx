import React from 'react';
import type { HeroImageProps } from '../types/hero';
import { heroImageClasses } from '../constants/heroStyles';

export const HeroImage: React.FC<HeroImageProps> = ({
 image,
 className = '',
 priority = true,
}) => {
 return (
  <div className={`${heroImageClasses.container} ${className}`}>
   <img
    src={image.src}
    alt={image.alt}
    width={image.width}
    height={image.height}
    className={heroImageClasses.image}
    loading={priority ? 'eager' : 'lazy'}
    fetchPriority={priority ? 'high' : 'auto'}
   />
   <div className={heroImageClasses.overlay} />
  </div>
 );
};