import styled from 'styled-components';

export const AudioContainer = styled.div`
  margin-top: 30px;
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

  &::-webkit-media-controls-download-button {
    display: none;
  }
`;

export const AudioFeedbackTitle = styled.h2`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  margin: 25px 0 15px;
`;
