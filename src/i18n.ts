import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/en/translationEn.json';
import translationFr from './locales/fr/translationFr.json';
import translationIt from './locales/it/translationIt.json';

const resources = {
  en: { translation: translationEn },
  fr: { translation: translationFr },
  it: { translation: translationIt },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it', // default language
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
