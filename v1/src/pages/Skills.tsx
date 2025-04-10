
import React from 'react';
import { technologies } from '@/data/data';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
  const skillLevels: Record<string, number> = {
    swift: 5,
    swiftui: 5,
    uikit: 4,
    objc: 4,
    kotlin: 3,
    flutter: 3,
    'react-native': 4,
    javascript: 4,
    typescript: 4,
    firebase: 5,
    git: 5,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 neon-text">Habilidades</h1>
        <p className="text-lg text-muted-foreground">
          Tecnologias e ferramentas que domino
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map(tech => (
          <SkillCard 
            key={tech.id} 
            technology={tech} 
            level={skillLevels[tech.id] || 3} 
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
