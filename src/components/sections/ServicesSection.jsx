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
          viewport={{ once: true, amount: 0.2 }}
          variants={variants}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#34495e]">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 h-full flex flex-col" style={{ borderColor: service.color }}>
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          {IconComponent && <IconComponent size={40} className="mr-4" style={{ color: service.color }} />}
                          <CardTitle className="text-3xl font-semibold text-[#34495e]">{service.title}</CardTitle>
                        </div>
                        {service.subtitle && (
                          <p className="text-sm text-gray-600 font-medium ml-14 -mt-2">{service.subtitle}</p>
                        )}
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription className="text-lg text-gray-700 leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                      <div className="p-6 pt-0 flex flex-col sm:flex-row gap-4">
                        <Button asChild variant="outline" className="flex-1 border-[#34495e] text-[#34495e] hover:bg-[#34495e] hover:text-white">
                          <Link to={`/servicio/${service.id}`} className="flex items-center justify-center gap-2">
                            <Info size={18} /> {service.ctaText}
                          </Link>
                        </Button>
                        <Button asChild className="flex-1 bg-[#2ecc71] hover:bg-[#27ae60] text-white">
                           <a href={service.buyLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                            <ShoppingCart size={18} /> Comprar Ahora
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