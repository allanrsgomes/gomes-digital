import React from 'react';
import type { LogoProps } from '../types/navigation';
import { navbarClasses } from '../constants/navbarStyles';
import { DEFAULT_HOME_HREF } from '../constants/navigationConfig';

export const Logo: React.FC<LogoProps> = ({
 logoUrl,
 logoAlt,
 homeHref = DEFAULT_HOME_HREF,
 className = '',
}) => {
 return (
  <div className={navbarClasses.logoContainer}>
   <a
    href={homeHref}
    className="focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md"
    aria-label="Ir para página inicial"
   >
    <img
     src={logoUrl}
     alt={logoAlt}
     className={`${navbarClasses.logo} ${className}`}
     loading="eager"
    />
   </a>
  </div>
 );
};