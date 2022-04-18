import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { config } from 'config';

const useAuth = () => {
  const isTokenValid = token => {
    try {
      const decoded = jwtDecode(token);
      return new Date(decoded.exp * 1000) > new Date();
    } catch {
      return false;
    }
  };

  const login = payload => {
    Cookies.set(config.ACCESS_TOKEN, payload.api_token);
    Cookies.set(config.USER_HANDLE, payload.handle);
  };

  const logout = () => {
    Cookies.remove(config.ACCESS_TOKEN);
    Cookies.remove(config.USER_HANDLE);
  };

  const getToken = () => Cookies.get(config.ACCESS_TOKEN);

  const getUserHandle = () => Cookies.get(config.USER_HANDLE);

  const isAuthenticated = () => {
    const token = getToken();
    const userHandle = getUserHandle();
    if (!token || !userHandle) {
      return false;
    }
    return isTokenValid(token);
  };

  return {
    login,
    logout,
    getToken,
    getUserHandle,
    isAuthenticated,
  };
};

export default useAuth;
