import React from "react";
import dev from "../assets/hero3.png";
import Accordions from "./Accordions";
import Footer from "./Footer";

const FAQ = () => {
  const quests = [
    {
      quest: "What is DEDPOOL?",
      ans: " DedPool is an ERC-20 token built on the ethereum chain with the latest crypto market trend of giving second chance for people who missed out on successful legacy tokens. The name ‘DEDPOOL’ stands for Determined Efficient Decentralized crypto Pool.",
    },
    {
      quest: "Why Launch on Ethereum?",
      ans: "Launching DedPool as an ERC-20 token offers numerous advantages to investors. Ethereum stands out as the most widely adopted and secure blockchain, with many decentralized wallet options. This ensures a seamless experience for buyers, enabling them to securely store, monitor, and trade DedPool tokens.",
    },
    {
      quest: "What is the token utility of DEDPOOL?",
      ans: "DedPool's primary utility lies in the ability to acquire the token at an exceptionally low cost and subsequently stake it for earning passive rewards. The smart contract incorporates a deflationary mechanism, resulting in the burning of 0.1% of every transaction and additionally, 10% of the entire supply is allotted for burning.",
    },
    {
      quest: "When DEDPOOL will launch?",
      ans: " We aim to launch DedPool on a decentralized exchange within several weeks from the start of the presale, depending on how quickly it can be concluded.",
    },
    {
      quest: "Where can I claim my presale tokens?",
      ans: "Upon the conclusion of the presale, you’ll be able to claim your tokens as soon as possible through the DedPool website. Token claiming and listing will likely be on the same day and time. Also, you will have the option to stake your tokens before the official listing date, securing an early staking position.",
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
      <Footer />
    </div>
  );
};

export default FAQ;
