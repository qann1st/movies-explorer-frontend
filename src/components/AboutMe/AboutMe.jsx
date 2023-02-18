import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div id="student" className="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__about">
        <h3 className="student__name">Владислав</h3>
        <p className="student__name_description">Фронтенд-разработчик, 14 лет</p>
        <p className="student__description">
          Я родился и живу в Старой Станице, учусь в старостаничной школе. Недавно начал кодить.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
