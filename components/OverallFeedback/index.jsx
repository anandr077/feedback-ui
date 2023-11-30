import { FeedbackContainer } from './style';
import TextField from '../TextField';

const OverallFeedback = ({
  pageMode,
  handleOverAllFeedback,
  submissionId,
  question,
  overallFeedback,
  setOverAllFeedback
}) => {
  return (
    <FeedbackContainer>
      <TextField
        pageMode={pageMode}
        handleOverAllFeedback={handleOverAllFeedback}
        submissionId={submissionId}
        question={question}
        overallFeedback={overallFeedback}
        setOverAllFeedback={setOverAllFeedback}
      />
    </FeedbackContainer>
  );
};

export default OverallFeedback;
