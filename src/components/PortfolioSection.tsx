import React, { useState, useMemo } from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/projectsData';
import { sectionClasses } from '../constants/portfolioStyles';
import { PROJECT_CATEGORIES } from '../constants/projectCategories';
import type { ProjectCategory } from '../types/project';

export const PortfolioSection: React.FC = () => {
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

  const hasMoreProjects = displayedProjects.length < filteredProjects.length;

  const handleCategoryChange = (category: ProjectCategory | 'all') => {
    setSelectedCategory(category);
    setDisplayCount(6); // Reset display count when changing category
  };

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  return (
    <section id="portfolio" className={sectionClasses.section}>
      <div className={sectionClasses.container}>
        <h2 className={sectionClasses.title}>
          Portfólio
        </h2>
        <div className={sectionClasses.divider} />

        {/* Filtros de categoria */}
        <div className={sectionClasses.filterContainer}>
          <button
            onClick={() => handleCategoryChange('all')}
            className={`${sectionClasses.filterButton} ${selectedCategory === 'all' ? sectionClasses.filterButtonActive : ''
              }`}
          >
            Todos ({projectsData.length})
          </button>
          {Object.entries(PROJECT_CATEGORIES).map(([key, label]) => {
            const count = projectsData.filter(p => p.category === key).length;
            if (count === 0) return null;

            return (
              <button
                key={key}
                onClick={() => handleCategoryChange(key as ProjectCategory)}
                className={`${sectionClasses.filterButton} ${selectedCategory === key ? sectionClasses.filterButtonActive : ''
                  }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>

        {/* Grid de projetos */}
        <div className={sectionClasses.projectsGrid}>
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant={project.isFeatured ? 'featured' : 'default'}
            />
          ))}
        </div>

        {/* Botão carregar mais */}
        {hasMoreProjects && (
          <button
            onClick={handleLoadMore}
            className={sectionClasses.loadMoreButton}
          >
            Carregar Mais Projetos ({filteredProjects.length - displayedProjects.length} restantes)
          </button>
        )}

        {/* Contador de projetos */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          Exibindo {displayedProjects.length} de {filteredProjects.length} projetos
          {selectedCategory !== 'all' && ` em ${PROJECT_CATEGORIES[selectedCategory as ProjectCategory]}`}
        </div>
      </div>
    </section>
  );
};