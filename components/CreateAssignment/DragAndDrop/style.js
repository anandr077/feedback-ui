import styled from 'styled-components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { IbmplexsansNormalShark20px } from '../../../styledMixins';

export const DnDContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const StudentsDnD = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-pointer);
  padding: 20px;
  width: 250px;
`;

export const Heading = styled.p`
  ${IbmplexsansNormalShark20px}
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
  border:1px solid var(--light-mode-purple);
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
`;
