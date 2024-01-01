import { getUserRole } from '../service';

const isTeacher = getUserRole() === 'TEACHER';

const teacherTabs = (first, second, third) => {
  return {
    firstButton: {
      text: 'Home',
      icon: '/icons/homeIconUnselected.png',
      iconSelected: '/icons/homeIconWhite.png',
      selected: first,
      redirect: '#/',
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
      text: 'My Tasks',
      icon: '/icons/taskIconUnselected.png',
      iconSelected: '/icons/taskIconWhite.png',
      selected: first,
      redirect: '#/',
    },
    secondButton: {
      text: 'Get Feedback',
      icon: '/img/messages-unselected.png',
      iconSelected: 'img/messages-selected.png',
      selected: second,
      redirect: '#getFeedback',
    },
    thirdButton: {
      text: 'Give Feedback',
      icon: '/img/people-color.png',
      iconSelected: '/img/people.png',
      selected: third,
      redirect: '#giveFeedback',
    },
  };
};
export const teacherHomeHeaderProps = teacherTabs(true, false, false);
export const assignmentsHeaderProps = teacherTabs(false, true, false);
export const classesHomeHeaderProps = teacherTabs(false, false, true);

// export const homeHeaderProps = studentTabs(true, false, false);
export const giveFeedbackHeaderProps = studentTabs(false, false, true);
export const taskHeaderProps = studentTabs(true, false, false);
export const teacherStudentTaskHeaderProps = () => {
  if (isTeacher) {
    return teacherTabs(false, true, false);
  }
  return studentTabs(false, true, false);
};

export const portfolioHeaderProps = () => {
  if (isTeacher) {
    return teacherTabs(false, true, false);
  }
  return studentTabs(false, true, false);
};

export const documentHeaderProps = (selfDocument) => {
  if (isTeacher) {
    return teacherTabs(false, true, false);
  }
  if (selfDocument) {
    return studentTabs(false, false, true);
  }
  return studentTabs(false, true, false);
};

export const completedHeaderProps = (exemplar) => {
  if (exemplar) {
    return isTeacher
      ? teacherTabs(false, false, false)
      : studentTabs(false, false, false);
  }
  return studentTabs(false, false, true);
};
