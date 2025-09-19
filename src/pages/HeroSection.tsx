import React from 'react';
import { HeroContentComponent } from '../components/HeroContent';
import { HeroImage } from '../components/HeroImage';
import { heroContentData, heroActionsData } from '../data/heroData';
import { heroSectionClasses } from '../constants/heroStyles';
import type { HeroSectionProps } from '../types/hero';

export const HeroSection: React.FC<HeroSectionProps> = ({
  content = heroContentData,
  actions = heroActionsData,
  variant = 'default',
  showImage = true,
  backgroundType = 'solid',
  onActionClick,
}) => {
  const getSectionClass = () => {
    let baseClass = heroSectionClasses.section;
    
    if (variant === 'centered') {
      baseClass += ` ${heroSectionClasses.sectionCentered}`;
    }
    
    if (variant === 'minimal') {
      baseClass += ` ${heroSectionClasses.sectionMinimal}`;
    }
    
    if (backgroundType === 'gradient') {
      baseClass += ' bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900';
    }
    
    return baseClass;
  };

  const getContainerClass = () => {
    if (variant === 'centered') {
      return 'container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative z-10';
    }
    return heroSectionClasses.container;
  };

  const getImageContainerClass = () => {
    if (variant === 'centered') {
      return heroSectionClasses.imageContainerCentered;
    }
    return heroSectionClasses.imageContainer;
  };

  return (
    <section id="home" className={getSectionClass()}>
      {backgroundType === 'particles' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-cyan-400/5 rounded-full blur-3xl" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-400/5 rounded-full blur-3xl" />
        </div>
      )}
      
      <div className={getContainerClass()}>
        <HeroContentComponent 
          content={content} 
          actions={actions}
          variant={variant}
          onActionClick={onActionClick}
        />

        {showImage && (
          <div className={getImageContainerClass()}>
            <HeroImage 
              image={content.image}
              priority={true}
            />
          </div>
        )}
      </div>
    </section>
  );
};