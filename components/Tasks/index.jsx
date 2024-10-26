import React from 'react';
import { useClassData } from '../state/hooks';
import TeacherTaskRoot from '../TeacherTasks/TeacherTasksRoot';
import GiveFeedback from '../GiveFeedback';
import StudentTaskRoot from '../StudentTaskRoot';
import NewDocPage from '../NewDocRoot';
import { isClassData } from '../../rules';

const Tasks = ({ role }) => {
  const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();

  if (isLoadingclassData) {
    return <h1>loading...</h1>;
  }

  const tasks =
    role === 'TEACHER' ? (
        isClassData(classData) ? (
        <TeacherTaskRoot />
      ) : (
        <GiveFeedback />
      )
    ) : isClassData(classData) ? (
      <StudentTaskRoot />
    ) : (
      <NewDocPage />
    );

  return tasks;
};

export default Tasks;
