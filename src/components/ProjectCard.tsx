import React from 'react';
import { FaExternalLinkAlt, FaEye, FaCalendarAlt, FaUser } from 'react-icons/fa';
import type { ProjectCardProps } from '../types/project';
import { projectCardClasses } from '../constants/portfolioStyles';
import { PROJECT_STATUS_COLORS } from '../constants/projectCategories';

export const ProjectCard: React.FC<ProjectCardProps> = ({
 project,
 variant = 'default'
}) => {
 const getContainerClass = () => {
  let baseClass = projectCardClasses.container;

  if (variant === 'featured' || project.isFeatured) {
   baseClass += ` ${projectCardClasses.featuredContainer}`;
  }

  if (variant === 'compact') {
   baseClass += ` ${projectCardClasses.compactContainer}`;
  }

  return baseClass;
 };

 const getTagClass = (tag: string) => {
  const baseClass = projectCardClasses.tag;

  if (project.isFeatured) {
   return `${baseClass} ${projectCardClasses.featuredTag}`;
  }

  const techColors: Record<string, string> = {
   'React': 'bg-blue-900/50 text-blue-300',
   'Angular': 'bg-red-900/50 text-red-300',
   'Node.js': 'bg-green-900/50 text-green-300',
   'Next.js': 'bg-gray-900/50 text-gray-300',
   'JavaScript': 'bg-yellow-900/50 text-yellow-300',
   'TypeScript': 'bg-blue-900/50 text-blue-300',
   default: 'bg-cyan-900/50 text-cyan-300'
  };

  return `${baseClass} ${techColors[tag] || techColors.default}`;
 };

 return (
  <div className={getContainerClass()}>
   {project.isFeatured && (
    <div className={projectCardClasses.featuredBadge}>
     Destaque
    </div>
   )}

   <div className={projectCardClasses.imageWrapper}>
    <img
     src={project.image}
     alt={`Screenshot do projeto ${project.title}`}
     className={projectCardClasses.image}
     loading="lazy"
    />
   </div>

   <div className={projectCardClasses.content}>
    <div className={projectCardClasses.metaInfo}>
     <div className="flex items-center gap-2">
      <FaCalendarAlt className="text-gray-500" />
      <span>{project.year}</span>
     </div>
     <div className="flex items-center gap-2">
      <div className={`${projectCardClasses.status} ${PROJECT_STATUS_COLORS[project.status]}`}>
       {project.status === 'completed' ? 'Concluído' :
        project.status === 'in-progress' ? 'Em Desenvolvimento' :
         project.status === 'maintenance' ? 'Manutenção' : 'Arquivado'}
      </div>
     </div>
    </div>

    {project.client && (
     <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
      <FaUser className="text-gray-500" />
      <span>Cliente: {project.client}</span>
     </div>
    )}

    <h3 className={projectCardClasses.title}>
     {project.title}
    </h3>

    <p className={projectCardClasses.description}>
     {project.description}
    </p>

    <div className={projectCardClasses.tagsContainer}>
     {project.tags.map((tag) => (
      <span
       key={tag}
       className={getTagClass(tag)}
      >
       {tag}
      </span>
     ))}
    </div>

    {project.showActions && (
     <div className={projectCardClasses.actions}>
      {project.liveUrl && (
       <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={projectCardClasses.actionLink}
        aria-label={`Ver projeto ${project.title} ao vivo`}
       >
        <FaEye className="inline mr-1" />
        Ver Projeto
       </a>
      )}
      {project.repoUrl && (
       <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={projectCardClasses.actionLink}
        aria-label={`Ver detalhes do projeto ${project.title}`}
       >
        <FaExternalLinkAlt className="inline mr-1" />
        Ver Detalhes
       </a>
      )}
     </div>
    )}
   </div>
  </div>
 );
};