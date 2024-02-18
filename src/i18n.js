import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import english from "./translations/english";
import spanish from "./translations/spanish";
import arabic from "./translations/arabic";
import bulgarian from "./translations/bulgarian";
import chinese_s from "./translations/chinese-simplified";
import chinese_t from "./translations/chinese-traditional";
import czech from "./translations/czech";
import dutch from "./translations/dutch";
import french from "./translations/french";
import german from "./translations/german";
import greek from "./translations/greek";
import hungarian from "./translations/hungarian";
import indonesian from "./translations/indonesian";
import italian from "./translations/italian";
import korean from "./translations/korean";
import polish from "./translations/polish";
import portugese from "./translations/portugese";
import romanian from "./translations/romanian";
import russian from "./translations/russian";
import slovak from "./translations/slovak";
import thai from "./translations/thai";
import vietnamese from "./translations/vietnamese";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: "true",
    fallbackLng: "english",
    resources: {
      english: english,
      spanish: spanish,
      arabic: arabic,
      bulgarian: bulgarian,
      chinese_s: chinese_s,
      chinese_t: chinese_t,
      czech: czech,
      dutch: dutch,
      french: french,
      german: german,
      greek: greek,
      hungarian: hungarian,
      indonesian: indonesian,
      italian: italian,
      korean: korean,
      polish: polish,
      portugese: portugese,
      romanian: romanian,
      russian: russian,
      slovak: slovak,
      thai: thai,
      vietnamese: vietnamese,
    },
  });
