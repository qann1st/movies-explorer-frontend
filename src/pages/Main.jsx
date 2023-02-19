import React from 'react';
import AboutMe from '../components/AboutMe';
import AboutProject from '../components/AboutProject';
import Header from '../components/Header';
import Promo from '../components/Promo';
import Techs from '../components/Techs';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <>
      <Header isAuth={false} />
      <Promo />
      <div className="wrapper">
        <AboutProject />
        <Techs />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
};

export default Main;
