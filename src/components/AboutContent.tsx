// components/AboutContent.tsx (CORRIGIDO)

import React from 'react';
import { highlightText } from '../utils/textHighlighter';
import type { AboutContent } from '../types/about';
import { aboutSectionClasses } from '../constants/aboutStyles';

interface AboutContentProps {
  content: AboutContent;
  variant?: 'default' | 'detailed' | 'minimal' | 'story'; 
}

export const AboutContentComponent: React.FC<AboutContentProps> = ({
  content,
  variant = 'default',
}) => {
  const getParagraphClass = (emphasis: string) => {
    let classNames = [aboutSectionClasses.paragraph];
    switch (variant) {
      case 'minimal':
        classNames.push('text-base'); 
        break;
      case 'detailed':
        classNames.push('leading-loose');
        break;
      case 'story':
        classNames.push('text-lg', 'font-semibold');
        break;
        break;
      default:
        break;
    }
    if (emphasis === 'strong') {
      classNames.push(aboutSectionClasses.paragraphEmphasis);
    }
    return classNames.join(' ');
  };

  return (
    <div className={aboutSectionClasses.paragraphContainer}>
      {content.paragraphs.map((paragraph) => (
        <p 
          key={paragraph.id} 
          className={getParagraphClass(paragraph.emphasis || 'normal')}
        >
          {highlightText(paragraph.text, content.highlights)}
        </p>
      ))}
    </div>
  );
};