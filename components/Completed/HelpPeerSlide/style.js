import styled from 'styled-components';

export const SliderContainer = styled.div`
  border: 1px solid #e5c9ff;
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
  padding: 20px;
  height: ${props => props.mobileView ? '458px' : '430px'};
  overflow: hidden;
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SlideContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const FirstSlide = styled.div`
  position: absolute;
  width: 100%;
  height: 70%;
  top: 30px;
  transition: transform 0.3s ease-in;
  transform: translateX(${(props) => (props.animate ? '100%' : '0')});
  z-index: 2;
`;

export const SecondSlide = styled.div`
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 97%;
  background-color: var(--white);
  height: 95%;
  z-index: 1;
  border: 1px solid rgba(114, 0, 224, 0.1);
  border-radius: 15px;
  box-shadow: 0px 3.826px 15.304px 0px rgba(114, 0, 224, 0.1);
`;

export const ThirdSlide = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 94%;
  height: 95%;
  z-index: 0;
  border: 1px solid rgba(114, 0, 224, 0.1);
  border-radius: 15px;
  background-color: var(--white);
  box-shadow: 0px 3.826px 15.304px 0px rgba(114, 0, 224, 0.1);
`;

export const SlideDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  margin-top: ${props => props.mobileView ? '10px' : '0'};
`;

export const Dot = styled.div`
  background-color: ${(props) =>
    props.isActive ? 'var(--light-mode-purple)' : '#D6D6D6'};
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;
