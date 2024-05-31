import styled from 'styled-components';

export const MainContainer = styled.div`
  position: absolute;
  right: ${(props) => (props.openRightPanel === 'tab4' ? '48px' : '-287px')};
  top: 0;
  bottom: 0;
  width: 287px;
  height: 100%;
  padding: 0;
  border: solid 1px rgba(201, 198, 204, 0.5);
  background-color: #fff;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  z-index: 4;
`;

export const SubmissionBody = styled.div`
  position: relative;
  flex: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

export const Line = styled.div`
  position: absolute;
  left: 8px;
  height: 100%;
  border: solid 1px rgba(201, 198, 204, 0.5);
`;

export const Submissions = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Submission = styled.div`
  position: relative;
  width: 100%;
  border-radius: 6px;
  border: 1px solid rgba(201, 198, 204, 0.5);
  background-color: ${props => props.active ? 'rgba(241, 230, 252, 1)' : 'white'};
  padding: 8px;
  box-shadow: 0px 2.04px 4px 0px rgba(112, 112, 112, 0.1);
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(201, 198, 204, 1);
  position: absolute;
  top: 50%;
  left: -12px;
  transform: translateY(-50%);
`;

export const Date = styled.h3`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 24px;
  color:  ${props => props.active ? 'rgba(114, 0, 224, 1)' : 'rgba(75, 70, 79, 1)'};
`;

export const Time = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-s);
  line-height: 17px;
  color: ${props => props.active ? 'rgba(173, 107, 237, 1)' : 'rgba(145, 139, 151, 1)'};
`;
