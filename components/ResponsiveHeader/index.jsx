import { useLocation } from 'react-router-dom';
import Header from '../Header';
import HeaderSmall from '../HeaderSmall';
import {
  assignmentsHeaderProps,
  classesHomeHeaderProps,
  completedHeaderProps,
  giveFeedbackHeaderProps,
  docsHeaderProps,
  taskHeaderProps,
  teacherStudentTaskHeaderProps,
  teacherGetFeedbackHeaderProps,
  teacherGiveFeedbackHeaderProps,
  expertTeacherHomeHeaderProps,
} from '../../utils/headerProps';
import { getUserRole } from '../../userLocalDetails';
import { isSmallScreen } from '../ReactiveRender';
import { useClassData } from '../state/hooks';

export default function ResponsiveHeader() {
  const location = useLocation();
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();

  const headerProps = getHeaderProps(location.pathname, classData);

  if (isSmallScreen()) {
    return <HeaderSmall headerProps={headerProps} />;
  }
  return <Header headerProps={headerProps} />;
}

const getHeaderProps = (location, classData) => {
  if (location.includes('/settings')) return completedHeaderProps(true);
  if (location.includes('/marking')) return completedHeaderProps(true);
  if (location.includes('/documents/')) return docsHeaderProps();
  if (location.includes('/documentsReview/'))
    return teacherStudentTaskHeaderProps();
  // if (location.includes('/getFeedback')) return docsHeaderProps();

  const isTeacher = getUserRole() === 'TEACHER';
  if (isTeacher) {
    if (location.includes('/tasks')) return assignmentsHeaderProps;
    else if (location.includes('/classes')) return classesHomeHeaderProps;
    else if (location.includes('/submissions')) return assignmentsHeaderProps;
    else if (location.includes('/getFeedback'))
      return teacherGetFeedbackHeaderProps;
    else if (location.includes('/giveFeedback'))
      return classData
        ? teacherGiveFeedbackHeaderProps
        : expertTeacherHomeHeaderProps;
    else if (location.includes('/feedbackHistory'))
      return classData
        ? teacherGiveFeedbackHeaderProps
        : expertTeacherHomeHeaderProps;
    return assignmentsHeaderProps;
  } else {
    if (location.includes('/getFeedback')) return docsHeaderProps();
    else if (location.includes('/giveFeedback')) return giveFeedbackHeaderProps;
    else if (location.includes('/feedbackHistory'))
      return giveFeedbackHeaderProps;
    else if (location.includes('/submissions')) return taskHeaderProps;

    return classData ? taskHeaderProps : docsHeaderProps();
  }
};
