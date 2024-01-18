import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import arLang from "./Localization/ar.json"
import enLang from "./Localization/en.json"
import i18n from "i18next"
const resources = {
    en: {
        translation: enLang
    },
    ar: {
        translation: arLang
    }
};


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem("lang"),

        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;