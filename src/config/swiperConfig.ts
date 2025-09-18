import type { SwiperOptions } from 'swiper/types';

export const swiperConfig: SwiperOptions = {
 spaceBetween: 30,
 slidesPerView: 3,
 loop: true,
 grabCursor: true,
 autoplay: {
  delay: 4000,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
 },
 navigation: {
  prevEl: '.swiper-button-prev',
  nextEl: '.swiper-button-next',
 },
 pagination: {
  clickable: true,
  bulletClass: 'swiper-pagination-bullet',
  bulletActiveClass: 'swiper-pagination-bullet-active',
 },
 breakpoints: {
  320: {
   slidesPerView: 1,
   spaceBetween: 20,
   navigation: false,
  },
  768: {
   slidesPerView: 2,
   spaceBetween: 25,
   navigation: false,
  },
  1024: {
   slidesPerView: 2,
   spaceBetween: 30,
   navigation: true,
  },
  1280: {
   slidesPerView: 3,
   spaceBetween: 30,
   navigation: true,
  },
 },
};