export interface NavLink {
 id: string;
 title: string;
 href: string;
 isExternal?: boolean;
 isActive?: boolean;
 badge?: string;
 icon?: React.ReactElement;
}

export interface NavbarProps {
 variant?: 'default' | 'transparent' | 'solid';
 position?: 'fixed' | 'sticky' | 'relative';
 showLogo?: boolean;
 logoUrl?: string;
 logoAlt?: string;
 onNavigate?: (href: string) => void;
}

export interface MobileMenuProps {
 isOpen: boolean;
 navLinks: NavLink[];
 onClose: () => void;
 onNavigate?: (href: string) => void;
}

export interface LogoProps {
 logoUrl: string;
 logoAlt: string;
 homeHref?: string;
 className?: string;
}