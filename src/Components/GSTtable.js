import { useRef, useEffect } from "react";
import "./GSTtable.css";

const GSTtable = ({ amount_obj, setAmount_obj, taxableTotal }) => {
  const tbodyRef = useRef(null);
  const CGST_total = useRef(null),
    SGST_total = useRef(null),
    IGST_total = useRef(null);

  useEffect(() => {
    console.log({ taxableTotal });
    for (let row of Object.keys(amount_obj["CGST"] ?? {})) {
      handleChange(row, 1);
    }

    for (let row of Object.keys(amount_obj["SGST"] ?? {})) {
      handleChange(row, 3);
    }

    for (let row of Object.keys(amount_obj["IGST"] ?? {})) {
      handleChange(row, 5);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taxableTotal]);

  const handleChange = (row, col, val = null) => {
    if (col % 2 === 1) {
      // rate columns
      console.log(amount_obj);
      let valueToSet = val;
      if (!val) {
        console.log(
          tbodyRef.current.children[row - 1].children[col].children[0]
        );
        valueToSet =
          tbodyRef.current.children[row - 1].children[col].children[0].value;
        console.log({ valueToSet });
      }

      const amountOfRate =
        ((amount_obj["Description"][row]["total"] ?? 0) * valueToSet) / 100;
      console.log({ amountOfRate });
      const amountInput =
        tbodyRef.current.children[row - 1].children[col + 1].children[0];
      amountInput.value = amountOfRate;
      let obj = {
        [row]: {
          rate: parseInt(valueToSet),
          amount: amountOfRate,
        },
      };

      if (col === 1) {
        calculateCGSTTotal(obj);
      } else if (col === 3) {
        calculateSGSTTotal(obj);
      } else if (col === 5) {
        calculateIGSTTotal(obj);
      }
    }
  };

  const calculateCGSTTotal = (newObj = {}) => {
    const newCGST = {
      ...amount_obj,
      CGST: {
        ...amount_obj["CGST"],
        ...newObj,
      },
    };

    let total_CGST = 0;

    for (let i of Object.keys(newCGST["CGST"] ?? {})) {
      total_CGST += newCGST["CGST"][i].amount;
    }

    CGST_total.current.value = total_CGST;
    setAmount_obj({ ...newCGST, CGST_Total: total_CGST });
  };

  const calculateSGSTTotal = (newObj = {}) => {
    const newSGST = {
      ...amount_obj,
      SGST: {
        ...amount_obj["SGST"],
        ...newObj,
      },
    };

    let total_SGST = 0;

    for (let i of Object.keys(newSGST["SGST"] ?? {})) {
      total_SGST += newSGST["SGST"][i].amount;
    }

    SGST_total.current.value = total_SGST;
    setAmount_obj({ ...newSGST, SGST_Total: total_SGST });
  };

  const calculateIGSTTotal = (newObj = {}) => {
    const newIGST = {
      ...amount_obj,
      IGST: {
        ...amount_obj["IGST"],
        ...newObj,
      },
    };

    let total_IGST = 0;

    for (let i of Object.keys(newIGST["IGST"] ?? {})) {
      total_IGST += newIGST["IGST"][i].amount;
    }

    IGST_total.current.value = total_IGST;
    setAmount_obj({ ...newIGST, IGST_Total: total_IGST });
  };

  return (
    <table className="tg border-r-4 border-black">
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
          {[...Array(6)].map((_, colInd) => (
            <th className="tg-0pky" key={colInd}>
              <h1 className="font-semibold">
                {colInd % 2 === 0 ? "Rate %" : "Amount"}
              </h1>
            </th>
          ))}
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
                  disabled={(colInd + 1) % 2 === 0}
                  className="w-full text-center"
                  onChange={(e) =>
                    handleChange(rowInd + 1, colInd + 1, e.target.value)
                  }
                  type="number"
                />
              </td>
            ))}
          </tr>
        ))}
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
