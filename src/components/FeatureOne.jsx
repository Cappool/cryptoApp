import React from "react";
// import TokenCard from "./TokenCard";
import hero from "../assets/hero.png";
import { useTranslation } from "react-i18next";

const FeatureOne = () => {
  // const tokens = ["0x", "0xdao"];
  const { t } = useTranslation();

  return (
    <div id="about" className="hero-section-father-2">
      <div className="feature-container">
        {/* <div className="swap-token-container"> */}

        <div className="feature-description">
          <div className="feature-description-title">
            <h2>
              <span className="highlighted">{t("about.q1")}</span>
            </h2>
          </div>
          <p className="feature-description-paragraph">{t("about.a1")}</p>
          {/* <div className="btn-container">
          <button className="secondary">
            <span>Start swapping</span>
          </button>
          </div> */}
          <div className="feature-description-title">
            <h2>
              <span className="highlighted">{t("about.q2")}</span>
            </h2>
          </div>
          <p className="feature-description-paragraph">{t("about.a2")}</p>
        </div>
        <div className="feature-description">
          <div className="feature-description-title">
            <h2>
              <span className="highlighted">{t("about.q3")}</span>
            </h2>
          </div>
          <p className="feature-description-paragraph">{t("about.a3")}</p>
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
