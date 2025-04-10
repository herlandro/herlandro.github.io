
import React from 'react';
import { Technology } from '@/types';

interface SkillCardProps {
  technology: Technology;
  level?: number; // de 1 a 5
}

const SkillCard: React.FC<SkillCardProps> = ({ technology, level = 5 }) => {
  return (
    <div className="glass-card p-4 flex flex-col items-center">
      <div 
        className="w-16 h-16 mb-4 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${technology.color}20` }}
      >
        {technology.icon ? (
          <img 
            src={technology.icon} 
            alt={technology.name} 
            className="w-10 h-10" 
          />
        ) : (
          <div 
            className="w-10 h-10 rounded-full" 
            style={{ backgroundColor: technology.color }}
          />
        )}
      </div>
      
      <h3 className="font-medium mb-1">{technology.name}</h3>
      
      <div className="flex mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            className={`w-2 h-6 mx-0.5 rounded-full ${i < level ? 'bg-primary' : 'bg-muted'}`}
            style={i < level ? { backgroundColor: technology.color } : {}}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
