import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { TestimonialCard } from './TestimonialCard';
import { testimonialsData } from '../data/testimonialsData';
import { swiperConfig } from '../config/swiperConfig';
import { sectionClasses } from '../constants/testimonialStyles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const TestimonialsSection: React.FC = () => {
 return (
  <section id="depoimentos" className={sectionClasses.section}>
   <div className={sectionClasses.container}>
    <h2 className={sectionClasses.title}>
     Depoimentos de Clientes
    </h2>
    <div className={sectionClasses.divider} />

    <div className={sectionClasses.swiperContainer}>
     <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      {...swiperConfig}
      className="testimonials-swiper pb-12"
     >
      {testimonialsData.map((testimonial) => (
       <SwiperSlide key={testimonial.id} className={sectionClasses.slide}>
        <TestimonialCard testimonial={testimonial} />
       </SwiperSlide>
      ))}

      <div className={`swiper-button-prev ${sectionClasses.navigationButton}`} />
      <div className={`swiper-button-next ${sectionClasses.navigationButton}`} />
     </Swiper>
    </div>
   </div>
  </section>
 );
};