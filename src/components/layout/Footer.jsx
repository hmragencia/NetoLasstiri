import React from 'react';
    import { Instagram, Youtube, Phone, MapPin, Link as LinkIcon } from 'lucide-react';

    const Footer = ({ socialLinks }) => {
      const tiktokLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/92554df4-791c-4c05-a62d-83b14f84264a/414fd1dafa4da99e1b0a27e8f78177fb.webp";
      const mainLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/92554df4-791c-4c05-a62d-83b14f84264a/e25c39713e90cefc6e744488efe81370.png";
      const linktreeUrl = "https://linktr.ee/lasstiri";

      return (
        <footer className="bg-[#34495e] text-white py-10 md:py-12">
          <div className="container mx-auto px-6 text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8 items-center">
              <div className="md:text-left flex flex-col items-center md:items-start">
                <p className="font-semibold text-lg mb-2 text-[#2ecc71]">Evolución Integral</p>
                <img src={mainLogoUrl} alt="Neto Lasstiri Logo" className="h-20 w-auto mb-1" />
                <p className="text-sm">Neto Lasstiri</p>
                <p className="text-sm mt-1">Transformando vidas, una sesión a la vez.</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-lg mb-2 text-[#2ecc71]">Contacto Rápido</p>
                <p className="text-sm flex items-center justify-center gap-2"><Phone size={16} /> +52 1 55 1152 9897</p>
                <p className="text-sm flex items-center justify-center gap-2"><MapPin size={16} /> Ciudad de México, México</p>
              </div>
              <div className="md:text-right">
                <p className="font-semibold text-lg mb-2 text-[#2ecc71]">Síguenos</p>
                <div className="flex justify-center md:justify-end space-x-4 items-center mb-3">
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                    <Instagram size={28} className="text-white hover:text-[#2ecc71] transition-colors" />
                  </a>
                  <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
                    <Youtube size={28} className="text-white hover:text-[#2ecc71] transition-colors" />
                  </a>
                  <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="TikTok">
                    <img src={tiktokLogoUrl} alt="TikTok" className="h-7 w-7" />
                  </a>
                </div>
                <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#2ecc71] transition-colors flex items-center justify-center md:justify-end gap-1.5" aria-label="Linktree">
                  <LinkIcon size={16} /> Linktree
                </a>
              </div>
            </div>
            <p className="text-sm pt-6 border-t border-white/20">&copy; {new Date().getFullYear()} Neto Lasstiri. Todos los derechos reservados.</p>
          </div>
        </footer>
      );
    };

    export default Footer;