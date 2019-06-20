const DEFAULT_API_URL = 'http://localhost:3000/api';

class ApiService {
  static get = (params) => {
    return fetch(`${DEFAULT_API_URL}/${params.url}`, {
      headers: {
        'user-authenticate-token': params.authToken || ''
      }
    }).then((response) => {
        if (response.status >= 200 && response.status < 400) {
          return response.json();
        } else {
          throw response.json();
        }
      });
  }

  static post = (params) => {
    return fetch(`${DEFAULT_API_URL}/${params.url}`, {
      body: params.body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': params.csrfToken,
        'accept': 'application/json',
        'user-authenticate-token': params.authToken || ''
      }
    }).then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return response.json();
      } else {
        throw response.json();
      }
    })
  }

  static delete = (params) => {
    return fetch(`${DEFAULT_API_URL}/${params.url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': params.csrfToken,
        'accept': 'application/json',
        'user-authenticate-token': params.authToken || ''
      }
    }).then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return response.json();
      } else {
        throw response.json();
      }
    })
  }
}

export default ApiService;
