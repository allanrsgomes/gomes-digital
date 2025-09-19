export interface ContactInfo {
 id: string;
 title: string;
 subtitle?: string;
 description: string;
 phone: string;
 email?: string;
 address?: ContactAddress;
 socialLinks?: SocialLink[];
 businessHours?: BusinessHours;
}

export interface ContactAddress {
 street?: string;
 city: string;
 state: string;
 country: string;
 zipCode?: string;
}

export interface SocialLink {
 id: string;
 name: string;
 url: string;
 icon: React.ReactElement;
 color: string;
 username?: string;
}

export interface BusinessHours {
 weekdays: string;
 weekends?: string;
 timezone: string;
}

export interface ContactMethod {
 id: string;
 name: string;
 description: string;
 href: string;
 icon: React.ReactElement;
 variant: 'primary' | 'secondary' | 'outline';
 isExternal?: boolean;
 color: string;
}

export interface ContactSectionProps {
 contact?: ContactInfo;
 methods?: ContactMethod[];
 variant?: 'default' | 'minimal' | 'detailed';
 showMethods?: boolean;
 showSocial?: boolean;
 showInfo?: boolean;
 onMethodClick?: (methodId: string, href: string) => void;
}

export interface ContactMethodsProps {
 methods: ContactMethod[];
 className?: string;
 onMethodClick?: (methodId: string, href: string) => void;
}

export interface ContactInfoProps {
 contact: ContactInfo;
 className?: string;
}