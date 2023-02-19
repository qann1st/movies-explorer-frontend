import React from 'react';
import Header from '../components/Header/index';
import SearchForm from '../components/SearchForm/index';
import Footer from '../components/Footer/index';
import MoviesCardList from '../components/MoviesCardList';

const SavedMovies = () => {
  return (
    <>
      <Header isAuth={true} />
      <div className="wrapper">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList />
        <Footer />
      </div>
    </>
  );
};

export default SavedMovies;
