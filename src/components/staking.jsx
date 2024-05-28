import React from "react";
import { useTranslation } from "react-i18next";

const Staking = () => {
  const { t } = useTranslation();

  return (
    <div id="staking" className="hero-section-father">
      <div className="staking-section">
        <h1>
          <div className="staking-header">{t("staking.title")}</div>
        </h1>
        <p className="staking-description">{t("staking.description")}</p>
        <div className="staking-container">
          <div className="left-column">
            <p className="feature-description-paragraph">
              <span className="grey">{t("staking.s1")} :</span> &nbsp;0 DEDPOOL{" "}
              <br />
              <span className="grey">{t("staking.s2")} :</span> &nbsp;0 DEDPOOL{" "}
              <br />
              <span className="grey">{t("staking.s3")} :</span> &nbsp;TBC%{" "}
              <br />
              <span className="grey">{t("staking.s4")} :</span> &nbsp;0 DEDPOOL{" "}
              <br />
              <span className="grey">{t("staking.s5")} :</span> &nbsp;0 DEDPOOL
            </p>
          </div>
          <div className="right-column">
            <div className="buttons-container">
              <button className="button">{t("staking.b1")}</button>
              <button className="button">{t("staking.b2")}</button>
              <button className="button">{t("staking.b3")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
