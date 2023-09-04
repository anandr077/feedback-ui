import { getUserRole } from '../service';

const isTeacher = getUserRole() === 'TEACHER';

const teacherTabs = (first, second, third) => {
  return {
    firstButton: {
      text: 'Home',
      icon: '/icons/homeIconUnselected.png',
      iconSelected: '/icons/homeIconWhite.png',
      selected: first,
      redirect: '/',
    },
    secondButton: {
      text: 'Tasks',
      icon: '/icons/assignmentUnselected.png',
      iconSelected: '/icons/assignmentWhite.png',
      selected: second,
      redirect: '#tasks',
    },
    thirdButton: {
      text: 'Classes',
      icon: '/icons/classesUnselected.png',
      iconSelected: '/icons/classesWhite.png',
      selected: third,
      redirect: '#classes',
    },
  };
};

const studentTabs = (first, second, third) => {
  return {
    firstButton: {
      text: 'Home',
      icon: '/icons/homeIconUnselected.png',
      iconSelected: '/icons/homeIconWhite.png',
      selected: first,
      redirect: '/',
    },
    secondButton: {
      text: 'Tasks',
      icon: '/icons/taskIconUnselected.png',
      iconSelected: '/icons/taskIconWhite.png',
      selected: second,
      redirect: '#tasks',
    },
    thirdButton: {
      text: 'Completed',
      icon: '/icons/submissionIconUnselected.png',
      iconSelected: 'icons/submissionIconWhite.png',
      selected: third,
      redirect: '#completed',
    },
  };
};
export const teacherHomeHeaderProps = teacherTabs(true, false, false);
export const assignmentsHeaderProps = teacherTabs(false, true, false);
export const classesHomeHeaderProps = teacherTabs(false, false, true);

export const homeHeaderProps = studentTabs(true, false, false);
export const taskHeaderProps = studentTabs(false, true, false);
export const completedHeaderProps = (exemplar) => {
  if (exemplar) {
    return isTeacher
      ? teacherTabs(false, false, false)
      : studentTabs(false, false, false);
  }
  return studentTabs(false, false, true);
};
