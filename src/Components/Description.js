import React from "react";
import Sr from "./Sr";

const Description = () => {
  let n = 8;
  return (
    <>
      <div className="w-full border-x-4 border-b-4 border-black px-6 ">
        <h1 className="font-bold">Description</h1>
      </div>
      <div className="flex flex-row  border-b-4 border-l-4 border-black font-semibold w-full">
        <h1 className="border-r-4 border-black px-4 text-center w-fit">
          Sr.No.
        </h1>

        <div className="flex flex-row  ">
          <h1 className="border-r-4 border-black px-4 text-center w-96">
            Description
          </h1>
          <div className="flex flex-row  ">
            <h1 className="border-r-4 border-black px-4 text-center w-40">
              SAC
            </h1>
            <div className="flex flex-row  ">
              <h1 className="border-r-4 border-black px-4 text-center w-fit">
                NO OF DAYS
              </h1>
            </div>
            <div className="flex flex-row  ">
              <h1 className="border-r-4 border-black px-4 text-center w-fit">
                Unit
              </h1>
            </div>
            <div className="flex flex-row  ">
              <h1 className="border-r-4 border-black px-4 text-center w-fit">
                Rate
              </h1>
            </div>
            <div className="flex flex-row  ">
              <h1 className="border-r-4 border-black px-4 text-center w-28">
                Taxable Value
              </h1>
            </div>
          </div>
        </div>
      </div>

      {[...Array(n)].map((d, i) => (
        <Sr key={i} sr_no={i}>
          {" "}
        </Sr>
      ))}
      <div className="flex flex-row  border-b-4 border-l-4 border-r-4 border-black font-semibold w-[60rem]">
        <h1 className="border-r-4 border-black w-[44.3rem] text-right">
          Total:
        </h1>
        <div className="flex flex-row">
          <input className=" border-black border-r-4 px-4 text-center w-[4.15rem]"></input>
        </div>
        <div className="flex flex-row">
          <input className="border-r-4 border-black px-4 text-center w-[4.3rem]"></input>
        </div>
        <div className="flex flex-row">
          <input className=" px-4 text-center w-[6.55rem]"></input>
        </div>
      </div>
    </>
  );
};

export default Description;
