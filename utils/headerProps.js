import { getUserRole } from '../service';
import Cookies from 'js-cookie';

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

let studentTabs;

if (Cookies.get('classes')) {
  studentTabs = (first, second, third) => {
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
} else {
  studentTabs = (first, second) => {
    return {
      firstButton: {
        text: 'Get Feedback',
        icon: '/img/messages-unselected.png',
        iconSelected: 'img/messages-selected.png',
        selected: first,
        redirect: '#/',
      },
      secondButton: {
        text: 'Give Feedback',
        icon: '/img/people-color.png',
        iconSelected: '/img/people.png',
        selected: second,
        redirect: '#giveFeedback',
      },
    };
  };
}

export const teacherHomeHeaderProps = teacherTabs(true, false, false);
export const assignmentsHeaderProps = teacherTabs(false, true, false);
export const classesHomeHeaderProps = teacherTabs(false, false, true);

// export const homeHeaderProps = studentTabs(true, false, false);
export const giveFeedbackHeaderProps = Cookies.get('classes')
  ? studentTabs(false, false, true)
  : studentTabs(false, true);
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
  return Cookies.get('classes')
    ? studentTabs(false, true, false)
    : studentTabs(true, false);
};

export const documentHeaderProps = (selfDocument) => {
  if (isTeacher) {
    return teacherTabs(false, true, false);
  }
  if (selfDocument) {
    return Cookies.get('classes')
      ? studentTabs(false, false, true)
      : studentTabs(false, true);
  }
  return Cookies.get('classes')
    ? studentTabs(false, true, false)
    : studentTabs(true, false);
};

export const completedHeaderProps = (exemplar) => {
  if (exemplar) {
    return isTeacher
      ? teacherTabs(false, false, false)
      : Cookies.get('classes')
      ? studentTabs(false, false, false)
      : studentTabs(false, false);
  }
  return Cookies.get('classes')
    ? studentTabs(false, false, true)
    : studentTabs(false, true);
};
