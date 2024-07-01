export const isTeacherWithoutClass = (role, localClasses) => {
  return role === 'TEACHER' && localClasses == null;
};

export const isActiveButton = (subLink, pathname, isTeacherNoClass) => {
  return (
    subLink.matchLink === pathname ||
    (isTeacherNoClass &&
      pathname === '/' &&
      subLink.matchLink === '/giveFeedback')
  );
};
