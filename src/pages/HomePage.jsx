import React from 'react';
    import { motion } from 'framer-motion';
    import HeroSection from '@/components/sections/HeroSection';
    import AboutSection from '@/components/sections/AboutSection';
    import ServicesSection from '@/components/sections/ServicesSection';

    const HomePage = ({ whatsappLink }) => {
      const pageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.3 } }
      };

      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      };

      const servicesData = [
        {
          id: 'hipnosis-regresiva',
          title: 'Hipnosis Regresiva',
          subtitle: 'Eliminación de entidades y parasitaje + Conexión Ser Luz/Yo Superior',
          description: 'Libera bloqueos emocionales profundos, sana traumas del pasado y conecta con la sabiduría de tu ser interior para una transformación personal auténtica y duradera.',
          icon: 'User',
          color: 'var(--emerald-green)',
          ctaText: 'Más Información',
          buyLink: `${whatsappLink}?text=Hola%2C%20estoy%20interesado%20en%20la%20Hipnosis%20Regresiva.`
        },
        {
          id: 'planes-fitness-wellness',
          title: 'Planes Fitness/Wellness',
          description: 'Programas personalizados de actividad física, nutrición consciente y hábitos saludables para alcanzar una longevidad activa, vitalidad plena y un bienestar integral.',
          icon: 'Briefcase',
          color: 'var(--amethyst-purple)',
          ctaText: 'Descubre Más',
          buyLink: `${whatsappLink}?text=Hola%2C%20estoy%20interesado%20en%20los%20Planes%20Fitness/Wellness.`
        },
      ];

      return (
        <motion.main
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageVariants}
          className="flex-grow"
        >
          <HeroSection variants={sectionVariants} whatsappLink={whatsappLink} />
          <AboutSection variants={sectionVariants} />
          <ServicesSection variants={sectionVariants} services={servicesData} />
        </motion.main>
      );
    };

    export default HomePage;