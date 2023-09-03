import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

function TextPrimary(children: React.ReactNode) {
  return <span className='text-[var(--color-primary-600)]'>{children}</span>;
}

export default function Hero() {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <motion.section
      ref={targetRef}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      animate={{ opacity: 1, y: -40 }}
      style={{
        opacity,
        translateY,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
      }}
      className='relative -z-10 h-screen '
    >
      <div className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
        {/* <Logo className='w-16' /> */}
        <p className='mt-4 max-w-3xl text-6xl font-medium'>
          Data driven solutions to empower {TextPrimary('educators')}, engage{' '}
          {TextPrimary('students')} and bring {TextPrimary('intelligence')}!
        </p>
      </div>
    </motion.section>
  );
}
