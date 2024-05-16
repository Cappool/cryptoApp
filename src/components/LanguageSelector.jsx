// LanguageSelector.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setDropdownOpen(false);
    window.location.reload();
  };

  return (
    <div className="language-selector">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {i18n.language.toUpperCase()}
        <span className="down-arrow">&#9662;</span>
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <button onClick={() => changeLanguage("arabic")}>arabic</button>
          <button onClick={() => changeLanguage("bulgarian")}>bulgarian</button>
          <button onClick={() => changeLanguage("english")}>english</button>
          <button onClick={() => changeLanguage("chinese_s")}>
            chinese
            <br />
            (simplified)
          </button>
          <button onClick={() => changeLanguage("chinese_t")}>
            chinese
            <br />
            (traditional)
          </button>
          <button onClick={() => changeLanguage("czech")}>czech</button>
          <button onClick={() => changeLanguage("dutch")}>dutch</button>
          <button onClick={() => changeLanguage("french")}>french</button>
          <button onClick={() => changeLanguage("german")}>german</button>
          <button onClick={() => changeLanguage("greek")}>greek</button>
          <button onClick={() => changeLanguage("hungarian")}>hungarian</button>
          <button onClick={() => changeLanguage("indonesian")}>
            indonesian
          </button>
          <button onClick={() => changeLanguage("italian")}>italian</button>
          <button onClick={() => changeLanguage("korean")}>korean</button>
          <button onClick={() => changeLanguage("polish")}>polish</button>
          <button onClick={() => changeLanguage("portugese")}>portugese</button>
          <button onClick={() => changeLanguage("romanian")}>romanian</button>
          <button onClick={() => changeLanguage("russian")}>russian</button>
          <button onClick={() => changeLanguage("slovak")}>slovak</button>
          <button onClick={() => changeLanguage("spanish")}>spanish</button>
          <button onClick={() => changeLanguage("thai")}>thai</button>
          <button onClick={() => changeLanguage("vietnamese")}>
            vietnamese
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
