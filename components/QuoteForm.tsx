import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, MapPin, Phone, Mail, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';
import { QuoteFormData } from '../types';
import { useSearchParams } from 'react-router-dom';
import { sendQuoteRequest } from '../lib/email';

const QuoteForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState<QuoteFormData>({
    companyName: '',
    nif: '',
    contact: '',
    service: '',
    description: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Update form based on URL parameters and automatically show form if accessed via "Solicitar Cotação" link
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const descriptionParam = searchParams.get('description');

    if (serviceParam || descriptionParam) {
      setShowForm(true);
      if (serviceParam) {
        setFormData(prev => ({ ...prev, service: serviceParam }));
      }
      if (descriptionParam) {
        setFormData(prev => ({ ...prev, description: descriptionParam }));
      }

      // Scroll to form if showing immediately
      setTimeout(() => {
        const formElement = document.getElementById('quote-form-section');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      nif: '',
      contact: '',
      service: '',
      description: ''
    });
    setStatus('idle');
    setShowForm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await sendQuoteRequest(formData);
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Ocorreu um erro ao enviar o pedido. Por favor, tente novamente ou contacte-nos diretamente por telefone.');
    }
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contact Info Section */}
        <div className="mb-16 text-center animate-in fade-in duration-700">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Entre em Contacto</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Estamos disponíveis para esclarecer as suas dúvidas e oferecer as melhores soluções ambientais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Address */}
            <a
              href="https://maps.app.goo.gl/EUpYu4UYALdjcJps9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center group cursor-pointer border border-transparent hover:border-primary-100"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <MapPin className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nossa Localização</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">
                {CONTACT_INFO.address}
              </p>
              <span className="text-primary-600 text-sm font-semibold group-hover:underline flex items-center">
                Ver no Google Maps <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </a>

            {/* Phones */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center group border border-transparent hover:border-primary-100">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <Phone className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Telefones</h3>
              <div className="flex flex-col gap-2">
                <a href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`} className="text-gray-600 text-center text-sm hover:text-primary-600 transition-colors">
                  {CONTACT_INFO.phone1}
                </a>
                <a href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, '')}`} className="text-gray-600 text-center text-sm hover:text-primary-600 transition-colors">
                  {CONTACT_INFO.phone2}
                </a>
              </div>
            </div>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center group border border-transparent hover:border-primary-100"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <Mail className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-center text-sm break-all mb-4">
                {CONTACT_INFO.email}
              </p>
              <span className="text-primary-600 text-sm font-semibold group-hover:underline flex items-center">
                Enviar Mensagem <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </a>
          </div>

          {!showForm && (
            <button
              onClick={() => {
                setShowForm(true);
                setTimeout(() => {
                  document.getElementById('quote-form-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center px-10 py-5 border border-transparent text-lg font-bold rounded-xl shadow-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all transform hover:-translate-y-1"
            >
              Pedir Cotação Agora
              <ArrowRight className="ml-2 h-6 w-6" />
            </button>
          )}
        </div>

        {/* Quote Form Section */}
        {showForm && (
          <div id="quote-form-section" className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-primary-700 py-8 px-8 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Formulário de Cotação
                </h2>
                <p className="text-primary-100 mt-1 text-sm">
                  Preencha os dados abaixo para receber uma proposta.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-white/80 hover:text-white transition-colors text-sm hover:underline"
              >
                Fechar
              </button>
            </div>

            <div className="p-8 md:p-12">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6 animate-in zoom-in duration-300">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pedido Enviado!</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    O seu pedido de cotação foi enviado com sucesso. Iremos analisar e responder o mais breve possível para o contacto indicado.
                  </p>
                  <button
                    onClick={handleReset}
                    className="text-primary-600 hover:text-primary-800 font-bold hover:underline underline-offset-4"
                  >
                    Voltar aos contactos
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3 bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white transition-colors disabled:opacity-50"
                        placeholder="Sua empresa"
                      />
                    </div>
                    <div>
                      <label htmlFor="nif" className="block text-sm font-medium text-gray-700 mb-1">NIF</label>
                      <input
                        type="text"
                        id="nif"
                        name="nif"
                        required
                        value={formData.nif}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3 bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white transition-colors disabled:opacity-50"
                        placeholder="Número de Identificação Fiscal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contacto (Telefone/Email)</label>
                      <input
                        type="text"
                        id="contact"
                        name="contact"
                        required
                        value={formData.contact}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3 bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white transition-colors disabled:opacity-50"
                        placeholder="+244..."
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Serviço Pretendido</label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3 bg-gray-50 text-gray-900 focus:bg-white transition-colors disabled:opacity-50"
                      >
                        <option value="">Selecione um serviço...</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                        <option value="other">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descrição do Pedido</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      required
                      value={formData.description}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-3 bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white transition-colors disabled:opacity-50"
                      placeholder="Descreva detalhadamente o que necessita..."
                    />
                  </div>

                  <div className="flex justify-end pt-4 gap-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      disabled={status === 'loading'}
                      className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors disabled:opacity-50"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center px-8 py-3 border border-transparent text-base font-bold rounded-lg shadow-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          A Enviar...
                        </>
                      ) : (
                        <>
                          Enviar Pedido
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuoteForm;
