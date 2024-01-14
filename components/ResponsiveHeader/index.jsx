import { useLocation } from 'react-router-dom';
import Header from '../Header';
import HeaderSmall from '../HeaderSmall';
import {
  assignmentsHeaderProps,
  classesHomeHeaderProps,
  completedHeaderProps,
  giveFeedbackHeaderProps,
  homeHeaderProps,
  portfolioHeaderProps,
  taskHeaderProps,
  teacherHomeHeaderProps,
  teacherStudentTaskHeaderProps,
} from '../../utils/headerProps';
import { getUserRole } from '../../service';
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
  if (location.includes('/exemplarResponses'))
    return completedHeaderProps(true);
  if (location.includes('/documents/')) return portfolioHeaderProps();
  if (location.includes('/documentsReview/')) return teacherStudentTaskHeaderProps();
  if (location.includes('/getFeedback')) return portfolioHeaderProps();
  

  const isTeacher = getUserRole() === 'TEACHER';
  if (isTeacher) {
    if (location.includes('/tasks')) return assignmentsHeaderProps;
    else if (location.includes('/classes')) return classesHomeHeaderProps;
    else if (location.includes('/submissions')) return assignmentsHeaderProps;
    return teacherHomeHeaderProps;
  } else {
    if (location.includes('/getFeedback')) return portfolioHeaderProps();
    else if (location.includes('/giveFeedback')) return giveFeedbackHeaderProps;
    else if (location.includes('/feedbackHistory')) return giveFeedbackHeaderProps;
    else if (location.includes('/submissions')) return taskHeaderProps;

    return Cookies.get('classes') ? taskHeaderProps : portfolioHeaderProps() ;
  }
};
