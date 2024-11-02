import { isNullOrEmpty } from "../../utils/arrays";

export const isTeacherWithoutClass = (role, localClasses) => {
  return role === 'TEACHER' && isNullOrEmpty(localClasses);
};

export const isActiveButton = (subLink, pathname, isTeacherNoClass) => {
  return (
    subLink.matchLink === pathname ||
    (isTeacherNoClass &&
      pathname === '/' &&
      subLink.matchLink === '/giveFeedback')
  );
};

export const isJeddAIFeedback = (classLength, jeddAISublink) =>{
  return classLength ? jeddAISublink : null;
}
