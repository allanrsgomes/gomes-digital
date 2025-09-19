import React from 'react';
import type { HeroActionsProps } from '../types/hero';
import { heroActionClasses } from '../constants/heroStyles';

export const HeroActions: React.FC<HeroActionsProps> = ({
 actions,
 className = '',
 onActionClick,
}) => {
 const getActionClass = (variant: string) => {
  const baseClass = heroActionClasses.base;

  switch (variant) {
   case 'primary':
    return `${baseClass} ${heroActionClasses.primary}`;
   case 'secondary':
    return `${baseClass} ${heroActionClasses.secondary}`;
   case 'outline':
    return `${baseClass} ${heroActionClasses.outline}`;
   default:
    return `${baseClass} ${heroActionClasses.primary}`;
  }
 };

 const handleActionClick = (action: typeof actions[0]) => {
  if (onActionClick) {
   onActionClick(action.id, action.href);
  }
 };

 return (
  <div className={`${heroActionClasses.container} ${className}`}>
   {actions.map((action) => (
    <a
     key={action.id}
     href={action.href}
     target={action.isExternal ? '_blank' : undefined}
     rel={action.isExternal ? 'noopener noreferrer' : undefined}
     className={getActionClass(action.variant)}
     aria-label={action.ariaLabel || action.text}
     onClick={() => handleActionClick(action)}
    >
     {action.icon && (
      <span className="mr-2">
       {action.icon}
      </span>
     )}
     {action.text}
     {action.isExternal && (
      <svg
       className="ml-2 w-4 h-4"
       fill="currentColor"
       viewBox="0 0 20 20"
       aria-hidden="true"
      >
       <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
       />
      </svg>
     )}
    </a>
   ))}
  </div>
 );
};