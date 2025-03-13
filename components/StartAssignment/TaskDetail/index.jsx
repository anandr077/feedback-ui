import { default as React } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
  nextSubmission,
  startSubmission
} from '../../../service';
import { getUserRole } from '../../../userLocalDetails';




export default function TaskDetail() {
  const { assignmentId } = useParams();
  const navigate = useNavigate();

  const role = getUserRole();
  if (role === 'TEACHER') {
    nextSubmission(assignmentId).then((res) => {
      console.log("res " + res)
      if (res !== undefined && res !== null)
        navigate(`/submissions/${res}`);
      else
        navigate(`/tasks/${assignmentId}`);
    }).catch((error) => {
      console.log(error);
    });
  } else {
    startSubmission({ assignmentId: assignmentId }).then((res) => {
      navigate(`/submissions/${res.id}`);
    });
  }
  return <></>
}