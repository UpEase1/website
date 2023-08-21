import Link from "next/link";
import React from "react";



const Navbar = () => {

  return (
    <div
      className={`navbar fixed z-10 px-4 py-6 w-screen transition duration-300 ease-in-out xl:px-44 md:px-8 `}
    >
      <div className="navbar-start">
        <Link className="btn btn-ghost hover:bg-inherit pl-0 " href="/">
          {/* <Image
            src={LogoText}
            alt="Logo"
            className="lg:w-full lg:h-full h-3/4 w-3/4 mr-4 "
            // width="auto"
            // height="auto"
            priority={true}
          /> */}
          UpEase
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex  z-30">
        <ul className="menu menu-horizontal  hover:cursor-pointer font-semibold">
          <li>
            <Link href="/#platform">About Us</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/#contact">Contact us</Link>
          </li>
          <li>
            {/* <Link
              href="/register"
              className="btn btn-primary  text-neutral-content  duration-300 hover:scale-105 "
              rel="noopener noreferrer"
              target="_blank"
            >
              Sign Up
            </Link> */}
          </li>
        </ul>
      </div>
      <div className="navbar-end min-sm:flex lg:hidden ">
        {/* <Link
          href="#"
          className="btn max-sm:btn-sm btn-primary hidden min-[380px]:flex rounded-md"
        >
          Sign Up
        </Link> */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-com pact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <Link href="/#platform">About</Link>
            </li>
            <li>
              <Link href="faq">FAQ</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
            <Link
              href="#"
              className="btn rounded-md btn-primary hidden max-[380px]:flex"
            >
              Sign Up
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
