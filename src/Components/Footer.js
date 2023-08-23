import React from "react";
import SummaryTable from "./SummaryTable";
import sign from "./sign.png";

const Footer = ({ amount_obj, setAmount_obj, taxableTotal }) => {
  return (
    <div className="w-full h-fit flex flex-row font-bold">
      <div className="w-2/3 h-[10.99 rem] flex flex-col flex-grow">
        <div className="w-full h-1/2 flex flex-row ">
          <div className="w-2/3 flex-grow border-2 border-l-4 border-black">
            <h1 className="border-b-4 border-black">Terms and Conditions:</h1>
          </div>
          <div className="flex h-full w-1/3 items-end border-x-2 border-t-2 border-black"></div>
        </div>
        <div className="w-full h-1/2 flex flex-row relative">
          <div className="w-2/3 h-full flex items-center justify-center border-2 border-l-4 border-b-4 border-black">
            <h1>Thank you for your Business</h1>
          </div>
          <div className="flex flex-col w-1/3 h-full">
            <img
              src={sign}
              alt="Signature"
              className="h-10 w-fit -top-8"
              style={{
                alignSelf: "center",
                position: "absolute",
              }}
            ></img>
            <div className="flex items-center justify-center h-[60%] border-x-2 border-black">
              {/* <img src={sign} alt="Signature" className="h-10"></img> */}
            </div>
            <div className="flex items-center text-sm justify-center h-[40%] border-2 border-b-4 border-black">
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
