import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { NavItem } from './NavItem';
import type { MobileMenuProps } from '../types/navigation';
import { mobileMenuClasses } from '../constants/navbarStyles';

export const MobileMenu: React.FC<MobileMenuProps> = ({
 isOpen,
 navLinks,
 onClose,
 onNavigate,
}) => {

 useEffect(() => {
  if (isOpen) {
   document.body.style.overflow = 'hidden';
  } else {
   document.body.style.overflow = 'unset';
  }

  return () => {
   document.body.style.overflow = 'unset';
  };
 }, [isOpen]);

 useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
   if (e.key === 'Escape' && isOpen) {
    onClose();
   }
  };

  document.addEventListener('keydown', handleEscape);
  return () => document.removeEventListener('keydown', handleEscape);
 }, [isOpen, onClose]);

 if (!isOpen) return null;

 const handleNavClick = (href: string) => {
  onClose();
  if (onNavigate) {
   onNavigate(href);
  }
 };

 const handleBackdropClick = () => {
  onClose();
 };

 return (
  <div className={mobileMenuClasses.overlay}>
   <div className={mobileMenuClasses.container}>
    <div
     className={mobileMenuClasses.backdrop}
     onClick={handleBackdropClick}
     aria-hidden="true"
    />

    <div
     className={`${mobileMenuClasses.panel} ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
     role="dialog"
     aria-modal="true"
     aria-label="Menu de navegação"
    >
     <div className={mobileMenuClasses.header}>
      <h2 className="text-lg font-semibold">Menu</h2>
      <button
       onClick={onClose}
       className={mobileMenuClasses.closeButton}
       aria-label="Fechar menu"
      >
       <FaTimes className="w-5 h-5" />
      </button>
     </div>

     <nav className={mobileMenuClasses.menu}>
      {navLinks.map((link) => (
       <NavItem
        key={link.id}
        link={link}
        onClick={handleNavClick}
        className={mobileMenuClasses.menuLink}
       />
      ))}
     </nav>
    </div>
   </div>
  </div>
 );
};