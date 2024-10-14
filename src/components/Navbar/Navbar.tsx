import React from "react";
import { FaRegEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (

    <div className="layout text-gray-100 font-lato text-[1rem] fixed flex justify-between h-16 items-center w-full px-44">
      <div>
        <ul className="flex gap-8">
          <a href="" className="hover:text-gray-300 text-[1.25rem]">
          <FaRegEnvelope />
          </a>
          <a href="" className="hover:text-gray-300 text-[1.25rem]"><FaLinkedinIn /></a>
          <a href="" className="hover:text-gray-300 text-[1.25rem]"><FaGithub /></a>
        </ul>
      </div>

      <div>
        <ul className="flex gap-8 ">
          <a href="" className="hover:text-gray-300">
            Projects
          </a>
          <a href="" className="hover:text-gray-300">
            About
          </a>
        </ul>
      </div>
    </div>
  );
}
