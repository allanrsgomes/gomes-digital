import React from 'react';
import { ContactMethods } from '../components/ContactMethods';
import { ContactInfoComponent } from '../components/ContactInfo';
import { contactInfoData, contactMethodsData } from '../data/contactData';
import { contactSectionClasses } from '../constants/contactStyles';
import type { ContactSectionProps } from '../types/contact';

export const ContactSection: React.FC<ContactSectionProps> = ({
  contact = contactInfoData,
  methods = contactMethodsData,
  variant = 'default',
  showMethods = true,
  showInfo = false,
  onMethodClick,
}) => {
  const getSectionClass = () => {
    const baseClass = contactSectionClasses.section;

    if (variant === 'minimal') {
      return `${baseClass} ${contactSectionClasses.sectionMinimal}`;
    }

    return baseClass;
  };

  const getContentClass = () => {
    if (variant === 'minimal') {
      return contactSectionClasses.contentMinimal;
    }

    return contactSectionClasses.content;
  };

  const getTitleClass = () => {
    if (variant === 'minimal') {
      return contactSectionClasses.titleMinimal;
    }

    return contactSectionClasses.title;
  };

  return (
    <section id="contato" className={getSectionClass()}>
      <div className={contactSectionClasses.container}>
        {/* Header */}
        <div className={contactSectionClasses.header}>
          <h2 className={getTitleClass()}>
            {contact.title}
          </h2>

          <div className={contactSectionClasses.divider} />
        </div>

        <div className={getContentClass()}>
          <p className={contactSectionClasses.description}>
            {contact.description}
          </p>

          {showMethods && (
            <ContactMethods
              methods={methods}
              onMethodClick={onMethodClick}
            />
          )}

          {showInfo && (
            <ContactInfoComponent
              contact={contact}
              className="mt-12"
            />
          )}
        </div>
      </div>
    </section>
  );
};