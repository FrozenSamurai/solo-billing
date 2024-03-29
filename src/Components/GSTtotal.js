import React from "react";
import GSTtable from "./GSTtable";
import { ToWords } from "to-words";
const GSTtotal = ({ amount_obj, setAmount_obj, taxableTotal }) => {
  const convertToWords = (val = 0) => {
    const toWords = new ToWords();
    if (val === 0) {
      return null;
    } else {
      let words = toWords.convert(parseFloat(val), { currency: true });
      return words;
    }
  };

  return (
    <div className="flex flex-row font-semibold">
      <div className="flex flex-col w-1/3 h-[17 rem]">
        <div className="flex flex-col flex-grow w-full h-full">
          <h1 className="text-left  border-2 border-l-4 border-black text-sm">
            Amount in Words:
          </h1>
          <h1 className="flex-grow text-center border-r-2 border-b-2 border-l-4 border-black text-sm font-bold">
            {convertToWords(amount_obj["GrandTotal"]) ?? null}
          </h1>
        </div>
        <div className="flex flex-grow flex-col w-full h-full">
          <h1 className="text-left  border-2 border-l-4 border-black text-sm">
            Bank Details :- ICICI BANK
          </h1>
          <h1 className="text-left border-r-2 border-l-4 border-black text-sm">
            A/C name :- MANDAR PATIL
          </h1>
          <h1 className="text-left border-r-2 border-l-4 border-black text-sm">
            A/C num :- 148901508428
          </h1>
          <h1 className="flex-grow text-left border-b-4 border-l-4 border-r-2 border-black text-sm">
            IFSC Code :- ICIC0001489
          </h1>
        </div>
      </div>
      <div className="flex flex-col flex-grow  w-full">
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
