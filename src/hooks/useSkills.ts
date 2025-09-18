import { useState, useMemo, useCallback } from 'react';
import type { Skill, SkillCategory } from '../types/skill';
import { skillsData } from '../data/skillsData';

interface UseSkillsReturn {
 skills: Skill[];
 selectedCategory: SkillCategory | 'all';
 filteredSkills: Skill[];
 setSelectedCategory: (category: SkillCategory | 'all') => void;
 skillsByCategory: Record<SkillCategory, Skill[]>;
 totalSkills: number;
}

export const useSkills = (): UseSkillsReturn => {
 const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all');

 const filteredSkills = useMemo(() => {
  if (selectedCategory === 'all') {
   return skillsData;
  }
  return skillsData.filter(skill => skill.category === selectedCategory);
 }, [selectedCategory]);

 const skillsByCategory = useMemo(() => {
  return skillsData.reduce((acc, skill) => {
   if (!acc[skill.category]) {
    acc[skill.category] = [];
   }
   acc[skill.category].push(skill);
   return acc;
  }, {} as Record<SkillCategory, Skill[]>);
 }, []);

 const handleCategoryChange = useCallback((category: SkillCategory | 'all') => {
  setSelectedCategory(category);
 }, []);

 return {
  skills: skillsData,
  selectedCategory,
  filteredSkills,
  setSelectedCategory: handleCategoryChange,
  skillsByCategory,
  totalSkills: skillsData.length,
 };
};