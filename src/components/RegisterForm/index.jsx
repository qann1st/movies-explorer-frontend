import React from 'react';
import './RegisterForm.css';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <div className="register">
      <div className="register__wrapper">
        <Link to="/" className="register__logo"></Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <div className="register__inputs">
            <div className="register__input">
              <label className="register__form_label">Имя</label>
              <input type="text" className="register__form_input" />
            </div>
            <div className="register__input">
              <label className="register__form_label">E-mail</label>
              <input type="text" className="register__form_input" />
            </div>
            <div className="register__input">
              <label className="register__form_label">Пароль</label>
              <input type="text" className="register__form_input" />
            </div>
          </div>
          <button type="submit" className="register__submit">
            Зарегистрироваться
          </button>
        </form>
        <p className="register__text">
          Уже зарегистрированы?
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
