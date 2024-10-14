import React from "react";

function Title() {
  return (
    <>
      <div className="text-gray-100 ">
        <div className="font-playfair max-w-[650px] text-[2.65rem] tracking-wide flex flex-col justify-center mx-auto">
          <h1>
            <span className=" italic">Hi,</span> I'm
          </h1>
          <h1 className="text-right -mt-4">ANNISA</h1>
        </div>
        <p className="w-full max-w-[700px] min-w-[300px] text-center text-[1.25rem] mt-4 font-lato tracking-wide ">
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
