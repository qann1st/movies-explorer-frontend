import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MoviesCardList from '../components/MoviesCardList';
import Preloader from '../components/Preloader/Preloader';
import SearchForm from '../components/SearchForm';

const Movies = () => {
  return (
    <>
      <Header isAuth={true} />
      <div className="wrapper">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList isMovies={true} />
        <Footer />
      </div>
    </>
  );
};

export default Movies;
