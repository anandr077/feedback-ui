import styled from "styled-components";

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border: 1px solid #C9C6CC;
  padding: 6px 8px 6px 12px;
  border-radius: 27px;
`;

export const SwitchLabel = styled.span`
  margin-right: 10px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: #000000;
`;

export const Switch = styled.div`
  width: 50px;
  height: 25px;
  background-color: ${props => (props.isOn ? 'var(--light-mode-purple)' : '#ccc')};
  border-radius: 25px;
  position: relative;
  transition: background-color 0.2s;
`;

export const Slider = styled.div`
  width: 23px;
  height: 23px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: ${props => (props.isOn ? '26px' : '1px')};
  transition: left 0.2s;
`;