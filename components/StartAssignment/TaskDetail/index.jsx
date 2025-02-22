import { default as React } from 'react';
import { useParams } from 'react-router-dom';
import {
  nextSubmission,
  startSubmission
} from '../../../service';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getUserRole } from '../../../userLocalDetails';




export default function TaskDetail() {
  const { assignmentId } = useParams();
  const history = useHistory();

  const role = getUserRole();
  if (role === 'TEACHER') {
    nextSubmission(assignmentId).then((res) => {
      console.log("res " + res)
      if (res !== undefined && res !== null)
        history.push(`/submissions/${res}`);
      else
        history.push(`/tasks/${assignmentId}`);
    }).catch((error) => {
      console.log(error);
    });
  } else {
    startSubmission({ assignmentId: assignmentId }).then((res) => {
      history.push(`/submissions/${res.id}`);
    });
  }
  return <></>
}