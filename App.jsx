import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { default as React, default as React, useEffect, useState } from 'react';
import {
  Redirect,
  Route,
  HashRouter as Router,
  Switch,
} from 'react-router-dom';
import TeacherClassesRoot from './components/Classes/TeacherClassesRoot';
import CompletedPage from './components/CompletedPage';
import CreateAssignment from './components/CreateAssignment';
import CreateNewMarkingCriteriaRoot from './components/CreateNewMarkingCriteria/CreateNewMarkingCriteriaRoot';
import CreateNewStrengthAndTargets from './components/CreateNewMarkingCriteria/CreateNewStrengthAndTargets';
import ExemplarResponsesPage from './components/ExemplarResponsesPage';
import FeedbacksRoot from './components/FeedbacksComponents/FeedbacksRoot';
import PageNotFound from './components/PageNotFound';
import ResponsiveFooter from './components/ResponsiveFooter';
import ResponsiveHeader from './components/ResponsiveHeader';
import AccountSettingsRoot from './components/Settings/AccountSettingRoot';
import TaskDetail from './components/StartAssignment/TaskDetail';
import StudentTaskRoot from './components/StudentTaskRoot';
import TeacherTaskRoot from './components/TeacherTasks/TeacherTasksRoot';
import PageNotFound from './components/PageNotFound';
import { Redirect } from 'react-router-dom';
import AccountSettingsRoot from './components/Settings/AccountSettingRoot';
import CreateNewMarkingCriteriaRoot from './components/CreateNewMarkingCriteria/CreateNewMarkingCriteriaRoot';
import CreateNewStrengthAndTargets from './components/CreateNewMarkingCriteria/CreateNewStrengthAndTargets';
import ResponsiveHeader from './components/ResponsiveHeader';
import ResponsiveFooter from './components/ResponsiveFooter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getUserName, getUserRole } from './userLocalDetails';

import Cookies from 'js-cookie';
import GiveFeedback from './components/GiveFeedback';
import MainPage from './components/MainPage';
import NewDocPage from './components/NewDocRoot';
import withAuth from './components/WithAuth';
import withOnboarding from './components/WithOnboarding';

import SnackbarContext from './components/SnackbarContext';
import { Snackbar } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Header from './components/Header2';
import MainSidebar from './components/MainSidebar';
import MarkingTemplateStrengthsTargets from './components/MarkingTemplateStrengthsTargets';
import MarkingTemplateRubrics from './components/MarkingTemplateRubrics';
import CommentBanks from './components/CommentBanks';

function App() {
  const role = getUserRole();
  const userName = getUserName();
  userName && (document.title = 'Jeddle - ' + userName);
  const [showFooter, setShowFooter] = useState(true);
  const { snackbarOpen, snackbarMessage, snackbarLink, closeSnackbar } =
    React.useContext(SnackbarContext);

  const linkButton = snackbarLink ? (
    <Button
      color="secondary"
      style={{ color: 'white' }}
      size="small"
      onClick={() => {
        window.location.href = snackbarLink;
        closeSnackbar();
      }}
    >
      View
    </Button>
  ) : (
    <></>
  );

  const action = (
    <React.Fragment>
      {linkButton}
      <IconButton
        size="small"
        aria-label="close"
        style={{ color: 'white' }}
        onClick={closeSnackbar}
      >
        <CloseIcon fontSize="small" style={{ color: 'white' }} />
      </IconButton>
    </React.Fragment>
  );

  useEffect(() => {
    const handleRouteChange = () => {
      const currentHash = window.location.hash.split('?')[0];
      const hideFooterRoutes = [
        '#/submissions/',
        '#/documents/',
        '#/documentsReview/',
      ];
      const shouldShowFooter = !hideFooterRoutes.some((route) =>
        currentHash.startsWith(route)
      );
      setShowFooter(shouldShowFooter);
    };
    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);

    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  const middleware = (c) => withOnboarding(withAuth(c));
  const ProtectedStudentTaskRoot = middleware(StudentTaskRoot);
  //const ProtectedCompletedRoot = middleware(CompletedPage);
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
  const ProtectedMarkingTemplateStrengthsTargets = middleware(
    MarkingTemplateStrengthsTargets
  );
  const ProtectedMarkingTemplateRubrics = middleware(MarkingTemplateRubrics);
  const ProtectedCommentbanks = middleware(CommentBanks);

  const portfolioClient = new QueryClient();

  const Dashboard = ({ role }) => {
    const dashboard =
      role === 'TEACHER' ? (
      Cookies.get('classes') ? (
        <ProtectedTeacherTaskRoot />
      ) : (
        <ProtectedGiveFeedback />
      )
    ) : (
      Cookies.get('classes') ? (
        <ProtectedStudentTaskRoot />
      ) : (
        <ProtectedDocRoot />
      )
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
          {/* {<ProtectedHeader />} */}
          <Header />
          <div className="app-container">
            <MainSidebar />
            <div className="route-container">
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
                <Route path="/sharedresponses">
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
                <Route path="/markingTemplate/strengthAndTargets">
                  <ProtectedMarkingTemplateStrengthsTargets />
                </Route>
                <Route path="/markingTemplate/rubrics">
                  <ProtectedMarkingTemplateRubrics />
                </Route>
                <Route path="/commentbanks">
                  <ProtectedCommentbanks />
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
            </div>
          </div>
          <Snackbar
            open={snackbarOpen}
            message={snackbarMessage}
            onClose={closeSnackbar}
            autoHideDuration={6000}
            action={action}
          />
        </Router>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
}
export default App;
