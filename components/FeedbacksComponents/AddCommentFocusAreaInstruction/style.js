import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 20px 0;
  width: 314px;
  border: 1px solid rgba(201, 198, 204, 0.5);
  border-radius: 6px;
  box-shadow: 0px 2.04px 4px 0px rgba(112, 112, 112, 0.1);
  background: rgba(255, 255, 255, 1);
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(242, 241, 243, 0.5);
  padding: 12px 8px;
  color: rgba(75, 70, 79, 1);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 20px;
`;

export const Steps = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 20px;
  color: rgba(145, 139, 151, 1);
  margin: 12px 8px 0px;
  letter-spacing: 2px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  img{
    width: 24px;
    height: 24px;
  }

  .abcIcon {
     width: 34px;
     height: 24px;
   }
`;

export const SectionContainer = styled.div`
  margin: 20px 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconGroup = styled.div`
  position: relative;
  width: 24px;
  height: 24px;

  .commentIcon {
    width: 100%;
    height: 100%;
  }

  .mouseIcon {
    position: absolute;
    left: 60%;
    top: 50%;
  }
`;

export const Text = styled.h1`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-l);
  line-height: 20px;
  color: rgba(75, 70, 79, 1);
`;
