import type { ReactElement } from 'react';

export interface Service {
 id: string;
 title: string;
 description: string;
 icon: ReactElement;
 category: ServiceCategory;
 features?: string[];
 isPopular?: boolean;
}

export interface ServiceCardProps {
 service: Service;
 variant?: 'default' | 'featured';
}

export type ServiceCategory =
 | 'development'
 | 'design'
 | 'optimization'
 | 'consulting'
 | 'maintenance';