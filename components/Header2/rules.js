import { isNullOrEmpty } from "../../utils/arrays";

export const isTeacherWithClass = (role, localClasses) => {
  return role === 'TEACHER' && !isNullOrEmpty(localClasses);
};

export const isTeacherWithoutClass = (role, localClasses) => {
  return role === 'TEACHER' && isNullOrEmpty(localClasses);
};

export const isTeacher = (role) => {
  return role === 'TEACHER';
};
