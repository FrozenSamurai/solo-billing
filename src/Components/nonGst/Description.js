import React, { useRef } from "react";
// import "./Description.css";
import "../GSTtable.css";

const Description2 = ({
  amount_obj,
  setAmount_obj,
  taxableTotal,
  setTaxableTotal,
}) => {
  let taxable_total = useRef(null),
    tbodyRef = useRef(null);

  const handleChange = (row, col, val = null) => {
    let service_name, SAC;
    let units = tbodyRef.current.children[row - 1].children[4].children[0].value
        ? tbodyRef.current.children[row - 1].children[4].children[0].value
        : 1,
      days = tbodyRef.current.children[row - 1].children[3].children[0].value
        ? tbodyRef.current.children[row - 1].children[3].children[0].value
        : 1,
      rate = tbodyRef.current.children[row - 1].children[5].children[0].value
        ? tbodyRef.current.children[row - 1].children[5].children[0].value
        : 0;
    SAC = tbodyRef.current.children[row - 1].children[2].children[0].value
      ? tbodyRef.current.children[row - 1].children[2].children[0].value
      : "";
    service_name = tbodyRef.current.children[row - 1].children[1].children[0]
      .value
      ? tbodyRef.current.children[row - 1].children[1].children[0].value
      : "";
    //js object kaam baki
    if (col === 1) {
      service_name = val;
      // console.log(service_name, SAC);
    }
    if (col === 2) {
      SAC = val;
      // console.log(service_name, SAC);
    }
    if (col === 3) {
      days = val;
    }
    if (col === 4) {
      units = val;
    }
    if (col === 5) {
      rate = val;
    }
    if (units == 0) {
      units = 1;
    }
    if (days == 0) {
      days = 1;
    }
    // console.log(days, units, rate);
    let total = parseFloat(units * days * rate).toFixed(2);
    let total_ref = tbodyRef.current.children[row - 1].children[6].children[0];
    total_ref.value = total ? total : null;
    set_Description(
      service_name,
      SAC,
      units,
      days,
      rate,
      parseFloat(total).toFixed(2),
      row
    );

    // taxable_total.current.value = total;32
  };

  const set_Description = (
    service_name,
    SAC,
    units,
    days,
    rate,
    total,
    row
  ) => {
    let description_obj = {
      ...amount_obj["Description"],
      [row]: {
        description: service_name,
        SAC: SAC,
        units: units,
        days: days,
        rate: rate,
        total: total,
      },
    };
    setAmount_obj({ ...amount_obj, Description: description_obj });
    let sub_total = 0;
    for (let i of Object.keys(description_obj)) {
      sub_total += parseFloat(description_obj[i].total);
    }
    taxable_total.current.value = sub_total;
    setTaxableTotal(parseFloat(sub_total));
    setAmount_obj({ ...amount_obj, GrandTotal: sub_total });
  };

  return (
    <div className="flex flex-col">
      <div className="border-x-4 border-b-2 border-black">
        <h1 className="font-bold">Description</h1>
      </div>
      <table className="tg border-black border-x-4">
        <thead>
          <tr>
            <th className="tg-0lax w-10 ">
              <h1 className="text-center font-semibold">Sr. No. </h1>
            </th>
            <th className="tg-0lax w-3/6">
              <h1 className="text-center font-semibold">Description </h1>
            </th>
            <th className="tg-0lax w-24">
              <h1 className="text-center font-semibold">HSN/SAC </h1>
            </th>
            <th className="tg-0lax">
              <h1 className="text-center font-semibold">QTY</h1>
            </th>
            <th className="tg-0lax">
              <h1 className="text-center font-semibold">Unit</h1>
            </th>
            <th className="tg-0lax">
              <h1 className="text-center font-semibold">Rate</h1>
            </th>
            <th className="tg-0lax">
              <h1 className="text-center font-semibold">Amount</h1>
            </th>
          </tr>
        </thead>
        <tbody ref={tbodyRef}>
          {[...Array(8)].map((_, rowInd) => (
            <tr key={rowInd}>
              <td className="tg-0pky">
                <h1 className="text-center">{rowInd + 1}</h1>
              </td>
              {[...Array(6)].map((_, colInd) => (
                <td key={colInd} className="tg-0pky">
                  <input
                    disabled={colInd === 5}
                    type={colInd > 1 ? "number" : ""}
                    className={
                      colInd === 0 ? "w-full text-left" : "w-full text-center"
                    }
                    onChange={(e) =>
                      handleChange(rowInd + 1, colInd + 1, e.target.value)
                    }
                    // type="number"
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="tg-0lax" colSpan="4">
              <h1 className="text-right font-semibold">Grand Total</h1>
            </td>
            <td className="tg-0lax"></td>
            <td className="tg-0lax"></td>
            <td className="tg-0lax">
              <input
                disabled
                className="w-full text-center font-semibold"
                ref={taxable_total}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Description2;
