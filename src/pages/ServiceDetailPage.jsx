import React from 'react';
    import { useParams, Link, Navigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { ArrowLeft, ShoppingCart, User, Briefcase, CheckCircle, Target, Zap, Leaf, ShieldCheck, Brain, HeartHandshake, Users, Activity, Apple, Clock } from 'lucide-react';

    const servicesData = {
      'hipnosis-regresiva': {
        title: 'Hipnosis Regresiva',
        subtitle: 'Eliminación de entidades y parasitaje + Conexión Ser Luz/Yo Superior',
        description: [
          "La hipnosis regresiva es una técnica terapéutica profunda que te permite acceder a memorias y experiencias pasadas, tanto de esta vida como de posibles vidas anteriores, con el objetivo de sanar y liberar bloqueos emocionales, traumas y patrones limitantes que afectan tu presente.",
          "A través de un estado de relajación profunda y enfoque mental, te guiaré de manera segura para explorar el origen de tus dificultades, comprender sus raíces y reprogramar creencias negativas. Este proceso no solo facilita la sanación emocional, sino que también promueve una mayor conexión con tu ser interior, tu sabiduría innata y tu propósito de vida."
        ],
        components: null,
        benefits: [
          { text: "Superación de miedos y fobias", icon: ShieldCheck },
          { text: "Liberación de ansiedad y estrés", icon: Leaf },
          { text: "Sanación de relaciones", icon: HeartHandshake },
          { text: "Aumento de la autoestima y confianza", icon: Zap },
          { text: "Conexión espiritual y claridad mental", icon: Brain }
        ],
        idealFor: [
          { text: "Personas buscando sanar traumas profundos.", icon: Users },
          { text: "Quienes desean liberarse de patrones repetitivos.", icon: Users },
          { text: "Individuos en búsqueda de crecimiento espiritual.", icon: Users }
        ],
        icon: User,
        color: 'var(--emerald-green)',
        href:'src/img/Hipnosis regresiva.jpeg',
        imageAlt: 'Conexión profunda representando la hipnosis regresiva'
      },
      'planes-fitness-wellness': {
        title: 'Planes Fitness/Wellness',
        subtitle: 'Programas personalizados para longevidad y vitalidad',
        description: [
          "Nuestros planes de fitness y wellness están diseñados para ayudarte a alcanzar un estado óptimo de salud física y mental, promoviendo la longevidad y la vitalidad. No se trata solo de ejercicio y dieta, sino de un enfoque integral que abarca movimiento consciente, nutrición equilibrada, gestión del estrés y hábitos de vida saludables.",
          "Trabajaremos juntos para crear un programa personalizado que se adapte a tus necesidades, objetivos y estilo de vida. Ya sea que busques mejorar tu condición física, perder peso, aumentar tu energía o simplemente adoptar un estilo de vida más saludable, te proporcionaremos las herramientas y el apoyo necesarios para lograrlo."
        ],
        components: [
          { text: "Evaluación inicial completa", icon: CheckCircle },
          { text: "Programa de ejercicios adaptado", icon: Activity },
          { text: "Pautas de nutrición y alimentación consciente", icon: Apple },
          { text: "Estrategias de manejo del estrés y mejora del sueño", icon: Brain },
          { text: "Seguimiento y ajustes continuos", icon: Clock }
        ],
        benefits: [
          { text: "Mejora de la condición física general", icon: Zap },
          { text: "Aumento de energía y vitalidad", icon: Leaf },
          { text: "Reducción del estrés y mejora del bienestar mental", icon: ShieldCheck },
          { text: "Adopción de hábitos saludables sostenibles", icon: HeartHandshake }
        ],
        idealFor: [
          { text: "Quienes buscan mejorar su salud física y mental.", icon: Users },
          { text: "Personas con objetivos de pérdida de peso o ganancia muscular.", icon: Users },
          { text: "Individuos que desean un estilo de vida más activo y equilibrado.", icon: Users }
        ],
        icon: Briefcase,
        color: 'var(--amethyst-purple)',
        imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Persona practicando yoga al amanecer simbolizando bienestar y fitness'
      }
    };

    const SectionTitle = ({ icon: Icon, text, color }) => (
      <div className="flex items-center mb-3 sm:mb-4">
        <Icon size={22} smSize={24} className="mr-2.5" style={{ color }} />
        <h3 className="text-xl sm:text-2xl font-semibold" style={{ color }}>{text}</h3>
      </div>
    );

    const ListItem = ({ icon: Icon, text, color }) => (
      <li className="flex items-start mb-1.5">
        <Icon size={18} smSize={20} className="mr-2.5 mt-1 flex-shrink-0" style={{ color }} />
        <span>{text}</span>
      </li>
    );

    const ServiceDetailPage = ({ whatsappLink }) => {
      const { serviceId } = useParams();
      const service = servicesData[serviceId];

      if (!service) {
        return <Navigate to="/404" replace />;
      }

      const MainIconComponent = service.icon;
      const buyLink = `${whatsappLink}?text=Hola%2C%20estoy%20interesado%20en%20el%20servicio%3A%20${encodeURIComponent(service.title)}.`;

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 py-10 md:py-16 flex-grow"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Button variant="outline" asChild className="border-[var(--deep-purple)] text-[var(--deep-purple)] hover:bg-[var(--deep-purple)] hover:text-white">
                <Link to="/" className="flex items-center">
                  <ArrowLeft size={18} smSize={20} className="mr-2" /> Volver a Inicio
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="bg-white shadow-2xl rounded-xl overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                  {MainIconComponent && <MainIconComponent size={36} smSize={44} className="mr-3 sm:mr-4 mb-2 sm:mb-0 flex-shrink-0" style={{ color: service.color }} />}
                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--deep-purple)]">{service.title}</h1>
                    {service.subtitle && (
                      <p className="text-sm sm:text-md text-gray-600 font-medium mt-0.5">{service.subtitle}</p>
                    )}
                  </div>
                </div>
                
                <div className="my-5 sm:my-6 md:my-8">
                  <img  
                    className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-lg shadow-md" 
                    alt={service.imageAlt}
                    src={service.imageUrl} 
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                  <div className="lg:col-span-2">
                    <section className="mb-6 md:mb-8">
                      <SectionTitle icon={Briefcase} text="Descripción del Servicio" color={service.color} />
                      <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 leading-relaxed space-y-3">
                        {service.description.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </section>

                    {service.components && service.components.length > 0 && (
                      <section className="mb-6 md:mb-8">
                        <SectionTitle icon={CheckCircle} text="Componentes del Plan" color={service.color} />
                        <ul className="space-y-1.5 text-gray-700">
                          {service.components.map((item, index) => (
                            <ListItem key={index} icon={item.icon} text={item.text} color={service.color} />
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>

                  <div className="lg:col-span-1">
                    <Card className="shadow-lg border-l-4 sticky top-24" style={{ borderColor: service.color }}>
                      <CardHeader>
                        <CardTitle className="text-lg sm:text-xl flex items-center" style={{ color: service.color }}>
                          <Target size={22} smSize={24} className="mr-2.5" /> Puntos Clave
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-5">
                        <div>
                          <h4 className="font-semibold text-md sm:text-lg mb-1.5 text-gray-800">Beneficios Clave:</h4>
                          <ul className="space-y-1 text-sm sm:text-base text-gray-600">
                            {service.benefits.map((item, index) => (
                              <ListItem key={index} icon={item.icon} text={item.text} color="var(--emerald-green)" />
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-md sm:text-lg mb-1.5 text-gray-800">Ideal Para:</h4>
                          <ul className="space-y-1 text-sm sm:text-base text-gray-600">
                            {service.idealFor.map((item, index) => (
                              <ListItem key={index} icon={item.icon} text={item.text} color="var(--amethyst-purple)" />
                            ))}
                          </ul>
                        </div>
                        <motion.div 
                          className="mt-6 pt-4 border-t border-gray-200"
                          initial={{ opacity:0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.4 }}
                        >
                          <Button asChild size="lg" className="w-full bg-[var(--emerald-green)] hover:bg-[#27ae60] text-white text-sm sm:text-base py-2.5 sm:py-3">
                            <a href={buyLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                              <ShoppingCart size={18} smSize={20} /> Adquirir Servicio Ahora
                            </a>
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      );
    };

    export default ServiceDetailPage;