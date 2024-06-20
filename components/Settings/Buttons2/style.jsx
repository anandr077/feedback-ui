import styled, { css } from 'styled-components';

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
    font-size: 12px;
    white-space: nowrap;
    font-family: 'IBM Plex Sans', Helvetica;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
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
  cursor: pointer;
`;

export const Arrowright = styled.img`
  position: relative;
  min-width: 15px;
  height: 15px;
`;

export const DeleteButtonContainer = styled.div`
  display: flex;
  padding: 6px 7px;
  align-items: flex-start;
  gap: 10px;
`;
