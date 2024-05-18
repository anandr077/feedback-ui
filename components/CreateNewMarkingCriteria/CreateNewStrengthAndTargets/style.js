import styled, { keyframes } from 'styled-components';
import { IbmplexsansNormalStack20px } from '../../../styledMixins';

export const MainContainer = styled.div`
  align-items: center;
  background-color: var(--white-pointer);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 60px;
  position: relative;
  width: calc(100vw - 90px);
  border-top: 1px solid #73737340;
  @media (min-width: 1025px) and (max-width: 1440px) {
    min-width: 1025px;
  }
  @media (min-width: 766px) and (max-width: 1024px) {
    min-width: 766px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 90vh;
  position: relative;
  max-width: 1440px;
`;

export const LeftContainer = styled.div`
  width: 15%;
  background: #f2f1f380;
  box-shadow: -1px -2px 4px 0px #73737340 inset;
`;
export const RightContainer = styled.div`
  width: 85%;
  background: #ffffff;
  // height: 60vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const OptionsContainer = styled.div``;
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 12px 16px 12px 16px;
  border-radius: 6px;
  gap: 8px;
`;

export const OptionIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const OptionText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #4b464f;
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
export const Heading = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
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

export const SaveButton = styled.div`
  display: flex;
  padding: 8px 12px 8px 12px;
  border-radius: 32px;
  gap: 4px;
  background: #7200e0;
  cursor: pointer;
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

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f1f380;
`;
export const TableHeadingPart = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
export const TableBodyParts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const TableBodyPart = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const CriteriaPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StrengthPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TargetPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }

  &::placeholder {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const TableRowButtoncont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 16px 20px 16px 20px;
  border: 1px;
  border: 1px solid #c9c6cc80;
  cursor: pointer;
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

export const EditIcon = styled.img``;
