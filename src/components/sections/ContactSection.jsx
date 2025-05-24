import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Card } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { Send } from 'lucide-react';

    const ContactSection = ({ variants }) => {
      const { toast } = useToast();

      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        try {
          localStorage.setItem('contactFormData', JSON.stringify(data));
          toast({
            title: "Mensaje Enviado",
            description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
            variant: "default",
          });
          e.target.reset();
        } catch (error) {
          console.error("Error saving to localStorage:", error);
          toast({
            title: "Error",
            description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
            variant: "destructive",
          });
        }
      };

      return (
        <motion.section
          id="contacto"
          className="py-16 md:py-24 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={variants}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#34495e]">Contáctanos</h2>
            <Card className="max-w-2xl mx-auto shadow-xl p-6 md:p-10 bg-white border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <Input id="name" name="name" type="text" placeholder="Tu nombre completo" required className="border-gray-300 focus:border-[#2ecc71] focus:ring-[#2ecc71]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                  <Input id="email" name="email" type="email" placeholder="tu@email.com" required className="border-gray-300 focus:border-[#2ecc71] focus:ring-[#2ecc71]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <Textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." rows={5} required className="border-gray-300 focus:border-[#2ecc71] focus:ring-[#2ecc71]" />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" className="w-full bg-[#34495e] hover:bg-[#2c3e50] text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    <Send size={18} /> Enviar Mensaje
                  </Button>
                </motion.div>
              </form>
            </Card>
          </div>
        </motion.section>
      );
    };

    export default ContactSection;