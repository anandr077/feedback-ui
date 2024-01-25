import React, { useRef, useEffect } from 'react';
import AudioPlayer from '../../components/AudioPlayer';
import {
  OverAllCommentTitle,
  FeedbackContainer,
  TextBox,
  HiddenInputBox,
} from './style';

const NonEditableFeedback = ({ textFeedback, audioFeedback }) => {
  const hiddenInputRef = useRef(null);

  const adjustHeight = () => {
    const element = hiddenInputRef.current;
    if (element) {
      element.style.height = 'auto';
      element.style.height = element.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, [textFeedback, window.innerWidth]);

  if (textFeedback || audioFeedback) {
    return (
      <FeedbackContainer>
        {textFeedback ? (
          <div style={{ marginBottom: '30px' }}>
            <OverAllCommentTitle>General Feedback</OverAllCommentTitle>
              <HiddenInputBox
                ref={hiddenInputRef}
                readOnly={true}
                onInput={adjustHeight}
              >
                {textFeedback}
              </HiddenInputBox>
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
