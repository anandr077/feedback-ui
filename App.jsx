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
import GiveFeedback from './components/GiveFeedback';
import MainPage from './components/MainPage';
import NewDocPage from './components/NewDocRoot';
import withAuth from './components/WithAuth';
import withOnboarding from './components/WithOnboarding';
import Header from './components/Header2';
import MainSidebar from './components/MainSidebar';
import CommentBanks from './components/CommentBanks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isMobileView } from './components/ReactiveRender';
import WelcomeOverlayMobile from './components2/WelcomeOverlayMobile';
import { shouldShowComponent } from './rules';
import { getLocalStorage } from './utils/function';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const role = getUserRole();
  const userName = getUserName();
  userName && (document.title = 'Jeddle - ' + userName);
  const [showFooter, setShowFooter] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  const mobileView = isMobileView();

  useEffect(() => {
    const handleRouteChange = () => {
      const hideFooterRoutes = [
        '#/submissions/',
        '#/documents/',
        '#/documentsReview/',
      ];
      const hideHeaderPaths = [
        '#/submissions/',
        '#/documents/',
        '#/documentsReview/',
        '#/tasks/',
        '#/markingTemplates/',
      ];

      setShowHeader(shouldShowComponent(hideHeaderPaths));
      setShowFooter(shouldShowComponent(hideFooterRoutes));
    };
    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);

    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  const middleware = (c) => withOnboarding(withAuth(c));
  const ProtectedStudentTaskRoot = middleware(StudentTaskRoot);
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

  const ProtectedCommentbanks = middleware(CommentBanks);

  const portfolioClient = new QueryClient();



  const Tasks = ({ role }) => {
    const tasks =
      role === 'TEACHER' ? (
        getLocalStorage('classes') ? (
          <ProtectedTeacherTaskRoot />
        ) : (
          <ProtectedGiveFeedback />
        )
      ) : getLocalStorage('classes') ? (
        <ProtectedStudentTaskRoot />
      ) : (
        <ProtectedDocRoot />
      );

    return <div>{tasks}</div>;
  };
  const Dashboard = ({ role }) => {
    const tasks =
      role === 'TEACHER' ? (
        getLocalStorage('classes') ? (
          <ProtectedTeacherTaskRoot />
        ) : (
          <ProtectedGiveFeedback />
        )
      ) : getLocalStorage('classes') ? (
        <ProtectedStudentTaskRoot />
      ) : (
        <ProtectedDocRoot />
      );

    return <div>{tasks}</div>;
  };
  return (
    <>
      <QueryClientProvider client={portfolioClient}>
        <Router>
          {/* {<ProtectedHeader />} */}
          <div className="app-container">
            <MainSidebar />
            <div className="route-container">
              {showHeader && <Header />}
              {mobileView ? (
                <WelcomeOverlayMobile />
              ) : (
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
                  <Route path="/markingTemplates/rubrics/:markingCriteriaId">
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
              )}

              {showFooter && <ResponsiveFooter />}
            </div>
          </div>
          <ToastContainer
            position="bottom-left"
            autoClose={6000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="dark"
          />
        </Router>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
}
export default App;
