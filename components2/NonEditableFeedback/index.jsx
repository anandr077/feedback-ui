import React, { useRef, useEffect } from 'react';
import AudioPlayer from '../../components/AudioPlayer';
import {
  OverAllCommentTitle,
  FeedbackContainer,
  TextBox,
  HiddenInputBox,
} from './style';

const NonEditableFeedback = ({ textFeedback, audioFeedback }) => {
  const textareaRef = useRef(null);

  const calculateTextareaHeight = () => {
    const lineHeight = 25;
    const minRows = 1;
    const maxRows = 1000;

    const numberOfRows = Math.min(
      Math.max(
        Math.ceil(textareaRef.current?.scrollHeight / lineHeight),
        minRows
      ),
      maxRows
    );

    const newHeight = numberOfRows * lineHeight;
    return `${newHeight}px`;
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = calculateTextareaHeight();
    }
  }, []);

  if (textFeedback || audioFeedback) {
    return (
      <FeedbackContainer>
        {textFeedback ? (
          <div style={{marginBottom: '30px'}}>
            <OverAllCommentTitle>General Feedback</OverAllCommentTitle>
            <TextBox>
              <HiddenInputBox
                style={{ height: calculateTextareaHeight() }}
                ref={textareaRef}
                readOnly={true}
              >
                {textFeedback}
              </HiddenInputBox>
            </TextBox>
          </div>
        ) : (
          <></>
        )}
        {audioFeedback ? (
          <AudioPlayer generatedAudioFeedback={audioFeedback} />
        ) : (
          <></>
        )}
      </FeedbackContainer>
    );
  }
  return <></>;
};

export default NonEditableFeedback;
