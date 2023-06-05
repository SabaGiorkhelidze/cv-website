import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-5 my-3 md:mx-24 2xl:mx-80 py-10 ">
        {/* mail contact */}
        <div className="flex justify-center items-center flex-col px-10">
          <h1 className="font-bold text-xl md:text-3xl">Get in Touch</h1>
        </div>
        {/* icons and links */}
        <div className="grid grid-cols-2 gap-2 md:mt-4 md:flex md:flex-row md:gap-8">
          <a
            href="https://github.com/SavageSB?tab=repositories"
            target="_blank"
          >
            <AiFillGithub className="text-3xl cursor-pointer text-cyan-600 hover:scale-110" />
          </a>
          <a href="https://www.facebook.com/saba.giorxelidze" target="_blank">
            <AiFillFacebook className="text-3xl cursor-pointer text-cyan-600 hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/saba-giorkhelidze-871ba3230/"
            target="_blank"
          >
            <AiFillLinkedin className="text-3xl cursor-pointer text-cyan-600 hover:scale-110" />
          </a>
          <a
            href="https://www.instagram.com/saba.giorkhelidze/"
            target="_blank"
          >
            {" "}
            <AiOutlineInstagram className="text-3xl cursor-pointer text-cyan-600 hover:scale-110" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
