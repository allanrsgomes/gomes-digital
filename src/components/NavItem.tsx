import React from 'react';
import type { NavLink } from '../types/navigation';
import { navbarClasses } from '../constants/navbarStyles';

interface NavItemProps {
 link: NavLink;
 isActive?: boolean;
 onClick?: (href: string) => void;
 className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
 link,
 isActive = false,
 onClick,
 className = '',
}) => {
 const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (onClick) {
   e.preventDefault();
   onClick(link.href);
  }
 };

 const linkClasses = [
  navbarClasses.navLink,
  isActive ? navbarClasses.navLinkActive : '',
  link.badge ? navbarClasses.navLinkWithBadge : '',
  className
 ].filter(Boolean).join(' ');

 return (
  <li className={navbarClasses.navItem}>
   <a
    href={link.href}
    onClick={handleClick}
    className={linkClasses}
    target={link.isExternal ? '_blank' : undefined}
    rel={link.isExternal ? 'noopener noreferrer' : undefined}
    aria-label={`Navegar para ${link.title}`}
   >
    {link.icon && (
     <span className="mr-2">
      {link.icon}
     </span>
    )}
    {link.title}
    {link.badge && (
     <span className={navbarClasses.badge}>
      {link.badge}
     </span>
    )}
   </a>
  </li>
 );
};