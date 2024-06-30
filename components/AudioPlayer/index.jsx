import React from 'react';
import { AudioContainer, Audio, AudioFeedbackTitle } from './style';

const AudioPlayer = ({ generatedAudioFeedback }) => {
  const audioUrl = URL.createObjectURL(generatedAudioFeedback);

  return (
    <AudioContainer>
      <Audio src={audioUrl} controls type="audio/webm">
        Your browser does not support the audio element.
      </Audio>
    </AudioContainer>
  );
};

export default AudioPlayer;
