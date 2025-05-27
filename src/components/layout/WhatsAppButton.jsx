import React from 'react';
    import { motion } from 'framer-motion';
    import { MessageCircle } from 'lucide-react'; // Using MessageCircle for a generic chat icon

    const WhatsAppButton = ({ whatsappLink }) => {
      return (
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-gradient-to-r from-[var(--emerald-green)] to-green-500 text-white p-4 rounded-full shadow-xl z-40 flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out"
          aria-label="Contactar por WhatsApp"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ boxShadow: "0px 0px 20px rgba(46, 204, 113, 0.7)" }}
        >
          <MessageCircle size={28} />
        </motion.a>
      );
    };

    export default WhatsAppButton;