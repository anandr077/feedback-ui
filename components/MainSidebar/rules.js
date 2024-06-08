export const isTeacherWithClass = (role, localClasses) =>{
    return role === 'TEACHER' && localClasses
  }
  
  export const isTeacherWithoutClass = (role, localClasses) =>{
    return role === 'TEACHER' && localClasses == null
  }
  
  export const isNonSchoolStudent = (role, localClasses) =>{
    return role === 'STUDENT' && localClasses == null
  }