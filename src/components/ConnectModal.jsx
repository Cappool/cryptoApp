import React from "react";
import metamask from "../assets/icons/metamask.png";
import wallet_connect from "../assets/icons/wallet_connect.svg";
import WalletButton from "./WalletButton";

export default function ConnectModal({ handlefn }) {
  return (
    <div>
      <div className="modal-overlay">
        <div className="modal">
          <span className="close-btn" onClick={handlefn}>
            &times;
          </span>
          <h2>Connect wallet</h2>
          <div className="wallet-btn-section">
            <WalletButton image={metamask}>Metamask</WalletButton>
            <WalletButton image={wallet_connect}>Wallet Connect</WalletButton>
          </div>
        </div>
      </div>
    </div>
  );
}
