import styled from 'styled-components';
import {
    IbmplexsansMediumRiverBed24px,
  } from '../../../styledMixins'

export const ExemplarsContainer = styled.div`
    width: 100%;
    padding: 20px;
    background-color: var(--white);
    border-radius: 12px;
    box-shadow: 0px 4px 16px #7200e01a;
`

export const ExemplarsTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 20px;
    position: relative;
    align-self: stretch;
`

export const Tasks = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  font-size: 24px;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export const Crown = styled.img`
min-width: 24px;
height: 24px;
`;

export const Line = styled.img`
  width: 100%;
  margin: 20px 0;
`;

export const TaskWrapper = styled.div`
  height: 337px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    background: #333;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #b1b0b0;
    border-radius: 5px;
  }
`