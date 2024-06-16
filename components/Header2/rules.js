export const isTeacherWithClass = (role, localClasses) => {
  return role === 'TEACHER' && localClasses;
};

export const isTeacherWithoutClass = (role, localClasses) => {
  return role === 'TEACHER' && localClasses == null;
};

export const isTeacher = (role) => {
  return role === 'TEACHER';
};
