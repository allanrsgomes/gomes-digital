import React from 'react';
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
import type { ContactInfoProps } from '../types/contact';
import { contactInfoClasses } from '../constants/contactStyles';

export const ContactInfoComponent: React.FC<ContactInfoProps> = ({
 contact,
 className = '',
}) => {
 return (
  <div className={`${contactInfoClasses.container} ${className}`}>
   <div className={contactInfoClasses.infoGrid}>
    {contact.address && (
     <div className={contactInfoClasses.infoItem}>
      <div className={contactInfoClasses.infoIcon}>
       <FaMapMarkerAlt size={16} />
      </div>
      <div className={contactInfoClasses.infoContent}>
       <h4 className={contactInfoClasses.infoTitle}>Localização</h4>
       <p className={contactInfoClasses.infoText}>
        {contact.address.city}, {contact.address.state}
        {contact.address.country && `, ${contact.address.country}`}
       </p>
      </div>
     </div>
    )}

    {contact.businessHours && (
     <div className={contactInfoClasses.infoItem}>
      <div className={contactInfoClasses.infoIcon}>
       <FaClock size={16} />
      </div>
      <div className={contactInfoClasses.infoContent}>
       <h4 className={contactInfoClasses.infoTitle}>Horário de Atendimento</h4>
       <p className={contactInfoClasses.infoText}>
        Seg-Sex: {contact.businessHours.weekdays}
       </p>
       {contact.businessHours.weekends && (
        <p className={contactInfoClasses.infoText}>
         Sáb-Dom: {contact.businessHours.weekends}
        </p>
       )}
      </div>
     </div>
    )}

    {contact.email && (
     <div className={contactInfoClasses.infoItem}>
      <div className={contactInfoClasses.infoIcon}>
       <FaEnvelope size={16} />
      </div>
      <div className={contactInfoClasses.infoContent}>
       <h4 className={contactInfoClasses.infoTitle}>E-mail</h4>
       <a
        href={`mailto:${contact.email}`}
        className={`${contactInfoClasses.infoText} hover:text-cyan-400 transition-colors duration-200`}
       >
        {contact.email}
       </a>
      </div>
     </div>
    )}

    <div className={contactInfoClasses.infoItem}>
     <div className={contactInfoClasses.infoIcon}>
      <FaPhone size={16} />
     </div>
     <div className={contactInfoClasses.infoContent}>
      <h4 className={contactInfoClasses.infoTitle}>Telefone</h4>
      <a
       href={`tel:${contact.phone}`}
       className={`${contactInfoClasses.infoText} hover:text-cyan-400 transition-colors duration-200`}
      >
       {contact.phone}
      </a>
     </div>
    </div>
   </div>

   {contact.socialLinks && contact.socialLinks.length > 0 && (
    <div className={contactInfoClasses.socialContainer}>
     <h4 className={contactInfoClasses.socialTitle}>
      Redes Sociais
     </h4>
     <div className={contactInfoClasses.socialGrid}>
      {contact.socialLinks.map((social) => (
       <a
        key={social.id}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={contactInfoClasses.socialLink}
        aria-label={`Visitar ${social.name}`}
        title={social.username || social.name}
       >
        <div className={`${social.color} group-hover:scale-110 transition-transform duration-200`}>
         {social.icon}
        </div>
       </a>
      ))}
     </div>
    </div>
   )}
  </div>
 );
};