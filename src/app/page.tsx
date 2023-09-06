'use client';

import Head from 'next/head';
import * as React from 'react';

import AmsPlatform from '@/app/sections/ams-section';
import Contact from '@/app/sections/contact-section';
import Hero from '@/app/sections/hero-section';
import IntroductionAms from '@/app/sections/introduction-ams-section';
import IntroductionSla from '@/app/sections/introduction-sla-section';
import Pricing from '@/app/sections/pricing-section';
import StudentApp from '@/app/sections/sla-section';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Logo from '~/svg/Logo.svg';

export default function HomePage() {
  return (
    <main className='z-0 snap-y snap-mandatory '>
      <Head>
        <title>UpEase</title>
      </Head>
      <section>
        <Hero />
      </section>
      <div className='spacer' style={{ height: '100vh' }}></div>
      <section className='bg-black '>
        <IntroductionSla />
      </section>
      <section className='bg-black'>
        <StudentApp />
      </section>
      <section className='bg-black '>
        <IntroductionAms />
      </section>
      <section className='bg-black'>
        <AmsPlatform />
      </section>
      <section className='bg-gradient-to-b from-[#F2F2F2] to-white '>
        <Pricing />
      </section>
      <section className='bg-white'>
        <Contact />
      </section>
    </main>
  );
}
