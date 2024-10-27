import React from 'react';
import { useClassData } from '../state/hooks';
import TeacherTaskRoot from '../TeacherTasks/TeacherTasksRoot';
import GiveFeedback from '../GiveFeedback';
import StudentTaskRoot from '../StudentTaskRoot';
import NewDocPage from '../NewDocRoot';
import { isNullOrEmpty } from '../../utils/arrays';
import Loader from '../Loader';

const Tasks = ({ role }) => {
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();

  if (isLoadingclassData) {
    return <Loader />;
  }

  const tasks =
    role === 'TEACHER' ? (
        !isNullOrEmpty(classData) ? (
        <TeacherTaskRoot />
      ) : (
        <GiveFeedback />
      )
    ) : !isNullOrEmpty(classData) ? (
      <StudentTaskRoot />
    ) : (
      <NewDocPage />
    );

  return tasks;
};

export default Tasks;
