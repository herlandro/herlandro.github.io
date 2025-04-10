
import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada",
      description: "Obrigado pelo contato! Responderei em breve.",
    });
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 neon-text">Contato</h1>
        <p className="text-lg text-muted-foreground">
          Entre em contato para discutirmos seu próximo projeto
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="glass-card p-8">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-border">Envie uma mensagem</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Nome</label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Assunto</label>
              <Input id="subject" placeholder="Do que se trata?" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
              <Textarea id="message" placeholder="Sua mensagem..." rows={5} />
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Enviar Mensagem
            </Button>
          </form>
        </div>
        
        <div>
          <div className="glass-card p-8 mb-8">
            <h2 className="text-xl font-bold mb-6 pb-2 border-b border-border">Informações de Contato</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-primary w-5 h-5 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:seu.email@exemplo.com" className="text-muted-foreground hover:text-primary transition-colors">
                    seu.email@exemplo.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-primary w-5 h-5 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Telefone</h3>
                  <a href="tel:+5511999999999" className="text-muted-foreground hover:text-primary transition-colors">
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-primary w-5 h-5 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Localização</h3>
                  <p className="text-muted-foreground">
                    São Paulo, Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8">
            <h2 className="text-xl font-bold mb-6 pb-2 border-b border-border">Redes Sociais</h2>
            
            <div className="space-y-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 hover:bg-muted transition-colors rounded-lg"
              >
                <Github className="text-primary w-5 h-5 mr-3" />
                <span>github.com/yourusername</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 hover:bg-muted transition-colors rounded-lg"
              >
                <Linkedin className="text-primary w-5 h-5 mr-3" />
                <span>linkedin.com/in/yourusername</span>
              </a>
              
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 hover:bg-muted transition-colors rounded-lg"
              >
                <Twitter className="text-primary w-5 h-5 mr-3" />
                <span>twitter.com/yourusername</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
