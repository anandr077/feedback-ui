import { default as React, default as React, useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import TeacherClassesRoot from './components/Classes/TeacherClassesRoot';
import CompletedPage from './components/CompletedPage';
import CreateAssignment from './components/CreateAssignment';
import ExemplarResponsesPage from './components/ExemplarResponsesPage';
import FeedbacksRoot from './components/FeedbacksComponents/FeedbacksRoot';
import DocumentRoot from './components/FeedbacksComponents/DocumentRoot';
import TaskDetail from './components/StartAssignment/TaskDetail';
import StudentDashboardRoot from './components/StudentDashBoardRoot';
import StudentTaskRoot from './components/StudentTaskRoot';
import TeacherDashboardRoot from './components/TeacherDashboard/TeacherDashboardRoot';
import TeacherTaskRoot from './components/TeacherTasks/TeacherTasksRoot';
import PageNotFound from './components/PageNotFound';
import { Redirect } from 'react-router-dom';
import { getUserRole, getUserName } from './userLocalDetails';
import AccountSettingsRoot from './components/Settings/AccountSettingRoot';
import CreateNewMarkingCriteriaRoot from './components/CreateNewMarkingCriteria/CreateNewMarkingCriteriaRoot';
import CreateNewStrengthAndTargets from './components/CreateNewMarkingCriteria/CreateNewStrengthAndTargets';
import PortfolioPage from './components/PortfolioPage';
import ResponsiveHeader from './components/ResponsiveHeader';
import ResponsiveFooter from './components/ResponsiveFooter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GiveFeedback from './components/GiveFeedback';
import Cookies from 'js-cookie';
import withOnboarding from './components/WithOnboarding';
import withAuth from './components/WithAuth';
import NewDocPage from './components/NewDocRoot';
import MainPage from './components/MainPage';
import CompletedRoot from './components/Completed/CompletedRoot';

function App() {
  const role = getUserRole();
  const userName = getUserName();
  userName && (document.title = 'Jeddle - ' + userName);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => {
      const currentHash = window.location.hash.split('?')[0];
      const hideFooterRoutes = [
        '#/submissions/', 
        '#/documents/'
      ];
      const shouldShowFooter = !hideFooterRoutes.some(route => currentHash.startsWith(route));
      setShowFooter(shouldShowFooter);
    };
    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);

    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  const middleware = (c) => withOnboarding(withAuth(c));
  const ProtectedTeacherDashboard = middleware(TeacherDashboardRoot);
  const ProtectedStudentDashboard = middleware(StudentDashboardRoot);
  const ProtectedStudentTaskRoot = middleware(StudentTaskRoot);
  //const ProtectedCompletedRoot = middleware(CompletedPage);
  const ProtectedPortfolioRoot = middleware(PortfolioPage);
  const ProtectedTeacherClassesRoot = middleware(TeacherClassesRoot);
  const ProtectedTaskDetail = middleware(TaskDetail);
  const ProtectedCreateAssignment = middleware(CreateAssignment);
  const ProtectedTeacherTaskRoot = middleware(TeacherTaskRoot);
  const ProtectedFeedbacksRoot = middleware(FeedbacksRoot);
  const ProtectedDocumentRoot = middleware(FeedbacksRoot);
  const ProtectedExemplarResponsesPage = middleware(ExemplarResponsesPage);
  const ProtectedMarkingCriteria = middleware(CreateNewMarkingCriteriaRoot);
  const ProtectedSettings = middleware(AccountSettingsRoot);
  const ProtectedHeader = middleware(ResponsiveHeader);
  const ProtectedStrengthAndTarget = middleware(CreateNewStrengthAndTargets);

  const ProtectedGiveFeedback = middleware(GiveFeedback);
  const ProtectedDocRoot = middleware(NewDocPage);
  const ProtectedCompletedRoot = middleware(CompletedPage);

  const portfolioClient = new QueryClient();


  const Dashboard = ({ role }) => {
    const dashboard =
      role === 'TEACHER' ? (
        <ProtectedTeacherTaskRoot />
      ) : (
        Cookies.get('classes') ? <ProtectedStudentTaskRoot /> : <ProtectedDocRoot />
      );
    return <div>{dashboard}</div>;
  };

  const Tasks = ({ role }) => {
    const tasks =
      role === 'TEACHER' ? (
        <ProtectedTeacherTaskRoot />
      ) : (
        <ProtectedStudentTaskRoot />
      );
    return <div>{tasks}</div>;
  };
  return (
    <>
      <QueryClientProvider client={portfolioClient}>
        <Router>
          {<ProtectedHeader />}
          <Switch>
            <Route path="/docs">
              <ProtectedDocRoot />
            </Route>
            <Route path="/main">
              <MainPage />
            </Route>
            <Route path="/settings">
              <ProtectedSettings />
            </Route>
            <Route path="/markingTemplates/rubrics/new">
              <ProtectedMarkingCriteria />
            </Route>
            <Route path="/markingCriterias/rubrics/:markingCriteriaId">
              <ProtectedMarkingCriteria />
            </Route>
            <Route path="/markingTemplates/strengths-and-targets/:markingMethodologyId">
              <ProtectedStrengthAndTarget />
            </Route>
            <Route path="/getFeedback">
              <ProtectedDocRoot />
            </Route>
            <Route path="/giveFeedback">
              <ProtectedGiveFeedback />
            </Route>
            <Route path="/completed">
              <ProtectedCompletedRoot />
            </Route>
            <Route path="/feedbackHistory">
              <ProtectedGiveFeedback />
            </Route>
            <Route path="/classes/:classIdFromUrl?">
              <ProtectedTeacherClassesRoot />
            </Route>
            <Route path="/tasks/:assignmentId/start">
              <ProtectedTaskDetail />
            </Route>
            <Route path="/tasks/:assignmentId">
              <ProtectedCreateAssignment />
            </Route>
            <Route path="/tasks">{Tasks({ role })}</Route>
            <Route path="/exemplarResponses">
              <ProtectedExemplarResponsesPage />
            </Route>
            <Route path="/submissions/:id">
              <ProtectedFeedbacksRoot isAssignmentPage={false} />
            </Route>
            <Route path="/docs">
              <ProtectedDocumentRoot />
            </Route>
            <Route path="/documents/:id">
              <ProtectedDocumentRoot />
            </Route>
            <Route path="/documentsReview/:id">
              <ProtectedDocumentRoot />
            </Route>

            <Route path="/404">
              <PageNotFound />
            </Route>
            <Route exact path="/">
              {Dashboard({ role })}
            </Route>
            <Redirect to="/404" />
          </Switch>
          {showFooter && <ResponsiveFooter />}
        </Router>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
}
export default App;
