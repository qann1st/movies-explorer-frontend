import React from 'react';
import AboutProfile from '../components/AboutProfile';
import Header from '../components/Header';

const Profile = ({ onLogout, setCurrentUser }) => {
  return (
    <div>
      <Header isAuth={true} />
      <AboutProfile setCurrentUser={setCurrentUser} onLogout={onLogout} />
    </div>
  );
};

export default Profile;
