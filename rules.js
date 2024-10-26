export const shouldShowComponent = (routesToHide) => {
    const currentHash = window.location.hash.split('?')[0];
  return !routesToHide.some((route) => currentHash.startsWith(route));
};

export const isClassData = (classData) =>{
  return classData !== null && classData !== undefined && classData.length > 0
}
