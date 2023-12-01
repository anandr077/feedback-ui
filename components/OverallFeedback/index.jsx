import { FeedbackContainer, OverAllCommentTitle } from './style';
import TextField from '../TextField';
import EditableText from './EditableText';
import { updateFeedback } from '../../service';
import AudioRecorder from '../AudioRecorder';
import { useState } from 'react';
import NonEditableFeedback from '../../components2/NonEditableFeedback';

const OverallFeedback = ({
  pageMode,
  handleOverAllFeedback,
  submissionId,
  question,
  initialOverallFeedback,
  setInitialOverAllFeedback,
  overallComment,
  updateOverAllFeedback,
}) => {
  const [generatedAudioFeedback, setGeneratedAudioFeedback] = useState(
    overallComment?.audioFeedback || null
  );

  function showOverallComment(pageMode, overallComment) {
    if (pageMode === 'REVIEW') {
      return (
        <EditableText
          initialValue={overallComment?.comment}
          onSave={onSave(overallComment)}
        ></EditableText>
      );
    }
    if (pageMode === 'DRAFT') {
      return <></>;
    }
    return <div>{overallComment?.comment}</div>;
  }

  const onSave = (overallComment) => (newCommentText) => {
    if (overallComment === null || overallComment === undefined) {
      return handleOverAllFeedback(question.serialNumber, newCommentText);
    }
    return updateOverAllFeedback(overallComment.id, newCommentText);
  };

  const handleGeneratedAudioFeedback = (audioFeedback) => {
    setGeneratedAudioFeedback(audioFeedback);
  };

  const audioOverallComment = (pageMode) => {
    if (pageMode === 'REVIEW') {
      return (
        <AudioRecorder
          handleGeneratedAudioFeedback={handleGeneratedAudioFeedback}
        />
      );
    }
    return null;
  };

  if (pageMode === 'CLOSED' || pageMode === 'REVISE') {
    return (
      <NonEditableFeedback
        textFeedback={overallComment?.comment}
        audioFeedback={overallComment?.audioFeedback}
      />
    );
  }

  return (
    <FeedbackContainer>
      <OverAllCommentTitle>Overall comment</OverAllCommentTitle>
      {showOverallComment(pageMode, overallComment)}
      {audioOverallComment(pageMode)}
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
