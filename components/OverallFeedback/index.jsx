import { FeedbackContainer } from './style';
import TextField from '../TextField';
import EditableText from './EditableText';

const OverallFeedback = ({
  pageMode,
  handleOverAllFeedback,
  submissionId,
  question,
  initialOverallFeedback,
  setInitialOverAllFeedback,
  overallComment,
  updateOverAllFeedback
}) => {
  return (
    <FeedbackContainer>
      {showOverallComment(pageMode, overallComment)}
      {/* <TextField
        pageMode={pageMode}
        handleOverAllFeedback={handleOverAllFeedback}
        submissionId={submissionId}
        question={question}
        initialOverallFeedback={initialOverallFeedback}
        setInitialOverAllFeedback={setInitialOverAllFeedback}
        overAllFeedbackText={overAllFeedbackText}
        updateOverAllFeedback={updateOverAllFeedback}
      /> */}
    </FeedbackContainer>
  );

  
};
function showOverallComment(pageMode, overallComment) {
  if (pageMode === 'REVIEW' ) {
    return <EditableText initialValue={overallComment?.comment}></EditableText>;
  }
  if (pageMode === 'DRAFT' ) {
    return <></>;
  }
  return <div>{overallComment?.comment}</div>
}
export default OverallFeedback;
