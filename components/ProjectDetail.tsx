import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, MapPin, Calendar, Building, CheckCircle, ArrowRight } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <div className="absolute inset-0">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
          <Link to="/portfolio" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors w-fit group">
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Voltar ao Portfólio
          </Link>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 max-w-4xl">
            {project.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl font-light">
            {project.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visão Geral do Projeto</h2>
              <p className="mb-10 leading-relaxed text-lg">
                {project.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-8 bg-red-500 rounded-full mr-3"></span>
                    O Desafio
                  </h3>
                  <p className="text-gray-600">
                    {project.challenge}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                    A Solução
                  </h3>
                  <p className="text-gray-600">
                    {project.solution}
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Galeria de Imagens</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md cursor-pointer">
                    <img 
                      src={img} 
                      alt={`Galeria ${project.title} ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Project Info Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  Ficha Técnica
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Building className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Cliente</p>
                      <p className="text-gray-900 font-semibold text-lg">{project.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Localização</p>
                      <p className="text-gray-900 font-semibold text-lg">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Ano</p>
                      <p className="text-gray-900 font-semibold text-lg">{project.date}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-primary-900 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 opacity-20">
                  <CheckCircle className="h-40 w-40 text-primary-400" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 relative z-10">Precisa de um projeto semelhante?</h3>
                <p className="text-primary-100 mb-8 relative z-10">
                  Nossa equipe está pronta para aplicar a mesma excelência no seu negócio.
                </p>
                
                <Link
                  to={`/contactos?description=Tenho interesse em um projeto semelhante ao "${project.title}".`}
                  className="flex items-center justify-center w-full px-6 py-4 border border-transparent text-lg font-bold rounded-xl shadow-lg text-primary-900 bg-white hover:bg-gray-50 transition-all hover:-translate-y-1 relative z-10"
                >
                  Solicitar Cotação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;