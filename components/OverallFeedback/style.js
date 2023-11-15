import styled, { keyframes } from 'styled-components';
import { feedbacksIbmplexsansNormalShark20px } from '../../styledMixins';

export const FeedbackContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  border-radius: 16px;
  border: 1px solid rgba(114, 0, 224, 0.1);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  padding: 20px;
`;

export const Heading = styled.div`
  ${feedbacksIbmplexsansNormalShark20px}
  line-height: normal;
  gap: 20px;
  margin-bottom: 10px;
`;

export const FeedbackBox = styled.div`
  border-radius: 20px;
  position: relative;
  min-height: 250px;
`;

export const TextArea = styled.textarea`
  ${feedbacksIbmplexsansNormalShark20px}
  width: 100%;
  border: 1px solid #7200e0;
  height: 200px;
  resize: none;
  border-radius: 15px 15px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

export const AudioContainer = styled.main`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: var(--blue-chalk);
  border-radius: 25px;
`;

export const Audio = styled.audio`
  height: 45px;
  width: ${(props) => (props.isTablet ? '150px' : '300px')};

  &::-webkit-media-controls-panel {
    background-color: var(--blue-chalk);
  }

  &::-webkit-media-controls-play-button {
    background-color: var(--fog);
    border-radius: 50%;
  }

  &::-webkit-media-controls-volume-slider {
    background-color: var(--fog);
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 30%;
  }

  &::-webkit-media-controls-mute-button {
    background-color: var(--fog);
    border-radius: 50%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: var(--white);
`;

export const Button = styled.button`
  ${feedbacksIbmplexsansNormalShark20px}
  width: fit-content;
  padding: 8px 16px;
  background-color: var(--light-mode-purple);
  border-radius: 10px;
  border: 1px solid;
  color: white;
  cursor: pointer;
`;

export const DeleteBtn = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: var(--fog);
  margin-right: 10px;
`;

export const DeleteAudio = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

export const RecordingIndicator = styled.div`
  width: 20px;
  height: 20px;
  background: radial-gradient(
    circle,
    var(--light-mode-purple) 30%,
    var(--fog) 70%
  );
  border-radius: 50%;
  animation: ${pulseAnimation} 1s ease-in-out infinite;
`;
