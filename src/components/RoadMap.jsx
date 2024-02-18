import React from "react";
import StepCard from "./StepCard";
import { useTranslation } from "react-i18next";

const RoadMap = () => {
  const { t } = useTranslation();
  const steps = [
    {
      title: t("roadmap.r1"),
      description: t("roadmap.r2"),
    },
    {
      title: t("roadmap.r3"),
      description: t("roadmap.r4"),
    },
    {
      title: t("roadmap.r5"),
      description: t("roadmap.r6"),
    },
    {
      title: t("roadmap.r7"),
      description: t("roadmap.r8"),
    },
  ];
  return (
    <div id="roadmap" className="hero-section-father-2">
      <div className="feature-container roadMap">
        <div className="feature-description-title">
          <h1>
            <span className="highlighted">{t("roadmap.title")}</span>
          </h1>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => {
            return (
              <StepCard
                key={index}
                step={step.title}
                description={step.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
