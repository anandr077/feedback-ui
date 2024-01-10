import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? 'var(--light-mode-purple)' : '#D9D9D9'};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  color: ${props => props.prev ? '#C2C2C2' : 'var(--light-mode-purple)'};
  font-size: var(--font-size-l);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  cursor: pointer;
`;