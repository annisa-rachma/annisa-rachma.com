import React from "react";
import { FaRegEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-center  h-14 items-end">
      <div className="layout flex justify-between  w-10/12 ">
        <div>
          <ul className="flex gap-8">
            <a href="" className="hover:text-white text-[1.25rem]">
              <FaRegEnvelope />
            </a>
            <a href="" className="hover:text-white text-[1.25rem]">
              <FaLinkedinIn />
            </a>
            <a href="" className="hover:text-white text-[1.25rem]">
              <FaGithub />
            </a>
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
    </div>
  );
}
