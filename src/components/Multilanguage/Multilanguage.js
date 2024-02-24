import React from 'react';
import { useTranslation } from 'react-i18next';


const Multilanguage = () => {
    const { t, i18n } = useTranslation();

    // function changeLanguage(lang) {
    //     i18n.changeLanguage(lang);
    // }
    function changeLanguage(lang) {
        if (i18n && typeof i18n.changeLanguage === 'function') {
            i18n.changeLanguage(lang);
        } else {
            console.error("i18n object or changeLanguage function is not available.");
        }
    }


    return (
        <div className="App">
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('fr')}>French</button>
            <h1>{t('hello')}</h1>
        </div>
    );
}

export default Multilanguage;