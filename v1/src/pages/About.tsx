
import React from 'react';
import { companies } from '@/data/data';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-1">
          <div className="glass-card p-6 sticky top-24">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg mb-4 neon-border">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Seu Nome" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-bold mb-1 neon-text">Seu Nome</h2>
              <p className="text-lg text-muted-foreground mb-4">Senior iOS Developer</p>
              
              <div className="flex space-x-3 mb-6">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:seu.email@exemplo.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} />
                </a>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Baixar Currículo
              </Button>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">Sobre Mim</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Olá! Sou um desenvolvedor iOS sênior com mais de 8 anos de experiência na criação de aplicativos móveis inovadores e de alta qualidade. 
              Minha expertise abrange todo o ciclo de vida do desenvolvimento de aplicativos, desde a concepção até a entrega e manutenção contínua.
            </p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Especializado em Swift, SwiftUI e UIKit, também tenho experiência com outras tecnologias como Kotlin, Flutter e React Native, 
              o que me permite abordar problemas de diferentes perspectivas e escolher a melhor solução para cada projeto.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Sou apaixonado por criar interfaces elegantes e funcionais que proporcionam excelentes experiências aos usuários, 
              sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">Experiência Profissional</h2>
            <div className="space-y-8">
              {companies.map((company, index) => (
                <div key={company.id} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary">
                  <h3 className="text-xl font-semibold">{company.name}</h3>
                  <p className="text-primary font-medium mb-1">{company.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{company.period}</p>
                  <p className="text-muted-foreground">
                    {index === 0 
                      ? "Desenvolvimento de aplicativos iOS de alto desempenho utilizando as mais recentes tecnologias. Liderança de equipe e mentoria para desenvolvedores juniores." 
                      : "Trabalhei em diversos projetos, desde conceito até lançamento, colaborando com equipes multidisciplinares."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
