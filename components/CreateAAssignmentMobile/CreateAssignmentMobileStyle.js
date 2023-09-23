import styled from 'styled-components';
import {
  IbmplexsansBoldShark36px,
  IbmplexsansMediumWhite16px,
  IbmplexsansNormalStack20px,
  IbmplexsansSemiBoldShark20px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansMediumElectricViolet16px,
  IbmplexsansNormalElectricViolet16px,
} from '../../styledMixins';

export const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 93%;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  position: relative;
  margin-top: 16px;
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
  ${IbmplexsansMediumElectricViolet16px}
  position: relative;
  width: fit-content;
  text-align: right;
  letter-spacing: -0.4px;
  line-height: normal;
  cursor: pointer;
`;
export const Frame12191 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
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
  padding: 0px 20px;
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

export const Frame1378 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  padding: 0px 20px;
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
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  font-size: 36px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 8px;
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

export const Frame1294 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

export const Frame1293 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

export const Questions = styled.div`
  ${IbmplexsansSemiBoldShark24px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
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

export const Frame1296 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  gap: 20px;
  padding: 16px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
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
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-self: stretch;
`;

export const Frame1300 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

export const Frame1373 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;
