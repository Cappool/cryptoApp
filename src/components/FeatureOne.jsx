import React from "react";
// import TokenCard from "./TokenCard";
import hero from "../assets/hero.png";

const FeatureOne = () => {
  // const tokens = ["0x", "0xdao"];
  return (
    <div id="about" className="hero-section-father-2">
      <div className="feature-container">
        {/* <div className="swap-token-container"> */}

        <div className="feature-description">
          <div className="feature-description-title">
            <h2>
              <span className="highlighted">WHAT IS DEDPOOL</span>
            </h2>
          </div>
          <p className="feature-description-paragraph">
            dedPool is an ERC-20 token built on the ethereum chain. The name
            'DEDPOOL' stands for Determined Efficient Decentralized crypto Pool.
            Stake $DEDPOOL and earn rewards.
          </p>
          {/* <div className="btn-container">
          <button className="secondary">
            <span>Start swapping</span>
          </button>
        </div> */}
          <div className="feature-description-title">
            <h2>
              <span className="highlighted">
                A CHANCE TO BUY A TOKEN WE ALL LOVE AND CELEBRATE!
              </span>
            </h2>
          </div>
          <p className="feature-description-paragraph">
            Did you miss any Memecoin pump? You're not alone. Most of us were
            unaware of some Memecoin's early existence and only know about it
            when recent prices made news headlines. We're turning that
            disappointment into opportunity. Imagine telling your coworkers
            you're quitting because $DEDPOOL mooned?
          </p>
        </div>
        <div className="feature-description">
          <div className="feature-description-title">
            <h2>
              <span className="highlighted">
                EARN PASSIVE REWARDS BY STAKING
              </span>
            </h2>
          </div>
          <p className="feature-description-paragraph">
            DedPool is tired of watching other fork tokens, nor is it a
            pump-and-dump scheme. The $DEDPOOL token is designed to provide
            daily rewards to stakers for many years to come
          </p>
          <div className="hero-image-container">
            {/* <div className="tokens-container">
          {tokens.map((token, index) => {
            return <TokenCard id={token} />;
          })}
        </div>
        <div className="btn-container">
          <button className="primary">swap</button>
        </div> */}
            <img className="hero-img" src={hero} alt="blockchain" />
            {/* KEEP IMAGE HERE */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
