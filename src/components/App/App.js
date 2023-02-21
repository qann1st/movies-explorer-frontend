import React from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Main from '../../pages/Main';
import Movies from '../../pages/Movies';
import Profile from '../../pages/Profile';
import SavedMovies from '../../pages/SavedMovies';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import './App.css';
import NotFound from '../../pages/NotFound';
import PrivateOutlet from '../PrivateOutlet/';
import { api, myApi } from '../../utils/Api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [films, setFilms] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [savedFilms, setSavedFilms] = React.useState([]);
  const [filteredFilms, setFilteredFilms] = React.useState([]);
  const [filteredSavedFilms, setFilteredSavedFilms] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsLoading(true);
    api.getInitialFilms().then((films) => {
      setFilms(films);
    });
    myApi.getSavedMovies().then((movies) => setSavedFilms(movies));
    handleCheck().finally(() => {
      setIsLoading(false);
    });
  }, []);

  function handleLogin(e, body) {
    e.preventDefault();
    myApi.loginUser(body).finally(() => {
      handleCheck().then(() => {
        setIsAuth(true);
        navigate('/movies');
      });
    });
  }

  function handleLogout() {
    myApi.deleteCookie().then(() => {
      setIsAuth(false);
      navigate('/');
    });
  }

  function handleCheck() {
    return myApi
      .authUser()
      .then((currentUser) => {
        if (currentUser !== undefined) {
          setCurrentUser(currentUser);
          setIsAuth(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleRegister(e, body) {
    e.preventDefault();
    const { email, password } = body;
    myApi.newUser(body).then(() => {
      handleLogin(e, { email, password });
    });
  }

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route element={<PrivateOutlet isAuth={isAuth} />}>
          <Route
            path="/movies"
            element={
              <Movies
                setFilteredFilms={setFilteredFilms}
                films={films}
                filteredFilms={filteredFilms}
                inputValue={searchValue}
                setSearchValue={setSearchValue}
                isAuth={isAuth}
                savedFilms={savedFilms}
                setSavedFilms={setSavedFilms}
                setFilms={setFilms}
              />
            }></Route>
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                savedMovies={savedFilms}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                setFilteredFilms={setFilteredSavedFilms}
                setSavedFilms={setSavedFilms}
                filteredFilms={filteredSavedFilms}
                isAuth={isAuth}
              />
            }></Route>
          <Route
            path="/profile"
            element={<Profile setCurrentUser={setCurrentUser} onLogout={handleLogout} />}></Route>
        </Route>
        <Route path="/" element={<Main isAuth={isAuth} />}></Route>
        <Route path="/signin" element={<Login onLogin={handleLogin} />}></Route>
        <Route path="/signup" element={<Register onRegister={handleRegister} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
