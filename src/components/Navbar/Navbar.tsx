import React from "react";

export default function Navbar() {
  return (
    // fixed top-0 mx-auto px-24 left-1/2 transform -translate-x-1/2 w-full  
    <div className=" text-gray-100 font-lato text-[1rem] flex justify-between  top-0  items-center bg-[#171717] fixed h-16 mx-auto px-24 left-1/2 transform -translate-x-1/2  w-full">
      
      <nav>
        <ul>
          <a href="" className="">a</a>
        </ul>
      </nav>

      <nav>
        <ul className="flex gap-8 ">
          <a href="" className="hover:text-gray-300">Projects</a>
          <a href="" className="hover:text-gray-300">About</a>
        </ul>
      </nav>
    </div>
  );
}
