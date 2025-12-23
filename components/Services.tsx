import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold tracking-wide uppercase text-sm">Nossa Expertise</span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Soluções Ambientais Integradas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Oferecemos consultoria técnica de ponta para garantir a conformidade legal e a sustentabilidade das suas operações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border group flex flex-col overflow-hidden ${service.highlight
                ? 'bg-gradient-to-br from-[#4f863c] to-[#8bbf6e] border-transparent'
                : 'bg-white border-gray-100'
                }`}
            >
              {service.highlight && service.backgroundImage && (
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
                  <img
                    src={service.backgroundImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {!service.highlight && (
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors relative z-10">
                  <service.icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
              )}

              <h3 className={`text-xl font-bold mb-3 transition-colors relative z-10 ${service.highlight ? 'text-white' : 'text-gray-900 group-hover:text-primary-700'
                }`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed mb-6 flex-grow relative z-10 ${service.highlight ? 'text-white/90' : 'text-gray-600'
                }`}>
                {service.description}
              </p>

              <Link
                to={`/servicos/${service.id}`}
                className={`inline-flex items-center font-semibold transition-colors mt-auto cursor-pointer relative z-10 ${service.highlight ? 'text-white hover:text-white/80' : 'text-primary-600 hover:text-primary-700'
                  }`}
              >
                Ver Detalhes
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;