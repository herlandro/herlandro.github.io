
import React from 'react';
import { Filter, Technology, Company } from '@/types';
import { X } from 'lucide-react';

interface FilterBarProps {
  technologies: Technology[];
  companies: Company[];
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  technologies, 
  companies, 
  filter, 
  setFilter 
}) => {
  const toggleTechnologyFilter = (techId: string) => {
    if (filter.technologies.includes(techId)) {
      setFilter({
        ...filter,
        technologies: filter.technologies.filter(id => id !== techId)
      });
    } else {
      setFilter({
        ...filter,
        technologies: [...filter.technologies, techId]
      });
    }
  };

  const toggleCompanyFilter = (companyId: string) => {
    if (filter.companies.includes(companyId)) {
      setFilter({
        ...filter,
        companies: filter.companies.filter(id => id !== companyId)
      });
    } else {
      setFilter({
        ...filter,
        companies: [...filter.companies, companyId]
      });
    }
  };

  const clearFilters = () => {
    setFilter({ technologies: [], companies: [] });
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h3 className="text-lg font-medium mb-2 md:mb-0">Filtrar por:</h3>
        
        {(filter.technologies.length > 0 || filter.companies.length > 0) && (
          <button 
            onClick={clearFilters}
            className="flex items-center text-sm text-primary hover:underline"
          >
            <X size={16} className="mr-1" />
            Limpar filtros
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm text-muted-foreground mb-2">Tecnologias:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map(tech => (
              <div
                key={tech.id}
                onClick={() => toggleTechnologyFilter(tech.id)}
                className={`filter-tag ${filter.technologies.includes(tech.id) ? 'active' : ''}`}
                style={tech.color ? {
                  backgroundColor: filter.technologies.includes(tech.id) ? tech.color : '',
                } : {}}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm text-muted-foreground mb-2">Empresas:</h4>
          <div className="flex flex-wrap gap-2">
            {companies.map(company => (
              <div
                key={company.id}
                onClick={() => toggleCompanyFilter(company.id)}
                className={`filter-tag ${filter.companies.includes(company.id) ? 'active' : ''}`}
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
