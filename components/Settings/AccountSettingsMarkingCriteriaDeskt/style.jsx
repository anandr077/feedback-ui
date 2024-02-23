import styled from 'styled-components';
import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansNormalElectricViolet14px,
} from '../../../styledMixins';

export const RedictIcon = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;
export const UserSettingLinkContainer = styled.div`
  display: flex;
  height: 31px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  cursor: pointer;
`;

export const UserSettingLink = styled.div`
  ${IbmplexsansNormalElectricViolet14px}
  font-size: 14px;
`;

export const UserSettingFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  flex: 1;
  align-self: auto;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

export const MarkingCriteriaList = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export const Frame1379 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
  margin-bottom: 20px;
`;

export const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 240px;
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
  gap: 72px;
  padding: 0px 240px;
  position: relative;
  align-self: stretch;
`;

export const Frame1372 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 0px 0px 20px 0px;
  border: 0px 0px 1px 0px;
  gap: 12px;
  border-bottom: 1px solid #d6d6d6;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--Dark-Purple, #25222a);
  font-family: IBM Plex Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.9px;
  @media (max-width: 765px) {
    font-size: 32px;
    letter-spacing: -0.8px;
  }
`;

export const Frame13221 = styled.div`
  display: flex;
  max-height: 860px;
  align-items: flex-start;
  gap: 60px;
  position: relative;
  align-self: stretch;
`;

export const Frame1302 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  flex: 1;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

export const Title1 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

export const MarkingCriteria = styled.div`
  font-family: IBM Plex Sans;
  font-size: 24px;
  font-weight: 600;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  color: #1e252a;
`;

export const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;
export const HeadingLine = styled.p`
  color: #333333;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const TabsContainer = styled.div`
  width: 100%;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
`;
