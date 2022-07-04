import { useRef } from "react";
import "./GSTtable.css";

const GSTtable = ({ amount_obj, setAmount_obj, taxableTotal }) => {
  const tbodyRef = useRef(null);
  const CGST_total = useRef(0),
    SGST_total = useRef(0),
    IGST_total = useRef(0);

  const handleChange = async (row, col, val) => {
    if (col % 2 === 1) {
      // rate columns
      console.log(amount_obj);
      // console.log(row);
      const amountOfRate = (taxableTotal * val) / 100;
      const amountInput =
        tbodyRef.current.children[row - 1].children[col + 1].children[0];
      amountInput.value = amountOfRate;
      let obj = {
        [row]: {
          rate: parseInt(val),
          amount: amountOfRate,
        },
      };
      if (col === 1) {
        console.log(amountInput);
        setAmount_obj({
          ...amount_obj,
          CGST: {
            ...amount_obj["CGST"],
            ...obj,
          },
        });
      } else if (col === 3) {
        setAmount_obj({
          ...amount_obj,
          SGST: {
            ...amount_obj["SGST"],
            ...obj,
          },
        });
      } else if (col === 5) {
        setAmount_obj({
          ...amount_obj,
          IGST: {
            ...amount_obj["IGST"],
            ...obj,
          },
        });
      }
      // setAmount_obj({ ...amount_obj });
      let total_CGST = 0;
      let total_SGST = 0;
      let total_IGST = 0;
      let CGST_len = Object.keys(amount_obj["CGST"] ?? 0).length;
      let SGST_len = Object.keys(amount_obj["SGST"] ?? 0).length;
      let IGST_len = Object.keys(amount_obj["IGST"] ?? 0).length;
      console.log(CGST_len);
      if (CGST_len !== 0) {
        for (let i = 1; i <= CGST_len; i++) {
          total_CGST += amount_obj["CGST"][i].amount;
          // total_IGST += amount_obj["IGST"][i].amount;
        }
      }
      if (SGST_len !== 0) {
        for (let i = 1; i <= SGST_len; i++) {
          total_SGST += amount_obj["SGST"][i].amount;
        }
      }
      if (IGST_len !== 0) {
        for (let i = 1; i <= IGST_len; i++) {
          total_IGST += amount_obj["IGST"][i].amount;
        }
      }
      // setAmount_obj({
      //   ...amount_obj,
      //   total_CGST,
      //   total_SGST,
      //   total_IGST,
      // });
      console.log(total_CGST, total_SGST, total_IGST);
      CGST_total.current.value = total_CGST;
      SGST_total.current.value = total_SGST;
      IGST_total.current.value = total_IGST;
    }
  };
  return (
    <table className="tg ">
      <thead>
        <tr>
          <th className="tg-0pky w-[3.5rem]" rowSpan="2">
            <h1 className="font-semibold">Sr.No.</h1>
          </th>
          <th className="tg-0pky" colSpan="2">
            <h1 className="font-semibold">CGST</h1>
          </th>
          <th className="tg-0pky" colSpan="2">
            <h1 className="font-semibold">SGST</h1>
          </th>
          <th className="tg-0pky" colSpan="2">
            <h1 className="font-semibold">IGST</h1>
          </th>
        </tr>
        <tr>
          <th className="tg-0pky">
            <h1 className="font-semibold">Rate %</h1>
          </th>
          <th className="tg-0pky">
            <h1 className="font-semibold">Amount</h1>
          </th>
          <th className="tg-0pky">
            <h1 className="font-semibold">Rate %</h1>
          </th>
          <th className="tg-0pky">
            <h1 className="font-semibold">Amount</h1>
          </th>
          <th className="tg-0pky">
            <h1 className="font-semibold">Rate %</h1>
          </th>
          <th className="tg-0pky">
            <h1 className="font-semibold">Amount</h1>
          </th>
        </tr>
      </thead>
      <tbody ref={tbodyRef}>
        <tr>
          <td className="tg-0pky">
            <h1 className="text-center">1</h1>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(1, 1, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(1, 2, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(1, 3, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(1, 4, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(1, 5, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(1, 6, e.target.value)}
              type="number"
            ></input>
          </td>
        </tr>
        <tr>
          <td className="tg-0pky">
            <h1 className="text-center">2</h1>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(2, 1, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(2, 2, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(2, 3, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(2, 4, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(2, 5, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(2, 6, e.target.value)}
              type="number"
            ></input>
          </td>
        </tr>
        <tr>
          <td className="tg-0pky">
            <h1 className="text-center">3</h1>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(3, 1, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(3, 2, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(3, 3, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(3, 4, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(3, 5, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(3, 6, e.target.value)}
              type="number"
            ></input>
          </td>
        </tr>
        <tr>
          <td className="tg-0pky">
            <h1 className="text-center">4</h1>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(4, 1, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(4, 2, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(4, 3, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(4, 4, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(4, 5, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(4, 6, e.target.value)}
              type="number"
            ></input>
          </td>
        </tr>
        <tr>
          <td className="tg-0pky">
            <h1 className="text-center">5</h1>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(5, 1, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(5, 2, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(5, 3, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(5, 4, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(5, 5, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(5, 6, e.target.value)}
              type="number"
            ></input>
          </td>
        </tr>
        <tr>
          <td className="tg-0pky">
            <h1 className="text-center">6</h1>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(6, 1, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(6, 2, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(6, 3, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(6, 4, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(6, 5, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(6, 6, e.target.value)}
              type="number"
            ></input>
          </td>
        </tr>
        <tr>
          <td className="tg-0pky">
            <h1 className="text-center">7</h1>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(7, 1, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(7, 2, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(7, 3, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(7, 4, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(7, 5, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(7, 6, e.target.value)}
              type="number"
            ></input>
          </td>
        </tr>
        <tr>
          <td className="tg-0pky">
            <h1 className="text-center">8</h1>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(8, 1, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(8, 2, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(8, 3, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(8, 4, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              onChange={(e) => handleChange(8, 5, e.target.value)}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky">
            <input
              disabled
              className="w-full text-center"
              onChange={(e) => handleChange(8, 6, e.target.value)}
              type="number"
            ></input>
          </td>
        </tr>
        <tr>
          <td className="tg-0pky" colSpan="2">
            <h1 className="text-right">Total</h1>
          </td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              ref={CGST_total}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky"></td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              ref={SGST_total}
              type="number"
            ></input>
          </td>
          <td className="tg-0pky"></td>
          <td className="tg-0pky">
            <input
              className="w-full text-center"
              ref={IGST_total}
              type="number"
            ></input>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default GSTtable;
