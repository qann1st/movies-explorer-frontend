import React from 'react';
import Header from '../components/Header/index';
import SearchForm from '../components/SearchForm/index';
import Footer from '../components/Footer/index';
import MoviesCardList from '../components/MoviesCardList';

const SavedMovies = ({
  savedMovies,
  setSearchValue,
  setFilteredFilms,
  setSavedFilms,
  filteredFilms,
  searchValue,
}) => {
  return (
    <>
      <div>
        <Header isAuth={true} />
        <div className="wrapper">
          <SearchForm
            films={savedMovies}
            setSearchValue={setSearchValue}
            setFilteredFilms={setFilteredFilms}
            filteredFilms={filteredFilms}
          />
          <MoviesCardList
            filteredFilms={filteredFilms}
            savedFilms={savedMovies}
            setSavedFilms={setSavedFilms}
            searchValue={searchValue}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SavedMovies;
