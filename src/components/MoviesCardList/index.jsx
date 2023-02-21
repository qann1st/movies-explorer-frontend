import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/index';

const MoviesCardList = ({ filteredFilms, isMovies, savedFilms, setSavedFilms, films }) => {
  const [width, setWidth] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const part = filteredFilms.slice(0, amount);

  function screenWidthChange() {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 500);
  }

  React.useEffect(() => {
    window.addEventListener('resize', screenWidthChange);
    setWidth(window.innerWidth);
    if (width >= 1280) {
      setAmount(12);
    } else if (width >= 768) {
      setAmount(8);
    } else {
      setAmount(5);
    }
    return () => {
      window.removeEventListener('resize', screenWidthChange);
    };
  }, [width]);

  const handleMoreCards = () => {
    if (width >= 1280) {
      setAmount(amount + 3);
    } else if (width >= 768) {
      setAmount(amount + 2);
    } else {
      setAmount(amount + 2);
    }
  };
  return (
    <>
      {isMovies ? (
        filteredFilms.length !== 0 ? (
          <>
            <ul className="cards">
              {part.map((film) => (
                <MoviesCard
                  key={film.id}
                  name={film.nameRU}
                  img={'https://api.nomoreparties.co' + film.image.url}
                  duration={film.duration}
                  trailer={film.trailerLink}
                  isMovies={true}
                  card={film}
                  savedFilms={savedFilms}
                  setSavedFilms={setSavedFilms}
                  films={films}
                />
              ))}
            </ul>
            {amount >= filteredFilms.length ? null : (
              <div className="cards__pagination">
                <button onClick={handleMoreCards} className="cards__more">
                  Ещё
                </button>
              </div>
            )}
          </>
        ) : (
          ''
        )
      ) : filteredFilms.length === 0 ? (
        <ul className="cards">
          {savedFilms.map((film, i) => (
            <MoviesCard
              key={i}
              name={film.nameRU}
              img={film.image}
              duration={film.duration}
              trailer={film.trailerLink}
              isMovies={false}
              owner={film.owner}
              card={film}
              savedFilms={savedFilms}
              setSavedFilms={setSavedFilms}
            />
          ))}
        </ul>
      ) : (
        <>
          <ul className="cards">
            {filteredFilms.map((film, i) => (
              <MoviesCard
                key={i}
                name={film.nameRU}
                img={film.image}
                duration={film.duration}
                trailer={film.trailerLink}
                isMovies={false}
                owner={film.owner}
                card={film}
                savedFilms={savedFilms}
                setSavedFilms={setSavedFilms}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default MoviesCardList;
