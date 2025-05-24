import React from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ArrowLeft, ShoppingCart, CheckCircle, Award, Heart, Zap } from 'lucide-react';

    const serviceDetailsData = {
      "hipnosis-regresiva": {
        title: "Hipnosis Regresiva Profunda",
        tagline: "Desbloquea tu potencial interior y sana desde la raíz.",
        subtitle: "Eliminación de entidades y parasitaje + Conexión Ser Luz/Yo Superior",
        imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/92554df4-791c-4c05-a62d-83b14f84264a/5e08286bc799bdcca4d5a55cba834096.png",
        color: "#2ecc71",
        description: "La hipnosis regresiva es una técnica terapéutica poderosa que te guía a un estado de relajación profunda para acceder a recuerdos y experiencias almacenadas en tu mente subconsciente. Este proceso puede ayudarte a identificar el origen de bloqueos emocionales, patrones de comportamiento limitantes y síntomas inexplicables. Al comprender y reprocesar estas experiencias pasadas, puedes liberar cargas emocionales, sanar traumas y fomentar una conexión más profunda con tu ser auténtico.",
        benefits: [
          "Liberación de bloqueos emocionales y miedos.",
          "Sanación de traumas del pasado.",
          "Comprensión de patrones de vida recurrentes.",
          "Mejora de la autoestima y confianza.",
          "Conexión con tu propósito y sabiduría interior.",
          "Reducción del estrés y la ansiedad."
        ],
        process: [
          "Consulta inicial para definir objetivos.",
          "Inducción a un estado de relajación profunda.",
          "Exploración guiada de recuerdos relevantes.",
          "Reprocesamiento y liberación emocional.",
          "Integración y fortalecimiento de recursos internos."
        ],
        idealFor: "Personas que buscan superar traumas, fobias, ansiedad, depresión, mejorar relaciones o encontrar un mayor sentido en sus vidas."
      },
      "planes-fitness": {
        title: "Planes Integrales de Fitness y Bienestar",
        tagline: "Transforma tu cuerpo y mente para una vida llena de vitalidad.",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
        color: "#3498db",
        description: "Nuestros planes de fitness y bienestar están diseñados para ir más allá del ejercicio físico. Adoptamos un enfoque holístico que integra entrenamiento personalizado, nutrición consciente y estrategias de bienestar mental para ayudarte a alcanzar tus metas de salud y longevidad. Creemos que el verdadero bienestar se logra cuando cuerpo, mente y espíritu están en armonía.",
        benefits: [
          "Mejora de la condición física y fuerza.",
          "Pérdida de peso sostenible y tonificación muscular.",
          "Aumento de los niveles de energía y vitalidad.",
          "Reducción del estrés y mejora del estado de ánimo.",
          "Adopción de hábitos alimenticios saludables.",
          "Desarrollo de una mentalidad positiva y resiliente."
        ],
        components: [
          "Evaluación inicial completa y establecimiento de metas.",
          "Programa de entrenamiento personalizado y progresivo.",
          "Asesoramiento nutricional adaptado a tus necesidades.",
          "Técnicas de manejo del estrés y mindfulness.",
          "Seguimiento regular y ajustes del plan."
        ],
        idealFor: "Individuos que desean mejorar su salud general, alcanzar objetivos de fitness específicos, aumentar su energía o adoptar un estilo de vida más equilibrado y saludable."
      }
    };
    
    const sectionVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const ServiceDetailPage = ({ whatsappLink }) => {
      const { serviceId } = useParams();
      const service = serviceDetailsData[serviceId];

      if (!service) {
        return (
          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
            <p className="text-lg mb-8">Lo sentimos, el servicio que buscas no existe.</p>
            <Button asChild>
              <Link to="/" className="flex items-center justify-center gap-2">
                <ArrowLeft size={18} /> Volver al Inicio
              </Link>
            </Button>
          </div>
        );
      }
      
      const buyServiceLink = `${whatsappLink}?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20${encodeURIComponent(service.title)}.%20Quisiera%20más%20información%20para%20comprar.`;

      return (
        <motion.div 
          className="container mx-auto px-4 md:px-6 py-12 md:py-16"
          initial="hidden"
          animate="visible"
          variants={{visible: {transition: {staggerChildren: 0.1}}}}
        >
          <motion.div variants={sectionVariants} className="mb-8">
            <Button asChild variant="outline" className="border-[#34495e] text-[#34495e] hover:bg-[#34495e]/10">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft size={18} /> Volver a Inicio
              </Link>
            </Button>
          </motion.div>

          <motion.header variants={sectionVariants} className="text-center mb-10 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2" style={{color: service.color}}>{service.title}</h1>
            {service.subtitle && (
              <p className="text-lg md:text-xl text-gray-500 font-medium mb-3">{service.subtitle}</p>
            )}
            <p className="text-xl md:text-2xl text-gray-600 font-light">{service.tagline}</p>
          </motion.header>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
            <motion.div variants={sectionVariants} className="md:col-span-3">
              <img src={service.imageUrl} alt={service.title} className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover rounded-xl shadow-2xl mb-8" />
              <h2 className="text-3xl font-semibold text-[#34495e] mb-4">Descripción del Servicio</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{service.description}</p>
              
              {service.process && (
                <>
                  <h3 className="text-2xl font-semibold text-[#34495e] mb-3">Proceso del Servicio</h3>
                  <ul className="space-y-2 mb-8">
                    {service.process.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <Zap size={20} className="mr-3 mt-1 flex-shrink-0" style={{color: service.color}}/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {service.components && (
                 <>
                  <h3 className="text-2xl font-semibold text-[#34495e] mb-3">Componentes del Plan</h3>
                  <ul className="space-y-2 mb-8">
                    {service.components.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <Heart size={20} className="mr-3 mt-1 flex-shrink-0" style={{color: service.color}}/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

            </motion.div>

            <motion.aside variants={sectionVariants} className="md:col-span-2 bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg sticky top-24">
              <h3 className="text-2xl font-semibold text-[#34495e] mb-5">Beneficios Clave</h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle size={20} className="mr-3 mt-1 flex-shrink-0" style={{color: service.color}} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold text-[#34495e] mb-3">Ideal Para</h3>
              <p className="text-gray-700 mb-8 flex items-start">
                <Award size={20} className="mr-3 mt-1 flex-shrink-0" style={{color: service.color}}/>
                <span>{service.idealFor}</span>
              </p>

              <Button 
                size="lg" 
                className="w-full text-white font-semibold py-3 text-lg flex items-center justify-center gap-2"
                style={{backgroundColor: service.color, outlineColor: service.color}}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = `${service.color}E6`}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = service.color}
                asChild
              >
                <a href={buyServiceLink} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart size={22} /> Adquirir Servicio Ahora
                </a>
              </Button>
            </motion.aside>
          </div>
        </motion.div>
      );
    };

    export default ServiceDetailPage;