import React from "react";
import info from "../assets/icons/info.svg";

export default function Modal({ showModal, handlefn, children }) {
  return (
    <div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={handlefn}>
              &times;
            </span>
            <img src={info} className="info-img" alt="icon" />
            {/* <h2>Your Modal Title</h2> */}
            <div className="modal_description">
              <p>{children}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
