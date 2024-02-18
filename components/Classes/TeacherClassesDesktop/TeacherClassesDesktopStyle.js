import styled from 'styled-components';
import {
  IbmplexsansBoldShark64px,
  IbmplexsansMediumRiverBed24px,
  IbmplexsansNormalChicago13px,
} from '../styledMixins';

export const TopContainer = styled.div`
  align-items: center;
  background-color: var(--white-pointer);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 160px;
  // min-width: 1441px;
  position: relative;
  padding-bottom: 40px;
  padding-top: 60px;
  @media (min-width: 1025px) and (max-width: 1440px) {
    min-width: 1025px;
  }

  @media (min-width: 766px) and (max-width: 1024px) {
    min-width: 766px;
  }
  a{
    text-decoration: none;
  }
`;

export const Frame1422 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 60px;
  position: relative;
  max-width: 1440px;
  padding: 0px 60px;

  @media (min-width: 1025px) and (max-width: 1440px) {
    padding: 0px 60px;
  }
  @media (min-width: 766px) and (max-width: 1024px) {
    padding: 0px 60px;
  }
  @media (max-width: 765px) {
    padding: 0px 20px;
  }
`;

export const Frame13121 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  padding: 0px 0px 20px 0px;
  border: 0px 0px 1px 0px;
  gap: 12px;
  border-bottom: 1px solid #d6d6d6;
`;

export const Title = styled.h1`
  display: flex;
  gap: 8px;
  font-family: IBM Plex Sans;
  font-size: 36px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: -0.025em;
  text-align: left;
  color: #301b72;
`;

export const Frame14221 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  align-self: stretch;
`;

export const Frame1306 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

export const Students = styled.div`
  color: #3d3d3d;
  display: flex;
  gap: 8px;
  font-family: IBM Plex Sans;
  font-size: 19px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const X2021JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export const Frame1426 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 30px;
  position: relative;
`;

export const Frame1339 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  flex: 1;
  align-self: stretch;
`;

export const Frame13371 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

export const Frame1336 = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 1000px;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  position: relative;
  align-self: stretch;
`;

export const Frame1416 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: relative;
  flex: 1;
  align-self: stretch;
`;

export const Frame1342 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

export const Frame61 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

export const TItlePara = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
`;

export const MainContainer = styled.div`
  display: flex;
  gap: 32px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  @media (min-width: 766px) and (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 765px) {
    display: none;
  }
`;
export const LeftContainerTitle = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #7b7382;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 75%;
  @media (min-width: 766px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 765px) {
    width: 100%;
  }
`;

export const SharedResponseFrame = styled.div``;
export const ClassStatsFrame = styled.div``;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 500px;
  overflow-y: scroll;
`;
