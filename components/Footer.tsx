import React from 'react';
import { Mail, Phone, MapPin, Leaf } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/img/logo2.png" alt="Astracã Logo" className="max-w-[150px] w-full h-auto" />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Soluções ambientais integradas para um futuro sustentável em Angola.
              Comprometidos com a qualidade e compliance legal.
            </p>
            <p className="text-gray-500 text-xs">
              NIF: {CONTACT_INFO.nif}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/contactos" className="text-gray-400 hover:text-white transition-colors">Pedir Cotação</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Contactos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">{CONTACT_INFO.phone1}</span>
                  <span className="text-gray-400 text-sm">{CONTACT_INFO.phone2}</span>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 text-sm hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Astracã Soluções Ambientais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;