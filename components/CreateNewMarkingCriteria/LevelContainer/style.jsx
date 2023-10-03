import styled from 'styled-components';
import {
  IbmplexsansNormalElectricViolet16px,
  feedbacksIbmplexsansNormalStack20px,
} from '../../../styledMixins';

export const SingleLevelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

export const LevelTitle = styled.div`
  display: flex;
  width: 278px;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

export const LevelDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 11px 18px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

export const LevelTextInput = styled.input`
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

export const LevelTextDiscription = styled.textarea`
  ${feedbacksIbmplexsansNormalStack20px}
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

export const RemoveButtonContainer = styled.div`
  position: relative;
  display: flex;
  min-width: 79px;
  height: 21px;
  cursor: pointer;
`;

export const ButtonInnerContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 81px;
  gap: 5px;
  margin-top: 20px;
`;

export const ButtonImage = styled.img`
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: 1px;
`;

export const ButtonText = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  min-height: 21px;
  min-width: 59px;
  letter-spacing: 0;
  line-height: normal;
`;
