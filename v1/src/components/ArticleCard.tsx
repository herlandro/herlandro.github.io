
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Article, Technology } from '@/types';

interface ArticleCardProps {
  article: Article;
  technologies: Technology[];
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, technologies }) => {
  const articleTechs = technologies.filter(tech => 
    article.technologies.includes(tech.id)
  );

  return (
    <div className="glass-card overflow-hidden group hover:scale-[1.02]">
      <div className="h-40 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2">{article.title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{article.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {articleTechs.map(tech => (
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
          <span className="text-xs text-muted-foreground">{article.date}</span>
          
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
          >
            <span>Ler no Medium</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
