import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const Heading = styled.h1`
  color: #301b72;
  font-size: 20px;
  font-family: var(--font-family-ibm_plex_sans);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

export const FeedbackBox = styled.div`
  border: 1px solid #7200e0;
  border-radius: 20px;
  position: relative;
  min-height: 150px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  border-radius: 20px 20px 0 0;
  padding: 10px;
  height: 120px;
  font-family: var(--font-family-ibm_plex_sans);

  &:focus {
    outline: none;
  }
`;

export const AudioContainer = styled.main`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  gap: 5px;
  align-items: center;

  audio {
    height: 30px;
    width: 300px;
  }

  audio::-webkit-media-controls-panel {
    background-color: var(--blue-chalk);
  }

  audio::-webkit-media-controls-play-button{
    background-color: var(--fog);
    border-radius: 50%;
  }

  audio::-webkit-media-controls-volume-slider {
    background-color: var(--fog);
    border-radius: 25px;
    padding-left: 8px;
    padding-right: 8px;
  }

  audio::-webkit-media-controls-mute-button{
    background-color: var(--fog);
    border-radius: 50%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const Button = styled.button`
  width: fit-content;
  padding: 8px 16px;
  background-color: var(--light-mode-purple);
  border-radius: 10px;
  border: 1px solid;
  color: white;
  cursor: pointer;
`;

export const DeleteAudio = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover{
    transform: scale(1.2);
  }
`

export const RecordingText = styled.div`
   color: var(--light-mode-purple);

  @keyframes wave {
    0%,
    60%,
    100% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(-2px);
    }
  }

  .wave-letter {
    display: inline-block;
    animation: wave 500ms ease-in-out;
    animation-iteration-count: infinite;
  }
`;
