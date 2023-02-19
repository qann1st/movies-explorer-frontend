import React from 'react';
import { Route, Routes } from 'react-router';
import Main from '../../pages/Main';
import Movies from '../../pages/Movies';
import Profile from '../../pages/Profile';
import SavedMovies from '../../pages/SavedMovies';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import './App.css';
import NotFound from '../../pages/NotFound';
import PrivateOutlet from '../PrivateOutlet/';
import { api } from '../../utils/Api';

function App() {
  const [films, setFilms] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialFilms()
      .then((films) => {
        setFilms(films);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Routes>
      <Route element={<PrivateOutlet isAuth={false} />}>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/saved-movies" element={<SavedMovies />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>
      <Route path="/" element={<Main />}></Route>
      <Route path="/signin" element={<Login />}></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
