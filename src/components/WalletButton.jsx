import React from "react";

export default function WalletButton({
  image,
  children,
  connect,
  disabled,
  key,
}) {
  return (
    <button
      disabled={disabled}
      key={key}
      onClick={connect}
      className="btn connect-wallet-btn"
    >
      <div className="wallet-btn-div">
        <img src={image} alt={`${image}`} className="wallet-btn-icon" />
        {children}
      </div>
    </button>
  );
}
