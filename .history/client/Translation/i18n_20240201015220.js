// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import arTranslations from '../Translation/ar.json';
import frTranslations from '../Translation/fr.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      ar: {
        translation: arTranslations,
      },
      fr: {
        translation: frTranslations,
      },
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
