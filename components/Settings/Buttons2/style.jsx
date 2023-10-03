import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover .tooltip-text {
    visibility: visible;
  }

  .tooltip-text {
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 4px;
    position: absolute;
    z-index: 100;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 6px 7px;
  position: relative;
  border-radius: 6px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Arrowright = styled.img`
  position: relative;
  min-width: 12px;
  height: 12px;
  cursor: pointer;
`;

export const DeleteButtonContainer = styled.div`
  display: flex;
  padding: 6px 7px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #de2b2b;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
