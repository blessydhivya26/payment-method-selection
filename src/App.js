import React, { useState } from "react";
import PaymentMethod from "./components/PaymentMethod";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const handleSelection = (method) => {
    setSelectedMethod(method);
  };

  const handleNext = () => {
    if (selectedMethod) {
      setShowSummary(true);
    } else {
      alert("Please select a payment method before continuing!");
    }
  };

  return (
    <div className="app">
      <h1>Payment Method Selection</h1>

      {!showSummary ? (
        <>
          <PaymentMethod onSelect={handleSelection} selected={selectedMethod} />
          <button className="next-btn" onClick={handleNext}>Next</button>
        </>
      ) : (
        <Summary method={selectedMethod} />
      )}
    </div>
  );

}

export default App;
console.log("testing git commit");
