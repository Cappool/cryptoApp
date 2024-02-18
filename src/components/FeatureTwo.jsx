import React from "react";
import hero from "../assets/hero2.png";
import { useTranslation } from "react-i18next";

const FeatureTwo = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-section-father-3">
      <div className="feature-container two">
        <div className="feature-description">
          <div className="feature-description-title">
            <h2>
              <span className="highlighted">{t("about.q4")}</span>
            </h2>
          </div>
          <p className="feature-description-paragraph">
            {t("about.a4")}
            <br />
            {t("about.a42")}
            <br />
            {t("about.a43")}
          </p>
        </div>
        <div className="feature-description three">
          <div className="hero-image-container">
            <img className="hero-img2" src={hero} alt="blockchain" />
          </div>
          <div className="feature-description-inside">
            <div className="feature-description-title">
              <h2>
                <span className="highlighted">{t("about.q5")}</span>
              </h2>
            </div>
            <p className="feature-description-paragraph">{t("about.a5")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
