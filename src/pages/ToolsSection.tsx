import React, { useState, useMemo } from 'react';
import { SkillCard } from '../components/SkillCard';
import { skillsData } from '../data/skillsData';
import { sectionClasses } from '../constants/toolsStyles';
import { SKILL_CATEGORIES } from '../constants/skillCategories';
import type { SkillCategory } from '../types/skill';

export const ToolsSection: React.FC = () => {
 const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all');

 const filteredSkills = useMemo(() => {
  if (selectedCategory === 'all') {
   return skillsData;
  }
  return skillsData.filter(skill => skill.category === selectedCategory);
 }, [selectedCategory]);

 const handleCategoryChange = (category: SkillCategory | 'all') => {
  setSelectedCategory(category);
 };

 return (
  <section id="ferramentas" className={sectionClasses.section}>
   <div className={sectionClasses.container}>
    <h2 className={sectionClasses.title}>
     Ferramentas e Tecnologias
    </h2>
    <div className={sectionClasses.divider} />

    <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
     <button
      onClick={() => handleCategoryChange('all')}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === 'all'
        ? 'bg-cyan-400 text-gray-900'
        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
       }`}
     >
      Todas
     </button>
     {Object.entries(SKILL_CATEGORIES).map(([key, label]) => (
      <button
       key={key}
       onClick={() => handleCategoryChange(key as SkillCategory)}
       className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === key
         ? 'bg-cyan-400 text-gray-900'
         : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
       {label}
      </button>
     ))}
    </div>

    <div className={sectionClasses.skillsGrid}>
     {filteredSkills.map((skill) => (
      <SkillCard key={skill.id} skill={skill} />
     ))}
    </div>

    <div className="mt-8 text-gray-400 text-sm">
     {selectedCategory === 'all'
      ? `${skillsData.length} tecnologias`
      : `${filteredSkills.length} tecnologias em ${SKILL_CATEGORIES[selectedCategory as SkillCategory]}`
     }
    </div>
   </div>
  </section>
 );
};