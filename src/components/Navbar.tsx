import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div
      className='
    bg-base-100 text-base-content top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur 
    transition-all duration-100
    '
    >
      <div className='navbar px-16'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
            >
              <li>
                <Link href="#upease-section-2">Products</Link>
                <ul className='p-2'>
                  <li>
                    <Link href="#upease-section-3">SLCM</Link>
                  </li>
                  <li>
                    <Link href="#upease-section-5">AMS</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#upease-section-6">Pricing</Link>
              </li>
              <li>
                <Link href="#upease-section-7">Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link href="#" className='btn btn-ghost text-xl normal-case text-[var(--color-primary-600)]'>
            UpEase
          </Link>
        </div>
        <div className='navbar-end hidden md:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li tabIndex={0}>
              <details>
                <summary>Products</summary>
                <ul className='p-2'>
                  <li>
                    <Link href='#upease-section-3'>Student App</Link>
                  </li>
                  <li>
                    <Link href="#upease-section-5">AMS Platform</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="#upease-section-6">Pricing</Link>
            </li>
            <li>
              <Link href="#upease-section-7">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
