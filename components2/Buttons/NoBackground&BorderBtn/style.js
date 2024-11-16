import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  background: transparent;
  border: none;
  cursor: ${({isDisabled}) => (isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};

  span {
    color: rgba(86, 81, 91, 1);
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 500;
    font-size: var(--font-size-l);
    line-height: 24px;
  }

  &:disabled {
    pointer-events: none;
  }
`;
