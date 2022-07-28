import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";

const Navbar = () => {

  // Setting mobile nav
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  //change nav color when scroll
  const [color, setColor] = useState()
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className="w-full  items-center bg-black text-white duration-300 z-10">
      <div className={" bg-[rgba(0,0,0,.9)] w-full fixed mx-auto flex justify-between items-center py-3 px-5"}>
        <div className=" w-24 md:w-32 duration-300 hover:scale-105 cursor-pointer">
          <img src={logo} alt="Naf academy Logo" />
        </div>

        {/* menu */}
        <ul className="hidden md:flex divide-x-[2px] divide-gray-400 ">
          <li className="px-8 hover:text-[#FFAD3C] duration-200 cursor-pointer ">Kurslar</li>
          <li className="px-8 hover:text-[#FFAD3C] duration-200 cursor-pointer">
            Ochiq darslar
          </li>
          <li className="md:pr-2 px-8 hover:text-[#FFAD3C] duration-200 cursor-pointer">
            Biz bilan aloqa
          </li>
        </ul>

        {/* Humberger */}
        <div onClick={handleClick} className="md:hidden absolute right-10 z-10 cursor-pointer">
          {!nav ? (
            <FaBars size={23} />
          ) : (
            <FiXCircle size={25} className="text-black" />
          )}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 right-0  divide-y-[2px] divide-gray-400 bg-white text-black font-medium  h-screen w-[80%] pt-14"
          }
        >
          <li className="p-3 hover:text-[#FFAD3C] duration-200 cursor-pointer hover:bg-black">Kurslar</li>
          <li className="p-3 hover:text-[#FFAD3C] duration-200 cursor-pointer hover:bg-black">
            Ochiq darslar
          </li>
          <li className="p-3 hover:text-[#FFAD3C]  duration-200 cursor-pointer hover:bg-black">
            Biz bilan aloqa
          </li>
        </ul>
      </div>

      {/* Hero */}
      <div className="w-full">
        <div className="container mx-auto px-7" >
          <h1 className="font-bold text-5xl lg:text-6xl leading-[3.9rem] pt-28">
            Kursni tanlang va oʻqishni boshlang!
          </h1>
          <p className="font-medium--dark text-xl lg:text-2xl pt-4 pb-8">
            Hammasi juda oddiy, bilim uchun investitsiya qiling va zamonaviy{" "}
            <br />
            kasbni egallang !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
