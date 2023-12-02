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

  useEffect(() => {
    if (textareaRef.current) {
      const lineHeight = 25;
      const minRows = 1;
      const maxRows = 1000;

      const numberOfRows = Math.min(
        Math.max(
          Math.ceil(textareaRef.current.scrollHeight / lineHeight),
          minRows
        ),
        maxRows
      );

      const newHeight = numberOfRows * lineHeight;
      textareaRef.current.style.height = `${newHeight}px`;
    }
  }, []);

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

  if (textFeedback || audioFeedback) {
    return (
      <FeedbackContainer>
        <OverAllCommentTitle>General Feedback</OverAllCommentTitle>
        <TextBox>
          {textFeedback ? (
            <HiddenInputBox
              style={{ height: calculateTextareaHeight() }}
              ref={textareaRef}
              readOnly={true}
            >
              {textFeedback}
            </HiddenInputBox>
          ) : (
            <></>
          )}
        </TextBox>
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
