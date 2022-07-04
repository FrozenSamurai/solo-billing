import React from "react";
import GST from "./GST";
import GSTtable from "./GSTtable";

const GSTtotal = ({ amount_obj, setAmount_obj, taxableTotal }) => {
  const n = 8;
  const Total = () => {
    var too = amount_obj;
    console.log(too);
  };
  return (
    <div className="flex flex-row font-semibold">
      <div className="flex flex-col w-1/3 h-[16.6rem]">
        <div className="flex flex-col flex-grow w-full h-full">
          <h1 className="text-left  border-b-2 border-x-4 border-black">
            Amount in Words:
          </h1>
          <h1 className="flex-grow text-center border-b-2 border-x-4 border-black">
            {"Amount in Words: 123qwerty"}
          </h1>
        </div>
        <div className="flex flex-col w-full h-full">
          <h1 className="text-left  border-2 border-x-4 border-black">
            Bank Details :- ICICI BANK
          </h1>
          <h1 className="text-left  border-x-4 border-black">
            A/C num :- 148901508428
          </h1>
          <h1 className="flex-grow text-left border-b-4 border-x-4 border-black">
            IFSC Code :- ICIC0001489
          </h1>
        </div>
      </div>
      <div className="flex flex-col flex-grow  w-full">
        {/* <div className="flex flex-row h-fit w-full border-b-4 border-black">
          <h1 className=" flex items-center justify-center text-center w-[3.6rem]">
            Sr. No.
          </h1>
          <div className="flex flex-col w-2/6 border-x-2 border-black">
            <h1 className="text-center h-1/2">CGST</h1>
            <div className="flex flex-row w-full border-t-2 border-black">
              <h1 className="w-1/2 text-center border-r-2 border-black">
                Rate %
              </h1>
              <h1 className="w-1/2 text-center">Amount</h1>
            </div>
          </div>
          <div className="flex flex-col w-2/6 border-x-2 border-black">
            <h1 className="text-center h-1/2">SGST</h1>
            <div className="flex flex-row w-full border-t-2 border-black">
              <h1 className="w-1/2 text-center border-r-2 border-black">
                Rate %
              </h1>
              <h1 className="w-1/2 text-center">Amount</h1>
            </div>
          </div>
          <div className="flex flex-col w-2/6 border-x-2 border-r-4 border-black">
            <h1 className="text-center h-1/2">IGST</h1>
            <div className="flex flex-row w-full border-t-2 border-black">
              <h1 className="w-1/2 text-center border-r-2 border-black">
                Rate %
              </h1>
              <h1 className="w-1/2 text-center">Amount</h1>
            </div>
          </div>
        </div> */}

        {/* {[...Array(n)].map((e, i) => (
            <>
              <GST
                key={i}
                num={i}
                amount_obj={amount_obj}
                setAmount_obj={setAmount_obj}
              />
            </>
          ))} */}
        <GSTtable
          taxableTotal={taxableTotal}
          amount_obj={amount_obj}
          setAmount_obj={setAmount_obj}
        />
      </div>
    </div>
  );
};

export default GSTtotal;
