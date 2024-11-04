import { isNullOrEmpty } from "./utils/arrays";

export const shouldShowComponent = (routesToHide) => {
    const currentHash = window.location.hash.split('?')[0];
  return !routesToHide.some((route) => currentHash.startsWith(route));
};

export const isTeacherWithoutClass = (role, localClasses) => {
  return role === 'TEACHER' && isNullOrEmpty(localClasses);
};

