import styled from 'styled-components';

export const ButtonContainer = styled.div`
  border: 1px solid #d3b0f5;
  border-radius: 26px;
  padding: 12px;
  box-shadow: 0px 2px 4px 0px rgba(48, 27, 114, 0.1);
  color: var(--text);
  font-weight: 500;
  font-size: var(--font-size-l);
  font-family: var(--font-family-ibm_plex_sans);
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease;
  cursor: pointer;

  .leftIconHover {
    display: none;
  }

  &:hover {
    background-color: var(--light-mode-purple);
    color: var(--white);

    .leftIcon {
      display: none;
    }

    .leftIconHover {
      display: block;
    }
  }
`;
