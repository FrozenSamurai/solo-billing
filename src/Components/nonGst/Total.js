import React from "react";
import { ToWords } from "to-words";
const Total = ({ amount_obj, setAmount_obj, taxableTotal }) => {
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
      <div className="flex flex-row w-full h-[17 rem]">
        <div className="flex flex-col flex-grow w-full h-full">
          <h1 className="text-left  border-[2px] border-b-2 border-t-4 border-l-4 border-black text-sm px-3">
            Amount in Words:
          </h1>
          <h1 className="flex-grow text-center border-r-[2px] border-b-2 border-l-4 border-black text-sm font-bold px-3">
            {convertToWords(taxableTotal) ?? null}
          </h1>
        </div>
        <div className="flex flex-grow flex-col w-full h-full">
          <h1 className="text-left  border-[2px] border-b-2 border-t-4 border-r-4 border-l-[2px] border-black text-sm px-3">
            Bank Details :- ICICI BANK
          </h1>
          <h1 className="text-left border-r-4 border-l-[2px] border-black text-sm px-3">
            A/C name :- MANDAR PATIL
          </h1>
          <h1 className="text-left border-r-4 border-l-[2px] border-black text-sm px-3">
            A/C num :- 148901508428
          </h1>
          <h1 className="flex-grow text-left border-b-[2px] border-l-[2px] border-r-4 border-black text-sm px-3">
            IFSC Code :- ICIC0001489
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Total;
