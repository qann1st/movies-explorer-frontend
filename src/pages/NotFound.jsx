import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        flexDirection: 'column',
      }}>
      <h1 style={{ fontWeight: '400', fontSize: '140px', lineHeight: '169px', margin: 0 }}>404</h1>
      <p style={{ margin: 0 }}>Страница не найдена</p>
      <Link
        to="/"
        style={{ position: 'absolute', bottom: '60px', color: '#ff6838', textDecoration: 'none' }}>
        Назад
      </Link>
    </div>
  );
};

export default NotFound;
