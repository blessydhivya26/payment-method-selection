import React from "react";

const PaymentMethod = ({ onSelect, selected }) => {
  return (
    <div className="payment-container">
      <h2>Select Payment Method</h2>

      <label>
        <input
          type="radio"
          name="payment"
          value="Cash on Delivery"
          checked={selected === "Cash on Delivery"}
          onChange={(e) => onSelect(e.target.value)}
        />
        Cash on Delivery
      </label>

      <label>
        <input
          type="radio"
          name="payment"
          value="UPI"
          checked={selected === "UPI"}
          onChange={(e) => onSelect(e.target.value)}
        />
        UPI
      </label>

      <label>
        <input
          type="radio"
          name="payment"
          value="Debit/Credit Card"
          checked={selected === "Debit/Credit Card"}
          onChange={(e) => onSelect(e.target.value)}
        />
        Debit/Credit Card
      </label>
    </div>
  );
};

export default PaymentMethod;
