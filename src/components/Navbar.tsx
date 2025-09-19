import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Logo } from './Logo';
import { NavItem } from './NavItem';
import { MobileMenu } from './MobileMenu';
import { navLinksData } from '../data/navLinksData';
import { navbarClasses } from '../constants/navbarStyles';
import { navigationConfig } from '../constants/navigationConfig';
import type { NavbarProps } from '../types/navigation';

export const Navbar: React.FC<NavbarProps> = ({
  variant = 'default',
  position = 'fixed',
  showLogo = true,
  logoUrl = navigationConfig.logo.url,
  logoAlt = navigationConfig.logo.alt,
  onNavigate,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      const sections = navLinksData.map(link => link.href.replace('#', ''));
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
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (onNavigate) {
      onNavigate(href);
    } else {
      if (href.startsWith('#')) {
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const getNavbarClasses = () => {
    let classes = navbarClasses.nav;

    if (position !== 'fixed') {
      classes = classes.replace('fixed', position);
    }

    if (variant === 'transparent' || (!isScrolled && variant === 'default')) {
      classes += ` ${navbarClasses.navTransparent}`;
    } else {
      classes += ` ${navbarClasses.navSolid}`;
    }

    return classes;
  };

  return (
    <>
      <nav
        className={getNavbarClasses()}
        style={{ zIndex: navigationConfig.zIndex }}
      >
        <div className={navbarClasses.container}>
          {showLogo && (
            <Logo
              logoUrl={logoUrl}
              logoAlt={logoAlt}
            />
          )}

          <ul className={navbarClasses.desktopMenu}>
            {navLinksData.map((link) => (
              <NavItem
                key={link.id}
                link={link}
                isActive={activeSection === link.href}
                onClick={handleNavClick}
              />
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={navbarClasses.mobileMenuButton}
            aria-label="Abrir menu de navegação"
            aria-expanded={isOpen}
          >
            <FaBars className={navbarClasses.mobileMenuIcon} />
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        navLinks={navLinksData}
        onClose={() => setIsOpen(false)}
        onNavigate={onNavigate}
      />
    </>
  );
};