import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

const LoginForm = ({ onLogin }) => {
  const { values, errors, isValid, onChange } = useForm({
    email: '',
    password: '',
  });

  return (
    <div className="login">
      <div className="login__wrapper">
        <Link to="/" className="login__logo"></Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit={(e) => onLogin(e, values)} noValidate>
          <div className="login__inputs">
            <div className="login__input">
              <label className="login__form_label">E-mail</label>
              <input
                type="email"
                className="login__form_input"
                onChange={onChange}
                value={values.email}
                name="email"
              />
              <p
                className={`login__form_input_error ${
                  !isValid ? 'login__form_input_error_active' : ''
                }`}>
                {errors.email}
              </p>
            </div>
            <div className="login__input">
              <label className="login__form_label">Пароль</label>
              <input
                type="password"
                className="login__form_input"
                onChange={onChange}
                value={values.password}
                name="password"
                minLength={8}
              />
              <p
                className={`login__form_input_error ${
                  !isValid ? 'login__form_input_error_active' : ''
                }`}>
                {errors.password}
              </p>
            </div>
          </div>
          <button
            type="submit"
            className={`login__submit${isValid ? '' : '_disabled'}`}
            disabled={isValid ? false : true}>
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
