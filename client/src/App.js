import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {DataProvider} from "./GlobalState"
import Header from './components/header/Header';
import Pages from "./components/MainPage/Pages"
import Footer from './components/footer/Footer';
import ScrollTop from './components/MainPage/support/ScrollTop';
import ScrollToTop from './components/MainPage/support/ScrollTopPage';
import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icon.min.css'


i18next
.use(HttpApi)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  supportedLngs: ['ru', 'en', 'tr'],
  fallbackLng: 'ru',
  debug: false,
  // Options for language detector
  detection: {
    order: ['cookie', 'htmlTag', 'path'],
    caches: ['cookie'],
  },
  // react: { useSuspense: false },
  backend: {
    loadPath: '../assets/locales/{{lng}}/translation.json',
  },
})



const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
)

function App() {
  
  return (

    <Suspense fallback={loadingMarkup}>
      <React.StrictMode>
        <div className="App">
          <DataProvider>
            <Router>
              <ScrollToTop/>
                <Header/>
                 <Pages/>
                <ScrollTop/>
              <Footer />
            </Router>
          </DataProvider>
        </div>
      </React.StrictMode>
    </Suspense>
  );
}

export default App;
