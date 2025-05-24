import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Star } from 'lucide-react';

    const TestimonialsSection = ({ variants }) => {
      const testimonials = [
        { name: "Laura M.", text: "La hipnosis regresiva con Neto cambió mi vida. Pude superar miedos que me limitaban por años. ¡Totalmente recomendado!", avatarText: "LM" },
        { name: "Carlos S.", text: "Los planes de bienestar son increíbles. Me siento con más energía y vitalidad que nunca. Neto es un gran profesional.", avatarText: "CS" },
        { name: "Ana G.", text: "Gracias a Neto, he logrado una conexión más profunda conmigo misma. Su guía ha sido fundamental en mi proceso de crecimiento.", avatarText: "AG" }
      ];

      return (
        <motion.section
          id="testimonios"
          className="py-16 md:py-24 bg-gradient-to-r from-[#2ecc71] to-[#27ae60] text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={variants}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Testimonios de Clientes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm text-[#34495e] shadow-lg h-full">
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-[#34495e] text-white flex items-center justify-center text-xl font-bold mr-4">{testimonial.avatarText}</div>
                        <div>
                          <CardTitle className="text-xl font-semibold">{testimonial.name}</CardTitle>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 italic">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      );
    };

    export default TestimonialsSection;