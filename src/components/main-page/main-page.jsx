import React from 'react';
import { useSelector } from 'react-redux';

const MainPage = () => {

  const { nickname } = useSelector(state => state.user.user)

  return (
    <section className="main-page">
      <div className="main-page__container container">
        <h1>Привет, {nickname ? nickname : "Гость"}!</h1>
      </div>
    </section>

  )
}

export default MainPage;
