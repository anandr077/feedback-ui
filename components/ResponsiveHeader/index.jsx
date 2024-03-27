import { useLocation } from 'react-router-dom';
import Header from '../Header';
import HeaderSmall from '../HeaderSmall';
import {
  assignmentsHeaderProps,
  classesHomeHeaderProps,
  completedHeaderProps,
  giveFeedbackHeaderProps,
  homeHeaderProps,
  docsHeaderProps,
  taskHeaderProps,
  teacherHomeHeaderProps,
  teacherStudentTaskHeaderProps,
  teacherGetFeedbackHeaderProps,
  teacherGiveFeedbackHeaderProps,
} from '../../utils/headerProps';
import { getUserRole } from '../../userLocalDetails';
import { isSmallScreen } from '../ReactiveRender';
import Cookies from 'js-cookie';

export default function ResponsiveHeader() {
  const location = useLocation();

  const headerProps = getHeaderProps(location.pathname);

  if (isSmallScreen()) {
    return <HeaderSmall headerProps={headerProps} />;
  }
  return <Header headerProps={headerProps} />;
}

const getHeaderProps = (location) => {
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
      return teacherGiveFeedbackHeaderProps;
    return assignmentsHeaderProps;
  } else {
    if (location.includes('/getFeedback')) return docsHeaderProps();
    else if (location.includes('/giveFeedback')) return giveFeedbackHeaderProps;
    else if (location.includes('/feedbackHistory'))
      return giveFeedbackHeaderProps;
    else if (location.includes('/submissions')) return taskHeaderProps;

    return Cookies.get('classes') ? taskHeaderProps : docsHeaderProps();
  }
};
