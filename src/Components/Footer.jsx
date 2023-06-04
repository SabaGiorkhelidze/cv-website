import React from "react";
import { BoxIconElement } from "boxicons";

import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-5 md:flex-row md:mx-24 2xl:mx-80  border-2 border-teal-900 py-10 ">
        {/* mail contact */}
        <div className="flex justify-center items-center flex-col px-10">
          <h1 className="font-bold text-xl md:text-3xl">Get in Touch</h1>
        </div>
        {/* icons and links */}
        <div className="grid grid-cols-2 gap-2">
            <AiFillGithub />
        </div>
      </div>
    </>
  );
};

export default Footer;
