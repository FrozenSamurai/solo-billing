import React, { useRef } from "react";

const GST = (num, amount_obj, setAmount_obj) => {
  //   let sr_no = 1;
  let total = 0;
  //   let amount_obj = {};
  let amt = useRef();
  // amt.current.value = num.num;
  let [amount, setAmount] = React.useState(0);
  const handleChange = (sr_no) => {
    // setAmount(amt.current.value);
    amount_obj[sr_no] = amt.current.value;
    // console.log(sr_no + ":" + amt.current.value);
    // console.log(toString(num.num));
    total = amount_obj[sr_no] + total;
    console.log(total);
  };

  //   let [amt, setAmt] = React.useState(0);
  console.log(num);
  return (
    <>
      <div>
        <div className="flex flex-row h-fit w-full border-b-4 border-black">
          <h1 className=" flex items-center justify-center text-center w-[3.6rem]">
            {num.num + 1}
          </h1>
          <div className="flex flex-col w-2/6 border-x-2 border-black">
            <div className="flex flex-row w-full ">
              <input className="w-1/2 text-center border-r-2 border-black"></input>
              <input
                className="w-1/2 text-center"
                ref={amt}
                onChange={() => handleChange(num.num + 1)}
              ></input>
            </div>
          </div>
          <div className="flex flex-col w-2/6 border-x-2 border-black">
            <div className="flex flex-row w-full ">
              <input className="w-1/2 text-center border-r-2 border-black"></input>
              <input className="w-1/2 text-center"></input>
            </div>
          </div>
          <div className="flex flex-col w-2/6 border-x-2 border-r-4 border-black">
            <div className="flex flex-row w-full ">
              <input className="w-1/2 text-center border-r-2 border-black"></input>
              <input className="w-1/2 text-center"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GST;
