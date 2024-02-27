import styled from 'styled-components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { IbmplexsansNormalShark20px } from '../../../styledMixins';

export const TooltipSpan = styled.span`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 4px;
  z-index: 100;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  display: none;
  font-family: 'IBM Plex Sans', Helvetica;
  font-size: 12px;
`;

export const DnDContainer = styled.div`
  display: ${props => props.mobileView ? 'none' : 'flex'};
  flex-direction: row;
  gap: 30px;
  padding-top: 20px;
`;

export const StudentsDnD = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-pointer);
  padding: 20px;
  width: 250px;
  border-radius: 10px;
`;

export const Heading = styled.p`
  ${IbmplexsansNormalShark20px}
  display: flex;
  align-items: center;
  justify-content: space-between;
  height :15px;
`;

export const ShuffleBtn = styled.div`
  color: var(--light-mode-purple);
  font-size: 10px;
  position: relative;
  cursor: pointer;

  &:hover {
    ${TooltipSpan} {
      display: block;
    }
  }
`;

export const ReshuffleIcon = styled.img`
  width: 20px;
  height: 25px;
`;

export const StudentsPlaceHolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
  border: 1px solid var(--light-mode-purple);
  border-radius: 10px;
`;
export const StudentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`;
export const StudentDnD = styled(Droppable)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--light-mode-purple);
`;
export const Student = styled(Draggable)`
  display: flex;
  flex-direction: row;
  // background-color: var(--white);
  padding: 10px;
`;

export const StudentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  gap: 5px;
  background-color: var(--white);
  border-radius: 10px;
`;

export const OptionName = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;

  &:hover {
    ${TooltipSpan} {
      display: block;
    }
  }
`;
