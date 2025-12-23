import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold tracking-wide uppercase text-sm">Nosso Trabalho</span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Portfólio de Projetos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Conheça alguns dos casos de sucesso onde implementamos soluções sustentáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3 text-gray-500 text-sm font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>Cliente: {project.client}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <Link
                  to={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors group/btn self-start mt-auto"
                >
                  Ver Mais Detalhes
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;