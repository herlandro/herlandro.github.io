
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, ExternalLink, Mail, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Meu Portfólio</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Desenvolvedor Web & Designer especializado em criar experiências digitais incríveis</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="col-span-1 lg:col-span-1 p-6 hover-card bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Perfil" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-1">Seu Nome</h2>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">Desenvolvedor Web & Designer</p>
              
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6">
                <MapPin size={14} className="mr-1" />
                <span>São Paulo, Brasil</span>
              </div>
              
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Mail size={14} className="mr-1" /> Contato
                </Button>
                <Button size="sm" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Meu CV
                </Button>
              </div>
            </div>
          </Card>
          
          <Card className="col-span-1 lg:col-span-2 p-8 hover-card bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-slate-200 dark:border-slate-700">Sobre Mim</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Olá! Sou um desenvolvedor web e designer apaixonado por criar interfaces elegantes e funcionais. 
              Tenho experiência em React, TypeScript e design de UI/UX. Atualmente trabalho desenvolvendo 
              aplicações web responsivas e acessíveis que proporcionam excelentes experiências aos usuários.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Habilidades</h3>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-indigo-500 mr-1" />
                    <span>React & React Native</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-indigo-500 mr-1" />
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-indigo-500 mr-1" />
                    <span>UI/UX Design</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Interesses</h3>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-indigo-500 mr-1" />
                    <span>Design de Interfaces</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-indigo-500 mr-1" />
                    <span>Acessibilidade</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-indigo-500 mr-1" />
                    <span>Animações Web</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button variant="link" className="text-indigo-600 dark:text-indigo-400 p-0">
                Veja mais sobre mim <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-display mb-8 text-center">Projetos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="overflow-hidden hover-card bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <Star className="w-12 h-12 opacity-20" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Projeto {project}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                    Uma descrição breve do projeto, destacando as principais tecnologias e realizações.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs">React</span>
                    <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs">Tailwind</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" className="rounded-full text-xs">Ver Código</Button>
                    <Button size="sm" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-xs">
                      Visualizar <ExternalLink size={12} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <footer className="text-center py-6 border-t border-slate-200 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} - Todos os direitos reservados</p>
          <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">Criado com React, TypeScript e TailwindCSS</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
