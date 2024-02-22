import { IbmplexsansNormalShark20px } from '../../styledMixins';
import styled from 'styled-components';

export const SuggestionsLabel = styled.div`
  color: #595959;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  font-weight: 400;
  font-style: normal;
  line-height: 20.8px;
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
  color: #595959;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid var(--light-mode-purple);
  background: #ffffff;
`;

export const DeleteButton = styled.img`
  cursor: pointer;
  display: block;
  width: 24px;
  height: 24px;

  ${SuggestionsContainer}:hover & {
    display: block;
  }
`;

export const ButtonBox = styled.div`
  position: relative;

  span {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 4px;
    z-index: 100;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    display: none;
    font-family: 'IBM Plex Sans', Helvetica;
    font-size: 12px;
  }

  &:hover {
    span {
      display: block;
    }
  }
`;
