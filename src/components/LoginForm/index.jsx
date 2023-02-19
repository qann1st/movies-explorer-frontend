import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <Link to="/" className="login__logo"></Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <div className="login__inputs">
            <div className="login__input">
              <label className="login__form_label">E-mail</label>
              <input type="text" className="login__form_input" />
            </div>
            <div className="login__input">
              <label className="login__form_label">Пароль</label>
              <input type="text" className="login__form_input" />
            </div>
          </div>
          <button type="submit" className="login__submit">
            Войти
          </button>
        </form>
        <p className="login__text">
          Ещё не зарегистрированы?{' '}
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
