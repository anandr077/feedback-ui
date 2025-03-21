import styled, { keyframes } from 'styled-components';
import { feedbacksIbmplexsansNormalShark20px } from '../../styledMixins';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export const AudioContainer = styled.main`
  border-radius: 25px;
  width: 100%;
`;

export const AudioFeedbackTitle = styled.h2`
  color: var(--text, #1e252a);
  font-size: 14px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 15px;
`;

export const Audio = styled.audio`
  height: 45px;
  width: 100%;

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
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const GeneratedAudio = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--blue-chalk);
  width: 100%;
  border-radius: 25px;
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

export const AudioIcon = styled(VolumeUpIcon)`
  font-size: 18px !important;
`;

export const FeedbackBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: rgba(114, 0, 224, 1);
  cursor: pointer;
`;
