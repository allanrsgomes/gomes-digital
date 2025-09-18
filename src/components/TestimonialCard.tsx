import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import type { TestimonialCardProps } from '../types/testimonial';
import { testimonialCardClasses } from '../constants/testimonialStyles';

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className={testimonialCardClasses.container}>
      <img
        src={testimonial.image}
        alt={`Foto de ${testimonial.name}`}
        className={testimonialCardClasses.image}
        loading="lazy"
      />
      <FaQuoteLeft className={testimonialCardClasses.quoteIcon} />
      <p className={testimonialCardClasses.testimonial}>
        "{testimonial.testimonial}"
      </p>
      <div className={testimonialCardClasses.clientInfo}>
        <h4 className={testimonialCardClasses.name}>
          {testimonial.name}
        </h4>
        <p className={testimonialCardClasses.role}>
          {testimonial.role}
        </p>
      </div>
    </div>
  );
};