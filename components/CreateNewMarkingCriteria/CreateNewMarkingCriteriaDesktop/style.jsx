import styled from 'styled-components';
import { IbmplexsansNormalStack20px } from '../../../styledMixins';

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  position: relative;
 
`;
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
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  width: 100%;
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
  position: relative;
`;
export const PlusMinusContainer = styled.div`
  display: none;
  position: absolute;
  right: -12px;
  flex-direction: column;
  gap: 4px;
`;
export const PlusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  box-shadow: 0px 1px 1.1px 0px #00000040;
  cursor: pointer;
`;
export const MinusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 16px;
  background-color: var(--white);
  border: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  box-shadow: 0px 1px 1.1px 0px #00000040;
  cursor: pointer;
`;
export const PlusImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const MinusImg = styled.img``;
export const LevelAndDescPart = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 2.8fr;
  &:hover {
    ${PlusMinusContainer} {
      display: flex;
    }
  }
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

export const AddNewCriteria = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  gap: 10px;
`;
export const AddNewCriteriaButton = styled.div`
  display: flex;
  padding: 8px 12px 8px 12px;
  border-radius: 32px;
  gap: 4px;
  background: #7200e0;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const CriteriaPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 0px 0px 1px 0px;
  gap: 8px;
  background: #ffffff;
  border-bottom: 1px solid #c9c6cc80;
`;

export const EditIcon = styled.img`
  width: 24px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
`;
export const EditIconHover = styled.img`
  width: 24px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
  display: none;
`;
export const Heading = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: left;
  display: flex;
  align-items: center;
  padding: 8px 6px;
  width: 75%;
  gap: 4px;
  cursor: pointer;
  border: 1px solid var(--color-neutral-white, #ffffff);
  &:hover {
    border: 1px solid var(--color-neutral-white, #c9c6cc80);
    ${EditIconHover} {
      display: block;
    }
    ${EditIcon} {
      display: none;
    }
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 90vh;
  position: relative;
`;

export const PreviewButton = styled.div`
  display: flex;
  padding: 8px 12px 8px 12px;
  border-radius: 32px;
  border: 1px;
  gap: 4px;
  background: #ffffff;
  border: 1px solid #7200e0;
  cursor: pointer;
  height: 40px;
  width: 115px;
  &:hover {
    background-color: #f9f5ff;
  }
`;

export const PreviewButtonIcon = styled.img`
  width: 24px;
  height: 24px;
`;
export const PreviewButtonText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #7200e0;
`;

export const RightContainer = styled.div`
  width: 100%;
  background: #ffffff;
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SaveButton = styled.div`
  display: flex;
  height: 40px;
  width: 150px;
  padding: 8px 12px 8px 12px;
  border-radius: 32px;
  gap: 4px;
  background: #7200e0;
  cursor: pointer;
  &:hover {
    background-color: rgba(80, 0, 157, 1);
  }
`;
export const SaveButtonText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

export const TableBodyParts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f1f380;
`;

export const TableHeading = styled.div`
  padding: 16px 20px 16px 20px;
  border: 1px;
  gap: 12px;
  background: #f2f1f380;
  border: 1px solid #c9c6cc80;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #56515b;
`;

export const TableRowButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
export const TableRowButtonIcon = styled.img`
  width: 24px;
  height: 24px;
`;
export const TableRowText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #7200e0;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #c9c6cc80;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  &:focus::placeholder {
    color: transparent;
  }
  &:hover {
    background-color: #f2f1f380;
  }
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const HeadingAndFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
  width: 100%;
  border-bottom: 1px solid var(--Foundation-Grey-grey-100, #d6d6d6);
`;
