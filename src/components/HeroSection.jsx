// import search from "../assets/icons/search.svg";
import React from "react";
import home from "../assets/home1.png";
// import banner from "../assets/banner.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import Presale from "./Presale";
// import { ReactComponent as YouTubeIcon } from "../assets/icons/youtube.svg";
// import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
// import hero from "../assets/hero.svg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const fbanners = [f1, f2, f3, f4, f5, f6];
  const { t } = useTranslation();

  return (
    <div id="#" className="hero-section-father">
      <div className="hero-section-container">
        <div className="hero-info-wrapper">
          <div className="hero-info-text">
            <h1>$dedPool</h1>
            {/* <p className="hero-info-description">{t("home.description")}</p> */}
            <div className="hero-two-columns-container">
              <p className="hero-info-caption">
                ❝ {t("home.caption")}
                <p className="hero-info-caption1">{t("home.caption1")} ❞</p>
                <p className="hero-info-dedpool">- Dedpool</p>
              </p>
              <img className="home-icon" src={home} alt="home-icon" />
            </div>
            <div className="white-paper-section">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1vYZHvxoeFGexaE7vh8DNInqQec6tetlp/view?usp=sharing"
              >
                <button className="white-paper-btn">
                  {t("home.whitepaper")}
                </button>
              </a>
            </div>
            {/* <div className="search-container">
            <div className="search-input-wrapper">
              <img className="search" src={search} alt="search" />
              <input
                className="search-input"
                placeholder="Search 5000+ tokens across 9 Chains..."
              ></input>
            </div>
            <button className="search-btn primary">
              <span className="start-swapping">Start Swapping</span>
            </button>
          </div> */}
          </div>
        </div>

        {/* Web3 container */}
        <div className="swap-token">
          {/* <img className="hero-img" src={hero} alt="blockchain" /> */}
          <div className="swap-token-container">
            {/* <Presale /> */}
            <p>Presale Launching Soon!</p>
          </div>
        </div>
      </div>
      {/* <p className="feature-text">{t("home.featuredIn")}</p>
      <div className="image-gallery-container">
        {fbanners.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div> */}
    </div>
  );
};

export default HeroSection;
