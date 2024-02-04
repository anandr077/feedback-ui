import styled from 'styled-components';
import {
  IbmplexsansBoldShark64px,
  IbmplexsansMediumElectricViolet20px,
  IbmplexsansMediumWhite16px,
  IbmplexsansNormalStack20px,
  IbmplexsansSemiBoldShark20px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansNormalElectricViolet16px,
} from '../../styledMixins';

export const TitleAndLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;
`;
export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const TitleAndSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  width: 100%;
  border-bottom: 1px solid #d6d6d6;
  padding-bottom: 20px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  width: 100%;
`;
export const TitleImage = styled.img`
  padding: 2px 2px 2px 2px;
  align-items: center;
  gap: 10px;
  width: 24px;
  height: 24px;
`;

export const DeleteButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  position: relative;
  cursor: pointer;
`;

export const Frame1322 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transition: 0.1s;
  }
`;
export const IconTrash = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;
export const Delete = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export const SLink = styled.div`
  ${IbmplexsansMediumElectricViolet20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: -0.5px;
  line-height: normal;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transition: 0.1s;
  }
`;
export const Frame1379 = styled.div`
  // display: flex;
  // width: 100%;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // gap: 20px;
  // position: relative;
  // align-self: stretch;
  // margin-bottom: 20px;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 0px 60px;
`;

export const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
  padding-top: 20px;
`;

export const Frame1315 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
  justify-content: flex-start;
`;

export const Frame1378 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-self: stretch;
  ${(props) => props.readOnly && 'pointer-events: none; opacity: 0.5;'}
`;

export const Frame1375 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

export const Frame1372 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  align-self: stretch;
  z-index: 1;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--Dark-Purple, #301b72);
  font-family: IBM Plex Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.9px;
  @media (max-width: 765px) {
    font-size: 32px;
    letter-spacing: -0.8px;
  }
`;
export const HeadingLine = styled.p`
  color: var(--Foundation-Grey-grey-500, #333333);
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const Frame1374 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 21px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
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
`;

export const Frame1294 = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;
  // gap: 30px;
  // padding: 30px;
  // position: relative;
  // align-self: stretch;
  // background-color: var(--white);
  // border-radius: 16px;
  // box-shadow: 0px 4px 22px #2f1a720a;
`;

export const Questions = styled.div`
  ${IbmplexsansSemiBoldShark24px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

export const Frame1295 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export const AssignmentSettings = styled.div`
  ${IbmplexsansSemiBoldShark24px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export const Frame1296 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

export const Frame1377 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

export const Frame1299 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  padding: 4px 0px 4px 0px;
`;

export const Frame12811 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

export const Classes = styled.div`
  ${IbmplexsansSemiBoldShark20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export const Frame1298 = styled.div`
  display: flex;
  align-items: space-between;
  position: relative;
  align-self: stretch;
  gap: 24px;
`;

export const Frame12981 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

export const Frame12191 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

export const Buttons1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transition: 0.1s;
  }
`;

export const Button = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  background-color: var(--light-mode-purple);
`;

export const TaskContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0px 0px 32px 0px;
  border-radius: 12px;
  border: 1px;
  gap: 32px;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  border: 1px solid #f2f2f2;
`;
export const TaskHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px 30px 20px 30px;
  border-radius: 12px 12px 0px 0px;
  gap: 10px;
  background: #f7eeff;
`;
export const TaskHeading = styled.div`
  diplay: flex;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0.06em;
  text-align: left;
  color: #7200e0;
`;
export const TaskNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px 0px 30px;
  gap: 20px;
`;
export const TaskName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const TaskTitle = styled.div`
  font-family: IBM Plex Sans;
  font-size: 24px;
  font-weight: 600;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  color: #1e252a;
`;
