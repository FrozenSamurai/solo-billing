import React from "react";

const CompanyInfo2 = () => {
  return (
    <div className="flex flex-row h-[9.5rem]">
      <div className="w-full h-full flex-col items-center border-2 border-b-0 border-black border-l-4 border-r-4 border-t-4 flex">
        <div className="flex flex-col items-center w-full h-2/3">
          <img
            src="../solo_facilities.png"
            alt="logo"
            className="w-auto h-3/4  "
          ></img>
          <div className=" flex flex-row justify-center  w-full ">
            <h1 className="text-center font-bold uppercase underline pb-2 text-purple-900 text-lg z-10 xl:justify-center">
              Housekeeping services
            </h1>
          </div>
        </div>
        <div className="flex w-full flex-row h-fit">
          <p className=" w-2/3 text-center border-t-4 border-black text-sm font-semibold uppercase">
            Shop No. 20,Krishna Niwas,Chiplunkar Road,Near Ganesh Coldrinks,
            Dombivli - EAST, THANE - 421201
          </p>
          <div className="w-1/3 flex flex-col items-center justify-center  border-black border-l-4 border-t-4">
            {/* <img src="/solo.png" alt="solo-logo"></img> */}
            <h1 className="font-bold underline">info@solofacilities.com</h1>
            <h1 className="font-bold">
              <span className="underline">7777050818</span> /{" "}
              <span className="underline">7777050817</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo2;
