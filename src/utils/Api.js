class Api {
  constructor({ baseUrl, ...options }) {
    this._baseUrl = baseUrl;
    this._options = options;
  }

  async _fetch(path, method = 'GET', body) {
    const opt = { ...this._options, method };
    if (body)
      if (typeof body === 'string') opt.body = body;
      else opt.body = JSON.stringify(body);

    const response = await fetch(this._baseUrl + path, opt);
    const json = await response.json();

    if (response.ok) return json;

    throw new Error(json.message);
  }
}

class DataApi extends Api {
  constructor() {
    super({
      baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getInitialFilms() {
    return this._fetch('/');
  }
}

class MyApi extends Api {
  constructor() {
    super({
      baseUrl: 'http://api.movies.qann1st.site/',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  }

  deleteCookie() {
    return this._fetch('logout', 'POST');
  }

  getSavedMovies() {
    return this._fetch('movies');
  }

  removeMovie(id) {
    return this._fetch('movies/' + id, 'DELETE');
  }

  editProfile(body) {
    return this._fetch('users/me', 'PATCH', body);
  }

  saveMovie(body) {
    return this._fetch('movies', 'POST', body);
  }

  newUser(body) {
    return this._fetch('signup', 'POST', body);
  }

  loginUser(body) {
    return this._fetch('signin', 'POST', body);
  }

  authUser() {
    return this._fetch('users/me');
  }
}

export const myApi = new MyApi();
export const api = new DataApi();
