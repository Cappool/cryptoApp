import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as TelegramIcon } from "../assets/icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter1.svg";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/headericon.png";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import Popup from "./Popup";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const toggleExpanded = () =>
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  return (
    <>
      <div className="header-container">
        <div className="headerlogo">
          <a href="/">
            <img src={logo} alt="" className="header-logo" />
          </a>
        </div>
        <div className="menu">
          <div className="menu-links">
            <Link to="#" smooth>
              {t("header.home")}
            </Link>
            <Link to="#about" smooth>
              {t("header.about")}
            </Link>
            <Link to="#tokenomics" smooth>
              {t("header.tokenomics")}
            </Link>
            <Link to="#how-to-buy" smooth>
              {t("header.how_to_buy")}
            </Link>
            <Link to="#roadmap" smooth>
              {t("header.roadmap")}
            </Link>
            <Link to="#staking" smooth>
              {t("header.staking")}
            </Link>
          </div>
          <div className="button-container">
            <ButtonUI />
          </div>
          <div className="button-container">
            <LanguageSelector />
          </div>
        </div>
        {/* <div className="wallet-btn">
          <button className="primary">Enter App</button>
        </div> */}

        <div className="social-links-container">
          <div className="social-links">
            <a target="_blank" rel="noreferrer" href="https://t.me/dedpoolcoin">
              <TelegramIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/dedpoolcoin/"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
        <button className="hamburger" onClick={toggleExpanded}>
          <MenuIcon />
        </button>
      </div>
      {isExpanded && (
        <div className="menu-overlay">
          <div className="menu-links">
            <button className="link-button" onClick={toggleExpanded}>
              <Link to="#">{t("header.home")}</Link>
            </button>
            <button className="link-button" onClick={toggleExpanded}>
              <Link to="#about">{t("header.about")}</Link>
            </button>
            <button className="link-button" onClick={toggleExpanded}>
              <Link to="#tokenomics">{t("header.tokenomics")}</Link>
            </button>
            <button className="link-button" onClick={toggleExpanded}>
              <Link to="#how-to-buy">{t("header.how_to_buy")}</Link>
            </button>
            <button className="link-button" onClick={toggleExpanded}>
              <Link to="#roadmap">{t("header.roadmap")}</Link>
            </button>
            <button className="link-button" onClick={toggleExpanded}>
              <Link to="#staking">{t("header.staking")}</Link>
            </button>
            <div className="button-container">
              <ButtonUI />
            </div>
            <div className="button-container">
              <LanguageSelector />
            </div>
          </div>
          <div className="social-links-container2">
            <div className="social-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/dedpoolcoin"
              >
                <TelegramIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/dedpoolcoin/"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// const BuyBotton = () => {
//   const { t } = useTranslation();
//   const handleClick = () => {
//     window.open("https://twitter.com/dedpoolcoin", "_blank");
//   };

//   return (
//     <div>
//       <button className="header-button" onClick={handleClick}>
//         {t("widget.buy_now")}
//       </button>
//     </div>
//   );
// };

const ButtonUI = () => {
  const { address, connector, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [showConnectModal, setShowConnectModal] = useState(false);
  const handleOpenConnectModal = () => setShowConnectModal(true);
  const handleCloseConnectModal = () => setShowConnectModal(false);
  const { t } = useTranslation();

  function formatString(inputString) {
    if (inputString.length > 10) {
      const firstPart = inputString.slice(0, 5);
      const lastPart = inputString.slice(-5);
      const formattedString = `${firstPart}...${lastPart}`;
      return formattedString;
    }
    return inputString;
  }

  if (isConnected) {
    return (
      <button className="header-button" onClick={disconnect}>
        {formatString(address)}
      </button>
    );
  }

  return (
    <div>
      <button className="header-button" onClick={handleOpenConnectModal}>
        {t("widget.buy_now")}
      </button>
      {showConnectModal && <Popup handlefn={handleCloseConnectModal} />}
    </div>
  );
};

export default Header;
