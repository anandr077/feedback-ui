import { default as React } from 'react';
import { useParams } from 'react-router-dom';
import {
  startSubmission
} from '../../../service';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




export default function TaskDetail() {
  const { assignmentId } = useParams();
  const history = useHistory();


  startSubmission({ assignmentId: assignmentId }).then((res) => {
    history.push(`/submissions/${res.id}`);
  });
  return <></>
}