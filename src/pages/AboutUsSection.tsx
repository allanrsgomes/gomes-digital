import React from 'react';
import { AboutStats } from '../components/AboutStats';
import { AboutValues } from '../components/AboutValues';
import { AboutTimeline } from '../components/AboutTimeline';
import { aboutContentData } from '../data/aboutData';
import { aboutSectionClasses } from '../constants/aboutStyles';
import type { AboutSectionProps } from '../types/about';
import { AboutContentComponent } from '../components/AboutContent';

export const AboutUsSection: React.FC<AboutSectionProps> = ({
  content = aboutContentData,
  variant = 'default',
  showStats = false,
  showValues = false,
  showTimeline = false,
  layout = 'centered',
}) => {
  const getSectionClass = () => {
    let baseClass = aboutSectionClasses.section;
    
    if (variant === 'minimal') {
      baseClass += ` ${aboutSectionClasses.sectionMinimal}`;
    } else if (variant === 'detailed') {
      baseClass += ` ${aboutSectionClasses.sectionDetailed}`;
    }
    
    return baseClass;
  };

  const getHeaderClass = () => {
    if (layout === 'split') {
      return aboutSectionClasses.headerSplit;
    }
    
    return aboutSectionClasses.headerCentered;
  };

  const getTitleClass = () => {
    if (variant === 'minimal') {
      return aboutSectionClasses.titleMinimal;
    }
    
    return aboutSectionClasses.title;
  };

  const getContentClass = () => {
    if (layout === 'grid') {
      return aboutSectionClasses.contentGrid;
    }
    
    return aboutSectionClasses.content;
  };

  return (
    <section id="sobre" className={getSectionClass()}>
      <div className={aboutSectionClasses.container}>
        <div className={getHeaderClass()}>
          <h2 className={getTitleClass()}>
            {content.title}
          </h2>
          
          {content.subtitle && (
            <p className={aboutSectionClasses.subtitle}>
              {content.subtitle}
            </p>
          )}
          
          <div className={aboutSectionClasses.divider} />
        </div>

        <div className={getContentClass()}>
          <AboutContentComponent content={content} variant={variant} />
          
          {showStats && content.stats && (
            <AboutStats stats={content.stats} />
          )}
          
          {showValues && content.values && (
            <AboutValues values={content.values} />
          )}
          
          {showTimeline && content.timeline && (
            <AboutTimeline timeline={content.timeline} />
          )}
        </div>
      </div>
    </section>
  );
};