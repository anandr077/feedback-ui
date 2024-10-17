import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;

  span {
    color: rgba(86, 81, 91, 1);
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 500;
    font-size: var(--font-size-l);
    line-height: 24px;
  }
`;
