import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import AboutProject from '../components/AboutProject/AboutProject';
import Header from '../components/Header/Header';
import Promo from '../components/Promo/Promo';
import Techs from '../components/Techs/Techs';
import Footer from '../components/Footer/Footer';

const Main = () => {
  return (
    <>
      <Header />
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
