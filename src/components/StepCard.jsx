import React from "react";
import logo from "../assets/Logo.png";

const StepCard = ({ step, description }) => {
  return (
    <div className="stepCard">
      <img src={logo} alt="logo" className="logo" />
      <div className="stepCardInfo">
        <h2 className="stepCardTitle">Q4 2023</h2>
        <h2 className="stepCardTitle2">{step}</h2>
        {/* <p className="stepDescription">{description}</p> */}
        <div className="stepDescription">{description}</div>
      </div>
    </div>
  );
};

export default StepCard;
