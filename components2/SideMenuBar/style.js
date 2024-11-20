import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
`;

export const Title = styled.h1`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 700;
  font-size: var(--font-size-xl);
  line-height: 28px;
  color: rgba(0, 0, 0, 1);
`;

export const MenuContainer = styled.div`
  margin: 30px 0;
`;

export const MenuButton = styled.button`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: ${props => props.highlight ? '600' : '400'};
  font-size: var(--font-size-l);
  line-height: 24px;
  color: ${props => props.highlight ? 'rgba(80, 0, 157, 1)' : 'rgba(86, 81, 91, 1)'};
  white-space: nowrap;
  display: block;
  border: none;
  background-color: transparent;
  padding: 2px 0;
  margin: 18px 0;
  cursor: pointer;
`;
