import React from "react";
import AllContent from "./AllContent";

const ContentNav = () => {
  return (
    <div className="w-full">
      <div className="w-full shadow-xl">
        <div className="divide-x-2 divide-black flex container mx-auto px-4 my-2 	">
          <p className="text-base font-medium m-2 p-2  cursor-pointer duration-300 hover:bg-black hover:text-[#FFAD3C] ">
            Ochiq darslar
          </p>
          <p className="underline underline-offset-4 text-base font-medium m-2 py-2 px-4  cursor-pointer duration-300 hover:bg-black hover:text-[#FFAD3C] ">
            Barchasi
          </p>
          {/* I'm gonna use useState to underLine Text */}
        </div>
      </div>

      {/* Main Content  */}
      <div className="container mx-auto px-4 pt-10 lg:pt-16">
        <AllContent />
        <AllContent />
        <AllContent />
      </div>
    </div>
  );
};

export default ContentNav;
