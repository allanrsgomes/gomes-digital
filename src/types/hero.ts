export interface HeroContent {
 id: string;
 title: string;
 subtitle: string;
 description: string;
 image: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
 };
 highlightText?: string;
 badges?: string[];
}

export interface HeroAction {
 id: string;
 text: string;
 href: string;
 variant: 'primary' | 'secondary' | 'outline';
 isExternal?: boolean;
 icon?: React.ReactElement;
 ariaLabel?: string;
}

export interface HeroSectionProps {
 content?: HeroContent;
 actions?: HeroAction[];
 variant?: 'default' | 'centered' | 'minimal';
 showImage?: boolean;
 backgroundType?: 'solid' | 'gradient' | 'particles';
 onActionClick?: (actionId: string, href: string) => void;
}

export interface HeroImageProps {
 image: HeroContent['image'];
 className?: string;
 priority?: boolean;
}

export interface HeroActionsProps {
 actions: HeroAction[];
 className?: string;
 onActionClick?: (actionId: string, href: string) => void;
}