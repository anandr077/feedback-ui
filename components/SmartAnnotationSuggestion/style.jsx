import { IbmplexsansNormalShark20px } from '../../styledMixins';
import styled from 'styled-components';

export const SuggestionsLabel = styled.div`
  ${IbmplexsansNormalShark20px}
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background: #ffffff;
`;

export const TextInputEditable = styled.textarea`
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

export const SuggestionsContainer = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #595959;
  background: #ffffff;
  cursor: pointer;
`;

export const SuggestionsContainerComments = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #595959;
  background: #ffffff;
  cursor: pointer;
`;

export const DeleteButton = styled.img`
  cursor: pointer;
  display: block;
  min-width: 15px;
  height: 15px;

  ${SuggestionsContainer}:hover & {
    display: block;
  }
`;
