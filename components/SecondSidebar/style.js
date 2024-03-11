import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
  height: ${props => props.containerHeight && props.containerHeight};
  width: 219px;
  background-color: #F2F1F380;
  box-shadow: inset -1px -1px 1px 0 #E3E3E3,
            inset 1px 1px 0.5px 0 #E3E3E3;
  //border: 1px solid #f2f1f380;
  //border-left: 1px solid #f2f1f380;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`;

export const Button = styled.button`
  width: 203px;
  height: 48px;
  border-radius: 6px;
  padding: 12px, 16px, 12px, 16px;
  text-align: left;
  color: ${props => props.highlight ? '#7200E0' : '#4B464F'};
  font-family: var( --font-family-ibm_plex_sans);
  font-weight: ${props => props.highlight ? '500' : '400'};
  font-size: var(--font-size-l);
  line-height: 24px;
  background-color: ${props => props.highlight ? '#F1E6FC' : 'transparent'};
  border: none;
  cursor: pointer;
`;
