import React from "react";

const Summary = ({ method }) => {
  return (
    <div className="Summary-container">
      <h2>Payment Summary</h2>
      <p>
        <strong>Selected Method:</strong> {method}
      </p>
      <p>Thank you for choosing your payment option!</p>
    </div>
  );
};

export default Summary;
