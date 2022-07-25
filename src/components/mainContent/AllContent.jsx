import React from "react";
import cartLogo from "../../assets/rafiki.svg";
import {BsClock, BsFillCalendar3WeekFill} from "react-icons/bs"

const AllContent = () => {
  return (
    <div className="lg:flex mb-10 ">
      <div className="container mx-auto md:grid md:grid-cols-2 md:border-2 lg:grid-cols-none lg:w-[40%] items-center shadow-lg">
      <div className="border-2 md:border-none py-6 bg-[#FAFAFA] flex flex-col items-center"> 
        <h2 className="text-2xl text-center font-bold mb-3 flex items-center">Web dasturlash</h2>
        <img src={cartLogo} alt="Web Dasturlash rasmi" />
      </div>
      <div className="border-2 border-t-0 md:border-none p-6">
        <h2 className="text-xl font-bold mb-2">Web dasturlash</h2>
        <p className="text-[#2E2E2E] md:border-b-2">
          Web dasturlash kurslarida zamonaviy va murakkab web saytlar yaratish ,
          web ilovalar uchun frontend va backend qismini yozish bo’yicha chuqur
          bilimga ega bo’lasiz (Frontend va backend kurslariga alohida
          yozilishingiz ham mumkin)
        </p>

        <div className="flex items-center mt-6 ">
          <BsClock size={20}/>
          <p className="ml-3 font-medium tetx-[#2E2E2E]">Kurs davomiyligi 9 oy</p>
        </div>
        <div className="flex items-center mt-3">
          <BsFillCalendar3WeekFill size={20} />
          <p className="ml-3 font-medium tetx-[#2E2E2E]">Haftada 3 kun 2 soatdan</p>
        </div>

        <button className="cursor-pointer text-[#0C0C0C] py-2.5 px-12 md:px-20 lg:px-11 mt-8 md:mb-0 mb-7 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-300 ">
          Kursga yozilish
        </button>
      </div>
    </div>

    <div className="container border-2 h-60  md:h-[30rem]  w-full mx-auto mt-10 lg:mt-0 lg:ml-5 shadow-xl">
      <iframe className="w-full h-full"
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen 
        title="video"
      />{" "}
    </div>
    </div>
    
  );
};

export default AllContent;
