import { useState, useEffect } from 'react';
import {
  TextFieldContainer,
  FeedbackBox,
  TextBoxOpen,
  TextArea,
  TextBoxContainer,
  TextBoxFooter,
  Buttons, 
  Button
} from './textFieldStyle';
import AudioRecorder from '../AudioRecorder';

const TextField = ({
  pageMode,
  handleOverAllFeedback,
  submissionId,
  question,
  overallFeedback,
  setOverAllFeedback
}) => {
  const [feedback, setFeedback] = useState('');
  const [showOverAllComment, setShowOverAllComment] = useState(false);
  const [saveText, setSaveText] = useState(false)

  useEffect(() => {
    if(saveText){
        handleOverAllFeedback(feedback, submissionId, question);
        setOverAllFeedback((prev) => ({
            ...prev,
            editFeedback: false,
          }));
        setSaveText(false);
    }
    //console.log('the audio is ', audio, feedback);
  }, [feedback, saveText]);

  return (
    <TextFieldContainer>
      <FeedbackBox showOverAllComment={showOverAllComment}>
        {!showOverAllComment && pageMode === 'REVIEW' && (
          <TextBoxOpen onClick={() => setShowOverAllComment(true)}>
            {overallFeedback.feedbackText}
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
                  <Button type="save" onClick={()=> {
                    setSaveText(true)
                    setShowOverAllComment(false)
                  }}>Save</Button>
                  <Button type="cancel" onClick={()=>{
                    setShowOverAllComment(false)
                    setFeedback('')
                  }}>Cancel</Button>
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
