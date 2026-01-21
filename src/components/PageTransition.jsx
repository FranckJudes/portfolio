import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/**
 * PageTransition - Wrapper pour ajouter des transitions entre les pages
 *
 * Variants disponibles:
 * - fade: Fondu enchaîné simple
 * - slideUp: Glissement vers le haut
 * - slideRight: Glissement vers la droite
 * - scale: Mise à l'échelle
 */
const PageTransition = ({ children, variant = 'fade' }) => {
  const location = useLocation();

  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 },
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
    },
    slideRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
      transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
    },
    scale: {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.02 },
      transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  const selectedVariant = variants[variant] || variants.fade;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={selectedVariant.initial}
        animate={selectedVariant.animate}
        exit={selectedVariant.exit}
        transition={selectedVariant.transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
