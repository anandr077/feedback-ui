import styled, { css } from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../../styledMixins';

export const MarkingCriteriaEntry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 30px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid #f3f3f3;
  background: #fff;
  box-shadow: 0px 4px 22px #2f1a720a;
  border-radius: 16px;

  ${(props) =>
    props.isHovered &&
    css`
      &:hover {
        border-color: #7200e0;
        background-color: #f9f5ff;
      }
      cursor: pointer;
    `}
`;

export const MarkingCriteriaEntryHeading = styled.div`
  display: flex;
  align-items: flex-start;
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
