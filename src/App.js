import "./App.css";
import CustomerInfo from "./Components/CustomerInfo";
import CompanyInfo from "./Components/CompanyInfo";

import GSTtotal from "./Components/GSTtotal";
import { useState } from "react";

import Description from "./Components/Description";
import Footer from "./Components/Footer";

function App() {
  let [amount_obj, setAmount_obj] = useState({});
  const [taxableTotal, setTaxableTotal] = useState(0);
  let [allData, setAllData] = useState({});
  let [consmerInfo, setConsmerInfo] = useState({});
  //convert to PDF

  return (
    <>
      <div className="xl:mx-72 md:mx-32 " id="divToPrint">
        <CompanyInfo
          allData={allData}
          setAllData={setAllData}
          amount_obj={amount_obj}
          consmerInfo={consmerInfo}
          setConsmerInfo={setConsmerInfo}
        />

        <CustomerInfo setTaxableTotal={setTaxableTotal} />

        <Description
          taxableTotal={taxableTotal}
          setTaxableTotal={setTaxableTotal}
          amount_obj={amount_obj}
          setAmount_obj={setAmount_obj}
        />

        <GSTtotal
          taxableTotal={taxableTotal}
          amount_obj={amount_obj}
          setAmount_obj={setAmount_obj}
        />
        <Footer
          taxableTotal={taxableTotal}
          amount_obj={amount_obj}
          setAmount_obj={setAmount_obj}
        />
      </div>
    </>
  );
}

export default App;
