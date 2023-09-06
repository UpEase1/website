import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

export default function IntroductionSla() {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [150, 0]);

  return (
    <motion.section
      initial={{ y: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 1.3 }}
      animate={{ y: -300, opacity: 1 }}
      style={{
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
      }}
      ref={targetRef}
      className='mb-[-300px] flex h-full min-h-[50vh] md:min-h-screen flex-col items-center bg-black'
    >
      <div className='flex flex-1 items-center text-xl sm:text-3xl md:text-4xl font-medium text-[#D4B9B9] '>
        <p>Introducing</p>
      </div>
      <h1 className='h-100 w-3/4 flex-1 sm:px-5 text-center text-5xl sm:text-6xl md:text-8xl  text-white'>
        Student Lifecycle Management
      </h1>
    </motion.section>
  );
}
