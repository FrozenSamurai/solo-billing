import "./App.css";
import CustomerInfo from "./Components/CustomerInfo";
import CompanyInfo from "./Components/CompanyInfo";
import Description from "./Components/Description";

function App() {
  return (
    <div className="xl:mx-72 md:mx-32">
      <CompanyInfo />
      <CustomerInfo />
      <Description />
    </div>
  );
}

export default App;
