'use client';

import { motion, useScroll, useTransform } from "framer-motion"
import Head from 'next/head';
import * as React from 'react';



/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Logo from '~/svg/Logo.svg';
function TextPrimary(children: React.ReactNode) {
  return (
    <span
      className='text-[var(--color-primary-600)]'>{children}
    </span>
  )
}
function HeartSVG() {
  return (
    <svg className='inline align-text-top' xmlns="http://www.w3.org/2000/svg" fill="#000000" height="16px" width="16px" version="1.1" id="Capa_1" viewBox="0 0 471.701 471.701">
      <g>
        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z" />
      </g>
    </svg>
  )
}
function Hero() {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <motion.section
      ref={targetRef}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      animate={{ opacity: 1, y: -40 }}
      style={{ opacity, translateY, position: 'fixed', top: 0, left: 0, width: '100%' }}
      className="relative h-screen -z-10 "
    >
      <div
        className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
        {/* <Logo className='w-16' /> */}
        <p className='mt-4 max-w-3xl text-6xl font-medium'>
          Data driven solutions to empower {TextPrimary("educators")}, engage {TextPrimary("students")} and bring {TextPrimary("intelligence")}!
        </p>

      </div>
    </motion.section>
  )
}
function Introduction() {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [150, 0]);

  return (
    <motion.section
      initial={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.3 }}
      animate={{ y: -300 }}
      style={{ borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius }}
      ref={targetRef}
      className="bg-black flex min-h-screen flex-col items-center mb-[-300px]"
    >
      <div className='flex items-center flex-1 text-3xl font-medium text-[#D4B9B9] '>
        <p>
          Introducing
        </p>
      </div>
      <h1 className='text-8xl w-3/4 h-100 flex-1 text-white px-5 text-center'>
        Student Lifecycle Management
      </h1>

    </motion.section>
  )
}
export default function HomePage() {


  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <Hero />
      <div className="spacer" style={{ height: '100vh' }}></div>
      <Introduction />
      <section
        className="bg-black flex min-h-screen flex-col items-center mb-[-300px]"
      >
        <div className='flex items-center flex-1 text-3xl font-medium text-[#D4B9B9] '>
          <p>
            Introducing
          </p>
        </div>
        <h1 className='text-8xl w-3/4 h-100 flex-1 text-white px-5 text-center'>
          Student Lifecycle Management
        </h1>

      </section>
      {/* <footer className='absolute bottom-2 text-gray-700 flex justify-center min-w-full'>
        <div>
          © {new Date().getFullYear()} With {HeartSVG()} By{' '}
          <UnderlineLink href='https://linkedin.com/company/upease'>
            UpEase
          </UnderlineLink>
        </div>
      </footer> */}
    </main>
  );
}
