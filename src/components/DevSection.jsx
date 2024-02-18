import React from "react";
import dev from "../assets/hero3.png";
import { useTranslation } from "react-i18next";

const DevSection = () => {
  const { t } = useTranslation();

  return (
    <div id="how-to-buy" className="dev-section-container">
      <div className="dev-section-list">
        <h1 className="dev-section-title">
          <span className="highlighted">{t("how_to_buy.title")}</span>
        </h1>
        <div className="dev-section-wrapper">
          <div className="dev-section-text">
            <h2>{t("how_to_buy.a1")}</h2>
            <p className="dev-section-description">{t("how_to_buy.b1")}</p>
            <h2>{t("how_to_buy.a2")}</h2>
            <p className="dev-section-description">{t("how_to_buy.b2")}</p>
            <h2>{t("how_to_buy.a3")}</h2>
            <p className="dev-section-description-last">{t("how_to_buy.b3")}</p>
            {/* <div className="btn-wrapper">
              <button className="primary">
                <span>Learn More</span>
              </button>
              <button className="secondary">
                <span>Get In Touch</span>
              </button>
            </div> */}
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
