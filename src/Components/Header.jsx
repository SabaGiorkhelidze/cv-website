import React from "react";

const Header = () => {
  return (
    <>
      <div
        className="flex flex-col items-center  mx-5 md:flex-row md:mx-24 2xl:mx-80"
      >
        {/* img cont */}
        <div className="flex flex-col mt-4 mb-3 justify-center items-center w-full md:flex-row md:w-1/2">
          <div className="rounded-full w-32 h-32 md:w-52 md:h-52 bg-black"></div>
        </div>
        {/* header cont */}
        <div className="w-full md:w-1/2 flex items-center md:items-start md:pl-10 flex-col ">
          <h2 className="text-[#9E8C6C] mt-2 text-lg md:text-xl text-center">
            Full-Stack developer
          </h2>
          <h1 className="text-3xl text-center my-2 font-bold md:text-5xl">
            Saba Giorkhelidze
          </h1>
          <button className="px-5 text-center cursor-pointer h-10 bg-cyan-600 text-white md:px-16 my-1 md:my-3 ">
            Contact me
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
