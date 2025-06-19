import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-medium">Agencia #1 en Marketing Digital</span>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Impulsa tu marca con
          <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"> Glow Up Digital</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transformamos tu presencia digital con diseño gráfico profesional, gestión experta de redes sociales y estrategias que generan resultados reales
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://wa.me/525512345678?text=Hola,%20quiero%20más%20información%20sobre%20Glow%20Up%20Digital" target="_blank" rel="noopener noreferrer" className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105">
            <span>Solicita tu asesoría gratuita</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
            Ver nuestro portafolio
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
    </section>
  );
};

export default Hero;