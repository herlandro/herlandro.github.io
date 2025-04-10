
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project, Technology } from '@/types';

interface ProjectCardProps {
  project: Project;
  technologies: Technology[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, technologies }) => {
  const projectTechs = technologies.filter(tech => 
    project.technologies.includes(tech.id)
  );

  return (
    <div className="glass-card overflow-hidden group hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {projectTechs.map(tech => (
            <span 
              key={tech.id} 
              className="text-xs px-2 py-1 rounded-full"
              style={{ 
                backgroundColor: `${tech.color}20`, 
                color: tech.color 
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
            >
              <Github size={14} />
              <span>Código</span>
            </a>
          )}
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:text-primary transition-colors ml-auto"
            >
              <span>Ver Projeto</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
