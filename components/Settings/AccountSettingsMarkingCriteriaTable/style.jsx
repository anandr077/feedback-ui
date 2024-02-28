import styled from 'styled-components';
import {
  IbmplexsansBoldShark36px,
  IbmplexsansNormalPersianIndigo13px,
  IbmplexsansNormalElectricViolet14px,
} from '../../../styledMixins';

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

export const Frame1379 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 20px;
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
  gap: 40px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

export const Frame1372 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

export const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

export const Frame1322 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export const InactiveSetting = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 24px;
  position: relative;
  align-self: stretch;
  background-color: var(--blue-chalk);
  border-radius: 16px;
`;

export const SettingTitle = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Frame1284 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ActiveSetting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 24px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
`;

export const Frame13221 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

export const Frame1302 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
`;

export const Title1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

export const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;
