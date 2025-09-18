import { useState, useMemo, useCallback } from 'react';
import type { Service, ServiceCategory } from '../types/service';
import { servicesData, mainServicesData } from '../data/servicesData';

interface UseServicesReturn {
 services: Service[];
 mainServices: Service[];
 showAllServices: boolean;
 selectedCategory: ServiceCategory | 'all';
 filteredServices: Service[];
 displayServices: Service[];
 toggleShowAll: () => void;
 setSelectedCategory: (category: ServiceCategory | 'all') => void;
 servicesByCategory: Record<ServiceCategory, Service[]>;
 totalServices: number;
}

export const useServices = (): UseServicesReturn => {
 const [showAllServices, setShowAllServices] = useState<boolean>(false);
 const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');

 const filteredServices = useMemo(() => {
  if (selectedCategory === 'all') {
   return servicesData;
  }
  return servicesData.filter(service => service.category === selectedCategory);
 }, [selectedCategory]);

 const displayServices = useMemo(() => {
  const baseServices = showAllServices ? filteredServices : filteredServices.slice(0, 3);
  return baseServices;
 }, [showAllServices, filteredServices]);

 const servicesByCategory = useMemo(() => {
  return servicesData.reduce((acc, service) => {
   if (!acc[service.category]) {
    acc[service.category] = [];
   }
   acc[service.category].push(service);
   return acc;
  }, {} as Record<ServiceCategory, Service[]>);
 }, []);

 const toggleShowAll = useCallback(() => {
  setShowAllServices(prev => !prev);
 }, []);

 const handleCategoryChange = useCallback((category: ServiceCategory | 'all') => {
  setSelectedCategory(category);
  setShowAllServices(false); 
 }, []);

 return {
  services: servicesData,
  mainServices: mainServicesData,
  showAllServices,
  selectedCategory,
  filteredServices,
  displayServices,
  toggleShowAll,
  setSelectedCategory: handleCategoryChange,
  servicesByCategory,
  totalServices: servicesData.length,
 };
};