import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <div id="about" className="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__info">
        <div className="about__info_container">
          <h3 className="about__info_title">Дипломный проект включал 5 этапов</h3>
          <p className="about__info_paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div className="about__info_container">
          <h3 className="about__info_title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__info_paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__progressbar">
        <div className="about__progressbar_left">
          <p className="about__progressbar_left_text">1 неделя</p>
          <p className="about__progressbar_left_paragraph">Back-end</p>
        </div>
        <div className="about__progressbar_right">
          <p className="about__progressbar_right_text">4 недели</p>
          <p className="about__progressbar_right_paragraph">Front-end</p>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
