import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { mainServicesData, servicesData } from '../data/servicesData';
import { sectionClasses } from '../constants/servicesStyles';

export const ServicesSection: React.FC = () => {
 const [showAllServices, setShowAllServices] = useState<boolean>(false);
 const displayServices = showAllServices ? servicesData : mainServicesData;
 const handleToggleServices = () => {
  setShowAllServices(prev => !prev);
 };

 return (
  <section id="servicos" className={sectionClasses.section}>
   <div className={sectionClasses.container}>
    <h2 className={sectionClasses.title}>
     Serviços
    </h2>

    <p className={sectionClasses.subtitle}>
     Oferecemos soluções completas para transformar sua ideia em realidade digital
    </p>

    <div className={sectionClasses.divider} />

    <div className={sectionClasses.servicesGrid}>
     {displayServices.map((service) => (
      <ServiceCard
       key={service.id}
       service={service}
       variant={service.isPopular ? 'featured' : 'default'}
      />
     ))}
    </div>

    {/* Botão para mostrar/ocultar todos os serviços */}
    {servicesData.length > mainServicesData.length && (
     <button
      onClick={handleToggleServices}
      className={sectionClasses.viewAllButton}
      aria-expanded={showAllServices}
      aria-label={showAllServices ? 'Mostrar menos serviços' : 'Ver todos os serviços'}
     >
      {showAllServices ? 'Ver Menos Serviços' : 'Ver Todos os Serviços'}
      <span className="ml-2">
       {showAllServices ? '↑' : '↓'}
      </span>
     </button>
    )}

    {/* Contador de serviços */}
    <div className="mt-8 text-gray-400 text-sm">
     {showAllServices
      ? `${servicesData.length} serviços disponíveis`
      : `${mainServicesData.length} de ${servicesData.length} serviços`
     }
    </div>
   </div>
  </section>
 );
};