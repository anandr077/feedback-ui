import React from 'react';
import AudioPlayer from '../../components/AudioPlayer';
import { OverAllCommentTitle, FeedbackContainer, TextBox, HiddenInputBox } from './style';

const NonEditableFeedback = ({ textFeedback, audioFeedback }) => {
  if (textFeedback || audioFeedback) {
    return (
      <FeedbackContainer>
        <OverAllCommentTitle>General Feedback</OverAllCommentTitle>
        <TextBox>{textFeedback ? <HiddenInputBox>{textFeedback}</HiddenInputBox> : <></>}</TextBox>
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
