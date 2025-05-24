import React from 'react';
    import { motion } from 'framer-motion';

    const AboutSection = ({ variants }) => {
      return (
        <motion.section
          id="sobre-mí"
          className="py-16 md:py-24 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#34495e]">Sobre Neto Lasstiri</h2>
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg mb-6 leading-relaxed text-center md:text-left">
                Neto Lasstiri es un hipnoterapeuta apasionado y dedicado, especializado en hipnosis regresiva y bienestar integral. Con años de experiencia, Neto ayuda a las personas a superar bloqueos emocionales, conectar con su ser interior y alcanzar una vida plena y equilibrada.
              </p>
              <p className="text-lg mb-6 leading-relaxed text-center md:text-left">
                Su enfoque combina técnicas avanzadas de hipnosis con un profundo entendimiento del bienestar físico y emocional, ofreciendo un camino transformador hacia la mejor versión de ti mismo.
              </p>
              <h3 className="text-2xl font-semibold text-[#2ecc71] mb-4 text-center md:text-left">Certificaciones y Formación</h3>
              <ul className="list-disc list-inside space-y-2 text-lg mx-auto md:mx-0 max-w-md">
                <li>Certificación Internacional en Hipnosis Regresiva</li>
                <li>Especialización en Terapias de Bienestar Emocional</li>
                <li>Formación Avanzada en Programación Neurolingüística (PNL)</li>
                <li>Diplomado en Nutrición y Fitness Holístico</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>
      );
    };

    export default AboutSection;