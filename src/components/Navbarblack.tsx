import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const NavbarBlack: React.FC = () => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.nav
      className="sticky top-10 z-50 w-full mx-auto md:text-lg"
      ref={targetRef}
      style={{ opacity }}
    >
      <div className="container flex bg-[#252424] border border-gray-500 w-fit rounded-full items-center justify-center p-4 mx-auto  capitalize text-white">
        <Link href="#upease-section-1" className=" border-b-2 border-blue-500 mx-1.5 sm:mx-6">UpEase</Link>

        <Link href="#upease-section-3" className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Products</Link>

        <Link href="#upease-section-5" className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">pricing</Link>

        <Link href="#upease-section-7" className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact Us</Link>

      </div>
    </motion.nav>
  );
};

export default NavbarBlack;
