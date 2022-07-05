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
  return (
    <div className="xl:mx-72 md:mx-32 py-10">
      <CompanyInfo />

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
  );
}

export default App;
