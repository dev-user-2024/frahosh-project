import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import en from "./en";
import fa from "./fa";


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      fa: {
        translation: fa
      }
    },
    lng: "fa",
    fallbackLng: "fa",
    interpolation: {
      escapeValue: false 
    }
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

// append app to dom
const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);