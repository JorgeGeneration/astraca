import React from 'react';
import { VALUES } from '../constants';

const Values: React.FC = () => {
  return (
    <section id="valores" className="py-24 bg-primary-900 text-white overflow-hidden relative">
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5">
        <svg width="400" height="400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L12 24M0 12L24 12" stroke="white" strokeWidth="1"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 opacity-5">
         <div className="w-64 h-64 rounded-full border-4 border-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary-300 font-bold tracking-wide uppercase text-sm">Nossa Identidade</span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl text-white">
            Nossos Valores Fundamentais
          </h2>
          <p className="mt-4 text-xl text-primary-200 max-w-3xl mx-auto">
            Os pilares que sustentam cada projeto, cada relação e cada decisão na Astracã.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {VALUES.map((value) => (
            <div key={value.id} className="relative bg-primary-800/50 p-8 rounded-2xl border border-primary-700 hover:bg-primary-800 transition-colors duration-300">
              <div className="absolute -top-6 left-8 flex items-center justify-center h-12 w-12 rounded-lg bg-primary-500 shadow-lg font-bold text-xl text-white">
                {value.id}
              </div>
              <h3 className="mt-6 text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-primary-100 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;