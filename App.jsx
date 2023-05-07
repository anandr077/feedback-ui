import { default as React, default as React } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import TeacherClassesRoot from "./components/Classes/TeacherClassesRoot";
import CompletedPage from "./components/CompletedPage";
import CreateAssignment from "./components/CreateAssignment";
import ExemplarResponsesPage from "./components/ExemplarResponsesPage";
import FeedbacksRoot from "./components/FeedbacksComponents/FeedbacksRoot";
import TaskDetail from "./components/StartAssignment/TaskDetail";
import StudentDashboardRoot from "./components/StudentDashBoardRoot";
import StudentTaskRoot from "./components/StudentTaskRoot";
import TeacherDashboardRoot from "./components/TeacherDashboard/TeacherDashboardRoot";
import TeacherTaskRoot from "./components/TeacherTasks/TeacherTasksRoot";
import withAuth from "./components/WithAuth";
import { getUserRole } from "./service";

function App() {

  const role = getUserRole();


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
  const Dashboard = ({role}) => {
    const dashboard = role === "TEACHER" ? 
      <ProtectedTeacherDashboard />
     : 
      <ProtectedStudentDashboard />
    ;
    return (
      <div>
        {dashboard}
      </div>
    );
  };
  return (
    <>
    <Router>
      <Switch>
        {/* <Route path="/callback">
          <Callback />
        </Route> */}
        <Route path="/tasks">
          <>
          <ProtectedStudentTaskRoot />
          </>
        </Route>
        <Route path="/completed">
        <ProtectedCompletedRoot />
        </Route>
        <Route path="/classes">
          <ProtectedTeacherClassesRoot />
         
        </Route>
        <Route path="/classes/:classId">
        <ProtectedTeacherClassesRoot />
        </Route>
        <Route path="/assignments/:assignmentId/start">
        <ProtectedTaskDetail />
        </Route>
        <Route path="/assignments/:assignmentId">
        <ProtectedCreateAssignment />
        </Route>
        <Route path="/assignments">
        <ProtectedTeacherTaskRoot />
        </Route>
        <Route path="/exemplarResponses">
        <ProtectedExemplarResponsesPage />
        </Route>
        <Route path="/submissions/:id">
        <ProtectedFeedbacksRoot isAssignmentPage={false} />
        </Route>
        <Route path="/">
        {Dashboard({role})}
        </Route>
      </Switch>
    </Router>
    
    </>
  );
}
export default App;
