import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ isAuth }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    if (isClicked) {
      document.body.style = 'overflow: hidden';
    } else {
      document.body.style = '';
    }
  }, [isClicked]);

  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo"></Link>
        {isAuth ? (
          <>
            <nav className="header__nav">
              <NavLink className="header__nav_link" to="/movies">
                Фильмы
              </NavLink>
              <NavLink className="header__nav_link" to="/saved-movies">
                Сохранённые фильмы
              </NavLink>
            </nav>
            <Link className="header__account_link" to="/profile">
              Аккаунт
            </Link>
            <button className="header__btn_menu" onClick={() => setIsClicked(true)}></button>
          </>
        ) : (
          <nav className="header__buttons">
            <Link to="signup" className="header__buttons_register">
              Регистрация
            </Link>
            <Link to="signin" className="header__buttons_login">
              Войти
            </Link>
          </nav>
        )}
      </header>
      <div
        className={`menu__wrapper ${isClicked ? 'menu__wrapper_opened' : ''}`}
        onClick={() => setIsClicked(false)}></div>
      <div className={`menu ${isClicked ? 'menu__opened' : ''}`}>
        <button className="menu__close" onClick={() => setIsClicked(false)}></button>
        <nav className="menu__nav">
          <div className="menu__nav_top">
            <NavLink className="menu__nav_link" to="/">
              Главная
            </NavLink>
            <NavLink className="menu__nav_link" to="/movies">
              Фильмы
            </NavLink>
            <NavLink className="menu__nav_link" to="/saved-movies">
              Сохранённые фильмы
            </NavLink>
          </div>
          <Link className="menu__nav_link" to="/profile">
            Аккаунт
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
