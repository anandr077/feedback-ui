import { getUserRole } from '../userLocalDetails';
import Cookies from 'js-cookie';
import homeSelected from '../static/img/HomeSelected.svg';
import homeUnselected from '../static/img/homeUnselected.svg';
import getFeedbackselected from '../static/img/getFeedbackselected.svg';
import getFeedbackUnselected from '../static/img/getFeedbackunselected.svg';
import giveFeedbackselected from '../static/img/giveFeedbackselected.svg';
import giveFeedbackUnselected from '../static/img/giveFeedbackunselected.svg';
import { getLocalStorage } from './function';

const isTeacher = getUserRole() === 'TEACHER';

let teacherTabs;
if (getLocalStorage('classes')) {
  teacherTabs = (first, second, third, fourth) => {
    return {
      firstButton: {
        text: 'Tasks',
        icon: '/icons/assignmentUnselected.png',
        iconSelected: '/icons/assignmentWhite.png',
        selected: first,
        redirect: '#/',
      },
      secondButton: {
        text: 'Classes',
        icon: '/icons/classesUnselected.png',
        iconSelected: '/icons/classesWhite.png',
        selected: second,
        redirect: '#classes',
      },
      thirdButton: {
        text: 'JeddAI',
        icon: '/img/ai.svg',
        iconSelected: '/img/ai.svg',
        selected: third,
        redirect: '#getFeedback',
      },
      fourthButton: {
        text: 'Give Feedback',
        icon: giveFeedbackUnselected,
        iconSelected: giveFeedbackselected,
        selected: fourth,
        redirect: '#giveFeedback',
      },
    };
  };
} else {
  teacherTabs = (fourth) => {
    return {
      fourthButton: {
        text: 'Give Feedback',
        icon: giveFeedbackUnselected,
        iconSelected: giveFeedbackselected,
        selected: fourth,
        redirect: '#/',
      },
    };
  };
}

let studentTabs;

if (getLocalStorage('classes')) {
  studentTabs = (first, second, third) => {
    return {
      firstButton: {
        text: 'My Tasks',
        icon: homeUnselected,
        iconSelected: homeSelected,
        selected: first,
        redirect: '#/',
      },
      secondButton: {
        text: 'Get Feedback',
        icon: getFeedbackUnselected,
        iconSelected: getFeedbackselected,
        selected: second,
        redirect: '#getFeedback',
      },
      thirdButton: {
        text: 'Give Feedback',
        icon: giveFeedbackUnselected,
        iconSelected: giveFeedbackselected,
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
        icon: getFeedbackUnselected,
        iconSelected: getFeedbackselected,
        selected: first,
        redirect: '#/',
      },
      secondButton: {
        text: 'Give Feedback',
        icon: giveFeedbackUnselected,
        iconSelected: giveFeedbackselected,
        selected: second,
        redirect: '#giveFeedback',
      },
    };
  };
}

export const expertTeacherHomeHeaderProps = teacherTabs(true);
export const assignmentsHeaderProps = teacherTabs(true, false, false, false);
export const classesHomeHeaderProps = teacherTabs(false, true, false, false);
export const teacherGetFeedbackHeaderProps = teacherTabs(
  false,
  false,
  true,
  false
);
export const teacherGiveFeedbackHeaderProps = teacherTabs(
  false,
  false,
  false,
  true
);

// export const homeHeaderProps = studentTabs(true, false, false);
export const giveFeedbackHeaderProps = getLocalStorage('classes')
  ? studentTabs(false, false, true)
  : studentTabs(false, true);
export const taskHeaderProps = studentTabs(true, false, false);
export const teacherStudentTaskHeaderProps = () => {
  if (isTeacher) {
    return teacherTabs(true, false, false, false);
  }
  return getLocalStorage('classes')
    ? studentTabs(false, false, true)
    : studentTabs(false, true);
};

export const docsHeaderProps = () => {
  if (isTeacher) {
    return teacherTabs(false, false, true, false);
  }
  return getLocalStorage('classes')
    ? studentTabs(false, true, false)
    : studentTabs(true, false);
};

export const documentHeaderProps = (selfDocument) => {
  if (isTeacher) {
    return teacherTabs(true, false, false, false);
  }
  if (selfDocument) {
    return getLocalStorage('classes')
      ? studentTabs(false, false, true)
      : studentTabs(false, true);
  }
  return getLocalStorage('classes')
    ? studentTabs(false, true, false)
    : studentTabs(true, false);
};

export const completedHeaderProps = (exemplar) => {
  if (exemplar) {
    return isTeacher
      ? teacherTabs(false, false, false, false)
      : getLocalStorage('classes')
      ? studentTabs(false, false, false)
      : studentTabs(false, false);
  }
  return getLocalStorage('classes')
    ? studentTabs(false, false, true)
    : studentTabs(false, true);
};
