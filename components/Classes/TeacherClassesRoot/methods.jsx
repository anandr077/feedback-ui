import TaskCardContainer from '../../TaskCardContainer';
import Frame13135 from '../Frame13135';

export const createModelResponsesFrames = (modelResponses) => {
  return <TaskCardContainer allTasks={modelResponses} exemplar={true} />;
};

export const createStudentsFrames = (students) => {
  return (
    <>
      {students.map((student, index) => {
        return <Frame13135 title={student.name} />;
      })}
    </>
  );
};
