import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom">
        <p className="footer__copyright">{`© ${new Date().getFullYear()}`}</p>
        <nav className="footer__nav">
          <a
            target="_blank"
            href="https://practicum.yandex.ru/"
            className="footer__nav_link"
            rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a
            target="_blank"
            href="https://github.com/qann1st"
            className="footer__nav_link"
            rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
