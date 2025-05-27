import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { User, Briefcase, ShoppingCart, Info } from 'lucide-react';

    const iconMap = {
      User: User,
      Briefcase: Briefcase,
    };

    const ServicesSection = ({ variants, services }) => {
      return (
        <motion.section
          id="servicios"
          className="py-16 md:py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-[var(--deep-purple)]">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 h-full flex flex-col overflow-hidden" style={{ borderColor: service.color === '#34495e' ? 'var(--deep-purple)' : service.color }}>
                      <CardHeader className="p-4 sm:p-6">
                        <div className="flex items-start sm:items-center mb-2">
                          {IconComponent && <IconComponent size={32} smSize={40} className="mr-3 sm:mr-4 flex-shrink-0" style={{ color: service.color === '#34495e' ? 'var(--deep-purple)' : service.color }} />}
                          <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--deep-purple)]">{service.title}</CardTitle>
                        </div>
                        {service.subtitle && (
                          <p className="text-xs sm:text-sm text-gray-600 font-medium ml-0 sm:ml-[calc(32px+0.75rem)] lg:ml-[calc(40px+1rem)] -mt-1 sm:-mt-2">
                            {service.subtitle}
                          </p>
                        )}
                      </CardHeader>
                      <CardContent className="flex-grow p-4 sm:p-6 pt-0">
                        <CardDescription className="text-base sm:text-lg text-gray-700 leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                      <div className="p-4 sm:p-6 pt-0 flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button asChild variant="outline" className="flex-1 border-[var(--deep-purple)] text-[var(--deep-purple)] hover:bg-[var(--deep-purple)] hover:text-white text-sm sm:text-base">
                          <Link to={`/servicio/${service.id}`} className="flex items-center justify-center gap-2 py-2 sm:py-2.5">
                            <Info size={16} smSize={18} /> {service.ctaText}
                          </Link>
                        </Button>
                        <Button asChild className="flex-1 bg-[var(--emerald-green)] hover:bg-[#27ae60] text-white text-sm sm:text-base">
                           <a href={service.buyLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 sm:py-2.5">
                            <ShoppingCart size={16} smSize={18} /> Comprar Ahora
                          </a>
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      );
    };

    export default ServicesSection;