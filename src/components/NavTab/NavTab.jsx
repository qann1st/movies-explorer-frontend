import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className="navtab__nav">
      <ul className="navtab__nav_list">
        <a className="navtab__nav_list_element_link" href="#about">
          <li className="navtab__nav_list_element">О проекте</li>
        </a>
        <a className="navtab__nav_list_element_link" href="#technologies">
          <li className="navtab__nav_list_element">Технологии</li>
        </a>
        <a className="navtab__nav_list_element_link" href="#student">
          <li className="navtab__nav_list_element">Студент</li>
        </a>
      </ul>
    </nav>
  );
};

export default NavTab;
