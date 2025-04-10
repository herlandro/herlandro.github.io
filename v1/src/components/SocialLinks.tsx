
import React from 'react';
import { Github, Linkedin, Instagram, ExternalLink, FileText, Mail } from 'lucide-react';

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
}

const SocialLinkItem: React.FC<SocialLinkProps> = ({ icon, label, href, gradient }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-link group"
    >
      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${gradient} text-white`}>
        {icon}
      </div>
      <span className="font-medium group-hover:text-blue-600 transition-colors">{label}</span>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink size={16} className="text-gray-400" />
      </div>
    </a>
  );
};

const SocialLinks: React.FC = () => {
  const links = [
    {
      icon: <Github size={20} />,
      label: "GitHub Projects",
      href: "https://github.com/yourusername",
      gradient: "bg-gradient-to-r from-gray-700 to-gray-900"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn Profile",
      href: "https://linkedin.com/in/yourusername",
      gradient: "bg-gradient-to-r from-blue-500 to-blue-700"
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram Feed",
      href: "https://instagram.com/yourusername",
      gradient: "bg-gradient-to-r from-pink-500 to-purple-500"
    },
    {
      icon: <FileText size={20} />,
      label: "Medium Articles",
      href: "https://medium.com/@yourusername",
      gradient: "bg-gradient-to-r from-green-400 to-cyan-500"
    },
    {
      icon: <Mail size={20} />,
      label: "Email Contact",
      href: "mailto:your.email@example.com",
      gradient: "bg-gradient-to-r from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto mb-10">
      <h2 className="text-xl font-bold mb-4 text-center font-display">Connect With Me</h2>
      <div className="space-y-2 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-slate-100/50">
        {links.map((link, index) => (
          <SocialLinkItem
            key={index}
            icon={link.icon}
            label={link.label}
            href={link.href}
            gradient={link.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
