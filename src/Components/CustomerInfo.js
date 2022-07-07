import React, { useRef } from "react";

const CustomerInfo = (
  allData,
  setAllData,
  amount_obj,
  consmerInfo,
  setConsmerInfo
) => {
  let nameRef = useRef(null),
    addressRef = useRef(null),
    dateRef = useRef(null),
    GSTINRef = useRef(null),
    placeRef = useRef(null),
    invoiceNoRef = useRef(null);
  // let invoiceNo = 10;
  let today = new Date();
  let date =
    today.getDate() +
    "/" +
    parseInt(today.getMonth() + 1) +
    "/" +
    today.getFullYear();
  const handleChangeData = () => {
    let name = nameRef.current.value ?? null,
      address = addressRef.current.value ?? null,
      date = dateRef.current.value ?? null,
      GSTIN = GSTINRef.current.value ?? null,
      place = placeRef.current.value ?? null,
      invoiceNo = invoiceNoRef.current.value ?? null;
    let alldata_obj = {
      ...allData,
      [invoiceNo]: {
        Consumer: {
          name: name,
          address: address,
          date: date,
          GSTIN: GSTIN,
          place: place,
        },
        date: date,
        ...amount_obj,
      },
    };
    setAllData(...alldata_obj);

    let consumerInfo_obj = {
      ...consmerInfo,
      [name]: {
        address: address,
        GSTIN: GSTIN,
        place: place,
        invoices: {
          [invoiceNo]: amount_obj["GrandTotal"],
        },
      },
    };
    setConsmerInfo(...consumerInfo_obj);
    // console.log(name, address, date, GSTIN, place, invoiceNo);
    // return { name, address, date, GSTIN, place, invoiceNo };
  };
  // dateInput.current.value = "";
  return (
    <div className="flex flex-col  border-black border-4 font-semibold">
      <h1 className="border-black border-b-4 underline pl-5 font-bold">
        Customer Details:
      </h1>
      <div className="flex flex-col border-b-4 border-black">
        <div className="flex flex-row justify-between font-semibold border-b-4 border-black">
          <div className="flex flex-row w-full border-r-4 border-black">
            <h1 className="border-r-4 border-black text-center w-1/5">Name:</h1>
            <input
              className="w-full text-center"
              ref={nameRef}
              onChange={() => {
                handleChangeData();
              }}
            ></input>
          </div>
          <div className="flex flex-row">
            <h1 className="w-40 text-center border-r-4 border-black">
              Invoice no.
            </h1>
            <input
              className="w-28 text-center font-bold"
              ref={invoiceNoRef}
              onChange={() => {
                handleChangeData();
              }}
            ></input>
          </div>
        </div>
        <div className="flex flex-row justify-between font-semibold">
          <div className="flex flex-row w-full justify-center border-r-4 border-black">
            <h1 className="flex items-center justify-center  border-r-4 border-black w-1/5">
              Address:
            </h1>
            <div className="w-full flex items-center">
              <textarea
                className="flex w-full  text-center overflow-hidden  px-8"
                ref={addressRef}
                onChange={() => {
                  handleChangeData();
                }}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="flex flex-row border-b-4 border-black">
              <h1 className="w-40 text-center border-black border-r-4">
                Date:
              </h1>
              <input
                ref={dateRef}
                className="w-28 text-center font-bold"
                placeholder={date}
                onChange={() => {
                  handleChangeData();
                }}
              ></input>
            </div>
            <div className="flex flex-row h-full">
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
          <h1 className="border-r-4 border-black px-4 text-center w-64 text-sm">
            Customer GSTIN:
          </h1>
          <input
            className="w-full text-center border-r-4 border-black"
            ref={GSTINRef}
            onChange={() => {
              handleChangeData();
            }}
          ></input>
        </div>
        <div className="w-1/2 flex-row flex">
          <h1 className="border-r-4 border-black px-4 text-center w-64">
            Place of Supply:
          </h1>
          <input
            className="w-full text-center"
            ref={placeRef}
            onChange={() => {
              handleChangeData();
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
