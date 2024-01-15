import styled from 'styled-components';

export const AudioContainer = styled.div``;

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

  &::-webkit-media-controls-download-button {
    display: none;
  }
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
