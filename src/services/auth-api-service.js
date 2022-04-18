import HttpApiService from './http-api-service';

class AuthApiService extends HttpApiService {
  constructor() {
    super();
  }
  createAdmin = () => {
    return this.get('/users/create-admin');
  };

  createAccount = accountData => {
    return this.create('/users/create-account', accountData);
  };

  signIn = accountData => {
    return this.post('/users/signin', accountData);
  };

  addUser = userData => {
    return this.create('/users/add-user', userData);
  };

  changePassword = postData => {
    return this.post('/users/change-password', postData);
  };

  getAllUsers = () => {
    return this.get('/users/all-users');
  };

  deleteUser = userData => {
    return this.post('/users/delete-user', userData);
  };
}

export default AuthApiService;
