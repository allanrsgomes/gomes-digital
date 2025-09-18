import { useState, useMemo, useCallback } from 'react';
import type { Project, ProjectCategory } from '../types/project';
import { projectsData } from '../data/projectsData';

interface UsePortfolioReturn {
 projects: Project[];
 selectedCategory: ProjectCategory | 'all';
 displayCount: number;
 filteredProjects: Project[];
 displayedProjects: Project[];
 hasMoreProjects: boolean;
 featuredProjects: Project[];
 setSelectedCategory: (category: ProjectCategory | 'all') => void;
 loadMore: () => void;
 resetDisplay: () => void;
 projectsByCategory: Record<ProjectCategory, Project[]>;
 totalProjects: number;
}

export const usePortfolio = (): UsePortfolioReturn => {
 const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
 const [displayCount, setDisplayCount] = useState<number>(6);

 const filteredProjects = useMemo(() => {
  if (selectedCategory === 'all') {
   return projectsData;
  }
  return projectsData.filter(project => project.category === selectedCategory);
 }, [selectedCategory]);

 const displayedProjects = useMemo(() => {
  return filteredProjects.slice(0, displayCount);
 }, [filteredProjects, displayCount]);

 const featuredProjects = useMemo(() => {
  return projectsData.filter(project => project.isFeatured);
 }, []);

 const projectsByCategory = useMemo(() => {
  return projectsData.reduce((acc, project) => {
   if (!acc[project.category]) {
    acc[project.category] = [];
   }
   acc[project.category].push(project);
   return acc;
  }, {} as Record<ProjectCategory, Project[]>);
 }, []);

 const hasMoreProjects = displayedProjects.length < filteredProjects.length;

 const handleCategoryChange = useCallback((category: ProjectCategory | 'all') => {
  setSelectedCategory(category);
  setDisplayCount(6);
 }, []);

 const loadMore = useCallback(() => {
  setDisplayCount(prev => prev + 6);
 }, []);

 const resetDisplay = useCallback(() => {
  setDisplayCount(6);
 }, []);

 return {
  projects: projectsData,
  selectedCategory,
  displayCount,
  filteredProjects,
  displayedProjects,
  hasMoreProjects,
  featuredProjects,
  setSelectedCategory: handleCategoryChange,
  loadMore,
  resetDisplay,
  projectsByCategory,
  totalProjects: projectsData.length,
 };
};