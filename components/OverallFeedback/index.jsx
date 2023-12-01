import { FeedbackContainer } from './style';
import TextField from '../TextField';

const OverallFeedback = ({
  pageMode,
  handleOverAllFeedback,
  submissionId,
  question,
  initialOverallFeedback,
  setInitialOverAllFeedback,
  overAllFeedbackText,
  updateOverAllFeedback
}) => {
  return (
    <FeedbackContainer>
      <TextField
        pageMode={pageMode}
        handleOverAllFeedback={handleOverAllFeedback}
        submissionId={submissionId}
        question={question}
        initialOverallFeedback={initialOverallFeedback}
        setInitialOverAllFeedback={setInitialOverAllFeedback}
        overAllFeedbackText={overAllFeedbackText}
        updateOverAllFeedback={updateOverAllFeedback}
      />
    </FeedbackContainer>
  );
};

export default OverallFeedback;
