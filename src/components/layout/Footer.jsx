import React from 'react';
    import { motion } from 'framer-motion';
    import { Youtube, Instagram, Link as LinkIcon } from 'lucide-react';

    const TikTokIcon = ({ className }) => (
      <svg 
        className={className}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 2859 3333" 
        shapeRendering="geometricPrecision" 
        textRendering="geometricPrecision" 
        imageRendering="optimizeQuality" 
        fillRule="evenodd" 
        clipRule="evenodd"
      >
        <path d="M2081 0c55 473 319 755 778 781v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"/>
      </svg>
    );
    
    const Footer = ({ socialLinks }) => {
      const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/92554df4-791c-4c05-a62d-83b14f84264a/e25c39713e90cefc6e744488efe81370.png";
      const linktreeUrl = "https://linktr.ee/lasstiri";

      return (
        <motion.footer 
          className="bg-gradient-to-r from-[var(--emerald-green)] to-[var(--amethyst-purple)] text-white py-10 sm:py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <img src={logoUrl} alt="Neto Lasstiri Logo" className="h-16 w-auto mb-3" />
                <p className="text-lg font-semibold">Evolución Integral</p>
                <p className="text-sm">Neto Lasstiri</p>
              </div>

              <div className="md:text-center">
                <p className="font-semibold text-lg mb-2">Síguenos</p>
                <div className="flex justify-center md:justify-center space-x-5 mb-3">
                  {socialLinks.instagram && (
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                      <Instagram size={28} />
                    </a>
                  )}
                  {socialLinks.youtube && (
                    <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
                      <Youtube size={28} />
                    </a>
                  )}
                  {socialLinks.tiktok && (
                     <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-80 transition-opacity">
                      <TikTokIcon className="h-7 w-7 fill-current" />
                    </a>
                  )}
                </div>
                {linktreeUrl && (
                  <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm hover:underline">
                    <LinkIcon size={16} className="mr-1.5" />
                    Linktree
                  </a>
                )}
              </div>

              <div className="md:text-right">
                <p className="font-semibold text-lg mb-2">Contacto Rápido</p>
                <p className="text-sm">WhatsApp: +52 1 55 1152 9897</p>
              </div>
            </div>
            <hr className="my-6 sm:my-8 border-white/30" />
            <p className="text-center text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Evolución Integral – Neto Lasstiri. Todos los derechos reservados.
            </p>
          </div>
        </motion.footer>
      );
    };

    export default Footer;