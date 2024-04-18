import styled from 'styled-components';
import {
  IbmplexsansNormalShark20px,
  IbmplexsansNormalElectricViolet14px,
} from '../../styledMixins';

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
  resize: none;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

export const SmartAnnotationContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #f1e7ff;
  background: #fff;
  box-shadow: 0px 2px 14px 0px rgba(114, 0, 224, 0.1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background: #ffffff;
`;

export const ButtonLabel = styled.div`
  ${IbmplexsansNormalElectricViolet14px}
  font-size: 16px;
  color: var(--light-mode-purple, #7200e0);
  cursor: pointer;
`;

export const PlusImage = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const TtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1e6fc;
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

export const DeleteButton2 = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

export const SmartAnnotationTitleContainer = styled.div`
  cursor: pointer;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #f1e7ff;
  background: #fff;
  box-shadow: 0px 2px 14px 0px rgba(114, 0, 224, 0.1);
`;

export const Title = styled.div`
  color: var(--text);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  font-weight: 400;
  font-style: normal;
  line-height: 20.8px;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

export const Arrowdown2 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
  margin-left: ${(props) => (props.left ? '25px' : '0px')};
  cursor: pointer;
`;

export const SubmitButton = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid #7200e0;
  color: #ffffff;
  background: #7200e0;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-family: IBM Plex Sans;
  font-weight: 500;
  :hover {
    scale: 1.1;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;
export const SixdotsImage = styled.img`
  width: 15px;
  height: 24px;
  padding-right: 8px;
`;
