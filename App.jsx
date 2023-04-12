import { default as React, default as React, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AssignmentTheory from "./components/AssignmentTheory";
import CreateAssignment from "./components/CreateAssignment";
import StudentDashboardRoot from "./components/StudentDashBoardRoot";
import StudentTaskRoot from "./components/StudentTaskRoot";
import TaskDetail from "./components/StartAssignment/TaskDetail";
import FeedbacksRoot from "./components/FeedbacksComponents/FeedbacksRoot";
import TeacherDashboardRoot from "./components/TeacherDashboard/TeacherDashboardRoot";
import { getUserRole } from "./service";

function App() {
  const role = getUserRole()
  const dashboard = role === "TEACHER" ? <TeacherDashboardRoot/>:<StudentDashboardRoot/>
  return (
    <Router>
      <Switch>
        <Route path="/assignments/new">
          <CreateAssignment />
        </Route>
        <Route path="/tasks">
          <StudentTaskRoot />
        </Route>
        <Route path="/assignments/:assignmentId/start">
          <TaskDetail />
        </Route>
        <Route path="/submissions/:id">
          <FeedbacksRoot isEditable={true} />
        </Route>
        <Route path="/assignments/:assignmentId/start">
          <TaskDetail />
        </Route>
        <Route path="/feedbacks/:id">
          <FeedbacksRoot isEditable={false} />
        </Route>
        <Route path="/">
          {dashboard}
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
