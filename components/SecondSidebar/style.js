import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
  height: ${props => props.containerHeight && props.containerHeight};
  width: 219px;
  background: rgba(242, 241, 243, 0.5);
  box-shadow: -1px -2px 4px 0px rgba(115, 115, 115, 0.25) inset;
  border: 1px solid rgba(201, 198, 204, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`;

export const Button = styled.button`
  width: 203px;
  height: 48px;
  border-radius: 6px;
  padding: 12px, 16px;
  text-align: left;
  color: ${props => props.active ? '#7200E0' : '#4B464F'};
  font-family: var( --font-family-ibm_plex_sans);
  font-weight: ${props => props.active ? '500' : '400'};
  font-size: var(--font-size-l);
  line-height: 24px;
  background-color: ${props => props.active ? ' rgba(241, 230, 252, 1)' : 'transparent'};
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
