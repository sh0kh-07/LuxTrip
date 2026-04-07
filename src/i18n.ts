import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations directly for simpler setup in this environment
// In a real production app, you might use i18next-http-backend
import ruCommon from '../public/locales/ru/common.json';
import enCommon from '../public/locales/en/common.json';
import uzCommon from '../public/locales/uz/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { common: ruCommon },
      en: { common: enCommon },
      uz: { common: uzCommon },
    },
    fallbackLng: 'ru',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
