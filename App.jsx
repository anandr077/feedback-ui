import { default as React, default as React } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import TeacherClassesRoot from './components/Classes/TeacherClassesRoot';
import CompletedPage from './components/CompletedPage';
import CreateAssignment from './components/CreateAssignment';
import ExemplarResponsesPage from './components/ExemplarResponsesPage';
import FeedbacksRoot from './components/FeedbacksComponents/FeedbacksRoot';
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

function App() {
  const role = getUserRole();
  const userName = getUserName();
  userName && (document.title = 'Jeddle - ' + userName);

  const ProtectedTeacherDashboard = withAuth(TeacherDashboardRoot);
  const ProtectedStudentDashboard = withAuth(StudentDashboardRoot);
  const ProtectedStudentTaskRoot = withAuth(StudentTaskRoot);
  const ProtectedCompletedRoot = withAuth(CompletedPage);
  const ProtectedTeacherClassesRoot = withAuth(TeacherClassesRoot);
  const ProtectedTaskDetail = withAuth(TaskDetail);
  const ProtectedCreateAssignment = withAuth(CreateAssignment);
  const ProtectedTeacherTaskRoot = withAuth(TeacherTaskRoot);
  const ProtectedFeedbacksRoot = withAuth(FeedbacksRoot);
  const ProtectedExemplarResponsesPage = withAuth(ExemplarResponsesPage);
  const ProtectedMarkingCriteria = withAuth(CreateNewMarkingCriteriaRoot);
  const ProtectedSettings = withAuth(AccountSettingsRoot);
  const ProtectedStrengthAndTarget = withAuth(CreateNewStrengthAndTargets);

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
      <Router>
        <Switch>
          <Route path="/settings">
            <ProtectedSettings />
          </Route>
          
          <Route path="/markingMethodologies/strengths-and-targets/new">
            <ProtectedStrengthAndTarget />
          </Route>
          <Route path="/markingCriterias/:markingCriteriaId">
            <ProtectedMarkingCriteria />
          </Route>
          <Route path="/markingMethodologies/strengths-and-targets/:markingMethodologyId">
            <ProtectedStrengthAndTarget />
          </Route>
          <Route path="/completed">
            <ProtectedCompletedRoot />
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
          <Route path="/404">
            <PageNotFound />
          </Route>
          <Route exact path="/">
            {Dashboard({ role })}
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
}
export default App;
