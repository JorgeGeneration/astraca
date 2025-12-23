import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import Clients from './components/Clients';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import Values from './components/Values';
import WhyChooseUs from './components/WhyChooseUs';

// Wrapper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage: React.FC = () => (
  <>
    <Hero />
    <WhyChooseUs />
    <Values />
    <Clients />
  </>
);

const AboutPage: React.FC = () => (
  <div className="pt-20">
    <About />
  </div>
);

const ServicesPage: React.FC = () => (
  <div className="pt-20">
    <Services />
  </div>
);

const PortfolioPage: React.FC = () => (
  <div className="pt-20">
    <Portfolio />
    <Clients />
  </div>
);

const ContactPage: React.FC = () => (
  <div className="pt-20">
    <QuoteForm />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/servicos/:id" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/contactos" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;