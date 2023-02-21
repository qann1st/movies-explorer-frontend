import React from 'react';
import './MoviesCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { myApi } from '../../utils/Api';
import { useLocation } from 'react-router';

const MoviesCard = ({
  name,
  img,
  duration,
  trailer,
  isMovies,
  owner,
  card,
  savedFilms,
  setSavedFilms,
}) => {
  const user = React.useContext(CurrentUserContext);
  const location = useLocation();

  function handleRemoveClick() {
    location.pathname === '/saved-movies'
      ? myApi.removeMovie(card._id).then(() => {
          setSavedFilms(savedFilms.filter((c) => c._id !== card._id));
        })
      : myApi.removeMovie(savedFilms.find((film) => film.movieId === card.id)._id).then((res) => {
          setSavedFilms(savedFilms.filter((c) => c._id !== res._id));
        });
  }

  function handleSaveClick() {
    card.movieId = card.id;
    myApi.saveMovie(card).then((res) => {
      setSavedFilms([...savedFilms, res]);
    });
  }

  return (
    <li className="card">
      {isMovies ? (
        savedFilms.find((film) => film.nameRU === card.nameRU) === undefined ? (
          <button className="card__btn_save" onClick={handleSaveClick}>
            Сохранить
          </button>
        ) : (
          <div className="card__saved" onClick={handleRemoveClick}></div>
        )
      ) : owner === user._id ? (
        <div className="card__remove" onClick={handleRemoveClick}></div>
      ) : (
        ''
      )}
      <a className="card__link" target="_blank" href={trailer} rel="noreferrer">
        <img className="card__image" src={img} alt={`Картинка из фильма "${name}"`} />
        <div className="card__description">
          <p className="card__name">{name}</p>
          <p className="card__duration">{`${Math.floor(duration / 60)}ч ${duration % 60}м`}</p>
        </div>
      </a>
    </li>
  );
};

export default MoviesCard;
