import { useState, useEffect } from 'react';
import {
  TextFieldContainer,
  FeedbackBox,
  TextBoxOpen,
  TextArea,
  TextBoxContainer,
  TextBoxFooter,
  Buttons,
  Button,
} from './textFieldStyle';
import AudioRecorder from '../AudioRecorder';

const TextField = ({
  pageMode,
  handleOverAllFeedback,
  submissionId,
  question,
  initialOverallFeedback,
  setInitialOverAllFeedback,
  overAllFeedbackText,
  updateOverAllFeedback,
}) => {
  const comment = overAllFeedbackText[0];
  const [feedback, setFeedback] = useState(
    overAllFeedbackText !== 0 ? comment.comment : ''
  );
  const [showOverAllComment, setShowOverAllComment] = useState(false);
  const [saveText, setSaveText] = useState(false);
  const [updateFeedback, setUpdateFeedback] = useState(false);

  useEffect(() => {
    if (saveText) {
      handleOverAllFeedback(feedback, submissionId, question);
      setInitialOverAllFeedback((prev) => ({
        ...prev,
        editFeedback: false,
      }));
      setSaveText(false);
    }
    if(updateFeedback){
      updateOverAllFeedback(comment.id, feedback);
      setUpdateFeedback(false);
    }
  }, [feedback, saveText, updateFeedback]);


  return (
    <TextFieldContainer>
      <FeedbackBox showOverAllComment={showOverAllComment}>
        {!showOverAllComment && pageMode === 'REVIEW' && (
          <TextBoxOpen onClick={() => setShowOverAllComment(true)}>
            {overAllFeedbackText !== 0
              ? comment?.comment
              : 'Add General Feedback...'}
          </TextBoxOpen>
        )}
        {showOverAllComment && (
          <TextBoxContainer>
            <TextArea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              readOnly={pageMode === 'REVISE' || pageMode === 'CLOSED'}
              pageMode={pageMode}
              autoFocus
            ></TextArea>
            <TextBoxFooter>
              <Buttons>
                <Button
                  type="save"
                  onClick={() => {
                    if (overAllFeedbackText.length !== 0) {
                      setUpdateFeedback(true);
                    } else {
                      setSaveText(true);
                    }
                    setShowOverAllComment(false);
                  }}
                >
                  {overAllFeedbackText !== 0 ? 'Update' : 'Save'}
                </Button>
                <Button
                  type="cancel"
                  onClick={() => {
                    setShowOverAllComment(false);
                    setFeedback('');
                  }}
                >
                  Cancel
                </Button>
              </Buttons>
              <AudioRecorder pageMode={pageMode} />
            </TextBoxFooter>
          </TextBoxContainer>
        )}
      </FeedbackBox>
    </TextFieldContainer>
  );
};

export default TextField;
