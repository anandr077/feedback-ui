import styled from 'styled-components';

export const OnboardingMainContainer = styled.div`
  margin-top: 14px;
  width: 100%;
  position: relative;
`;

export const Header = styled.div`
   text-align: center;
   max-width: 472px;
   margin: 0 auto 10px;
`;

export const MainTitle = styled.h1`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 800;
  font-size: var(--font-size-xxl);
  line-height: 28px;
  color: rgba(45, 43, 46, 1);
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: rgba(86, 81, 91, 1);
  height: ${props => props.fixedHeight ? '65px' : 'auto'};
`;

export const Video = styled.iframe`
  width: 100%;
  height: 347px;
`;

export const NextButtonContainer = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

export const ContentSection = styled.div`
  margin: 0 auto 50px;
  text-align: center;
`
