import React from 'react';
import { Palette, Users, TrendingUp, Star, Instagram, Facebook } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Diseño Gráfico",
      description: "Creamos contenido visual impactante que conecta con tu audiencia y refleja la identidad de tu marca.",
      features: ["Posts para redes sociales", "Stories destacados", "Banners publicitarios", "Identidad visual"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestión de Redes Sociales",
      description: "Administramos tus perfiles profesionalmente, creando contenido estratégico y manteniendo tu comunidad activa.",
      features: ["Planificación de contenido", "Community management", "Respuesta a comentarios", "Análisis de métricas"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Aumento de Alcance",
      description: "Estrategias probadas para incrementar tus seguidores, likes y comentarios de forma orgánica y efectiva.",
      features: ["Crecimiento orgánico", "Engagement real", "Hashtags estratégicos", "Colaboraciones"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Branding Visual",
      description: "Desarrollamos la identidad visual completa de tu marca para destacar en el mercado digital.",
      features: ["Logo y tipografía", "Paleta de colores", "Guía de estilo", "Aplicaciones digitales"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de marketing digital diseñadas para hacer crecer tu negocio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">¿Listo para transformar tu presencia digital?</h3>
          <p className="text-blue-100 mb-6 text-lg">Contacta con nosotros y descubre cómo podemos ayudarte a alcanzar tus objetivos</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Solicitar cotización
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;