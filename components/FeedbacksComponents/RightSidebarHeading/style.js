import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 53px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 16px;
  background-color: #f2f1f3;
  color: #4b464f;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 20px;

  img {
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
