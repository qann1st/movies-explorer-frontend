import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <nav className="header__buttons">
        <Link to="signup" className="header__buttons_register">
          Регистрация
        </Link>
        <Link to="signin" className="header__buttons_login">
          Войти
        </Link>
      </nav>
    </header>
  );
};

export default Header;
