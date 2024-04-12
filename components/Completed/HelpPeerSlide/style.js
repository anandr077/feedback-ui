import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #c9c6cc80;
  border-left: 1px solid #c9c6cc80;
  background-color: #ffffff;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

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
  padding-top: 10px;
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

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4b464f;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  text-align: left;

  // @media (max-width: 765px) {
  //   font-size: 32px;
  //   letter-spacing: -0.8px;
  // }
`;
