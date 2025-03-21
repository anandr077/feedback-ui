export const shouldShowComponent = (routesToHide) => {
    const currentHash = window.location.hash.split('?')[0];
  return !routesToHide.some((route) => currentHash.startsWith(route));
};

export const isTeacherOnboarding = (showTeacherOnboarding, mobileView, role) =>{
    return role !== "STUDENT" && showTeacherOnboarding && !mobileView
}

export const isShowWelcomeOnboarding = (showWelcomeOnboarding, mobileView, role) =>{
  return role !== "STUDENT" && showWelcomeOnboarding && !mobileView
}

export const isStudentOnboarding = (showStudentOnboarding) =>{
  return showStudentOnboarding
}

