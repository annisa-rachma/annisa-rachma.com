import React from "react";
import { FaRegEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className=" text-gray-100 font-lato text-[1rem] flex justify-between  top-0  items-center bg-[#171717] fixed h-16 mx-auto px-36 left-1/2 transform -translate-x-1/2  w-full">
      <nav>
        <ul className="flex gap-4">
          <a href="" className="hover:text-gray-300 text-[1.25rem]">
          <FaRegEnvelope />
          </a>
          <a href="" className="hover:text-gray-300 text-[1.25rem]"><FaLinkedinIn /></a>
          <a href="" className="hover:text-gray-300 text-[1.25rem]"><FaGithub /></a>
        </ul>
      </nav>

      <nav>
        <ul className="flex gap-8 ">
          <a href="" className="hover:text-gray-300">
            Projects
          </a>
          <a href="" className="hover:text-gray-300">
            About
          </a>
        </ul>
      </nav>
    </div>
  );
}
