import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, Fashion Boutique",
      company: "Style & Co.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Glow Up Digital transformó completamente nuestra presencia en redes sociales. En solo 3 meses aumentamos nuestros seguidores en un 400% y las ventas online crecieron un 250%.",
      rating: 5
    },
    {
      name: "Carlos Martínez",
      position: "Gerente de Marketing",
      company: "TechSolutions",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "El equipo de Glow Up Digital no solo maneja nuestras redes sociales de manera profesional, sino que también nos proporciona insights valiosos que han mejorado toda nuestra estrategia de marketing.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      position: "Propietaria",
      company: "Café Aroma",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Desde que trabajo con Glow Up Digital, mi cafetería se ha vuelto la más popular del barrio. Sus diseños son increíbles y realmente saben cómo conectar con nuestros clientes.",
      rating: 5
    },
    {
      name: "Luis Fernández",
      position: "Director",
      company: "Gym Evolution",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "La estrategia de contenido que desarrollaron para nuestro gimnasio fue excepcional. Logramos triplicar nuestras membresías y crear una comunidad real alrededor de nuestra marca.",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-blue-200" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Listo para ser nuestro próximo caso de éxito?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Únete a más de 500 empresas que ya confían en Glow Up Digital
          </p>
          <a href="https://wa.me/525512345678?text=Hola,%20quiero%20más%20información%20sobre%20Glow%20Up%20Digital" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg inline-block">
            Empezar mi transformación digital
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;