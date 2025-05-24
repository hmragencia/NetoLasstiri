import React from 'react';
    import { motion } from 'framer-motion';
    import { MessageCircle } from 'lucide-react';

    const WhatsAppButton = ({ whatsappLink }) => {
      return (
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 z-50 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={28} />
        </motion.a>
      );
    };

    export default WhatsAppButton;