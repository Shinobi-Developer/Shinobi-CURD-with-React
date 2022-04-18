import axios from 'axios';
import Cookies from 'js-cookie';

import isEmpty from 'validation/is-empty';
import { config } from 'config';

class HttpApiService {
  constructor() {
    this._baseURL = config.API_URL;
    this._token = Cookies.get(config.ACCESS_TOKEN);
    this.createAxiosInstance();
  }

  defaultOptions = () => {
    let headers = {};
    if (isEmpty(this._token)) {
      headers = {
        Accept: 'application/json',
      };
    } else {
      headers = {
        Accept: 'application/json',
        Authorization: this._token,
      };
    }

    return {
      baseURL: this._baseURL,
      withCredentials: true, // Window Authentification
      headers,
    };
  };

  /**
   * Create instance
   */
  createAxiosInstance() {
    this._axiosInstance = axios.create(this.defaultOptions());
    // this.checkAutorization()

    // Add a request interceptor
    this._axiosInstance.interceptors.request.use(
      config => config,
      error => {
        return Promise.reject(error);
      },
    );

    // Add a response interceptor
    this._axiosInstance.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  get(endpoint, conf = {}) {
    return new Promise((resolve, reject) => {
      this._axiosInstance
        .get(`${endpoint}`, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  create(endpoint, data, conf = {}) {
    return this.post(endpoint, data, conf);
  }

  post(endpoint, data, conf = {}) {
    return new Promise((resolve, reject) => {
      this._axiosInstance
        .post(`${endpoint}`, data, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  update(endpoint, data, conf = {}) {
    return new Promise((resolve, reject) => {
      this._axiosInstance
        .put(`${endpoint}`, data, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  delete(endpoint, id, conf = {}) {
    return new Promise((resolve, reject) => {
      this._axiosInstance
        .delete(`${endpoint}/${id}`, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  deleteFile(endpoint, conf = {}) {
    return new Promise((resolve, reject) => {
      this._axiosInstance
        .delete(`${endpoint}`, conf)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  uploadFile(endpoint, data, conf = {}) {
    return this.post(endpoint, data, conf);
  }

  downloadFile(endpoint) {
    const conf = {
      responseType: 'blob', // important
      timeout: 30000,
    };
    return this.get(endpoint, conf);
  }

  handleSuccess(response) {
    // console.log('handleSuccess' + JSON.stringify(response))
    return response;
  }

  handleError = err => {
    let errorStatement = '';
    if (!err.response) {
      console.log(`Network error: ${err}`);
      errorStatement = err.message;
    } else {
      if (err.response) {
        const { status } = err.response;
        console.log(`HttpService::Error(${status}) : ${err.response.data.message}`);
        errorStatement = err.response.data.message;
      }
    }
    return Promise.reject(errorStatement);
  };

  redirectTo = (document, path) => {
    document.location = path;
  };
}

export default HttpApiService;
