export interface Testimonial {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}