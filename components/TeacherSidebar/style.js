import styled from "styled-components";

export const OverflowShadow = styled.div`
  position: absolute;
  height: 100%;
  width: 40px;
  background: ${(props) =>
    props.blueBackground
      ? 'linear-gradient(to right, rgba(242, 242, 242, 0) 0%, var(--royal-purple) 60%, var(--royal-purple) 100%)'
      : 'linear-gradient(to right, rgba(242, 242, 242, 0) 0%, #F2F2F2 60%, #F2F2F2 100%)'};
  border-radius: 0 8px 8px 0;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

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
    ${OverflowShadow} {
      display: none;
    }
  }

  &:hover .tooltip-text {
    visibility: visible;
  }
`;