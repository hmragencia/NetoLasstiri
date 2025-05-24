import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';

    const HeroSection = ({ variants, whatsappLink }) => {
      return (
        <motion.section
          id="inicio"
          className="relative py-20 md:py-32 bg-gradient-to-br from-[#34495e] to-[#2c3e50] text-white overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className="absolute inset-0 opacity-10">
            <img  class="w-full h-full object-cover" alt="Abstract background representing transformation" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              CONSIGUE TU MEJOR VERSIÓN
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-10 font-light"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Evolución Integral – Neto Lasstiri
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 text-base sm:text-lg"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Agenda tu sesión gratuita
                </a>
              </Button>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
        </motion.section>
      );
    };

    export default HeroSection;