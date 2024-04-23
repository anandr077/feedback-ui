import styled from 'styled-components';
import { IbmplexsansSemiBoldRiverBed24px } from '../../../styledMixins';

export const TaskScreenMainContainer = styled.div`
  align-items: center;
  background-color: var(--white-pointer);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  overflow: hidden;
  padding: 40px 0px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 200px;
`;

export const Frame1365 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
  min-height: 600px;
  @media (max-width: 765px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    padding: 0px 20px;
    position: relative;
    align-self: stretch;
    min-height: 600px;
  }
`;

export const Frame1364 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export const Frame1211 = styled.div`
  display: flex;
  width: 442px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px;
  position: relative;
  background-color: var(--blue-chalk);
  border-radius: 24px;
  @media (max-width: 765px) {
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    padding: 8px;
    position: relative;
    align-self: stretch;
    background-color: var(--blue-chalk);
    border-radius: 24px;
    flex-wrap: wrap;
  }
`;

export const Frame1363 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export const Frame1362 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export const Outstanding = styled.div`
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  gap: 8px;
`;

export const Number = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;
