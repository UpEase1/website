import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const NavbarBlack: React.FC = () => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <motion.nav
      className="mx-auto md:text-lg"
      ref={targetRef}
    >
      <div className="container flex bg-[#454444] w-fit rounded-full items-center justify-center p-6 mx-auto  capitalize text-white">
        <a href="#" className=" border-b-2 border-blue-500 mx-1.5 sm:mx-6">UpEase</a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Products</a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">pricing</a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact Us</a>

      </div>
    </motion.nav>
  );
};

export default NavbarBlack;
