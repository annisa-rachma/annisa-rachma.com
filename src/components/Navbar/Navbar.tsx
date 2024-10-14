import React from "react";
import { FaRegEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (

    <div className="layout text-stone-400 font-lato text-[1rem] fixed flex justify-between h-14 items-end w-full  px-44">
      <div>
        <ul className="flex gap-8">
          <a href="" className="hover:text-white text-[1.25rem]">
          <FaRegEnvelope />
          </a>
          <a href="" className="hover:text-white text-[1.25rem]"><FaLinkedinIn /></a>
          <a href="" className="hover:text-white text-[1.25rem]"><FaGithub /></a>
        </ul>
      </div>

      <div>
        <ul className="flex gap-8 ">
          <a href="" className="hover:text-white">
            Projects
          </a>
          <a href="" className="hover:text-white">
            About
          </a>
        </ul>
      </div>
    </div>
  );
}
