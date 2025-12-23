import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={service.images[0]}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply transition-opacity" style={{ opacity: service.overlayOpacity ? Number(service.overlayOpacity) : 0.6 }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white">
          <Link to="/servicos" className="inline-flex items-center text-primary-200 hover:text-white mb-6 transition-colors w-fit">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar aos Serviços
          </Link>
          <div className="flex items-center gap-4 mb-4">
            {!service.hideIcon && (
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <service.icon className="h-8 w-8 text-primary-300" />
              </div>
            )}
            <span className="text-primary-300 font-semibold tracking-wide uppercase text-sm">Serviço Especializado</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Descrição Detalhada</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed whitespace-pre-line">
              {service.longDescription}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">O que inclui este serviço?</h3>
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Galeria Relacionada</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {service.images.slice(1).map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden h-64 shadow-md hover:shadow-lg transition-shadow">
                  <img src={img} alt={`${service.title} ${idx + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interessado neste serviço?</h3>
              <p className="text-gray-600 mb-8">
                Nossa equipe técnica está pronta para analisar a necessidade da sua empresa e propor a melhor solução.
              </p>

              <div className="space-y-4">
                <Link
                  to={`/contactos?service=${service.id}`}
                  className="flex items-center justify-center w-full px-6 py-4 border border-transparent text-lg font-bold rounded-xl shadow-lg text-white bg-primary-600 hover:bg-primary-700 transition-all hover:-translate-y-1"
                >
                  Pedir Cotação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="text-xs text-center text-gray-400 mt-4">
                  Resposta em até 24 horas úteis.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Por que escolher a Astracã?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>Equipe Multidisciplinar</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>Conformidade Legal</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>Tecnologia Avançada</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;