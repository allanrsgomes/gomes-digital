import type { Highlight } from '../types/about';
import { HIGHLIGHT_COLORS } from '../constants/aboutConfig';

export const highlightText = (text: string, highlights: Highlight[]): React.ReactNode => {
  if (!highlights.length) return text;

  let highlightedText: React.ReactNode = text;
  
  highlights.forEach((highlight, index) => {
    const colorClass = HIGHLIGHT_COLORS[highlight.color];
    const regex = new RegExp(`(${highlight.text})`, 'gi');
    
    if (typeof highlightedText === 'string') {
      const parts = highlightedText.split(regex);
      highlightedText = parts.map((part, partIndex) => {
        if (part.toLowerCase() === highlight.text.toLowerCase()) {
          return (
            <span key={`${index}-${partIndex}`} className={colorClass}>
              {part}
            </span>
          );
        }
        return part;
      });
    }
  });

  return highlightedText;
};