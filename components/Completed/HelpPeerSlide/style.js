import styled from 'styled-components';

export const SliderContainer = styled.div`
  border-radius: 16px;
  width: 100%;
`;

export const Header = styled.div`
  background-color: #f7eeff;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px;
  border-radius: 16px 16px 0 0;

  p {
    font-weight: 500;
    font-family: var(--font-family-ibm_plex_sans);
    font-size: var(--font-size-xl);
    line-height: 26px;
    color: var(--black);
  }
`;

export const SliderMain = styled.div`
  height: ${(props) => (props.mobileView ? '475px' : '450px')};
  border-radius: 0 0 16px 16px;
  overflow: hidden;

  @-moz-document url-prefix() {
    height: ${(props) => (props.mobileView ? '475px' : '450px')};
  }
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SlideContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const SlideDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

export const Dot = styled.div`
  background-color: ${(props) =>
    props.isActive ? 'var(--light-mode-purple)' : '#D6D6D6'};
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;
