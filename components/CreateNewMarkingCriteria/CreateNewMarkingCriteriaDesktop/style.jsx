import styled from 'styled-components';
import { IbmplexsansNormalStack20px } from '../../../styledMixins';

export const TextInput = styled.input`
  ${IbmplexsansNormalStack20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  width: 100%;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  // gap: 20px;
  // padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  width: 100%;
  // border-radius: 12px;
  // border: 1px solid;
  // border-color: var(--text);
`;

export const Frame1379 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 240px;
  position: relative;
  align-self: stretch;
`;

export const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

export const Frame1302 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

export const Line15 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

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
  padding: 8px 20px 8px 20px;
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

export const EditIcon = styled.img``;
