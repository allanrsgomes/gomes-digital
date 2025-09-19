import { useCallback } from 'react';
import type { AboutContent, Highlight } from '../types/about';
import { aboutContentData, detailedAboutContent } from '../data/aboutData';

interface UseAboutReturn {
 getContentByVariant: (variant: 'default' | 'detailed') => AboutContent;
 processHighlights: (text: string, highlights: Highlight[]) => React.ReactNode;
 getCompanyStats: () => typeof aboutContentData.stats;
 getCompanyValues: () => typeof aboutContentData.values;
 getCompanyTimeline: () => typeof aboutContentData.timeline;
}

export const useAbout = (): UseAboutReturn => {
 const getContentByVariant = useCallback((variant: 'default' | 'detailed') => {
  return variant === 'detailed' ? detailedAboutContent : aboutContentData;
 }, []);

 const processHighlights = useCallback((text: string) => {
  return text;
 }, []);

 const getCompanyStats = useCallback(() => {
  return aboutContentData.stats || [];
 }, []);

 const getCompanyValues = useCallback(() => {
  return aboutContentData.values || [];
 }, []);

 const getCompanyTimeline = useCallback(() => {
  return aboutContentData.timeline || [];
 }, []);

 return {
  getContentByVariant,
  processHighlights,
  getCompanyStats,
  getCompanyValues,
  getCompanyTimeline,
 };
};