import styled, { css } from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../../styledMixins';

export const RightContainer = styled.div`
  display: none;
`;
export const MarkingCriteriaEntry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border: 0px 0px 1px 0px;
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  &:hover ${RightContainer} {
    display: block;
  }
  ${(props) =>
    props.isHovered &&
    css`
      &:hover {
        background-color: #f2f1f380;
      }
      cursor: pointer;
    `};
`;

export const MarkingCriteriaEntryHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

export const TypeText = styled.div`
  color: #979797;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Title = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;
export const MarkIcon = styled.img`
  width: 46px;
  height: 46px;
  padding: 8px;
  border-radius: 4px;
  border: 1px;
  opacity: 0px;
  border: 1px solid var(--color-neutral-90, #c9c6cc);
  background: var(--color-neutral-alpha-80, #f2f1f380);
`;

export const LeftContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
