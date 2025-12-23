import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <>
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 flex items-center min-h-[90vh] bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/src/public/img/1.jpg"
            alt="Astracã Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-primary-950/15"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 uppercase">
            <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter leading-none">
              Astracã
            </h1>
            <div className="text-xl md:text-3xl font-bold text-primary-500 tracking-[0.2em] mt-2">
              Soluções Ambientais
            </div>
          </div>
          <p className="mt-4 text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-light">
            Consultoria especializada em sustentabilidade e compliance em Angola.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/contactos"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-primary-900 bg-white hover:bg-gray-100 md:text-lg transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-lg text-white hover:bg-white/10 md:text-lg transition-all cursor-pointer backdrop-blur-sm"
            >
              Nossos Serviços
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;