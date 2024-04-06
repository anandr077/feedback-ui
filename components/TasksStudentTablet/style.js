import styled from 'styled-components';
import { IbmplexsansSemiBoldRiverBed24px } from '../../styledMixins';

export const TaskScreenMainContainer = styled.div`
  align-items: center;
  background-color: var(--white-pointer);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  padding: 40px 0px;
`;

export const Frame1365 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;

  @media (max-width: 765px) {
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
  min-height: 600px;
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
  margin-top: -1px;
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
export const LinkAndFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 765px) {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: flex-start;
    gap: 10px;
    margin-top: 10px;
  }
`;

export const TitleAndFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
export const TitleAndSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const TitleImage = styled.img`
  padding: 2px 2px 2px 2px;
  align-items: center;
  gap: 10px;
  width: 24px;
  height: 24px;
`;

export const SubtitleCon = styled.p`
  display: flex;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: IBM Plex Sans;
  font-size: 36px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: -0.025em;
  text-align: left;
  color: #301b72;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  @media (max-width: 765px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
