import { useLocation } from 'react-router-dom';
import Header from '../Header';
import HeaderSmall from '../HeaderSmall';
import {
  assignmentsHeaderProps,
  classesHomeHeaderProps,
  completedHeaderProps,
  homeHeaderProps,
  portfolioHeaderProps,
  taskHeaderProps,
  teacherHomeHeaderProps,
} from '../../utils/headerProps';
import { getUserRole } from '../../service';

export default function ResponsiveHeader({ isSmallScreen }) {
  const location = useLocation();

  //console.log(location)
  const headerProps = getHeaderProps(location.pathname);

  if (isSmallScreen) {
    return <HeaderSmall headerProps={headerProps} />;
  }
  return <Header headerProps={headerProps} />;
}

const getHeaderProps = (location) => {
  if (location.includes('/settings')) return completedHeaderProps(true);
  if (location.includes('/marking')) return completedHeaderProps(true);
  if (location.includes('/exemplarResponses')) return completedHeaderProps(true);
  if (location.includes('/documents/')) return portfolioHeaderProps();
  if (location.includes('/portfolio')) return portfolioHeaderProps();

  const isTeacher = getUserRole() === 'TEACHER';
  if (isTeacher) {
    if (location.includes('/tasks')) return assignmentsHeaderProps;
    else if (location.includes('/classes')) return classesHomeHeaderProps;
    else if (location.includes('/submissions')) return assignmentsHeaderProps;
    return teacherHomeHeaderProps;
  } else {
    if (location.includes('/portfolio')) return portfolioHeaderProps();
    else if (location.includes('/tasks')) return taskHeaderProps;
    else if (location.includes('/submissions')) return taskHeaderProps;

    return homeHeaderProps;
  }
};
