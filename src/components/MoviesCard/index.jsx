import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ name, img, duration }) => {
  const [random, setRandom] = React.useState();

  React.useEffect(() => {
    if (Math.floor(Math.random() * 2) === 1) {
      setRandom(true);
    } else {
      setRandom(false);
    }
  }, []);

  return (
    <li className="card">
      <img className="card__image" src={img} alt={`Картинка из фильма "${name}"`} />
      {random ? (
        <button className="card__btn_save">Сохранить</button>
      ) : (
        <div className="card__saved"></div>
      )}
      <div className="card__description">
        <p className="card__name">{name}</p>
        <p className="card__duration">{duration}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
