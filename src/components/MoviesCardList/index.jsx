import React from 'react';
import './MoviesCardList.css';
import film from '../../images/film.png';
import MoviesCard from '../MoviesCard/index';

const MoviesCardList = ({ isMovies = false }) => {
  return (
    <>
      <ul className="cards">
        
      </ul>
      {isMovies ? (
        <div className="cards__pagination">
          <button className="cards__more">Ещё</button>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default MoviesCardList;
