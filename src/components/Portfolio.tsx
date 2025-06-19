import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Heart, Eye, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Restaurante Sabor Latino",
      category: "Gastronomía",
      description: "Transformamos la presencia digital de este restaurante familiar, creando una identidad visual cohesiva y una estrategia de contenido que resalta la autenticidad de sus platillos.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      beforeAfter: {
        before: { followers: "1.2K", engagement: "2.1%", reach: "5K" },
        after: { followers: "45K", engagement: "8.7%", reach: "180K" }
      },
      metrics: [
        { icon: <Users className="w-5 h-5" />, label: "Seguidores", value: "+3,650%", color: "text-blue-600" },
        { icon: <Heart className="w-5 h-5" />, label: "Engagement", value: "+314%", color: "text-pink-600" },
        { icon: <Eye className="w-5 h-5" />, label: "Alcance", value: "+3,500%", color: "text-purple-600" },
        { icon: <TrendingUp className="w-5 h-5" />, label: "Ventas", value: "+280%", color: "text-green-600" }
      ],
      duration: "3 meses",
      challenge: "Baja visibilidad online y competencia local intensa",
      solution: "Estrategia de storytelling gastronómico y contenido visual premium"
    },
    {
      id: 2,
      title: "Boutique Fashion Style",
      category: "Moda",
      description: "Desarrollamos una estrategia integral de moda que posicionó a esta boutique como referente de estilo, aumentando significativamente sus ventas online.",
      image: "https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=800",
      beforeAfter: {
        before: { followers: "3.5K", engagement: "1.8%", reach: "12K" },
        after: { followers: "82K", engagement: "12.4%", reach: "350K" }
      },
      metrics: [
        { icon: <Users className="w-5 h-5" />, label: "Seguidores", value: "+2,243%", color: "text-blue-600" },
        { icon: <Heart className="w-5 h-5" />, label: "Engagement", value: "+589%", color: "text-pink-600" },
        { icon: <Eye className="w-5 h-5" />, label: "Alcance", value: "+2,817%", color: "text-purple-600" },
        { icon: <TrendingUp className="w-5 h-5" />, label: "Ventas Online", value: "+420%", color: "text-green-600" }
      ],
      duration: "4 meses",
      challenge: "Mercado saturado y necesidad de diferenciación",
      solution: "Branding premium y colaboraciones estratégicas con influencers"
    },
    {
      id: 3,
      title: "Fitness Pro Gym",
      category: "Fitness",
      description: "Creamos una comunidad fitness sólida alrededor de la marca, implementando contenido motivacional y educativo que generó un crecimiento exponencial.",
      image: "https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=800",
      beforeAfter: {
        before: { followers: "2.8K", engagement: "3.2%", reach: "8K" },
        after: { followers: "95K", engagement: "15.8%", reach: "480K" }
      },
      metrics: [
        { icon: <Users className="w-5 h-5" />, label: "Seguidores", value: "+3,293%", color: "text-blue-600" },
        { icon: <Heart className="w-5 h-5" />, label: "Engagement", value: "+394%", color: "text-pink-600" },
        { icon: <Eye className="w-5 h-5" />, label: "Alcance", value: "+5,900%", color: "text-purple-600" },
        { icon: <TrendingUp className="w-5 h-5" />, label: "Membresías", value: "+340%", color: "text-green-600" }
      ],
      duration: "5 meses",
      challenge: "Competencia de cadenas grandes y retención de clientes",
      solution: "Comunidad digital activa y contenido de transformación personal"
    },
    {
      id: 4,
      title: "Tech Solutions SA",
      category: "Tecnología",
      description: "Posicionamos a esta empresa B2B como líder de opinión en innovación tecnológica, generando leads de alta calidad y aumentando su autoridad en el sector.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      beforeAfter: {
        before: { followers: "890", engagement: "1.1%", reach: "3K" },
        after: { followers: "28K", engagement: "9.8%", reach: "125K" }
      },
      metrics: [
        { icon: <Users className="w-5 h-5" />, label: "Seguidores", value: "+3,045%", color: "text-blue-600" },
        { icon: <Heart className="w-5 h-5" />, label: "Engagement", value: "+791%", color: "text-pink-600" },
        { icon: <Eye className="w-5 h-5" />, label: "Alcance", value: "+4,067%", color: "text-purple-600" },
        { icon: <TrendingUp className="w-5 h-5" />, label: "Leads B2B", value: "+520%", color: "text-green-600" }
      ],
      duration: "6 meses",
      challenge: "Sector B2B complejo y audiencia muy específica",
      solution: "Content marketing técnico y thought leadership estratégico"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="portafolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Resultados Comprobados
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Casos de Éxito Reales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo hemos transformado la presencia digital de nuestros clientes con resultados medibles y estrategias probadas
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image and Navigation */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Project Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {currentProject.category}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {currentProject.duration}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
                  <p className="text-blue-100 text-sm">{currentProject.challenge}</p>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Project Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {currentProject.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {currentProject.description}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-blue-800 font-medium">
                    <span className="font-bold">Solución:</span> {currentProject.solution}
                  </p>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Antes vs Después</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Seguidores</div>
                    <div className="text-lg font-bold text-red-600">{currentProject.beforeAfter.before.followers}</div>
                    <ArrowUpRight className="w-4 h-4 text-green-500 mx-auto my-1" />
                    <div className="text-lg font-bold text-green-600">{currentProject.beforeAfter.after.followers}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Engagement</div>
                    <div className="text-lg font-bold text-red-600">{currentProject.beforeAfter.before.engagement}</div>
                    <ArrowUpRight className="w-4 h-4 text-green-500 mx-auto my-1" />
                    <div className="text-lg font-bold text-green-600">{currentProject.beforeAfter.after.engagement}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Alcance</div>
                    <div className="text-lg font-bold text-red-600">{currentProject.beforeAfter.before.reach}</div>
                    <ArrowUpRight className="w-4 h-4 text-green-500 mx-auto my-1" />
                    <div className="text-lg font-bold text-green-600">{currentProject.beforeAfter.after.reach}</div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {currentProject.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gray-100 ${metric.color}`}>
                        {metric.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{metric.label}</div>
                        <div className={`text-xl font-bold ${metric.color}`}>{metric.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-blue-600 rounded-full' 
                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Resultados Promedio de Nuestros Clientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">+2,800%</div>
              <div className="text-blue-100">Crecimiento en seguidores</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">+97%</div>
              <div className="text-blue-100">Aumento en engagement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">+3,200%</div>
              <div className="text-blue-100">Incremento en alcance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">+95%</div>
              <div className="text-blue-100">Crecimiento en ventas</div>
            </div>
          </div>
          <a href="https://wa.me/525512345678?text=Hola,%20quiero%20más%20información%20sobre%20Glow%20Up%20Digital" target="_blank" rel="noopener noreferrer" className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg inline-block">
            Quiero estos resultados para mi marca
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;