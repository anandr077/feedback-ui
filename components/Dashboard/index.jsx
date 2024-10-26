import React from 'react';
import { isClassData } from '../../rules';
import { useClassData } from '../state/hooks';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Dashboard = ({ role }) => {
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();
  const history = useHistory();

  if (isLoadingclassData) {
    return <h1>loading...</h1>;
  }

  if (role === 'TEACHER') {
    if (isClassData(classData)) {
      history.push('/tasks');
    } else {
      history.push('/giveFeedback');
    }
  } else {
    if (isClassData(classData)) {
      history.push('/tasks');
    } else {
      history.push('/docs');
    }
  }

  return <></>;
};

export default Dashboard;
