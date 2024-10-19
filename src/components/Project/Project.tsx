import React from "react";

export default function Project() {
  return (
    // <div>
    <div className="flex flex-col w-full  ">
      <h2 className=" block text-left font-playfair  text-[2.65rem]   w-full mb-4">
        Projects
      </h2>

      <div className="text-[1rem] md:text-[1.25rem] ">

        <div className="border-y-[1px] border-white py-2 hover:bg-white hover:text-black cursor-pointer ">
          <div className="hover:translate-x-4 transition-transform ease-in-out duration-500 ">UI Playground</div>
        </div>

        <div className="border-b-[1px] border-white py-2 hover:bg-white hover:text-black cursor-pointer">
          <div className="hover:translate-x-4 transition-transform ease-in-out duration-500 ">Genshin Info</div>
        </div>

        <div className="border-b-[1px] border-white py-2 hover:bg-white hover:text-black cursor-pointer">
          <div className="hover:translate-x-4 transition-transform ease-in-out duration-500 ">Kinfolk e-shop</div>
        </div>

        <div className="border-b-[1px] border-white py-2 hover:bg-white hover:text-black cursor-pointer">
          <div className="hover:translate-x-4 transition-transform ease-in-out duration-500 ">Turu</div>
        </div>

        <div className="py-2 hover:bg-white hover:text-black cursor-pointer">
          <div className="hover:translate-x-4 transition-transform ease-in-out duration-500 ">Guess My Number</div>
        </div>

      </div>

    </div>

    // </div>
  );
}
