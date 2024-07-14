import { deleteCookie } from '../userLocalDetails';
import Cookies from 'js-cookie';

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  deleteCookie(key);
};

export const getLocalStorage = (key) => {
  const localStorageValue = localStorage.getItem(key);
  if (localStorageValue) {
    return JSON.parse(localStorageValue);
  }
  return Cookies.get(key);
};

export const deleteLocalStorage = (key) => {
  localStorage.removeItem(key);
};
