import React from "react";

export default function Navbar() {
  return (
    // 
    <div className=" text-gray-100 font-lato text-[1.25rem] flex justify-between  top-0 mt-0  ">
      <nav>
        <ul>
          <a href="" className="text-gray-100 ">a</a>
        </ul>
      </nav>

      <nav>
        <ul className="flex gap-8 ">
          <a href="" className="text-gray-100 ">Projects</a>
          <a href="" className="text-gray-100 ">About</a>
        </ul>
      </nav>
    </div>
  );
}
