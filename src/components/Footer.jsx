import React from "react";
import logo from "../assets/logo.png";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#0d0d0d] pt-14 pb-32">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-">
        <div className="text-white ">
          <img src={logo} alt="navbar logo" className="blog pb-10" />
          <p className="text-base font-medium text-[#8B8B8B] mb-1">Adres</p>
          <h6 className="font-medium text-xl mb-5">
            Toshkent, Chilonzor tumani, Shirin chorraxasi
          </h6>
          <p className="text-base font-medium text-[#8B8B8B] mb-1">
            Telefon nomer
          </p>
          <h6 className="font-medium text-xl mb-5">+99895 111 35 37</h6>
          <p className="text-base font-medium text-[#8B8B8B] mb-1">
            Ijtimoiy tarmoqlar
          </p>
          <div className="flex space-x-5 ">
            <div className="pb-1 border-b-2 border-yellow-600 cursor-pointer">
              <AiFillInstagram size={22} />
            </div>
            <div className="pb-1 border-b-2 border-yellow-600 cursor-pointer">
              <AiFillYoutube size={22} />
            </div>
            <div className="pb-1 border-b-2 border-yellow-600 cursor-pointer">
              <FaTelegramPlane size={22} />
            </div>
            <div className="pb-1 border-b-2 border-yellow-600 cursor-pointer">
              <FaFacebookF size={22} />
            </div>
          </div>
        </div>

        {/* Google map */}
        <div className="text-white bg-slate-400 max-w-80 h-44 md:w-[37.5rem] md:h-[18.4rem] mt-16 lg:mt-0 ">
          <iframe className="w-full h-full"
            src="https://www.google.com/maps/d/embed?mid=1KUWpAJRMOgiDJu729AT9BgBeIUI&ehbc=2E312F"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
