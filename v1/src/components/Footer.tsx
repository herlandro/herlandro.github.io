
import React from 'react';
import { Mail, MapPin, Heart, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-card/50 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3 neon-text">Entre em Contato</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-2 hover:text-primary transition-colors">
              <Mail size={16} />
              <a href="mailto:seu.email@exemplo.com">
                seu.email@exemplo.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span>São Paulo, Brasil</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Seu Nome
            </div>
            <div className="flex items-center justify-center md:justify-end gap-1 text-sm text-muted-foreground mt-1">
              <span>Feito com</span>
              <Heart size={14} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
