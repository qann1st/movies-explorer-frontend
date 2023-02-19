import React from 'react';
import AboutProfile from '../components/AboutProfile';
import Header from '../components/Header';

const Profile = ({ name = 'Виталий' }) => {
  return (
    <>
      <Header isAuth={true} />
      <AboutProfile />
    </>
  );
};

export default Profile;
