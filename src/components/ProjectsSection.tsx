
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs bg-accent px-2 py-1 rounded-full text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:text-brand-purple transition-colors"
            >
              <Github size={14} />
              <span>Code</span>
            </a>
          )}
          
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:text-brand-purple transition-colors ml-auto"
            >
              <span>View Project</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/project1",
      liveLink: "https://project1.com"
    },
    {
      title: "Travel Blog",
      description: "A travel blog built with Next.js and Tailwind CSS",
      image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2.com"
    },
    {
      title: "Fitness Tracker",
      description: "A fitness tracking app built with React Native",
      image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["React Native", "Firebase", "Expo"],
      githubLink: "https://github.com/yourusername/project3",
      liveLink: "https://project3.com"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
