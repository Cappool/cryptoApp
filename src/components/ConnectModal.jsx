import React from "react";

export default function ConnectModal({ showConnectModal, handlefn }) {
  return (
    <div>
      {showConnectModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={handlefn}>
              &times;
            </span>
            <button>MetaMask</button>
            <button>Other</button>
          </div>
        </div>
      )}
    </div>
  );
}
