import React from 'react';
import { HeroActions } from './HeroActions';
import type { HeroContent, HeroAction } from '../types/hero';
import { heroSectionClasses } from '../constants/heroStyles';

interface HeroContentProps {
 content: HeroContent;
 actions?: HeroAction[];
 variant?: 'default' | 'centered' | 'minimal';
 onActionClick?: (actionId: string, href: string) => void;
}

export const HeroContentComponent: React.FC<HeroContentProps> = ({
 content,
 actions = [],
 variant = 'default',
 onActionClick,
}) => {
 const getContentClass = () => {
  if (variant === 'centered') {
   return heroSectionClasses.contentCentered;
  }
  return heroSectionClasses.content;
 };

 const getTitleClass = () => {
  const baseClass = variant === 'minimal'
   ? heroSectionClasses.titleMinimal
   : heroSectionClasses.title;
  return baseClass;
 };

 const renderSubtitle = () => {
  if (!content.highlightText) {
   return <span className={heroSectionClasses.subtitle}>{content.subtitle}</span>;
  }

  const parts = content.subtitle.split(content.highlightText);
  return (
   <span className={heroSectionClasses.subtitle}>
    {parts[0]}
    <span className={heroSectionClasses.subtitleHighlight}>
     {content.highlightText}
    </span>
    {parts[1]}
   </span>
  );
 };

 return (
  <div className={getContentClass()}>
   <h1 className={getTitleClass()}>
    {content.title}
   </h1>

   {renderSubtitle()}

   <p className={heroSectionClasses.description}>
    {content.description}
   </p>

   {content.badges && content.badges.length > 0 && (
    <div className={heroSectionClasses.badges}>
     {content.badges.map((badge, index) => (
      <span key={index} className={heroSectionClasses.badge}>
       {badge}
      </span>
     ))}
    </div>
   )}

   {actions.length > 0 && (
    <div className={heroSectionClasses.actionsContainer}>
     <HeroActions
      actions={actions}
      onActionClick={onActionClick}
     />
    </div>
   )}
  </div>
 );
};