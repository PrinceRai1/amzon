import React, { useState } from "react";
import { FaBars} from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6" ;
import { FiX } from "react-icons/fi";
import Logo from "../assets/logo.png";

const Navbar = () => {
  
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
      <nav className="w-screen h-14 flex items-center justify-between mx-auto p-4">
        <div>
          <a href="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="amazon Logo" />
            <span className="self-center text-2xl font-bold text-[#343434]">
              amazon
            </span>
          </a>
        </div>
        <div>
          <ul className="hidden p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:flex md:space-x-8 md:mt-0 md:border-0 text-[#343434] text-xl">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 md:hover:text-[#09bdff] text-[#343434]"
                aria-current="page">
                Collections
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-[#343434] md:hover:text-[#09bdff]">
                Brands
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 md:hover:text-[#09bdff] text-[#343434]">
                New
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 md:hover:text-[#09bdff] text-[#343434]">
                Sales
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="px-2 py-1 font-medium text-[#343434] bg-[#09bdff]  border rounded-md shadow-md mx-2 hidden md:inline">
            Log In
          </button>
          <button><FaBagShopping className="hidden md:inline text-4xl mx-3" /></button>
          <div
            className="md:hidden absolute top-3 right-4 z-10"
            onClick={handleClick}>
            {!nav ? (
              <FaBars className="w-6 h-6" />
            ) : (
              <FiX className="w-6 h-6" />
            )}
          </div>
          <ul
            className={
              !nav
                ? "hidden"
                : "md:hidden p-4  mt-4 font-medium bg-white border rounded-lg absolute right-5 w-fit h-fit text-[#343434] text-xl"
            }>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded bg-transparent  hover:text-[#09bdff] text-[#343434]"
                aria-current="page">
                Collections
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded bg-transparent text-[#343434] hover:text-[#09bdff]">
                Brands
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded bg-transparent hover:text-[#09bdff] text-[#343434]">
                New
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded bg-transparent hover:text-[#09bdff] text-[#343434]">
                Sales
              </a>
            </li>
          </ul>
        </div>
      </nav>

  );
};

export default Navbar;
