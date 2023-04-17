import TaskCardContainer from "../../TaskCardContainer";
import Frame13135 from "../Frame13135";

export const createModelResponsesFrames = (modelResponses) => {
  return (
    <TaskCardContainer allTasks={modelResponses} />
    // <>
    //   {modelResponses.map((modelResponse, index) => {
    //     return <Cards2 modelResponse={modelResponse} />;
    //   })}
    // </>
  );
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
