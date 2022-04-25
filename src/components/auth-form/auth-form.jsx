import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { users } from '../../mok/user';
import './auth-form.scss';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

const AuthForm = ({ setOpen }) => {

  const dispatch = useDispatch();

  const [authError, setAuthError] = useState('');

  const validationMessages = {
    requiredFields: "Обязательное поле",
    lengthError: "Введите не менее 6 и не более 12 символов",
    authError: "Неверные имя пользователя или пароль",
  }

  const initialValues = {
    nickname: '',
    passw: '',
  }

  const validationShema = yup.object().shape({
    nickname: yup.string()
      .required(validationMessages.requiredFields),
    passw: yup.string()
      .min(6, validationMessages.lengthError)
      .max(12, validationMessages.lengthError)
      .required(validationMessages.requiredFields)
  })

  const onSubmitHandler = (obj) => {
    for (let key in users) {
      if (users.hasOwnProperty(key)) {
        const { nickname, passw } = users[key];
        if (obj.nickname === nickname && obj.passw === passw) {
          dispatch(setUser({ ...obj, role: users[key].role }));
          setOpen(false);
          document.querySelector('body').classList.toggle('lock');
        }

        if (obj.nickname !== nickname || obj.passw !== passw) {
          setAuthError(validationMessages.authError);
        }
      }
    }
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
          <form className="auth-popup__form auth-form">
            <div className="auth-form__control form-control">
              <label htmlFor="name">
                Имя
              </label>
              <input
                className="input"
                id="name"
                name="nickname"
                type="text"
                placeholder="Введите имя пользователя"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.nickname && errors.nickname && <span className="auth-form__error">{errors.nickname}</span>}
            </div>
            <div className="auth-form__control form-control">
              <label htmlFor="passw">
                Пароль
              </label>
              <input
                className="input"
                id="passw"
                name="passw"
                type="password"
                placeholder="Введите пароль"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passw}
              />
              {touched.passw && errors.passw && <span className="auth-form__error">{errors.passw}</span>}
            </div>
            <button
              type="submit"
              className="auth-form__btn btn btn--confirm"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
            >
              Отправить
            </button>
            {
              authError
              &&
              <div className="auth-form__auth-error">
                {authError}
              </div>
            }

          </form>
        )
      }
    </Formik>
  )
}

export default AuthForm;
