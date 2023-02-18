import React from 'react';
import AboutProject from '../components/AboutProject/AboutProject';
import Header from '../components/Header/Header';
import Promo from '../components/Promo/Promo';
import Techs from '../components/Techs/Techs';

const Main = () => {
  return (
    <>
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
    </>
  );
};

export default Main;
