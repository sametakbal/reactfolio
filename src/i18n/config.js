import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const selectedLang = localStorage.getItem('lang');
i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'tr',
        lng: selectedLang ?? 'tr',
        resources: {
            en: {
                translations: require('./locales/en/translations.json'),
            },
            tr: {
                translations: require('./locales/tr/translations.json'),
            },
        },
        ns: ['translations'],
        defaultNS: 'translations',
    })
    .catch((error) => {
        console.log(error);
    });

i18n.languages = ['en', 'tr'];

export default i18n;