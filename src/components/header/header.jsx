import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetUser } from '../../store/userSlice';
import Popup from '../popup/popup';
import AuthForm from '../auth-form/auth-form';
import './header.scss';

const Header = () => {

  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.user.user);

  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prev => !prev);
    document.querySelector('body').classList.toggle('lock');
  }


  const clearUser = () => {
    dispatch(resetUser());
  }

  return (
    <>
      <header className="header">
        <nav className="header__nav container">
          <ul className="header__links">
            <li className="header__item">
              <Link to="/" className="header__link">Главная</Link>
            </li>
            <li className="header__item">
              <Link to="/news" className="header__link">Новости</Link>
            </li>
            <li className="header__item">
              {
                isAuth
                  ?
                  (
                    <button
                      type="button"
                      className="header__link"
                      onClick={clearUser}
                    >
                      Выйти
                    </button>
                  )
                  :
                  (
                    <button
                      type="button"
                      className="header__link"
                      onClick={toggleOpen}
                    >
                      Вход
                    </button>
                  )
              }
            </li>
          </ul>
        </nav>
      </header>
      <Popup
        title="Форма входа"
        isOpen={isOpen}
        setOpen={setOpen}
      >
        <AuthForm setOpen={setOpen} />
      </Popup>
    </>

  )
}

export default Header;
