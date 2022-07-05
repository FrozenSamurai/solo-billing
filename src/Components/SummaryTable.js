import React, { useState } from "react";
import "./GSTtable.css";

const SummaryTable = ({ amount_obj, setAmount_obj, taxableTotal }) => {
  let GST_total =
    (amount_obj["CGST_Total"] ?? 0) +
    (amount_obj["SGST_Total"] ?? 0) +
    (amount_obj["IGST_Total"] ?? 0);
  let GrandTotal = taxableTotal + GST_total;

  return (
    <>
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-0lax w-4/6">
              <h1 className="text-center font-semibold">Summary</h1>
            </th>
            <th className="tg-0lax">
              <h1 className="text-center font-semibold">Amount</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-0lax">
              <h1 className="text-right font-semibold">Taxable Value</h1>
            </td>
            <td className="tg-0lax">
              <h1 className="text-center font-semibold ">
                {taxableTotal ? taxableTotal : 0}
              </h1>
            </td>
          </tr>
          <tr>
            <td className="tg-0lax">
              <h1 className="text-right font-semibold">Total CGST (1)</h1>
            </td>
            <td className="tg-0lax">
              <h1 className="text-center font-semibold ">
                {amount_obj["CGST_Total"] ?? 0}
              </h1>
            </td>
          </tr>
          <tr>
            <td className="tg-0lax">
              <h1 className="text-right font-semibold">Total SGST (2)</h1>
            </td>
            <td className="tg-0lax">
              <h1 className="text-center font-semibold ">
                {amount_obj["SGST_Total"] ?? 0}
              </h1>
            </td>
          </tr>
          <tr>
            <td className="tg-0lax">
              <h1 className="text-right font-semibold">Total IGST (3)</h1>
            </td>
            <td className="tg-0lax">
              <h1 className="text-center font-semibold ">
                {amount_obj["IGST_Total"] ?? 0}
              </h1>
            </td>
          </tr>
          <tr className="h-10 ">
            <td className="tg-0lax">
              <h1 className="text-right font-semibold my-2">
                Total GST (1+2+3)
              </h1>
            </td>
            <td className="tg-0lax">
              <h1 className="text-center font-semibold my-1">
                {GST_total ? GST_total : 0}
              </h1>
            </td>
          </tr>
          <tr className="h-10">
            <td className="tg-0lax">
              <h1 className="text-right font-extrabold my-1">Grand Total</h1>
            </td>
            <td className="tg-0lax">
              <h1 className="text-center font-semibold my-1">
                {GrandTotal ? GrandTotal : 0}
              </h1>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SummaryTable;
