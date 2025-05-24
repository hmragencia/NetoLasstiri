import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { AlertTriangle, Home } from 'lucide-react';

    const NotFoundPage = () => {
      return (
        <motion.div
          className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-6 bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          >
            <AlertTriangle className="w-24 h-24 text-[#f39c12] mb-8" />
          </motion.div>
          <motion.h1 
            className="text-6xl font-extrabold text-[#34495e] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            404
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            ¡Ups! Página no encontrada.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-500 mb-10 max-w-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Parece que te has perdido. La página que buscas no existe o ha sido movida.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild size="lg" className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold">
              <Link to="/" className="flex items-center gap-2">
                <Home size={20} /> Ir a la Página Principal
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      );
    };

    export default NotFoundPage;