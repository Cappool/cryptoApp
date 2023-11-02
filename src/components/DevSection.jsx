import React from "react";
import dev from "../assets/hero3.png";

const DevSection = () => {
  return (
    <div id="how-to-buy" className="dev-section-container">
      <div className="dev-section-list">
        <h1 className="dev-section-title">
          How To <span className="highlighted">Buy</span>
        </h1>
        <div className="dev-section-wrapper">
          <div className="dev-section-text">
            <h2>Send ETH or USDT to your wallet</h2>
            <p className="dev-section-description">
              You can swap for DEDPOOL tokens using ETH, BNB, or USDT. Ensure
              you have sufficient amounts of these tokens in your wallet to
              proceed.
            </p>
            <h2>Connect wallet and swap</h2>
            <p className="dev-section-description">
              Connect your wallet to the site and easily swap ETH, BNB or USDT
              for DEDPOOL using the buy widget above. There is no buy tax for
              presale transactions.
            </p>
            <h2>Claim tokens on listing day</h2>
            <p className="dev-section-description">
              All presale participants can claim their tokens from this website
              using the same wallet they used to contribute. Tokens can be
              claimed when the DEX listing goes live.
            </p>
            <div className="btn-wrapper">
              <button className="primary">
                <span>Learn More</span>
              </button>
              <button className="secondary">
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
          <div className="dev-section-image">
            <img src={dev} alt="dev tools" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevSection;
