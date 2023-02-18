import React from 'react';
import './Techs.css';

const Techs = () => {
  return (
    <div id="technologies" className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__info">
        <h3 className="techs__info_title">7 технологий</h3>
        <p className="techs__info_paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__info_list">
          <li className="techs__info_list_element">HTML</li>
          <li className="techs__info_list_element">CSS</li>
          <li className="techs__info_list_element">JS</li>
          <li className="techs__info_list_element">React</li>
          <li className="techs__info_list_element">Git</li>
          <li className="techs__info_list_element">Express.js</li>
          <li className="techs__info_list_element">mongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default Techs;
