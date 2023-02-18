import { Route, Routes } from 'react-router';
import Main from '../../pages/Main';
import Movies from '../../pages/Movies';
import Profile from '../../pages/Profile';
import SavedMovies from '../../pages/SavedMovies';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import './App.css';
import NotFound from '../../pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
