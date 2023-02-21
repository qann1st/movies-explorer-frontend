import React from 'react';
import './SearchForm.css';

const SearchForm = ({ films, setFilteredFilms, setSearchValue }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false);
  const [error, setError] = React.useState('Фильм');

  function getFilteredFilms() {
    if (isChecked) {
      return films.filter((film) => film.duration < 40);
    } else {
      return films.filter((film) => film.duration > 40);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue !== '') {
      setFilteredFilms(
        getFilteredFilms().filter((film) => new RegExp(inputValue).test(film.nameRU)),
      );
      setSearchValue(e.target.value);
      setError('Фильм');
    } else {
      setError('Введите ключевое слово');
    }
  }

  return (
    <div className="search">
      <form className="search__form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder={error}
          className={`search__input ${error === 'Фильм' ? '' : 'search__input_error'}`}
        />
        <button type="submit" className="search__button"></button>
        <div className="search__checkbox">
          <div
            className={`search__checkbox_image${isChecked ? '_checked' : ''}`}
            onClick={() => setIsChecked(!isChecked)}>
            <div className={`search__checkbox_switcher${isChecked ? '_checked' : ''}`}></div>
          </div>
          <label className="search__checkbox_label">Короткометражки</label>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
