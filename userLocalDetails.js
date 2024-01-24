export const getUserName = () => getCookie('user.name');
export const getUserId = () => getCookie('userId');
export const getUserRole = () => getCookie('role');
export const getAuthToken = () => localStorage.getItem('jwtToken');

export const getCookie = (name) => {
  const cookieValue = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${name}=`));

  return cookieValue ? cookieValue.split('=')[1] : null;
};

export const setProfileCookies = (profile) => {
  localStorage.setItem('jwtToken', profile.token);
  const expiry = 30 * 24 * 60 * 60 * 1000;

  document.cookie = `user.name=${profile.name}; expires=${new Date(Date.now() + expiry).toUTCString()}; path=/`;
  document.cookie = `userId=${profile.userId}; expires=${new Date(Date.now() + expiry).toUTCString()}; path=/`;
  document.cookie = `role=${profile.role}; expires=${new Date(Date.now() + expiry).toUTCString()}; path=/`;

  if (profile.state !== undefined || profile.year !== undefined) {
    document.cookie = `state=${profile.state}; expires=${new Date(Date.now() + expiry).toUTCString()}; path=/`;
    document.cookie = `year=${profile.year}; expires=${new Date(Date.now() + expiry).toUTCString()}; path=/`;
  }

  if (profile.classes) {
    document.cookie = `classes=${JSON.stringify(profile.classes)}; expires=${new Date(Date.now() + expiry).toUTCString()}; path=/`;
  }
};

export const deleteProfileCookies = () => {
  document.cookie = 'user.name=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
  document.cookie = 'userId=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
  document.cookie = 'role=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
  document.cookie = 'state=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
  document.cookie = 'year=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
  document.cookie = 'classes=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
};
