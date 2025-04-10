
import React, { useState } from 'react';
import { technologies, companies, projects, articles } from '@/data/data';
import FilterBar from '@/components/FilterBar';
import ProjectCard from '@/components/ProjectCard';
import ArticleCard from '@/components/ArticleCard';
import { Filter } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Portfolio = () => {
  const [filter, setFilter] = useState<Filter>({ technologies: [], companies: [] });
  
  const filteredProjects = projects.filter(project => {
    // Se não há filtros, mostra todos
    if (filter.technologies.length === 0 && filter.companies.length === 0) {
      return true;
    }
    
    // Verifica se o projeto tem pelo menos uma das tecnologias selecionadas
    const hasTechnology = filter.technologies.length === 0 || 
      project.technologies.some(tech => filter.technologies.includes(tech));
    
    // Verifica se o projeto pertence a uma das empresas selecionadas
    const hasCompany = filter.companies.length === 0 || 
      (project.company && filter.companies.includes(project.company));
    
    return hasTechnology && hasCompany;
  });
  
  const filteredArticles = articles.filter(article => {
    // Se não há filtros de tecnologia, mostra todos os artigos
    if (filter.technologies.length === 0) {
      return true;
    }
    
    // Verifica se o artigo tem pelo menos uma das tecnologias selecionadas
    return article.technologies.some(tech => filter.technologies.includes(tech));
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 neon-text">Laboratório</h1>
        <p className="text-lg text-muted-foreground">
          Conheça meus projetos e artigos sobre desenvolvimento mobile
        </p>
      </div>
      
      <FilterBar 
        technologies={technologies} 
        companies={companies} 
        filter={filter} 
        setFilter={setFilter} 
      />
      
      <Tabs defaultValue="projects" className="mb-16">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="projects">Projetos</TabsTrigger>
          <TabsTrigger value="articles">Artigos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="mt-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  technologies={technologies} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum projeto encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="articles" className="mt-6">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map(article => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  technologies={technologies} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum artigo encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Portfolio;
