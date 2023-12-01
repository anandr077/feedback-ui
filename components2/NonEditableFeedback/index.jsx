import React from 'react';
import AudioPlayer from '../../components/AudioPlayer';
import { OverAllCommentTitle, FeedbackContainer, TextBox, Text } from './style';

const NonEditableFeedback = ({ textFeedback, audioFeedback }) => {
  if (textFeedback || audioFeedback) {
    return (
      <FeedbackContainer>
        <OverAllCommentTitle>Overall Feedback</OverAllCommentTitle>
        <TextBox>{textFeedback ? <Text>{textFeedback}</Text> : <></>}</TextBox>
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
