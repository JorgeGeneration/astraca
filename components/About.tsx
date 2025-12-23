import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Intro Section - Page 2 */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="text-primary-600 font-bold tracking-wide uppercase text-sm">Quem Somos</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Sobre a ASTRACÃ
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Astracã–Soluções Ambientais é uma empresa privada de direito angolano, titular de número de identificação fiscal 5417201553, com sede em Luanda, na Urbanização Nova-Vida, Rua 50, prédio 79 Apto 22, Luanda-Angola.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Tem como objecto social a prestação de serviços, nomeadamente, consultoria ambiental. Temos experiência nas mais diversas áreas do domínio ambiental e Petrolífero, nomeadamente em Auditorias Ambientais Off / Onshore.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium text-primary-800">
              Temos a capacidade para realizar de forma competente qualquer tipo de serviços no âmbito das acções humanas sobre o ambiente.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/src/public/img/4.png"
                alt="Astracã Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Team - Page 3 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <img
                src="/src/public/img/10.png"
                alt="Quadro Técnico"
                className="rounded-2xl shadow-xl w-full object-cover h-80"
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary-600" />
                <h3 className="text-3xl font-bold text-gray-900">Quadro Técnico</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A empresa conta com uma equipa de profissionais com experiência nas mais diversas áreas do domínio ambiental, e está preparada para atender clientes de pequeno, médio e grande porte, oferecendo sempre uma solução inteligente e económica para quem precisa de serviços relacionados com o sector do ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Quality Policy - Page 4 & 5 */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Quality Policy */}
          <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900">Nossa Política de Qualidade</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Na Astracã, trabalhamos com rigor e profissionalismo para prestar serviços de modo a satisfazer plenamente as expectativas dos nossos clientes, garantindo a conformidade com a legislação em vigor e a melhoria contínua dos nossos processos.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nossa Visão</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              A nossa visão é ser reconhecidos como a empresa de referência em consultoria ambiental em Angola, destacando-nos não apenas pela qualidade dos nossos serviços, mas também pelo impacto positivo que geramos no ambiente e na sociedade.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Queremos ser vistos como um símbolo de confiança, inovação e responsabilidade, influenciando organizações e comunidades a adotarem práticas cada vez mais sustentáveis.
            </p>
            <p className="text-gray-600 leading-relaxed font-medium">
              Enxergamos um futuro em que desenvolvimento económico e proteção ambiental caminham lado a lado.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;