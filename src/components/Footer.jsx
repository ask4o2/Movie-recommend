import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsFillChatLeftTextFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-16 border-t container mx-auto border-white gap-3 p-3 text-sm flex flex-col md:flex-row items-center justify-between">
      <div className="flex gap-3 items-center">
        <FaFacebook />
        <AiFillTwitterCircle />
        <IoLogoYoutube />
      </div>

      <div className="flex gap-4 items-center">
        <p>FAQ</p>

        <p>About us</p>
        <p className="hidden md:block">Terms & Conditions</p>
        <p>Privacy</p>
        <p>Subscribe</p>
      </div>

      <div className="flex gap-2 text-xs px-3 rounded-full p-2 bg-gray-400 w-fit items-center">
        <BsFillChatLeftTextFill />
        Chat us
      </div>
    </div>
  );
};

export default Footer;
