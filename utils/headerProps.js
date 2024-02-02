import { getUserRole } from '../userLocalDetails';
import Cookies from 'js-cookie';
import homeSelected from '../static/img/HomeSelected.svg';
import homeUnselected from '../static/img/homeUnselected.svg';
import getFeedbackselected from '../static/img/getFeedbackselected.svg';
import getFeedbackUnselected from '../static/img/getFeedbackunselected.svg';
import giveFeedbackselected from '../static/img/giveFeedbackselected.svg';
import giveFeedbackUnselected from '../static/img/giveFeedbackunselected.svg';

const isTeacher = getUserRole() === 'TEACHER';

const teacherTabs = (first, second) => {
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
    // thirdButton: {
    //   text: 'Classes',
    //   icon: '/icons/classesUnselected.png',
    //   iconSelected: '/icons/classesWhite.png',
    //   selected: third,
    //   redirect: '#classes',
    // },
  };
};

let studentTabs;

if (Cookies.get('classes')) {
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

//export const teacherHomeHeaderProps = teacherTabs(true, false);
export const assignmentsHeaderProps = teacherTabs(true, false);
export const classesHomeHeaderProps = teacherTabs(false, true);

// export const homeHeaderProps = studentTabs(true, false, false);
export const giveFeedbackHeaderProps = Cookies.get('classes')
  ? studentTabs(false, false, true)
  : studentTabs(false, true);
export const taskHeaderProps = studentTabs(true, false, false);
export const teacherStudentTaskHeaderProps = () => {
  if (isTeacher) {
    return teacherTabs(true, false);
  }
  return Cookies.get('classes')
    ? studentTabs(false, false, true)
    : studentTabs(false, true);
};

export const docsHeaderProps = () => {
  if (isTeacher) {
    return teacherTabs(true, false);
  }
  return Cookies.get('classes')
    ? studentTabs(false, true, false)
    : studentTabs(true, false);
};

export const documentHeaderProps = (selfDocument) => {
  if (isTeacher) {
    return teacherTabs(true, false);
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
      ? teacherTabs(false, false)
      : Cookies.get('classes')
      ? studentTabs(false, false, false)
      : studentTabs(false, false);
  }
  return Cookies.get('classes')
    ? studentTabs(false, false, true)
    : studentTabs(false, true);
};
