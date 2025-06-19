import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: 199,
      period: "mes",
      description: "Perfecto para emprendedores y pequeños negocios",
      features: [
        "5 publicaciones semanales",
        "Diseño de posts básico",
        "Gestión de 1 red social",
        "Respuesta a comentarios",
        "Reporte mensual básico"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Estándar",
      price: 399,
      period: "mes",
      description: "Ideal para empresas en crecimiento",
      features: [
        "10 publicaciones semanales",
        "Diseño profesional de posts",
        "Gestión de 3 redes sociales",
        "Stories y reels incluidos",
        "Community management completo",
        "Reportes detallados",
        "Estrategia de hashtags"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Premium",
      price: 599,
      period: "mes",
      description: "Para empresas que buscan dominar el mercado",
      features: [
        "15 publicaciones semanales",
        "Diseño premium y animaciones",
        "Gestión de todas las redes",
        "Campañas publicitarias",
        "Fotografía profesional",
        "Análisis de competencia",
        "Consultoría estratégica",
        "Soporte prioritario 24/7"
      ],
      popular: false,
      color: "gradient"
    }
  ];

  return (
    <section id="precios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Elige el plan que mejor se adapte a las necesidades de tu negocio
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 mr-2" />
            30 días de garantía de satisfacción
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Zap className="w-4 h-4" />
                    <span>Más Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  {plan.popular ? 'Empezar ahora' : 'Seleccionar plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">¿Necesitas un plan personalizado?</p>
          <a href="https://wa.me/525512345678?text=Hola,%20quiero%20más%20información%20sobre%20Glow%20Up%20Digital" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block">
            Contáctanos para una cotización personalizada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;