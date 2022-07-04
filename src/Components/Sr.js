import React from "react";

const Sr = (sr_no) => {
  return (
    <>
      <div className="flex flex-row  border-b-4 border-l-4 border-black font-semibold w-fit">
        <h1 className="border-r-4 border-black px-4 text-center w-[4.95rem]">
          {sr_no.sr_no + 1}
        </h1>
        <div className="flex flex-row  ">
          <input className="border-r-4 border-black px-4 text-center w-[22.95rem]"></input>
          <div className="flex flex-row  ">
            <input className="border-r-4 border-black px-4 text-center w-[9.2rem]"></input>
            <div className="flex flex-row  ">
              <input className="border-r-4 border-black px-4 text-center w-[7.2rem]"></input>
            </div>
            <div className="flex flex-row  ">
              <input className="border-r-4 border-black px-4 text-center w-[4.15rem]"></input>
            </div>
            <div className="flex flex-row  ">
              <input className="border-r-4 border-black px-4 text-center w-[4.3rem]"></input>
            </div>
            <div className="flex flex-row  ">
              <input className="border-r-4 border-black px-4 text-center w-28"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sr;
