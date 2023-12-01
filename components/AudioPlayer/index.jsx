import React from 'react';

const AudioPlayer = ({ generatedAudioFeedback }) => {
  return (
    <div>
      <audio controls>
        <source src={generatedAudioFeedback} type="audio/webm" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;