import React from 'react';
    import { Routes, Route, useLocation } from 'react-router-dom';
    import { AnimatePresence } from 'framer-motion';
    import { Toaster } from '@/components/ui/toaster';
    import Header from '@/components/layout/Header';
    import Footer from '@/components/layout/Footer';
    import WhatsAppButton from '@/components/layout/WhatsAppButton';
    import HomePage from '@/pages/HomePage';
    import ServiceDetailPage from '@/pages/ServiceDetailPage';
    import NotFoundPage from '@/pages/NotFoundPage';
    import ScrollToTop from '@/components/layout/ScrollToTop';

    const App = () => {
      const location = useLocation();
      const whatsappLink = "https://wa.me/5215511529897";
      const socialLinks = {
        youtube: "https://www.youtube.com/@LASSTIRI",
        instagram: "https://www.instagram.com/magia.evolucion/",
        tiktok: "https://www.tiktok.com/@lasstiri"
      };

      return (
        <div className="flex flex-col min-h-screen bg-white text-[hsl(var(--foreground))]">
          <ScrollToTop />
          <Toaster />
          <Header />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage whatsappLink={whatsappLink} />} />
              <Route path="/servicio/:serviceId" element={<ServiceDetailPage whatsappLink={whatsappLink} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
          <Footer socialLinks={socialLinks} />
          <WhatsAppButton whatsappLink={whatsappLink} />
        </div>
      );
    };

    export default App;