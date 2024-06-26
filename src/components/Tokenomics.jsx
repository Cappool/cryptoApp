import React from "react";
import tokenomics1 from "../assets/tokenomics1.png";
import tokenomics2 from "../assets/tokenomics2.png";
import { useTranslation } from "react-i18next";

const Tokenomics = () => {
  const { t } = useTranslation();
  return (
    <div id="tokenomics" className="hero-section-father">
      <div className="tokenomics-container">
        <div className="feature-description token">
          <div className="feature-description-title">
            <h2>
              <span className="highlighted">{t("tokenomics.title")}</span>
            </h2>
          </div>
          <p className="feature-description-paragraph">
            {t("tokenomics.total_supply")} : &nbsp;100,000,000,000 <br /> <br />
            {t("tokenomics.presale")} (40 %) : &nbsp;40,000,000,000 <br />
            {t("tokenomics.staking")} (35 %) : &nbsp;35,000,000,000 <br />
            {t("tokenomics.liquidity")} (10 %) : &nbsp;10,000,000,000 <br />
            {t("tokenomics.burn")} (15 %) : &nbsp;15,000,000,000
          </p>
          {/* <div className="btn-container">
          <button className="secondary">
            <span>Start swapping</span>
          </button>
        </div> */}
        </div>
        {/* <div className="daily-stats-container gradient-border">
        <div className="metric-container">
          <span className="metric-title">Token Supply</span>
          <span className="metric-value">400,000,000,000,000</span>
        </div>
        <div className="metric-container">
          <span className="metric-title">DEDpool Price</span>
          <span className="metric-value">$0.11 USD</span>
        </div>
      </div> */}
        {/* <div className="swap-token-container"> */}
        {/* <div className="tokens-container">
          {tokens.map((token, index) => {
            return <TokenCard id={token} />;
          })}
        </div>
        <div className="btn-container">
          <button className="primary">swap</button>
        </div> */}
        {/* KEEP IMAGE HERE */}
        <div className="hero-img-container2">
          <img src={tokenomics1} alt="tokenomics-img1" className="hero-img1" />
          <img src={tokenomics2} alt="tokenomics-img2" className="hero-img2" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Tokenomics;
