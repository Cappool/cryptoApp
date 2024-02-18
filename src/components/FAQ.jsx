import React from "react";
import dev from "../assets/hero3.png";
import Accordions from "./Accordions";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  const quests = [
    {
      quest: t("faq.q1"),
      ans: t("faq.a1"),
    },
    {
      quest: t("faq.q2"),
      ans: t("faq.a2"),
    },
    {
      quest: t("faq.q3"),
      ans: t("faq.a3"),
    },
    {
      quest: t("faq.q4"),
      ans: t("faq.a4"),
    },
    {
      quest: t("faq.q5"),
      ans: t("faq.a5"),
    },
  ];
  return (
    <div className="hero-section-father-3 new">
      <div className="faq-container">
        <div className="faq-children-container">
          <div className="faq-child1">
            <div className="feature-description-title">
              <h1>
                <span className="highlighted">{t("faq.title")}</span>
              </h1>
            </div>
            <div className="dev-section-image">
              <img src={dev} alt="dev tools" />
            </div>
          </div>
          <div className="faq-child2">
            <div className="question-container">
              <div className="questions">
                <Accordions quest={quests} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
