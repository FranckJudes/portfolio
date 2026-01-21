import React from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * ScrollReveal - Composant pour animer les éléments au scroll
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Le contenu à animer
 * @param {string} props.variant - Variant d'animation ('fadeUp', 'fadeLeft', 'fadeRight', 'scale', 'stagger')
 * @param {number} props.delay - Délai avant l'animation (en secondes)
 * @param {number} props.duration - Durée de l'animation (en secondes)
 * @param {number} props.threshold - Pourcentage de visibilité pour déclencher l'animation (0-1)
 */
const ScrollReveal = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -60 },
      visible: { opacity: 1, y: 0 },
    },
  };

  const selectedVariant = variants[variant] || variants.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selectedVariant}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerChildren - Pour animer plusieurs enfants en décalé
 */
export const StaggerContainer = ({ children, staggerDelay = 0.1, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...child.props,
          variants: itemVariants,
        })
      )}
    </motion.div>
  );
};

/**
 * CounterAnimation - Animation de compteur pour les chiffres
 */
export const CounterAnimation = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

        // Easing function pour une animation plus naturelle
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

/**
 * ParallaxElement - Effet parallax au scroll
 */
export const ParallaxElement = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
