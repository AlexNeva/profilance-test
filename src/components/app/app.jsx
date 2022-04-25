import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../header/header';
import News from '../news/news';
import NotFound from '../not-found-page/not-found.jsx';

import './app.scss';
import MainPage from '../main-page/main-page';

const App = () => {

  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App;
