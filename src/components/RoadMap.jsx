import React from "react";
import StepCard from "./StepCard";

const RoadMap = () => {
  const steps = [
    {
      title: "Presale and Token Allocation",
      description:
        "dedPool's initial step is dedicated to spread awareness about its unique offering in the dynamic crypto world. By providing a fresh opportunity for newcomers, DedPool seeks to distinguish itself from other crypto projects. This phase will involve a transparent presale event, laying the foundation for a committed and engaged community.",
    },
    {
      title: "Pre-Launch Branding and Marketing",
      description:
        "Even before its official launch, the primary focus will be on comprehensive marketing campaigns. The goal is to underscore how easy and accessible it is to acquire $DEDPOOL tokens. This marketing strategy will not only introduce DedPool but also emphasize its unique proposition, offering a rare FIRST chance in the evolving market.",
    },
    {
      title: "Launch and Burn Initiation",
      description:
        "Launch $DEDPOOL token on renowned DEXs, ensuring abundant liquidity and seamless trading. Trade with ease! Prep the DedPool revolution mainstream. $DEDPOOL is structured as a deflationary token, incorporating a buy and burn model. With each buy and sell transaction, 0.1% is sent to a burn address. Additionally, 10% of the entire supply is allotted for burning. These strategies aim to diminish the token's supply over time, increasing scarcity.",
    },
    {
      title: "Post-Launch Community Engagement",
      description:
        "DedPool's journey post-launch revolves around nurturing and expanding its community. The project believes in fostering active engagement and will roll out initiatives to encourage community participation. By doing so, DedPool aspires to instill a deep-seated interest among its members, ensuring they are acknowledged and rewarded for their loyalty and contribution.",
    },
  ];
  return (
    <div id="roadmap" className="hero-section-father-2">
      <div className="feature-container roadMap">
        <div className="feature-description-title">
          <h1>
            <span className="highlighted">ROADMAP</span>
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
