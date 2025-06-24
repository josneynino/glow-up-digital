import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Columna de texto */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in-up">
            <div className="flex justify-center lg:justify-start mb-8 mt-32 lg:mt-40">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-white font-medium">Agencia #1 en Marketing Digital</span>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
              Impulsa tu marca con
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"> Glow Up Digital</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Transformamos tu presencia digital con diseño gráfico profesional, gestión experta de redes sociales y estrategias que generan resultados reales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up delay-300">
              <a href="https://wa.me/525512345678?text=Hola,%20quiero%20más%20información%20sobre%20Glow%20Up%20Digital" target="_blank" rel="noopener noreferrer" className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A12 12 0 0 0 3.48 20.52a12 12 0 0 0 17.04-17.04zm-8.52 17.02c-1.7 0-3.36-.44-4.8-1.28l-.34-.2-3.56.94.95-3.47-.22-.36A9.96 9.96 0 1 1 12 22.5zm5.2-7.3c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/></svg>
                <span>Solicita tu asesoría gratuita</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Ver nuestro portafolio
              </button>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-blue-200">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">2M+</div>
                <div className="text-blue-200">Seguidores generados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-blue-200">Tasa de éxito</div>
              </div>
            </div>
          </div>
          {/* Columna de imagen ilustrativa */}
          <div className="hidden lg:flex w-1/2 justify-center items-center animate-fade-in">
            {/* Gráfica de crecimiento SVG */}
            <div className="bg-white/80 rounded-3xl shadow-2xl border-8 border-white/20 p-8 flex flex-col items-center">
              <span className="text-xl font-bold text-blue-700 mb-4">¡Tus resultados suben!</span>
              <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="320" height="200" rx="24" fill="#EEF2FF" />
                <polyline points="30,170 80,120 130,140 180,80 230,100 280,40" fill="none" stroke="#6366F1" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="30" cy="170" r="7" fill="#6366F1" />
                <circle cx="80" cy="120" r="7" fill="#6366F1" />
                <circle cx="130" cy="140" r="7" fill="#6366F1" />
                <circle cx="180" cy="80" r="7" fill="#6366F1" />
                <circle cx="230" cy="100" r="7" fill="#6366F1" />
                <circle cx="280" cy="40" r="10" fill="#22C55E" stroke="#16A34A" strokeWidth="3" />
                <text x="260" y="30" fontSize="20" fill="#16A34A" fontWeight="bold">↑</text>
                <text x="200" y="190" fontSize="16" fill="#6366F1">Crecimiento</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;