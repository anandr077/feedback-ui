import React from 'react';
import {
  AudioContainer,
  Audio
} from './style'

const AudioPlayer = ({ generatedAudioFeedback }) => {
  return (
    <AudioContainer>
      <Audio controls>
        <source src={generatedAudioFeedback} type="audio/webm" />
        Your browser does not support the audio element.
      </Audio>
    </AudioContainer>
  );
};

export default AudioPlayer;