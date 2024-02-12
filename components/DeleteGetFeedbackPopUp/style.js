import styled from 'styled-components';
import { IbmplexsansSemiBoldShark24px, IbmplexsansSemiBoldWhite16px } from '../../styledMixins';
export const DeleteTitle = styled.div`
  display: flex;
  width: 277.333px;
  flex-direction: column;
  flex-shrink: 0;
  color: #505050;
  font-size: 16px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
`;

export const Arrowright = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

export const ArrowrightSmall = styled.img`
  position: relative;
  min-width: 18px;
  height: 18px;
`;


export const CancelButton = styled.div`
  ${IbmplexsansSemiBoldWhite16px}
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

export const DeleteButton = styled.div`
  ${IbmplexsansSemiBoldWhite16px}
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 30px;
  border: 1px solid #cc2929;
  background: #cc2929;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const TextContent = styled.div`
  ${IbmplexsansSemiBoldShark24px}
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

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-left: 30px;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 10px;
`;


export const Line141 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
`;
