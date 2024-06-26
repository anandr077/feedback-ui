export const isClassItems = (role, localClasses) =>{
    return role === 'TEACHER' && localClasses
  }
  
  export const isTeacherWithoutClass = (role, localClasses) =>{
    return role === 'TEACHER' && localClasses == null
  }

  export const isShowSetting = (role) =>{
    return role === 'TEACHER'
  }
  
  export const isNonSchoolStudent = (role, localClasses) =>{
    return role === 'STUDENT' && localClasses == null
  }

  export const checkIsActive = (location, paths) => {
    const cleanPath = location.pathname.split('?')[0].split('#')[0];
    return paths.some(path => cleanPath === path || cleanPath.startsWith(`${path}/`));
  };