import "./App.css";
import CustomerInfo from "./Components/CustomerInfo";
import CompanyInfo from "./Components/CompanyInfo";

function App() {
  return (
    <div className="xl:mx-72 md:mx-32">
      <CompanyInfo />
      <CustomerInfo />
    </div>
  );
}

export default App;
