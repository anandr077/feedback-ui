import styled from 'styled-components';

import {
  IbmplexsansSemiBoldShark24px,
  IbmplexsansSemiBoldWhite16px,
  IbmplexsansNormalShark20px,
} from '../../styledMixins';

export const TextFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 10px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
  width: 70%;
  left: 5%;
  margin-top: 20px;
`;

export const TextInput = styled.input`
  ${IbmplexsansNormalShark20px}
  position: relative;
  width: 100%;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;

export const DeleteTitle = styled.div`
  display: flex;
  width: 277.333px;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
  color: var(--text);
  font-size: var(--font-size-xl);
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 20px;
  margin-right: 40px;
  padding-top: 20px;
  font-family: IBM Plex Sans;
`;

export const CancelButton = styled.div`
  ${IbmplexsansSemiBoldWhite16px}
  font-size: var(--font-size-l);
  font-weight: 500;
  line-height: 20px;
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid var(--light-mode-purple, #7200e0);
  background: var(--light-mode-purple, #7200e0);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProceedButton = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  font-weight: 500;
  line-height: 20px;
  color: var(--light-mode-purple);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const TextContent = styled.div`
  ${IbmplexsansSemiBoldShark24px}
  font-size: var(--font-size-xl);
  font-weight: 400;  
  display: flex;
  width: 90%;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  padding-top: 20px;
`;

export const DeleteAssignmentPopupContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 600px;
  z-index: 1000;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
`;

export const DeleteAssignmentPopupContainerSmall = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 90%;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
  align-items: center;
  padding: 20px;
  background-color: #F1E6FC;
  border-radius: 12px 12px 0 0;
`;

export const Line141 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
`;

export const ConfirmSubmit = styled.div`
  margin: 20px auto 0;
  width: 90%;
`;

export const PlagiarismText = styled.p`
  margin-bottom: 15px;
  color: #3a3a3a;
  font-size: 14px;
  line-height: 20px;
  font-family: IBM Plex Sans;
`;
