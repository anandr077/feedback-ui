import { Avatar } from "@boringer-avatars/react";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import { React } from "react";

export function extractStudents(tasksResult) {
  return tasksResult.map((task) => {
    return {
      name: task.studentName,
      src: (
        <Avatar
          title={false}
          size={25}
          variant="beam"
          name={task.studentName}
          square={false}
        />
      ),
      link: task.link,
    };
  });
}

export function getPageMode(isFeedbackPage, submission) {
  if (!isFeedbackPage && submission.status === "DRAFT") return "DRAFT";
  if (!isFeedbackPage && submission.status === "SUBMITTED") return "CLOSED";
  if (isFeedbackPage && submission.status === "SUBMITTED") return "REVIEW";
  if (!isFeedbackPage && submission.status === "REVIEWED") return "REVISE";
  if (submission.status === "CLOSED") return "CLOSED";
}
