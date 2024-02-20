import { default as React } from 'react';
import { useParams } from 'react-router-dom';
import {
  startSubmission
} from '../../../service';



export default function TaskDetail() {
  const { assignmentId } = useParams();


  startSubmission({ assignmentId: assignmentId }).then((res) => {
    window.location.href = '#submissions/' + res.id;
  });
  return <></>
}