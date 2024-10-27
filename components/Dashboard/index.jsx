import React from 'react';
import { useClassData } from '../state/hooks';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { isNullOrEmpty } from '../../utils/arrays';
import Loader from '../Loader';

const Dashboard = ({ role }) => {
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();
  const history = useHistory();

  if (isLoadingclassData) {
    return <Loader />;
  }

  if (role === 'TEACHER') {
    if (!isNullOrEmpty(classData)) {
      history.push('/tasks');
    } else {
      history.push('/giveFeedback');
    }
  } else {
    if (!isNullOrEmpty(classData)) {
      history.push('/tasks');
    } else {
      history.push('/docs');
    }
  }

  return <></>;
};

export default Dashboard;
