import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActive } from '../../store/popupSlice';
import { resetUser } from '../../store/userSlice';
import './header.scss';

const Header = () => {

  const dispatch = useDispatch();

  const { isAuth } = useSelector(state => state.user.user)

  const setActivePopup = (evt, type) => {
    evt.preventDefault();
    document.querySelector('body').classList.add('lock');
    dispatch(setActive(type))
  }

  const clearUser = () => {
    dispatch(resetUser());
  }

  return (
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
                    onClick={(evt) => setActivePopup(evt, 'auth')}
                  >
                    Вход
                  </button>
                )
            }
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
