import styled, { keyframes } from 'styled-components';

export const TableHeadingPart = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 3.5fr;
`;
export const BodyHeadingPart = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 0.7fr 2.8fr;
`;
export const BodyHeading = styled.div`
  padding: 16px 20px 16px 20px;
  border: 1px;
  gap: 12px;
  border: 1px solid #c9c6cc80;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  background: #fbf7fe;
  color: #56515b;
`;
export const TableBodyPart = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 3.5fr;
`;

export const LevelPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LevelAndDescPart = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 2.8fr;
`;

export const LevelDescPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TableRowButtoncont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 16px 20px 16px 20px;
  border: 1px;
  border: 1px solid #c9c6cc80;
  cursor: pointer;
  grid-column: span 5;
`;
