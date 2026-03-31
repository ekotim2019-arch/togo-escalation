'use client';

import { motion } from 'framer-motion';

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
  showGrid?: boolean;
}

export function SlideWrapper({ children, className = "", showGrid = false }: SlideWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`min-h-screen w-full flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden bg-slate ${className}`}
    >
      {showGrid && (
        <div className="absolute inset-0 grid-bg pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
}
