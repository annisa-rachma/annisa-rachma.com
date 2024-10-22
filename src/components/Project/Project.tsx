import React from "react";

const detailGenshin = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  category: ["Web Design", "Development"],
  stack: ["Vue.js", "Tailwind"],
  Year: 2023,
};

export default function Project() {
  const [expand, setExpand] = React.useState<boolean>(true);

  const handleClick = (): void => {
    setExpand(!expand);
  };

  return (
    <div className="flex flex-col w-full  ">
      <h2 className=" block text-left font-playfair  text-[2.65rem]   w-full mb-4 text-white ">
        Projects
      </h2>

      <div className="text-[1rem] md:text-[1.25rem] ">
        <div className="border-y-[1px] border-white hover:bg-white hover:text-black cursor-pointer ">
          <div className="py-2 hover:translate-x-4 transition-transform ease-in-out duration-500 ">
            UI Playground
          </div>
        </div>

        <div
          className={`border-b-[1px] border-white  ${
            expand ? "" : "hover:bg-white hover:text-black cursor-pointer"
          }`}
          onClick={handleClick}
          style={{ height: expand ? "600px" : "inherit" }}
        >
          <div className="py-2 hover:translate-x-4 transition-transform ease-in-out duration-500 ">
            Genshin Info
          </div>
          {expand && (
            <>
              <div className="flex gap-12 text-[1rem]">
                <div className="w-3/5">{detailGenshin.description}</div>

                <div className="">
                  <div className="flex flex-row gap-2 mb-2">
                    {detailGenshin.category.map((el, idx) => (
                      <div
                        key={idx}
                        className="border-[1px] border-white py-2 px-3 rounded-md"
                      >
                        {el}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row gap-2">
                    {detailGenshin.stack.map((el, idx) => (
                      <div
                        key={idx}
                        className="border-[1px] border-white py-2 px-3 rounded-md"
                      >
                        {el}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 h-[400px] w-full bg-slate-400 rounded-md">
                <img src="src\assets\download.gif" alt=""className="h-[400px] w-full object-cover rounded-md" />
              </div>

            </>
          )}

        </div>



        <div className="border-b-[1px] border-white hover:bg-white hover:text-black cursor-pointer">
          <div className=" py-2 hover:translate-x-4 transition-transform ease-in-out duration-500 ">
            Kinfolk e-shop
          </div>
        </div>

        <div className="border-b-[1px] border-white  hover:bg-white hover:text-black cursor-pointer">
          <div className="py-2 hover:translate-x-4 transition-transform ease-in-out duration-500 ">
            Turu
          </div>
        </div>

        <div className=" hover:bg-white hover:text-black cursor-pointer">
          <div className="hover:translate-x-4 transition-transform ease-in-out duration-500  py-2">
            Guess My Number
          </div>
        </div>
      </div>
    </div>
  );
}
