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
  position: relative;
  padding-bottom: 40px;
  border: 1px solid #301b7214;

  @media (min-width: 1025px) and (max-width: 1440px) {
    min-width: 1010px;
  }

  @media (min-width: 766px) and (max-width: 1024px) {
    min-width: 698px;
  }
  a {
    text-decoration: none;
  }
`;

export const Frame1422 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
`;

export const Frame13121 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  padding: 0px 0px 20px 0px;
  border: 0px 0px 1px 0px;
  gap: 12px;
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
  @media (max-width: 765px) {
    font-size: 32px;
  }
`;

export const Frame14221 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  align-self: stretch;
`;

export const Frame1306 = styled.div`
  display: flex;
  width: 100% !important;
  justify-content: flex-start;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  border-bottom: 1px solid #d6d6d6;
  border-top: 1px solid #d6d6d6;
  position: sticky;
  top: 68px;
  z-index: 4;
  background-color: white;
  .MuiTabs-scroller {
    button {
      color: #7200e0 !important;
    }
  }
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
  position: relative;
`;

export const Frame1339 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  position: relative;
  flex: 1;
  align-self: stretch;
  scroll-margin-top: 140px;
`;

export const Frame13371 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
  justify-content: space-between;
  @media (max-width: 765px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
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
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
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
  position: sticky;
  height: 250px;
  top: 120px;
  width: 25%;
  max-width: 230px;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 765px) {
    display: none;
  }
`;

export const LeftContainerHeading = styled.p`
  padding: 20px;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.8px;
  letter-spacing: -0.01em;
  text-align: left;
`;

export const LeftContainerTitleCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
`;

export const LeftContainerTitle = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  padding: 12px 16px;
  cursor: pointer;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
  width: 75%;
  padding-top: 40px;
  padding-left: 30px;
  border-left: 1px solid #d6d6d6;
  @media (min-width: 766px) and (max-width: 1024px) {
    width: 100%;
    padding-right: 30px;
  }
  @media (max-width: 765px) {
    width: 100%;
    padding-left: 0px;
    border-left: none;
  }
`;

export const ActiveTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  scroll-margin-top: 140px;
`;

export const SharedResponseFrame = styled.div`
  scroll-margin-top: 140px;
`;
export const ClassStatsFrame = styled.div`
  scroll-margin-top: 140px;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
`;
export const TaskContainer = styled.div`
  display: flex;
  flex: 0 1 48%;
  @media (max-width: 765px) {
    flex: 1 1 100%;
  }
`;
export const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
