import { default as React, default as React, useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CreateAssignment from "./components/CreateAssignment";
import StudentDashboardRoot from "./components/StudentDashBoardRoot";
import StudentTaskRoot from "./components/StudentTaskRoot";
import TaskDetail from "./components/StartAssignment/TaskDetail";
import FeedbacksRoot from "./components/FeedbacksComponents/FeedbacksRoot";
import TeacherDashboardRoot from "./components/TeacherDashboard/TeacherDashboardRoot";
import { getProfile, getUserRole, setProfileCookies } from "./service";
import TeacherTaskRoot from "./components/TeacherTasks/TeacherTasksRoot";
import CompletedRoot from "./components/Completed/CompletedRoot";
import TeacherClassesRoot from "./components/Classes/TeacherClassesRoot";
import Callback from "./components/Callback";
import ScreenPopup from "./components/ScreenPopup";
import Loader from "./components/Loader";
import { useLocation } from "react-router-dom";
import { exchangeCodeForToken } from "./service";
import withAuth from "./components/WithAuth";
function App() {
  // const [showPopup, setShowPopup] = React.useState(false);
  const [dismissable, setDismissable] = React.useState(false);
  const [popupMessage, setPopupMessage] = React.useState();
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const urlSearchParams = new URLSearchParams(window.location.search);
  //   const code = urlSearchParams.get("code");
  //   const role = getUserRole();

  //   if (code && role === null) {
  //     exchangeCodeForToken(code)
  //       .then((response) => {
  //         localStorage.setItem("jwtToken", response.jwttoken);
  //         getProfile().then((result) => {
  //           if (result) {
  //             setProfileCookies(result);
  //             setIsLoading(false);
  //           }
  //         });
  //       })
  //       .catch((e) => {});
  //   } else {
  //     if (code) {
  //       window.location.href = "/#/";
  //     }
  //     setIsLoading(false);
  //   }
  // }, []);
  // if (isLoading) {
  //   return <Loader />;
  // }
  const role = getUserRole();
  
  const ProtectedTeacherDashboard = withAuth(TeacherDashboardRoot);
  const ProtectedStudentDashboard = withAuth(StudentDashboardRoot);
  const ProtectedStudentTaskRoot = withAuth(StudentTaskRoot);
  const ProtectedCompletedRoot = withAuth(CompletedRoot);
  const ProtectedTeacherClassesRoot = withAuth(TeacherClassesRoot);
  const ProtectedTaskDetail = withAuth(TaskDetail);
  const ProtectedCreateAssignment = withAuth(CreateAssignment);
  const ProtectedTeacherTaskRoot = withAuth(TeacherTaskRoot);
  const ProtectedFeedbacksRoot = withAuth(FeedbacksRoot);
  // const protectedStudentDashboard = withAuth(<StudentDashboardRoot {...popupMethods} />)
  const Dashboard = ({ role, ...popupMethods }) => {
    const dashboard = role === "TEACHER" ? (
      <ProtectedTeacherDashboard {...popupMethods} />
    ) : (
      <ProtectedStudentDashboard {...popupMethods} />
    );
  
    return (
      <div>
        {dashboard}
      </div>
    );
  };
  return (
    <Router>
      <Switch>
        {/* <Route path="/callback">
          <Callback />
        </Route> */}
        <Route path="/tasks">
          <>
          (<ProtectedStudentTaskRoot />)
          </>
        </Route>
        <Route path="/completed">
        (<ProtectedCompletedRoot />)
        </Route>
        <Route path="/classes">
          <ProtectedTeacherClassesRoot />
         
        </Route>
        <Route path="/classes/:classId">
        (<ProtectedTeacherClassesRoot />)
        </Route>
        <Route path="/assignments/:assignmentId/start">
        (<ProtectedTaskDetail />)
        </Route>
        <Route path="/assignments/:assignmentId">
        <ProtectedCreateAssignment />
        </Route>
        <Route path="/assignments">
        (<ProtectedTeacherTaskRoot />)
        </Route>
        <Route path="/submissions/:id">
        (<ProtectedFeedbacksRoot isAssignmentPage={false} />)
        </Route>
        <Route path="/">
        {Dashboard}
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
