import React from 'react';
import { useClassData } from '../state/hooks';
import { useNavigate } from 'react-router';
import { isNullOrEmpty } from '../../utils/arrays';
import Loader from '../Loader';

const Dashboard = ({ role }) => {
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();
  const navigate = useNavigate();

  if (isLoadingclassData) {
    return <Loader />;
  }

  if (role === 'TEACHER') {
    if (!isNullOrEmpty(classData)) {
      navigate('/tasks');
    } else {
      navigate('/giveFeedback');
    }
  } else {
    if (!isNullOrEmpty(classData)) {
      navigate('/getFeedback');
    } else {
      navigate('/docs');
    }
  }

  return <></>;
};

export default Dashboard;
