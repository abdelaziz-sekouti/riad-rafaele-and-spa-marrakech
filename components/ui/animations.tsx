'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export function AnimatedSection({ 
  children, 
  delay = 0, 
  className = '', 
  as = 'div' 
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string, 
  as?: any 
}) {
  const Component = motion.create(as);
  return (
    <Component
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, delay, ease: [0.21, 0.6, 0.35, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function ParallaxImage({ src, alt }: { src: string, alt: string }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  return (
    <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] w-full">
      <Image src={src} alt={alt} fill className="object-cover" referrerPolicy="no-referrer" priority />
      <div className="absolute inset-0 bg-black/40"></div>
    </motion.div>
  );
}
