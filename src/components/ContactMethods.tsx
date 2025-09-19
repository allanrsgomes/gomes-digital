import React from 'react';
import type { ContactMethodsProps } from '../types/contact';
import { contactMethodClasses } from '../constants/contactStyles';

export const ContactMethods: React.FC<ContactMethodsProps> = ({
 methods,
 className = '',
 onMethodClick,
}) => {
 const getButtonClass = (method: typeof methods[0]) => {
  const baseClass = contactMethodClasses.button;

  switch (method.variant) {
   case 'primary':
    return `${baseClass} ${contactMethodClasses.buttonPrimary} ${method.color}`;
   case 'secondary':
    return `${baseClass} ${contactMethodClasses.buttonSecondary} ${method.color}`;
   case 'outline':
    return `${baseClass} ${contactMethodClasses.buttonOutline} ${method.color}`;
   default:
    return `${baseClass} ${contactMethodClasses.buttonPrimary} ${method.color}`;
  }
 };

 const handleMethodClick = (method: typeof methods[0]) => {
  if (onMethodClick) {
   onMethodClick(method.id, method.href);
  }
 };

 return (
  <div className={`${contactMethodClasses.grid} ${className}`}>
   {methods.map((method) => (
    <div key={method.id} className={contactMethodClasses.card}>
     <div className={contactMethodClasses.icon}>
      {method.icon}
     </div>

     <div className={contactMethodClasses.content}>
      <h3 className={contactMethodClasses.name}>
       {method.name}
      </h3>
      <p className={contactMethodClasses.description}>
       {method.description}
      </p>
     </div>

     <a
      href={method.href}
      target={method.isExternal ? '_blank' : undefined}
      rel={method.isExternal ? 'noopener noreferrer' : undefined}
      className={getButtonClass(method)}
      onClick={() => handleMethodClick(method)}
      aria-label={`Entrar em contato via ${method.name}`}
     >
      <span className="mr-2">
       {method.icon}
      </span>
      {method.name}
      {method.isExternal && (
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
    </div>
   ))}
  </div>
 );
};