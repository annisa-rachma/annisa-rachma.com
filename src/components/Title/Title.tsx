import React from "react";

function Title() {
  return (
    <>
      <div className=" ">
        <div className="font-playfair text-white max-w-[650px] text-[2.65rem] tracking-[0.2rem] flex flex-col justify-center mx-auto">
          <h1>
            <span className=" italic">Hi,</span>  I'm
          </h1>
          <h1 className="text-right -mt-4">ANNISA</h1>
        </div>
        <p className="w-full text-stone-400 max-w-[700px] min-w-[300px] text-center text-[1.25rem] mt-4 font-lato tracking-wide ">
          A <span className="font-bold">web developer</span> and{" "}
          <span className="font-bold">designer</span> who love using code to
          merge design and technology, creating aesthetically pleasing and
          functional outcomes.
        </p>
      </div>
    </>
  );
}

export default Title;
