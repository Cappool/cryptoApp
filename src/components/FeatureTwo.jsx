import React from "react";
import hero from "../assets/hero2.png";

const FeatureTwo = () => {
  return (
    <div className="hero-section-father-3">
      <div className="feature-container two">
        <div className="feature-description">
          <div className="feature-description-title">
            <h2>
              <span className="highlighted">STAKE TO EARN</span>
            </h2>
          </div>
          <p className="feature-description-paragraph">
            DedPool will provide passive rewards for all holders who stake their
            DPOOL tokens in our smart contract <br />
            • 35% of the token supply will be paid out to participants in the
            staking pool as rewards <br />• Anybody holding DedPool can stake
            their tokens to earn passive income with rewards based on your
            percentage of the total staking pool
          </p>
        </div>
        <div className="feature-description three">
          <div className="hero-image-container">
            <img className="hero-img2" src={hero} alt="blockchain" />
          </div>
          <div className="feature-description-inside">
            <div className="feature-description-title">
              <h2>
                <span className="highlighted">DEFLATIONARY BURNING</span>
              </h2>
            </div>
            <p className="feature-description-paragraph">
              dedPool is structured as a deflationary token, incorporating a buy
              and burn model. With each buy and sell transaction, 0.1% is sent
              to a burn address. Additionally, 10% of the entire supply is
              allotted for burning. These strategies aim to diminish the token's
              supply over time, increasing scarcity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
