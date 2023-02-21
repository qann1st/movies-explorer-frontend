import React from 'react';
import './RegisterForm.css';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

const RegisterForm = ({ onRegister }) => {
  const { values, errors, isValid, onChange } = useForm({
    name: '',
    email: '',
    password: '',
  });

  return (
    <div className="register">
      <div className="register__wrapper">
        <Link to="/" className="register__logo"></Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" onSubmit={(e) => onRegister(e, values)} noValidate>
          <div className="register__inputs">
            <div className="register__input">
              <label className="register__form_label">Имя</label>
              <input
                type="text"
                className="register__form_input"
                onChange={onChange}
                name="name"
                minLength={2}
                maxLength={30}
              />
              <p
                className={`register__form_input_error ${
                  !isValid ? 'register__form_input_error_active' : ''
                }`}>
                {errors.name}
              </p>
            </div>
            <div className="register__input">
              <label className="register__form_label">E-mail</label>
              <input
                type="email"
                className="register__form_input"
                onChange={onChange}
                name="email"
              />
              <p
                className={`register__form_input_error ${
                  !isValid ? 'register__form_input_error_active' : ''
                }`}>
                {errors.email}
              </p>
            </div>
            <div className="register__input">
              <label className="register__form_label">Пароль</label>
              <input
                type="password"
                className="register__form_input"
                onChange={onChange}
                name="password"
                minLength={8}
              />
              <p
                className={`register__form_input_error ${
                  !isValid ? 'register__form_input_error_active' : ''
                }`}>
                {errors.password}
              </p>
            </div>
          </div>
          <button type="submit" className={`register__submit${isValid ? '' : '_disabled'}`}>
            Зарегистрироваться
          </button>
        </form>
        <p className="register__text">
          Уже зарегистрированы?{' '}
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
