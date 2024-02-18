import React from "react";
import { ReactComponent as TelegramIcon } from "../assets/icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
      <div className="footer-row">
        <div className="terms-section">
          <a target="_blank" rel="noreferrer" href="javascript:;">
            <h3>{t("footer.termsofservice")}</h3>
          </a>
          <a target="_blank" rel="noreferrer" href="javascript:;">
            <h3>{t("footer.privacypolicy")}</h3>
          </a>
          <a target="_blank" rel="noreferrer" href="javascript:;">
            <h3>{t("footer.cookies")}</h3>
          </a>
        </div>
        <div className="copyrights-section">
          <div className="copyright-sub">
            <div className="copyright-sub1">
              <h3>$DEDPOOL</h3>
            </div>
            <div className="social-links-container2">
              <div className="social-links again">
                {/* <a
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/dedpoolcoin"
                >
                  <TelegramIcon />
                </a> */}
                <a
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/dedpoolcoin/"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="copyright-statement">
            <div className="copyright">©2023 Dedpool. {t("footer.rights")}</div>

            <div className="copyright-2">
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:contact@dedpoolcoin.com"
              >
                contact@dedpoolcoin.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="disclaimer-section">
        <span className="disclaimer">{t("footer.disclaimer")}</span>
      </div>
    </div>
  );
};

export default Footer;
