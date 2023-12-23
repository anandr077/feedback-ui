import styled from 'styled-components';

export const DialogueBox = styled.div`
  border-radius: 5px;
  width: 400px;
  max-width: 90%;
  margin: 0 auto;
`;

export const DropdownContainer = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xl);
  flex: 1;
`;

export const DropdownBox = styled.div`
  flex: 1.5;
`;

export const Button = styled.button`
  display: block;
  border-radius: 30px;
  margin: 0 auto;
  background-color: var(--light-mode-purple);
  font-family: var(--font-family-ibm_plex_sans);
  border: none;
  color: var(--white);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 135px;
  height: 40px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background-color: var(--royal-purple);
  }
`;
