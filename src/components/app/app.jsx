import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../header/header';
import News from '../news/news';
import Popup from '../popup/popup';
import AuthForm from '../auth-form/auth-form';
import AddArticle from '../add-article/add-article';
import NotFound from '../not-found-page/not-found.jsx';

import './app.scss';
import { useSelector } from 'react-redux';
import MainPage from '../main-page/main-page';

const App = () => {

  const popups = useSelector(state => state.popups.popups);

  const { type } = popups.find(popup => popup.isActive) || '';


  const renderPopup = (type) => {
    switch (type) {
      case 'auth':
        return (
          <Popup title="Форма входа">
            <AuthForm />
          </Popup>
        )
      case 'create-article':
        return (
          <Popup title="Добавьте статью">
            <AddArticle />
          </Popup>
        )
      default:
        return;
    }
  }

  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {
        renderPopup(type)
      }
    </main>
  )
}

export default App;
