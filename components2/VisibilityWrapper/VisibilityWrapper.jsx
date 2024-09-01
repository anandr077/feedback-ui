import React from 'react';
import { useLocation } from 'react-router-dom';
import { checkIsActive } from '../../components/MainSidebar/rules';
import Header from '../../components/Header2';
import ResponsiveFooter from '../../components/ResponsiveFooter';
import { RouteContainer } from './style';
import { shouldShowComponent } from '../../rules';

const VisibilityWrapper = ({ children }) => {
  const location = useLocation();

  const hideFooterRoutes = ['#/submissions', '#/documents', '#/documentsReview'];
  const hideHeaderPaths = [
    '#/submissions',
    '#/documents',
    '#/documentsReview',
    '#/markingTemplates',
    '#/tasks/new'
  ];

  const showHeader = shouldShowComponent(hideHeaderPaths);
  const showFooter = shouldShowComponent(hideFooterRoutes);

  return (
    <div className="route-container">
      {showHeader && <Header />}
      {children}
      {showFooter && <ResponsiveFooter />}
    </div>
  );
};

export default VisibilityWrapper;
