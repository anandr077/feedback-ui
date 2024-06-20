import styled from 'styled-components';

export const AudioContainer = styled.div`
  width: 100%;
  margin-top: 10px;
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

  &::-webkit-media-controls-download-button {
    display: none;
  }
`;
