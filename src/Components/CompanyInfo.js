import React from "react";

const CompanyInfo = () => {
  return (
    <div className="flex flex-row ">
      <div className="w-2/3 flex-col items-center border-2 border-black border-l-4 border-t-4 flex">
        <img src="/solo_facilities.png" alt="logo" className="-z-10"></img>
        <h1 className="text-center font-bold uppercase underline pb-1 text-purple-900 text-3xl z-10">
          Housekeeping services
        </h1>
        <p className="text-center border-t-4 border-black p-2 px-10 font-semibold">
          SHOP NO - 1, AAI CONSTRUCTION, MATOSHREE SADAN, OPP GAODEVI MANDIR,
          NANDIVALI TEKDI,DOMBIVALI EAST,THANE - 421201
        </p>
      </div>
      <div className=" w-1/3 flex items-center justify-center border-2 border-black border-r-4 border-t-4">
        <img src="/solo.png" alt="solo-logo"></img>
      </div>
    </div>
  );
};

export default CompanyInfo;
