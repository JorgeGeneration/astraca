import React from 'react';
import { Clock, HeartHandshake, Settings, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements trying to mimic the leaves in the image */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-primary-800 sm:text-5xl mb-4">
            Porquê somos a escolha certa?
          </h2>
          <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          
          {/* Agilidade */}
          <div className="group flex flex-col items-center">
            <div className="w-24 h-24 bg-white border-4 border-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary-500 group-hover:shadow-lg transition-all duration-300">
              <Settings className="w-10 h-10 text-primary-800 group-hover:text-primary-600 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors">
              Trabalhamos com agilidade
            </h3>
          </div>

          {/* Clientes */}
          <div className="group flex flex-col items-center">
            <div className="w-24 h-24 bg-white border-4 border-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary-500 group-hover:shadow-lg transition-all duration-300">
              <HeartHandshake className="w-10 h-10 text-primary-800 group-hover:text-primary-600 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors">
              Valorizamos nossos clientes
            </h3>
          </div>

          {/* Qualidade */}
          <div className="group flex flex-col items-center">
            <div className="w-24 h-24 bg-white border-4 border-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary-500 group-hover:shadow-lg transition-all duration-300">
              <Award className="w-10 h-10 text-primary-800 group-hover:text-primary-600 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors">
              Oferecemos serviços de qualidade
            </h3>
          </div>

          {/* Disponibilidade */}
          <div className="group flex flex-col items-center">
            <div className="w-24 h-24 bg-white border-4 border-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary-500 group-hover:shadow-lg transition-all duration-300 relative">
              <Clock className="w-10 h-10 text-primary-800 group-hover:text-primary-600 transition-colors" />
              <div className="absolute -bottom-2 bg-primary-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">24h</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors">
              Estamos sempre disponíveis
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;