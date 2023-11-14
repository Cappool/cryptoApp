import React from "react";
import { ReactComponent as TelegramIcon } from "../assets/icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-row">
        <div className="terms-section">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1fovtAhi7ghNMWU0nKwS73Xtk_zM43lQG/view?usp=sharing"
          >
            <h3>Terms Of Service</h3>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1gqfegNrrInGUC7WNi8gnZ7buVDUKGU-r/view?usp=sharing"
          >
            <h3>Privacy policy</h3>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1gqfegNrrInGUC7WNi8gnZ7buVDUKGU-r/view?usp=sharing"
          >
            <h3>Cookies</h3>
          </a>
        </div>
        <div className="copyrights-section">
          <div className="copyright-sub">
            <div className="copyright-sub1">
              <h3>$DEDPOOL</h3>
            </div>
            <div className="social-links-container2">
              <div className="social-links again">
                <a
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/dedpoolcoin"
                >
                  <TelegramIcon />
                </a>
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
            <div className="copyright">©2023 Dedpool. All rights reserved</div>

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
        <span className="disclaimer">
          Disclaimer: Cryptocurrencies are volatile and could go down as well as
          up in value. Profits may be subject to capital gains or other taxes
          applicable in your jurisdiction. $dedpool is a speculative token
          created for experimental purposes. $dedpool coin has no association
          with the comic or the movie Deadpool. This token is simply paying
          homage to a hero we all love and recognize.
        </span>
      </div>
    </div>
  );
};

export default Footer;
