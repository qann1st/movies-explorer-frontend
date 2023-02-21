import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MoviesCardList from '../components/MoviesCardList';
import SearchForm from '../components/SearchForm';

const Movies = ({
  inputValue,
  setSearchValue,
  setFilteredFilms,
  films,
  filteredFilms,
  savedFilms,
  setSavedFilms,
  searchValue,
}) => {
  return (
    <>
      <div>
        <Header isAuth={true} />
        <div className="wrapper">
          <SearchForm
            films={films}
            setFilteredFilms={setFilteredFilms}
            setSearchValue={setSearchValue}
            filteredFilms={filteredFilms}
          />
          <MoviesCardList
            films={films}
            filteredFilms={filteredFilms}
            isMovies={true}
            inputValue={inputValue}
            savedFilms={savedFilms}
            setSavedFilms={setSavedFilms}
            searchValue={searchValue}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
