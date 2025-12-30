import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Contactos', href: '/contactos' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(false)}>
              <img src="/img/logo1.png" alt="Astracã Logo" className="max-w-[100px] w-full h-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`${isActive(link.href)
                  ? 'text-primary-600 font-semibold'
                  : 'text-gray-600 hover:text-primary-600'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contactos"
              className="bg-primary-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm cursor-pointer"
            >
              Pedir Cotação
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`${isActive(link.href)
                  ? 'text-primary-600 bg-gray-50'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  } block px-3 py-2 rounded-md text-base font-medium cursor-pointer`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contactos"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary-600 text-white px-3 py-3 mt-4 rounded-md text-base font-medium hover:bg-primary-700 cursor-pointer"
            >
              Pedir Cotação
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;