// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Sample translations
const resources = {
    en: {
        translation: {
            "hello": "Hello, World!"
        }
    },

};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
