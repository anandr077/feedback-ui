import { FeedbackContainer, OverAllCommentTitle } from './style';
import TextField from '../TextField';
import EditableText from './EditableText';
import { updateFeedback } from '../../service';

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

  function showOverallComment() {
    if (pageMode === 'REVIEW' ) {
      return <EditableText initialValue={overallComment?.comment} onSave={onSave(overallComment)}></EditableText>;
    }
    if (pageMode === 'DRAFT' ) {
      return <></>;
    }
    return <div>{overallComment?.comment}</div>
  }
  
  const onSave = (overallComment) => (newCommentText) => {
    if (overallComment === null || overallComment === undefined) {
      return handleOverAllFeedback(question.serialNumber, newCommentText);
    }
    return updateOverAllFeedback(
      overallComment.id, newCommentText
    );
  }
  return (
    <FeedbackContainer>
      <OverAllCommentTitle>
        Overall comment
      </OverAllCommentTitle>
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


export default OverallFeedback;
