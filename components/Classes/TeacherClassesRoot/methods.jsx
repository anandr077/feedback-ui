import Cards2 from "../Cards2";
import Frame13135 from "../Frame13135";

export const createModelResponsesFrames = (modelResponses) => {
  return (
    <>
      {modelResponses.map((modelResponse, index) => {
        return <Cards2 modelResponse={modelResponse} />;
      })}
    </>
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
