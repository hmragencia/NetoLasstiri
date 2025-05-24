import React from 'react';
    import HeroSection from '@/components/sections/HeroSection';
    import AboutSection from '@/components/sections/AboutSection';
    import ServicesSection from '@/components/sections/ServicesSection';

    const HomePage = ({ whatsappLink }) => {
      const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      };
      
      const services = [
        {
          id: "hipnosis-regresiva",
          title: "Hipnosis Regresiva",
          icon: "User",
          subtitle: "Eliminación de entidades y parasitaje + Conexión Ser Luz/Yo Superior",
          description: "Descubre el poder de tu mente subconsciente. La hipnosis regresiva te permite explorar vidas pasadas y experiencias tempranas para liberar bloqueos emocionales, sanar traumas y conectar profundamente con tu ser interior. Transforma tu presente entendiendo tu pasado.",
          color: "#2ecc71",
          ctaText: "Más Información",
          buyLink: `${whatsappLink}?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Hipnosis%20Regresiva.`
        },
        {
          id: "planes-fitness",
          title: "Planes Fitness/Wellness",
          icon: "Briefcase",
          description: "Alcanza tus objetivos de salud y vitalidad con programas personalizados. Combinamos actividad física, nutrición consciente y estrategias de bienestar mental para ayudarte a lograr longevidad, energía y un equilibrio integral en tu vida. Tu camino hacia un cuerpo y mente saludables comienza aquí.",
          color: "#3498db",
          ctaText: "Más Información",
          buyLink: `${whatsappLink}?text=Hola,%20estoy%20interesado%20en%20los%20Planes%20Fitness/Wellness.`
        }
      ];

      return (
        <>
          <HeroSection variants={sectionVariants} whatsappLink={whatsappLink} />
          <AboutSection variants={sectionVariants} />
          <ServicesSection variants={sectionVariants} services={services} />
        </>
      );
    };

    export default HomePage;