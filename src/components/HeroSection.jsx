// import search from "../assets/icons/search.svg";
import React from "react";
import home from "../assets/home1.png";
import banner from "../assets/banner.png";
// import { ReactComponent as YouTubeIcon } from "../assets/icons/youtube.svg";
// import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
// import hero from "../assets/hero.svg";

const HeroSection = () => {
  const url =
    "https://drive.google.com/file/d/1Pj4o__Pi9MvctcmtSWQl6La_H5ef5RbX/view?usp=sharing";
  return (
    <div id="#" className="hero-section-father">
      <div className="hero-section-container">
        <div className="hero-info-wrapper">
          <div className="hero-info-text">
            <h1>$dedPool</h1>
            <p className="hero-info-description">
              Meme was always an F-word to me. The memes have had their time,
              its now the DEDPOOL prime!
            </p>
            <div className="white-paper-section">
              {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1Pj4o__Pi9MvctcmtSWQl6La_H5ef5RbX/view?usp=sharing"
              > */}
              <button
                className="white-paper-btn"
                onClick={() => window.open(url, "_blank")}
              >
                <span>WHITEPAPER</span>
              </button>
              {/* </a> */}
              <img className="home-icon" src={home} alt="home-icon" />
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
            <label htmlFor="Enter amount">Presale widget</label>
          </div>
        </div>
      </div>
      <p className="feature-text">As Featured On</p>
      <img src={banner} alt="feature" className="feature-banner" />
    </div>
  );
};

export default HeroSection;
