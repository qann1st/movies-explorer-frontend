import React from 'react';
import AboutProfile from '../components/AboutProfile';
import Header from '../components/Header';

const Profile = ({ onLogout }) => {
  return (
    <div>
      <Header isAuth={true} />
      <AboutProfile onLogout={onLogout} />
    </div>
  );
};

export default Profile;
