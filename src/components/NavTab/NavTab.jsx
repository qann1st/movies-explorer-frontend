import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className="navtab__nav">
      <ul className="navtab__nav_list">
        <li className="navtab__nav_list_element">
          <a className="navtab__nav_list_element_link" href="#about">
            О проекте
          </a>
        </li>
        <li className="navtab__nav_list_element">
          <a className="navtab__nav_list_element_link" href="#technologies">
            Технологии
          </a>
        </li>
        <li className="navtab__nav_list_element">
          <a className="navtab__nav_list_element_link" href="#student">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
