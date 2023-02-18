import React from 'react';
import './AboutMe.css';
import photo from '../../images/people.jpg';

const AboutMe = () => {
  return (
    <div id="student" className="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__about">
        <img className="student__photo" src={photo} alt="Фото студента" />

        <div className="student__info">
          <h3 className="student__name">Владислав</h3>
          <p className="student__name_description">Фронтенд-разработчик, 14 лет</p>
          <p className="student__description">
            Я родился и живу в Каменске-Шахтинском, учусь в школе. Я люблю играть в компьютерные
            игры. Недавно начал кодить.
          </p>
          <a
            className="student__link"
            target="_blank"
            href="https://github.com/qann1st"
            rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <div className="student__portfolio">
        <h3 className="student__portfolio_title">Портфолио</h3>
        <ul className="student__portfolio_list">
          <a
            className="student__portfolio_list_link"
            target="_blank"
            href="https://github.com/qann1st/how-to-learn"
            rel="noreferrer">
            <li className="student__portfolio_list_element">
              Статичный сайт <div className="student__portfolio_list_element_link"></div>
            </li>
          </a>
          <a
            className="student__portfolio_list_link"
            target="_blank"
            href="https://github.com/qann1st/russian-travel"
            rel="noreferrer">
            <li className="student__portfolio_list_element">
              Адаптивный сайт <div className="student__portfolio_list_element_link"></div>
            </li>
          </a>
          <a
            className="student__portfolio_list_link"
            target="_blank"
            href="https://github.com/qann1st/mesto"
            rel="noreferrer">
            <li className="student__portfolio_list_element">
              Одностраничное приложение <div className="student__portfolio_list_element_link"></div>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
