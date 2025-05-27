import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Send } from 'lucide-react';

    const HeroSection = ({ variants, whatsappLink }) => {
      const heroImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/92554df4-791c-4c05-a62d-83b14f84264a/906ec8132a5a4844a1186a375afe89c3.webp";
      
      const textShadowStyle = {
        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5), 0px 0px 10px rgba(0,0,0,0.3)'
      };

      return (
        <motion.section
          id="inicio"
          className="relative min-h-[calc(100vh-68px)] flex items-center justify-center text-white overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className="absolute inset-0 z-0">
            <img  
              className="w-full h-full object-cover" 
              alt="Fondo abstracto con esferas y formas geométricas en tonos verdes y morados"
             src={heroImageUrl} />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--emerald-green)]/60 via-[var(--amethyst-purple)]/50 to-black/60"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 !leading-tight"
              style={textShadowStyle}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              CONSIGUE TU MEJOR VERSIÓN
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-10 font-light"
              style={textShadowStyle}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Evolución Integral – Neto Lasstiri
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 120 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-[var(--amethyst-purple)] hover:bg-gray-100 hover:text-[var(--deep-purple)] transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
                  <Send size={20} smSize={22} /> Agenda tu sesión
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      );
    };

    export default HeroSection;