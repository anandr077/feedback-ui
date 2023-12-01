import React from 'react';
import {
  AudioContainer,
  Audio
} from './style'

const AudioPlayer = ({ generatedAudioFeedback }) => {
  console.log("generatedAudioFeedback", generatedAudioFeedback)
  const audioUrl = URL.createObjectURL(generatedAudioFeedback);

  return (
    <AudioContainer>
      <Audio controls>
        <source src={audioUrl} type="audio/webm" />
        Your browser does not support the audio element.
      </Audio>
    </AudioContainer>
  );
};

export default AudioPlayer;