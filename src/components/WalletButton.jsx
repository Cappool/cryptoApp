import React from "react";

export default function WalletButton({ image, children }) {
  return (
    <button className="btn connect-wallet-btn">
      <div className="wallet-btn-div">
        <img src={image} alt={`${image}`} className="wallet-btn-icon" />
        {children}
      </div>
    </button>
  );
}
