'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Facebook, Instagram, Youtube, Twitter, MessageCircle } from 'lucide-react';

export function FloatingWidgets() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const x = useTransform(scrollY, [200, 400], [-50, 0]);

  return (
    <>
      <motion.div 
        style={{ opacity, x, pointerEvents: useTransform(opacity, (v) => v > 0.5 ? 'auto' : 'none') }}
        className="fixed left-0 top-1/3 z-40 flex flex-col gap-4 bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-md p-3 rounded-r-2xl border border-l-0 border-outline-variant shadow-lg"
      >
        <a href="#" className="text-on-surface hover:text-primary transition-colors p-1" aria-label="Facebook"><Facebook size={20} /></a>
        <a href="#" className="text-on-surface hover:text-primary transition-colors p-1" aria-label="Instagram"><Instagram size={20} /></a>
        <a href="#" className="text-on-surface hover:text-primary transition-colors p-1" aria-label="Youtube"><Youtube size={20} /></a>
        <a href="#" className="text-on-surface hover:text-primary transition-colors p-1" aria-label="Twitter"><Twitter size={20} /></a>
      </motion.div>

      <a 
        href="https://wa.me/212612236660"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center whatsapp-pulse"
        target="_blank" rel="noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
}
