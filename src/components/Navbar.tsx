import React from 'react';

const Navbar = () => {
  return (
    <div
      className='
    bg-base-100 text-base-content fixed top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur 
    transition-all duration-100
    '
    >
      <div className='navbar px-16'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
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
                <a>Products</a>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <a className='btn btn-ghost text-xl normal-case text-[var(--color-primary-600)]'>
            UpEase
          </a>
        </div>
        <div className='navbar-end'>
          <ul className='menu menu-horizontal px-1'>
            <li tabIndex={0}>
              <details>
                <summary>Products</summary>
                <ul className='p-2'>
                  <li>
                    <a href='/StudentApp'>Student App</a>
                  </li>
                  <li>
                    <a>AMS Platform</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
