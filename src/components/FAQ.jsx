import React from "react";
import dev from "../assets/hero3.png";
import Accordions from "./Accordions";

const FAQ = () => {
  const quests = [
    {
      quest: "What is DEDPOOL?",
      ans: " You can swap for DEDPOOL tokens using ETH, BNB, or USDT. Ensure you have sufficient amounts of these tokens in your wallet to proceed.",
    },
    {
      quest: "Why Launch on Ethereum?",
      ans: " You can swap for DEDPOOL tokens using ETH, BNB, or USDT. Ensure you have sufficient amounts of these tokens in your wallet to proceed.",
    },
    {
      quest: "What is the token utility of DEDPOOL?",
      ans: " You can swap for DEDPOOL tokens using ETH, BNB, or USDT. Ensure you have sufficient amounts of these tokens in your wallet to proceed.",
    },
    {
      quest: "When DEDPOOL will launch?",
      ans: " You can swap for DEDPOOL tokens using ETH, BNB, or USDT. Ensure you have sufficient amounts of these tokens in your wallet to proceed.",
    },
  ];
  return (
    <div className="hero-section-father-3 new">
      <div className="faq-container">
        <div className="faq-children-container">
          <div className="faq-child1">
            <div className="feature-description-title">
              <h1>
                <span className="highlighted">FREQUENTLY ASKED QUESTIONS</span>
              </h1>
            </div>
            <div className="dev-section-image">
              <img src={dev} alt="dev tools" />
            </div>
          </div>
          <div className="faq-child2">
            <div className="question-container">
              <div className="questions">
                <Accordions quest={quests} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
