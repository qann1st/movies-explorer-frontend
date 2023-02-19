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
      baseUrl: 'http://localhost:3050/',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const token = localStorage.getItem('jwt');
    if (token) {
      this.setToken('Bearer ' + token);
    }
  }

  setToken(token) {
    if (!this._options.headers) this._options.headers = {};
    this._options.headers.authorization = token;
  }

  removeToken() {
    if (this._options?.headers?.authorization) {
      delete this._options?.headers?.authorization;
    }
  }

  newUser(email, password) {
    return this._fetch('signup', 'POST', { password: password, email: email });
  }

  loginUser(email, password) {
    return this._fetch('signin', 'POST', { password: password, email: email });
  }

  authUser() {
    return this._fetch('users/me', 'GET');
  }
}

export const authApi = new MyApi();
export const api = new DataApi();
