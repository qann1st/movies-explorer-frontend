import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className="search">
      <form className="search__form" onSubmit={() => console.log(inputValue)}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Фильм"
          className="search__input"
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
