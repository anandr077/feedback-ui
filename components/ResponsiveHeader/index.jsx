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
import Loader from '../Loader';

export default function ResponsiveHeader() {
  const location = useLocation();
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();

  if(isLoadingclassData){
    return <Loader />
  }

  const headerProps = getHeaderProps(location.pathname, classData);

  if (isSmallScreen()) {
    return <HeaderSmall headerProps={headerProps} />;
  }
  return <Header headerProps={headerProps} />;
}

const getHeaderProps = (location, classData) => {
  if (location.includes('/settings')) return completedHeaderProps(true, classData);
  if (location.includes('/marking')) return completedHeaderProps(true, classData);
  if (location.includes('/documents/')) return docsHeaderProps(classData);
  if (location.includes('/documentsReview/'))
    return teacherStudentTaskHeaderProps(classData);

  const isTeacher = getUserRole() === 'TEACHER';
  if (isTeacher) {
    if (location.includes('/tasks')) return assignmentsHeaderProps(classData);
    else if (location.includes('/classes')) return classesHomeHeaderProps(classData);
    else if (location.includes('/submissions')) return assignmentsHeaderProps(classData);
    else if (location.includes('/getFeedback'))
      return teacherGetFeedbackHeaderProps(classData);
    else if (location.includes('/giveFeedback'))
      return classData
        ? teacherGiveFeedbackHeaderProps(classData)
        : expertTeacherHomeHeaderProps(classData);
    else if (location.includes('/feedbackHistory'))
      return classData
        ? teacherGiveFeedbackHeaderProps(classData)
        : expertTeacherHomeHeaderProps(classData);
    return assignmentsHeaderProps(classData);
  } else {
    if (location.includes('/getFeedback')) return docsHeaderProps(classData);
    else if (location.includes('/giveFeedback')) return giveFeedbackHeaderProps(classData);
    else if (location.includes('/feedbackHistory'))
      return giveFeedbackHeaderProps(classData);
    else if (location.includes('/submissions')) return taskHeaderProps(classData);

    return classData ? taskHeaderProps(classData) : docsHeaderProps(classData);
  }
};
