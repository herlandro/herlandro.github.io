
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="py-4 px-4 md:px-8 border-b border-border/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold neon-text">Seu Nome</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link to="/" className="nav-link active">Sobre</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
            <Link to="/portfolio" className="nav-link">Laboratório</Link>
            <Link to="/contact" className="nav-link">Contato</Link>
          </nav>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Baixar Currículo
          </Button>
        </div>
        
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border/50 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="nav-link active" onClick={toggleMobileMenu}>Sobre</Link>
            <Link to="/skills" className="nav-link" onClick={toggleMobileMenu}>Skills</Link>
            <Link to="/portfolio" className="nav-link" onClick={toggleMobileMenu}>Laboratório</Link>
            <Link to="/contact" className="nav-link" onClick={toggleMobileMenu}>Contato</Link>
          </nav>
          <div className="mt-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Baixar Currículo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
