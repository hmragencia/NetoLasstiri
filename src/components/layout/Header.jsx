import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Link, useLocation, useNavigate } from 'react-router-dom';
    import { Menu, X } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const Header = () => {
      const location = useLocation();
      const navigate = useNavigate();
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
      const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/92554df4-791c-4c05-a62d-83b14f84264a/e25c39713e90cefc6e744488efe81370.png";

      const handleScrollTo = (id) => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'auto'; // Ensure scroll is re-enabled

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 200); // Increased timeout for navigation + scroll
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
      };

      const navItems = [
        { label: 'Inicio', id: 'inicio' },
        { label: 'Sobre Mí', id: 'sobre-mí' },
        { label: 'Servicios', id: 'servicios' },
      ];

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      
      useEffect(() => {
        if (isMobileMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
        // Cleanup function to ensure body overflow is reset when component unmounts or state changes
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isMobileMenuOpen]);


      return (
        <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'} bg-gradient-to-r from-[#2ecc71] to-[#3498db]`}>
          <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center" onClick={() => {setIsMobileMenuOpen(false); if (location.pathname === '/') handleScrollTo('inicio'); else navigate('/');}}>
                <img src={logoUrl} alt="Neto Lasstiri Logo" className="h-10 sm:h-12 w-auto" />
              </Link>
            </motion.div>

            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className="text-white hover:text-gray-200 transition-colors duration-300 bg-transparent border-none cursor-pointer p-0 text-sm lg:text-base"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:bg-white/20 focus:bg-white/20"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: `calc(100vh - ${isScrolled ? '60px' : '68px'})` }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden fixed inset-x-0 top-[60px] sm:top-[68px] h-screen bg-gradient-to-br from-[#2ecc71]/95 to-[#3498db]/95 backdrop-blur-md shadow-lg overflow-y-auto"
              >
                <nav className="flex flex-col items-center py-8 space-y-6">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleScrollTo(item.id)}
                      className="text-white text-xl hover:text-gray-200 transition-colors duration-300 bg-transparent border-none cursor-pointer py-2 w-full text-center"
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      );
    };

    export default Header;