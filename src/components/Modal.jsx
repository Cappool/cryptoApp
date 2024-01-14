import React from "react";
import info from "../assets/icons/info.svg";

export default function Modal({ handlefn, children }) {
  const handleOutsideClick = (event) => {
    // Check if the click is outside the modal
    if (event.target === event.currentTarget) {
      handlefn();
    }
  };
  return (
    <div>
      <div className="modal-overlay" onClick={handleOutsideClick}>
        <div className="modal">
          <span className="close-btn" onClick={handlefn}>
            &times;
          </span>
          <img src={info} className="info-img" alt="icon" />
          {/* <h2>Your Modal Title</h2> */}
          <div className="modal_description">
            <p>{children}</p>
          </div>
          <button className="btn" onClick={handlefn}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
