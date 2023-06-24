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
        <iframe className="w-full h-[100%]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87169.08538480808!2d-122.41941579403425!3d37.77492951184153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807074f63747%3A0xb43a4d635fb48da!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1567260700401!5m2!1sen!2sca"
        title="Map"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
