import React from 'react';
import './AboutProfile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const AboutProfile = ({ onLogout }) => {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="profile">
      <h1 className="profile__name">{`Привет, ${currentUser?.name}!`}</h1>
      <ul className="profile__about">
        <li className="profile__about_element">
          Имя <p className="profile__about_element_text">{currentUser?.name}</p>
        </li>
        <li className="profile__about_element">
          E-mail <p className="profile__about_element_text">{currentUser?.email}</p>
        </li>
      </ul>
      <div className="profile__buttons">
        <button className="profile__edit">Редактировать</button>
        <button className="profile__exit" onClick={onLogout}>
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
};

export default AboutProfile;
