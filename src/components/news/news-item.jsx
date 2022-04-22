import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmArticle, removeArticle } from '../../store/articlesSlice';
import './news-item.scss';

const NewsItem = ({ createDate, title, body, confirm, id }) => {

  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch();


  const deleteArticle = (id) => {
    dispatch(removeArticle(id));
  }

  const toConfirmArticle = () => {
    dispatch(confirmArticle(id));
  }

  const transformDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const mouth = date.getMonth() + 1;
    const year = date.getFullYear();

    const correctionNum = (num) => {
      if (num < 10) {
        return `0${num}`
      }
      return num;
    }

    const newDate = `${correctionNum(day)}.${correctionNum(mouth)}.${correctionNum(year)}`;

    return newDate;
  }

  const viewBtn = () => {
    if (user.role === 'admin' && !confirm) {
      return (
        <div className="item-news__btns">
          <button
            className="item-news__btn item-news__btn--confirm btn btn--confirm"
            type="button"
            onClick={toConfirmArticle}
          >
            Подтвердить
          </button>
          <button
            className="item-news__btn item-news__btn--delete btn btn--danger"
            type="button"
            onClick={() => deleteArticle(id)}
          >
            Удалить
          </button>
        </div>
      )
    }

    if (user.role === 'admin' && confirm) {
      return (
        <div className="item-news__btns">
          <button
            className="item-news__btn item-news__btn--delete btn btn--danger"
            type="button"
            onClick={() => deleteArticle(id)}
          >
            Удалить
          </button>
        </div>
      )
    }

  }

  return (
    <article className="news__item item-news">
      <h4 className="item-news__title">
        {title}
      </h4>
      <div className="item-news__body">
        {body}
      </div>
      <div className="item-news__footer">
        <div className="item-news__date">
          {transformDate(createDate)}
        </div>
        {
          viewBtn()
        }

      </div>

    </article>
  )
}

export default NewsItem;
