import React from "react";
import SummaryTable from "./SummaryTable";

const Footer = ({ amount_obj, setAmount_obj, taxableTotal }) => {
  return (
    <div className="w-full h-fit flex flex-row font-bold">
      <div className="w-2/3 h-52 flex flex-col flex-grow">
        <div className="w-full h-1/2 flex flex-row flex-grow">
          <div className="w-2/3 flex-grow border-2 border-black">
            <h1>Terms and Conditions:</h1>
          </div>
          <div className="flex h-full items-end border-2 border-black">
            <h1 className="px-3">Company Seal</h1>
          </div>
        </div>
        <div className="w-full h-1/2 flex flex-row">
          <div className="w-2/3 h-full flex items-center justify-center border-2 border-black">
            <h1>Thank you for your Business</h1>
          </div>
          <div className="flex flex-col w-1/3 h-full">
            <div className="flex items-start h-[60%] border-2 border-black">
              <img src="/solo_facilities.png" alt="logo"></img>
            </div>
            <div className="flex items-center justify-center h-[40%] border-2 border-black">
              <h1>Authorized Signatory</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-fit flex flex-col flex-grow">
        <SummaryTable
          taxableTotal={taxableTotal}
          amount_obj={amount_obj}
          setAmount_obj={setAmount_obj}
        />
      </div>
    </div>
  );
};

export default Footer;
