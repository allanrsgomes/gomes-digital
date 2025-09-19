import { useState, useEffect, useCallback } from 'react';
import type { NavLink } from '../types/navigation';

interface UseNavigationReturn {
 isOpen: boolean;
 activeSection: string;
 isScrolled: boolean;
 toggleMobileMenu: () => void;
 closeMobileMenu: () => void;
 navigateToSection: (href: string) => void;
 setActiveSection: (section: string) => void;
}

export const useNavigation = (navLinks: NavLink[]): UseNavigationReturn => {
 const [isOpen, setIsOpen] = useState<boolean>(false);
 const [activeSection, setActiveSection] = useState<string>('');
 const [isScrolled, setIsScrolled] = useState<boolean>(false);

 useEffect(() => {
  const handleScroll = () => {
   const scrollTop = window.scrollY;
   setIsScrolled(scrollTop > 50);

   const sections = navLinks
    .filter(link => link.href.startsWith('#'))
    .map(link => link.href.replace('#', ''));

   const current = sections.find(section => {
    const element = document.getElementById(section);
    if (element) {
     const rect = element.getBoundingClientRect();
     return rect.top <= 100 && rect.bottom >= 100;
    }
    return false;
   });

   if (current) {
    setActiveSection(`#${current}`);
   }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, [navLinks]);

 useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
   if (e.key === 'Escape' && isOpen) {
    setIsOpen(false);
   }
  };

  document.addEventListener('keydown', handleEscape);
  return () => document.removeEventListener('keydown', handleEscape);
 }, [isOpen]);

 const toggleMobileMenu = useCallback(() => {
  setIsOpen(prev => !prev);
 }, []);

 const closeMobileMenu = useCallback(() => {
  setIsOpen(false);
 }, []);

 const navigateToSection = useCallback((href: string) => {
  setIsOpen(false);

  if (href.startsWith('#')) {
   const element = document.getElementById(href.replace('#', ''));
   if (element) {
    element.scrollIntoView({
     behavior: 'smooth',
     block: 'start'
    });
   }
  } else {
   window.location.href = href;
  }
 }, []);

 return {
  isOpen,
  activeSection,
  isScrolled,
  toggleMobileMenu,
  closeMobileMenu,
  navigateToSection,
  setActiveSection,
 };
};