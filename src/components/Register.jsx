import React from "react";

const Register = () => {
  return (
    <div className="w-full h-screen px-5">
      <div className="container mx-auto pt-12  md:pt-20 ">
        <h1 className="text-3xl font-semibold pb-5 leading-10 text-center tetx-[#0D0D0D] ">
          Kursga yozilish uchun xabar qoldiring
        </h1>

        <form >
          <div className="grid gap-6 mb-6  ">
            <div className="grid gap-6 md:grid-cols-2 ">
            <div>
              <label
                for="first_name"
                className="block mb-2 text-base font-medium text-[#3A3A3A]"
              >
                Ism
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 shadow-inner border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                required=""
              />
            </div>
            <div>
              <label
                for="phone"
                
                className="block mb-2 text-sm font-medium text-[#3A3A3A]"
              >
                Telefon <span className="text-[#FEAB38]">(Ko’rsatilishi shart)</span>
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 shadow-inner border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required=""
              />
            </div>
            </div>
            
            
            <div>
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-[#3A3A3A] "
              >
                Xabaringizni qoldiring
              </label>
              <textarea
                id="message"
                rows="6"
                className="bg-gray-50 shadow-inner border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                // className="p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Xabaringizni qoldiring..."
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="absolute right-6 text-[#0C0C0C] bg-gradient-to-r from-orange-500 to-orange-300 font-medium rounded-3xl text-xl  px-5 md:px-8 py-3 text-center"
          >
            Xabarni yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
