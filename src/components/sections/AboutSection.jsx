import React from 'react';
    import { motion } from 'framer-motion';

    const AboutSection = ({ variants }) => {
      return (
        <motion.section
          id="sobre-mí"
          className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-slate-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={variants}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold text-[var(--deep-purple)] mb-6 sm:mb-8"
                variants={variants}
              >
                Sobre Neto Lasstiri
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6"
                variants={variants}
              >
                Neto Lasstiri es un hipnoterapeuta especializado con una profunda pasión por guiar a las personas hacia su transformación integral. Con años de experiencia en hipnosis regresiva, ayuda a sus clientes a liberar bloqueos emocionales, conectar con su ser interior y redescubrir su potencial innato.
              </motion.p>
              <motion.p 
                className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-10"
                variants={variants}
              >
                Además de su trabajo con la hipnosis, Neto diseña planes personalizados de bienestar físico y emocional, enfocados en la longevidad y la vitalidad. Su enfoque holístico integra mente, cuerpo y espíritu para alcanzar una evolución completa y sostenible.
              </motion.p>
              
              <motion.div variants={variants}>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--deep-purple)] mb-4">Certificaciones y Formación</h3>
                <ul className="list-disc list-inside text-left text-gray-600 space-y-2 text-base sm:text-lg max-w-md mx-auto">
                  <li>Hipnoterapeuta Certificado en Hipnosis Regresiva</li>
                  <li>Especialista en Bienestar Integral y Coaching de Salud</li>
                  <li>Formación Avanzada en Técnicas de Liberación Emocional</li>
                  <li>Certificación en Programación Neurolingüística (PNL)</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>
      );
    };

    export default AboutSection;