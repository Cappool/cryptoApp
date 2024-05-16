// import search from "../assets/icons/search.svg";
import React from "react";
import home from "../assets/home1.png";
import psale from "../assets/psale.png";
// import banner from "../assets/banner.png";
// import f1 from "../assets/f1.png";
// import f2 from "../assets/f2.png";
// import f3 from "../assets/f3.png";
// import f4 from "../assets/f4.png";
// import f5 from "../assets/f5.png";
// import f6 from "../assets/f6.png";
import Presale from "./Presale";
// import { ReactComponent as YouTubeIcon } from "../assets/icons/youtube.svg";
// import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
// import hero from "../assets/hero.svg";
import { useTranslation } from "react-i18next";
import Timer from "./Timer.jsx";

const HeroSection = () => {
  // const fbanners = [f1, f2, f3, f4, f5, f6];
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
                href="https://drive.google.com/file/d/1cyhQ6aWE0eUg8tL1S2hgGZdOJfN5EoOW/view?usp=drive_link"
              >
                <button className="white-paper-btn">
                  {t("home.whitepaper")}
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <div>
          <div>
            <img className="home-icon1" src={home} alt="home-icon1" />
          </div>
          <div>
            <BuyBotton />
          </div>
        </div> */}
        {/* Web3 container */}
        <div className="swap-token">
          <div className="swap-token-container">
            {/* <Presale /> */}
            <PresaleTimer />
            {/* <p>Presale Launching Soon!</p> */}
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

const BuyBotton = () => {
  const { t } = useTranslation();
  const handleClick = () => {
    window.open("https://twitter.com/dedpoolcoin", "_blank");
  };

  return (
    <div>
      <button className="presale-button" onClick={handleClick}>
        {/* Buy $DEDPOOL */}
        <div>
          <img
            className="psale-icon"
            src={psale}
            alt="psale-icon"
            onClick={handleClick}
          />
        </div>
      </button>
    </div>
  );
};

const PresaleTimer = () => {
  return (
    <div className="presale">
      <div className="timer">
        <div className="presale-timer-description">PRESALE STARTS IN</div>
        <Timer targetTimestamp="1716542892" />
      </div>
    </div>
  );
};

export default HeroSection;
