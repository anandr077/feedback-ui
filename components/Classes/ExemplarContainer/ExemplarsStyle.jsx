import styled from 'styled-components';
import { IbmplexsansMediumRiverBed24px } from '../../../styledMixins';

export const ExemplarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const ExemplarsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

export const Tasks = styled.div`
  display: flex;
  gap: 8px;
  font-family: IBM Plex Sans;
  font-size: 19px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #3d3d3d;
`;

export const Crown = styled.img`
  min-width: 24px;
  height: 24px;
`;

export const TaskWrapper = styled.div`
  max-height: 1000px;
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
`;
