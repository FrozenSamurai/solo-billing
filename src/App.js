import "./App.css";
import CustomerInfo from "./Components/CustomerInfo";
import CompanyInfo from "./Components/CompanyInfo";
import Signin from "./Components/Signin";
import { Route, Routes } from "react-router-dom";

import GSTtotal from "./Components/GSTtotal";
import { useState } from "react";

import Description from "./Components/Description";
import Footer from "./Components/Footer";
import PrivateRoutes from "./Components/PrivateRoutes";

function App() {
  const [login, setLogin] = useState(false);

  // useEffect(() => {
  //   console.log(allData);
  // }, [allData]);
  //convert to PDF

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Signin setLogin={setLogin} />} />
        <Route element={<PrivateRoutes login={login} />}>
          <Route path="/main" element={<MainApp />} />
        </Route>
      </Routes>
    </>
  );
}
const MainApp = () => {
  let [amount_obj, setAmount_obj] = useState({});
  const [taxableTotal, setTaxableTotal] = useState(0);
  let [allData, setAllData] = useState({ ...amount_obj });
  let [consmerInfo, setConsmerInfo] = useState({});
  return (
    <div className="xl:mx-72 md:mx-32 " id="divToPrint">
      <CompanyInfo amount_obj={amount_obj} />

      <CustomerInfo
        setTaxableTotal={setTaxableTotal}
        allData={allData}
        setAllData={setAllData}
        amount_obj={amount_obj}
        consmerInfo={consmerInfo}
        setConsmerInfo={setConsmerInfo}
      />

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
};
export default App;
