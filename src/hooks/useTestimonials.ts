import { useState, useEffect } from 'react';
import type { Testimonial } from '../types/testimonial';
import { testimonialsData } from '../data/testimonialsData';

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setTimeout(() => {
        setTestimonials(testimonialsData);
        setLoading(false);
      }, 100);
    } catch (err) {
      setError('Erro ao carregar depoimentos');
      setLoading(false);
    }
  }, []);

  return { testimonials, loading, error };
};