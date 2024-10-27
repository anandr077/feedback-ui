import { getUserRole } from '../userLocalDetails';
import homeSelected from '../static/img/HomeSelected.svg';
import homeUnselected from '../static/img/homeUnselected.svg';
import getFeedbackselected from '../static/img/getFeedbackselected.svg';
import getFeedbackUnselected from '../static/img/getFeedbackunselected.svg';
import giveFeedbackselected from '../static/img/giveFeedbackselected.svg';
import giveFeedbackUnselected from '../static/img/giveFeedbackunselected.svg';
import { isNullOrEmpty } from './arrays';

const isTeacher = getUserRole() === 'TEACHER';

const getTeacherTabs = (classData) =>{
  let teacherTabs;
  if (!isNullOrEmpty(classData)) {
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

  return teacherTabs;
}

export const expertTeacherHomeHeaderProps = (classData) => getTeacherTabs(classData)(true);
export const assignmentsHeaderProps = (classData) => getTeacherTabs(classData)(true, false, false, false);
export const classesHomeHeaderProps = (classData) =>  getTeacherTabs(classData)(false, true, false, false);
export const teacherGetFeedbackHeaderProps = (classData) => getTeacherTabs(classData)(
  false,
  false,
  true,
  false
);
export const teacherGiveFeedbackHeaderProps = (classData) => getTeacherTabs(classData)(
  false,
  false,
  false,
  true
);

const getStudentTabs = (classes) => {
  let studentTabs;

  if (!isNullOrEmpty(classes)) {
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
  return studentTabs
};

// export const homeHeaderProps = studentTabs(true, false, false);
export const giveFeedbackHeaderProps = (classData) => {
  return classData ? getStudentTabs(classData)(false, false, true) : getStudentTabs(classData)(false, true);
};

export const taskHeaderProps = (classData) =>{
  return getStudentTabs(classData)(true, false, false)
};
export const teacherStudentTaskHeaderProps = (classData) => {
  if (isTeacher) {
    return getTeacherTabs(classData)(true, false, false, false);
  }
  return !isNullOrEmpty(classData)
    ? getStudentTabs(classData)(false, false, true)
    : getStudentTabs(classData)(false, true);
};

export const docsHeaderProps = (classData) => {
  if (isTeacher) {
    return getTeacherTabs(classData)(false, false, true, false);
  }
  return !isNullOrEmpty(classData)
    ? getStudentTabs(classData)(false, true, false)
    : getStudentTabs(classData)(true, false);
};

export const completedHeaderProps = (exemplar, classData) => {
  if (exemplar) {
    return isTeacher
      ? getTeacherTabs(classData)(false, false, false, false)
      : !isNullOrEmpty(classData)
      ? getStudentTabs(classData)(false, false, false)
      : getStudentTabs(classData)(false, false);
  }
  return !isNullOrEmpty(classData)
    ? getStudentTabs(classData)(false, false, true)
    : getStudentTabs(classData)(false, true);
};
