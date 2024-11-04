import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { default as React, default as React } from 'react';
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
import AccountSettingsRoot from './components/Settings/AccountSettingRoot';
import TaskDetail from './components/StartAssignment/TaskDetail';
import PageNotFound from './components/PageNotFound';
import { Redirect } from 'react-router-dom';
import AccountSettingsRoot from './components/Settings/AccountSettingRoot';
import CreateNewMarkingCriteriaRoot from './components/CreateNewMarkingCriteria/CreateNewMarkingCriteriaRoot';
import CreateNewStrengthAndTargets from './components/CreateNewMarkingCriteria/CreateNewStrengthAndTargets';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getUserName, getUserRole } from './userLocalDetails';
import GiveFeedback from './components/GiveFeedback';
import MainPage from './components/MainPage';
import NewDocPage from './components/NewDocRoot';
import withAuth from './components/WithAuth';
import withOnboarding from './components/WithOnboarding';
import MainSidebar from './components/MainSidebar';
import CommentBanks from './components/CommentBanks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isMobileView } from './components/ReactiveRender';
import WelcomeOverlayMobile from './components2/WelcomeOverlayMobile';
import JeddAI from './components/JeddAI';
import VisibilityWrapper from './components2/VisibilityWrapper/VisibilityWrapper';
import { ddRum, handleRedirect } from './service';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';

function App() {
  const role = getUserRole();
  const userName = getUserName();
  userName && (document.title = 'Jeddle - ' + userName);

  const mobileView = isMobileView();

  const middleware = (c) => withOnboarding(withAuth(c));
  const ProtectedTeacherClassesRoot = middleware(TeacherClassesRoot);
  const ProtectedTaskDetail = middleware(TaskDetail);
  const ProtectedCreateAssignment = middleware(CreateAssignment);
  const ProtectedFeedbacksRoot = middleware(FeedbacksRoot);
  const ProtectedDocumentRoot = middleware(FeedbacksRoot);
  const ProtectedExemplarResponsesPage = middleware(ExemplarResponsesPage);
  const ProtectedMarkingCriteria = middleware(CreateNewMarkingCriteriaRoot);
  const ProtectedSettings = middleware(AccountSettingsRoot);
  const ProtectedStrengthAndTarget = middleware(CreateNewStrengthAndTargets);
  const ProtectedDashboard = middleware(Dashboard);
  const ProtectedTasks = middleware(Tasks);
  const ProtectedGiveFeedback = middleware(GiveFeedback);
  const ProtectedDocRoot = middleware(NewDocPage);
  const ProtectedCompletedRoot = middleware(CompletedPage);

  const ProtectedCommentbanks = middleware(CommentBanks);
  const ProtectedJeddAI = middleware(JeddAI);

  const portfolioClient = new QueryClient(
    defaultOptions= {
      queries: {
        retry: (failureCount, error) => {
          // Stop retries if status is 401
          return !(error.status === 401);
        },
        onError: (error) => {
          if (error.status === 401) {
            handleRedirect();
          }
        },
      },
    },
  );

  ddRum();

  return (
    <>
      <QueryClientProvider client={portfolioClient}>
        <Router>
          <div className="app-container">
            <MainSidebar />
            <VisibilityWrapper>
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
                  <Route path="/tasks">
                    <ProtectedTasks role={role} />
                  </Route>
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
                  <Route path="/jeddai">
                    <ProtectedJeddAI />
                  </Route>
                  <Route path="/404">
                    <PageNotFound />
                  </Route>
                  <Route exact path="/">
                    <ProtectedDashboard role={role} />
                  </Route>
                  <Redirect to="/404" />
                </Switch>
              )}
            </VisibilityWrapper>
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
