import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addArticle } from '../../store/articlesSlice';
import { setActive } from '../../store/popupSlice';
import './add-article.scss';

const AddArticle = () => {

  const dispatch = useDispatch();

  const validationMessages = {
    requiredFields: "Обязательное поле",
    titleLengthError: "Введите не менее 6 символов",
    articleLengthError: "Введите не менее 120 символов",
  }

  const initialValues = {
    title: '',
    body: '',
  }

  const validationShema = yup.object().shape({
    title: yup.string()
      .min(6, validationMessages.titleLengthError)
      .required(validationMessages.requiredFields),
    body: yup.string()
      .min(120, validationMessages.articleLengthError)
      .required(validationMessages.requiredFields)
  })

  const onSubmitHandler = (obj) => {
    dispatch(addArticle(obj));
    dispatch(setActive('create-article'));
  }

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      onSubmit={values => onSubmitHandler(values)}
      validationSchema={validationShema}
    >
      {
        ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <form className="add-article">
            <div className="add-article__control form-control">
              <label htmlFor="title">
                Название статьи
              </label>
              <input
                className="input"
                id="title"
                name="title"
                type="text"
                placeholder="Введите название статьи"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {touched.title && errors.title && <span className="add-article__error">{errors.title}</span>}
            </div>
            <div className="add-article__control form-control">
              <label htmlFor="body">
                Содержание статьи
              </label>
              <textarea
                className="textarea"
                id="body"
                name="body"
                type="text"
                placeholder="Введите содержание статьи"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
              />
              {touched.body && errors.body && <span className="add-article__error">{errors.body}</span>}
            </div>
            <button
              type="submit"
              className="add-article__btn btn btn--confirm"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
            >
              Отправить
            </button>
          </form>
        )
      }

    </Formik>

  )
}

export default AddArticle;
