import React from "react";
import Title from "../Title/Title";
import Navbar from "../Navbar/Navbar";
import Project from "../Project/Project";

export default function PageHome() {
  return (
    <>
      <section className=" w-full text-stone-400 font-lato text-[1rem]  fixed   bg-[#171717] bg-noise left-1/2 -translate-x-1/2">
        <Navbar />

      </section>
      <section className="max-w-[60rem] mx-auto mb-24 x">

        <div className="h-[100vh] flex items-center justify-center   w-full">
          <Title />
        </div>

        <div className="flex items-center justify-center   w-full">
          <Project />
        </div>
      </section>
    </>
  );
}
