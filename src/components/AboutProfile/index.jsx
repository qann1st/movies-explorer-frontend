import React from 'react';
import './AboutProfile.css';

const AboutProfile = ({ name = 'Виталий', email = 'pochta@yandex.ru' }) => {
  return (
    <div className="profile">
      <h1 className="profile__name">{`Привет, ${name}!`}</h1>
      <ul className="profile__about">
        <li className="profile__about_element">
          Имя <p className="profile__about_element_text">{name}</p>
        </li>
        <li className="profile__about_element">
          E-mail <p className="profile__about_element_text">{email}</p>
        </li>
      </ul>
      <div className="profile__buttons">
        <button className="profile__edit">Редактировать</button>
        <button className="profile__exit">Выйти за аккаунта</button>
      </div>
    </div>
  );
};

export default AboutProfile;
