import { default as React, default as React } from 'react';
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
import withAuth from './components/WithAuth';
import PageNotFound from './components/PageNotFound';
import { Redirect } from 'react-router-dom';
import { getUserRole, getUserName } from './service';
import AccountSettingsRoot from './components/Settings/AccountSettingRoot';
import CreateNewMarkingCriteriaRoot from './components/CreateNewMarkingCriteria/CreateNewMarkingCriteriaRoot';
import CreateNewStrengthAndTargets from './components/CreateNewMarkingCriteria/CreateNewStrengthAndTargets';
import PortfolioPage from './components/PortfolioPage';
import { QueryClientProvider, QueryClient } from 'react-query' 

function App() {
  const role = getUserRole();
  const userName = getUserName();
  userName && (document.title = 'Jeddle - ' + userName);

  const ProtectedTeacherDashboard = withAuth(TeacherDashboardRoot);
  const ProtectedStudentDashboard = withAuth(StudentDashboardRoot);
  const ProtectedStudentTaskRoot = withAuth(StudentTaskRoot);
  //const ProtectedCompletedRoot = withAuth(CompletedPage);
  const ProtectedPortfolioRoot = withAuth(PortfolioPage);
  const ProtectedTeacherClassesRoot = withAuth(TeacherClassesRoot);
  const ProtectedTaskDetail = withAuth(TaskDetail);
  const ProtectedCreateAssignment = withAuth(CreateAssignment);
  const ProtectedTeacherTaskRoot = withAuth(TeacherTaskRoot);
  const ProtectedFeedbacksRoot = withAuth(FeedbacksRoot);
  const ProtectedDocumentRoot = withAuth(DocumentRoot);
  const ProtectedExemplarResponsesPage = withAuth(ExemplarResponsesPage);
  const ProtectedMarkingCriteria = withAuth(CreateNewMarkingCriteriaRoot);
  const ProtectedSettings = withAuth(AccountSettingsRoot);
  const ProtectedStrengthAndTarget = withAuth(CreateNewStrengthAndTargets);

  const portfolioClient = new QueryClient()

  const Dashboard = ({ role }) => {
    const dashboard =
      role === 'TEACHER' ? (
        <ProtectedTeacherDashboard />
      ) : (
        <ProtectedStudentDashboard />
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
          <Switch>
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
            <Route path="/portfolio">
              <ProtectedPortfolioRoot />
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
            <Route path="/documents/:id">
              <ProtectedDocumentRoot/>
            </Route>
            <Route path="/404">
              <PageNotFound />
            </Route>
            <Route exact path="/">
              {Dashboard({ role })}
            </Route>
            <Redirect to="/404" />
          </Switch>
        </Router>
      </QueryClientProvider>
    </>
  );
}
export default App;
