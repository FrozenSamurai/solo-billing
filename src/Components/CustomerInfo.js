import React from "react";

const CustomerInfo = ({ setTaxableTotal }) => {
  let dateInput;
  let invoiceNo = 10;
  let date = new Date().toLocaleDateString();

  // dateInput.current.value = "";
  return (
    <div className="flex flex-col  border-black border-4 font-semibold">
      <h1 className="border-black border-b-4 underline pl-5 font-bold">
        Customer Details:
      </h1>
      <div className="flex flex-col border-b-4 border-black">
        <div className="flex flex-row justify-between font-semibold border-b-4 border-black">
          <h1 className="border-r-4 border-black px-4 text-right w-40">
            Name:
          </h1>
          <input className="w-full border-r-4 border-black text-center"></input>
          <div className="flex flex-row">
            <h1 className="w-40 text-center border-r-4 border-black">
              Invoice no.
            </h1>
            <h1 className="w-28 text-center font-bold">{invoiceNo}</h1>
          </div>
        </div>
        <div className="flex flex-row justify-between font-semibold">
          <h1 className="flex items-center border-r-4 border-black px-4 text-right w-40">
            Address:
          </h1>
          <textarea className="flex flex-col items-center justify-center h-full w-full border-r-4 border-black text-center overflow-hidden px-2"></textarea>
          <div className="flex flex-col h-full">
            <div className="flex flex-row border-b-4 border-black">
              <h1 className="w-40 text-center border-black border-r-4">
                Date:
              </h1>
              <input
                ref={dateInput}
                className="w-28 text-center font-bold"
                placeholder={date}
              ></input>
            </div>
            <div className="flex flex-row">
              <h1 className="w-40 text-center border-black border-r-4 h-full">
                Delivery Challan
              </h1>
              <h1 className="w-28 text-center font-bold">{"NA"}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 flex-row flex">
          <h1 className="border-r-4 border-black px-4 text-center w-64">
            Customer GSTIN:
          </h1>
          <input className="w-full text-center border-r-4 border-black"></input>
        </div>
        <div className="w-1/2 flex-row flex">
          <h1 className="border-r-4 border-black px-4 text-center w-64">
            Place of Supply:
          </h1>
          <input onChange={() => {}} className="w-full text-center "></input>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
