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
  font-weight: 400;
  font-size: var(--font-size-l);
  line-height: 20.8px;
  padding: 16px 20px;
  border-radius: 8px;
  background: ${(props) =>
    props.studentStyle ? 'var(--royal-purple)' : '#f2f2f2'};
  color: ${(props) => (props.studentStyle ? 'var(--white)' : 'var(--text)')};
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