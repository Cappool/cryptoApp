import React from "react";

const Question = ({ qn, ans }) => {
  return (
    <div className="question">
      <div className="point">
        <h2>{qn}</h2>
      </div>
      <div className="anwser">
        <p className="dev-section-description">{ans}</p>
      </div>
    </div>
  );
};

export default Question;
