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
function App() {
  const [showPopup, setShowPopup] = React.useState(false);
  const [dismissable, setDismissable] = React.useState(false);
  const [popupMessage, setPopupMessage] = React.useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const code = urlSearchParams.get("code");
    const role = getUserRole();

    if (code && role === null) {
      exchangeCodeForToken(code)
        .then((response) => {
          localStorage.setItem("jwtToken", response.jwttoken);
          getProfile().then((result) => {
            if (result) {
              setProfileCookies(result);
              setIsLoading(false);
            }
          });
        })
        .catch((e) => {});
    } else {
      if (code) {
        window.location.href = "/#/";
      }
      setIsLoading(false);
    }
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  const role = getUserRole();
  const popupMethods = {
    setShowPopup,
    setPopupMessage,
    setDismissable,
  };
  const dashboard =
    role === "TEACHER" ? (
      <TeacherDashboardRoot {...popupMethods} />
    ) : (
      <StudentDashboardRoot {...popupMethods} />
    );
  return (
    <Router>
      <Switch>
        <Route path="/callback">
          <Callback />
        </Route>
        <Route path="/tasks">
          <>
            <StudentTaskRoot />
          </>
        </Route>
        <Route path="/completed">
          <CompletedRoot />
        </Route>
        <Route path="/classes">
          <>
            {showPopup && (
              <ScreenPopup
                message={popupMessage}
                setShowPopup={setShowPopup}
                dismissable={dismissable}
                setDismissable={setDismissable}
              />
            )}
            <TeacherClassesRoot />
          </>
        </Route>
        <Route path="/classes/:classId">
          <TeacherClassesRoot />
        </Route>
        <Route path="/assignments/:assignmentId/start">
          <TaskDetail />
        </Route>
        <Route path="/assignments/:assignmentId">
          <>
            {showPopup && (
              <ScreenPopup
                message={popupMessage}
                setShowPopup={setShowPopup}
                dismissable={dismissable}
                setDismissable={setDismissable}
              />
            )}
            <CreateAssignment
              setShowPopup={setShowPopup}
              setPopupMessage={setPopupMessage}
              setDismissable={setDismissable}
            />
          </>
        </Route>
        <Route path="/assignments">
          <TeacherTaskRoot />
        </Route>
        <Route path="/submissions/:id">
          <FeedbacksRoot isAssignmentPage={false} />
        </Route>
        <Route path="/">
          <>
            {showPopup && (
              <ScreenPopup
                message={popupMessage}
                setShowPopup={setShowPopup}
                dismissable={dismissable}
                setDismissable={setDismissable}
              />
            )}
            {dashboard}
          </>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
