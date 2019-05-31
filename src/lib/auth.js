import jwtDecode from 'jwt-decode';

export const decodeToken = token => jwtDecode(token);

export const setLocalStorage = (item, value) => localStorage.setItem(item, value);

export const authenticate = () => {
  try {
    const token = localStorage.getItem('qa-token');
    const decode = decodeToken(token);
    return decode;
  } catch (ex) {
    return null;
  }
};
