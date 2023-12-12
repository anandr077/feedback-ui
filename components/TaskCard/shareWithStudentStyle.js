import styled from 'styled-components';

export const StudentListContainer = styled.div`
  position: absolute;
  top: 0;
  left: -10px;
  background-color: var(--white);
  max-height: 300px;
  padding: 8px 12px;
  border: var(--hawkes-blue);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  z-index: 10;
`;

export const Student = styled.p`
  font-weight: 400;
  margin: 3px 0;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 14px;
`;
