import styled from "styled-components";

export const DrawerQuestion = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: ${props => props.studentStyle ? '500' : '400'};
  font-size: 16px;
  line-height: 24px;
  padding: 12px;
  border-radius: 6px;
  background: ${(props) =>
    props.studentStyle ? 'rgba(241, 230, 252, 1)' : 'white'};
  color: ${(props) => (props.studentStyle ? 'rgba(114, 0, 224, 1)' : 'rgba(75, 70, 79, 1)')};
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  
  transition: 0.3s ease-in;
  overflow: hidden;
  cursor: pointer;

  &:hover {  
    background-color: rgba(241, 230, 252, 1);
    color: rgba(114, 0, 224, 1);
  }
`;