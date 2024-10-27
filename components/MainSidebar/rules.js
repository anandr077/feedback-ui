import { isNullOrEmpty } from "../../utils/arrays"

export const isClassItems = (role, localClasses) =>{
    return role === 'TEACHER' && !isNullOrEmpty(localClasses)
  }
  
  export const isTeacherWithoutClass = (role, localClasses) =>{
    return role === 'TEACHER' && isNullOrEmpty(localClasses)
  }

  export const isShowSetting = (role) =>{
    return role === 'TEACHER'
  }
  
  export const isNonSchoolStudent = (role, localClasses) =>{
    return role === 'STUDENT' && isNullOrEmpty(localClasses)
  }

  export const checkIsActive = (location, paths) => {
    const cleanPath = location.pathname.split('?')[0].split('#')[0];
    return paths.some(path => cleanPath === path || cleanPath.startsWith(`${path}/`));
  };