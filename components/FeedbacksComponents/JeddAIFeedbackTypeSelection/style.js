import styled from 'styled-components';
import { IbmplexsansSemiBoldWhite16px } from '../../../styledMixins';

export const MainContainer = styled.div`
  width: 515px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  opacity: 0px;
  background: #ffffff;
  padding: 0px 0px 30px 0px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 10px;
  opacity: 0px;
  background: #f1e6fc;
`;
export const TitlePart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;
export const TitlePartText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 19px;
  font-weight: 500;
  line-height: 24.7px;
  text-align: left;
  color: #4b464f;
`;
export const TitlePartImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const ContentPart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  gap: 20px;
  opacity: 0px;
`;
export const SelectionCard = styled.div`
  width: Fill (455px) px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 4px;
  border-radius: 8px;
  border: 1px;
  opacity: 0px;
  background: var(--color-purple-70, #fbf7fe);
  border: 1px solid var(--color-purple-80, #f1e6fc);
`;

export const SelectionCardHeadingText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 19px;
  font-weight: 500;
  line-height: 24.7px;
  text-align: left;
  color: #1e252a;
`;

export const SelectionCardText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 400;
  line-height: 16.9px;
  text-align: left;
  color: #7b7382;
`;

export const DivisionPart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const DivisionPartDots = styled.div`
  width: 50%;
  border-bottom: 1px dotted #c9c6cc;
  height: 0;
`;
export const DivisionPartText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 400;
  line-height: 16.9px;
  text-align: center;
  color: #7b7382;
`;
export const SaveButton = styled.div`
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
   opacity: ${({ isDisabled }) => (isDisabled ? '0.5' : '1')};
  pointer-events: ${(props) => props.isDisabled ? 'none' : 'auto'}
`;