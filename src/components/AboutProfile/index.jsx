import React from 'react';
import './AboutProfile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { myApi } from '../../utils/Api';

const AboutProfile = ({ onLogout, setCurrentUser }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    setName(currentUser?.name + '');
    setEmail(currentUser?.email + '');
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    myApi.editProfile({ name, email }).then((res) => {
      setCurrentUser({ _id: currentUser._id, name, email });
      setIsEdit(false);
    });
  }

  return (
    <div className="profile">
      <h1 className="profile__name">{`Привет, ${currentUser?.name}!`}</h1>
      <ul className="profile__about">
        {isEdit ? (
          <>
            <li className="profile__about_element">
              Имя
              <input
                className="profile__about_element_input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </li>
            <li className="profile__about_element">
              E-mail
              <input
                className="profile__about_element_input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <li className="profile__about_element">
              Имя <p className="profile__about_element_text">{currentUser?.name}</p>
            </li>
            <li className="profile__about_element">
              E-mail <p className="profile__about_element_text">{currentUser?.email}</p>
            </li>
          </form>
        )}
      </ul>
      <div className="profile__buttons">
        {isEdit ? (
          <button className="profile__edit" onClick={(e) => handleSubmit(e)}>
            Сохранить
          </button>
        ) : (
          <button className="profile__edit" onClick={() => setIsEdit(!isEdit)}>
            Редактировать
          </button>
        )}
        <button className="profile__exit" onClick={onLogout}>
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
};

export default AboutProfile;
