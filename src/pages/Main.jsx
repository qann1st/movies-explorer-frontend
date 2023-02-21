import React from 'react';
import AboutMe from '../components/AboutMe';
import AboutProject from '../components/AboutProject';
import Header from '../components/Header';
import Promo from '../components/Promo';
import Techs from '../components/Techs';
import Footer from '../components/Footer';

const Main = ({ isAuth }) => {
  return (
    <>
      <div>
        <Header isAuth={isAuth} />
        <Promo />
        <div className="wrapper">
          <AboutProject />
          <Techs />
          <AboutMe />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
