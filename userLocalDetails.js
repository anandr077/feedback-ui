import {
  getClasses,
} from './service';
import { deleteLocalStorage, getLocalStorage, setLocalStorage } from './utils/function';

export const getUserName = () => getLocalStorage('user.name');
export const getUserId = () => getLocalStorage('userId');
export const getUserRole = () => getLocalStorage('role');
export const getAuthToken = () => localStorage.getItem('jwtToken');

export const getCookie = (name) => {
  const cookieValue = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${name}=`));

  return cookieValue ? cookieValue.split('=')[1] : null;
};

export const setCookie = (key, value) => {
  const expiry = 30 * 24 * 60 * 60 * 1000;
  const expires = expiry ? `; expires=${new Date(Date.now() + expiry).toUTCString()}` : '';
  document.cookie = `${key}=${value}${expires}; path=/`;
};

export const setProfileCookies = (profile) => {
  localStorage.setItem('jwtToken', profile.token);

  setLocalStorage('user.name', profile.name);
  setLocalStorage('userId', profile.userId);
  setLocalStorage('role', profile.role);

  if (profile.state !== undefined || profile.year !== undefined) {
    setLocalStorage('state', profile.state);
    setLocalStorage('year', profile.year);
  }

  if (profile.classes) {
    localStorage.setItem('classes', JSON.stringify(profile.classes));
    setLocalStorage('classes', profile.classes);
  }
};

export const deleteCookie = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

export const deleteProfileCookies = () => {
  deleteCookie('user.name');
  deleteCookie('userId');
  deleteCookie('role');
  deleteCookie('state');
  deleteCookie('year');
  deleteCookie('classes');
  deleteLocalStorage('user.name');
  deleteLocalStorage('userId');
  deleteLocalStorage('role');
  deleteLocalStorage('state');
  deleteLocalStorage('year');
  deleteLocalStorage('classes');
};
