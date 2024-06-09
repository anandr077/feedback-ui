export const isTeacherWithClass = (role, localClasses) =>{
    return role === 'TEACHER' && localClasses;
}

export const isTeacherWithoutClass = (role, localClasses) =>{
    console.log('the local classes is', localClasses)
    return role === 'TEACHER' && localClasses == null;
}