import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars} from "react-icons/fa";
import {FiXCircle} from 'react-icons/fi'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex justify-between items-center bg-black text-white duration-300">
      <div className="px-12 lg:px-0 container mx-auto flex justify-between items-center p-2">
        <div className=" w-24 md:w-32 duration-300 ">
          <img src={logo} alt="Naf academy Logo" />
        </div>

        {/* menu */}
        <ul className="hidden md:flex divide-x-[2px] divide-gray-400 ">
          <li className="px-8 hover:text-[#FFAD3C] duration-200 ">Kurslar</li>
          <li className="px-8 hover:text-[#FFAD3C] duration-200 ">
            Ochiq darslar
          </li>
          <li className="md:pr-2 px-8 hover:text-[#FFAD3C]  duration-200">
            Biz bilan aloqa
          </li>
        </ul>

        {/* Humberger */}
        <div onClick={handleClick} className="md:hidden absolute right-10 z-10">
          {!nav ? <FaBars size={23}  /> : <FiXCircle  size={25} className="text-black" />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : "absolute top-0 right-0  divide-y-[2px] divide-gray-400 bg-white text-black font-medium  h-screen w-[80%] pt-14"}>
          <li className="p-3 hover:text-[#FFAD3C] duration-200 ">Kurslar</li>
          <li className="p-3 hover:text-[#FFAD3C] duration-200 ">
            Ochiq darslar
          </li>
          <li className="p-3 hover:text-[#FFAD3C]  duration-200">
            Biz bilan aloqa
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
