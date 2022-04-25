import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActive } from '../../store/popupSlice';
import NewsItem from './news-item';
import './news.scss';


const News = () => {

  const { isAuth } = useSelector(state => state.user.user);

  const dispatch = useDispatch();

  const setActivePopup = (evt, type) => {
    evt.preventDefault();
    document.querySelector('body').classList.add('lock');
    dispatch(setActive(type))
  }

  const articles = useSelector(state => state.articles.articles);
  const user = useSelector(state => state.user.user)

  const [search, setSearch] = useState('');

  const privateArticles = () => {
    if (!isAuth) {
      return articles.filter(article => article.confirm);
    }

    return articles;
  }

  const filteredArticles = privateArticles().filter(article => article.title.toLowerCase().includes(search.toLocaleLowerCase()));

  const onSearch = (evt) => {
    setSearch(evt.target.value)
  }

  return (
    <section className="news">
      <div className="news__container container">
        <h1 className="news__title">
          Новости
        </h1>
        {
          user.role === 'user'
          &&
          <button
            type="button"
            className="news__add btn btn--confirm"
            onClick={(evt) => setActivePopup(evt, 'create-article')}
          >
            Добавить статью
          </button>
        }

        <input
          className="news__search input"
          type="text"
          placeholder="Поиск статей"
          value={search}
          onChange={onSearch}
        />

        <div className="news__items">
          {
            filteredArticles.map(article => <NewsItem {...article} key={article.id} />)
          }
        </div>
      </div>
    </section>
  )
}

export default News;
