import styled, { keyframes } from 'styled-components';

export const CompletedPageContainer = styled.div`
  display: flex;
`;

export const MainContainer = styled.div`
  width: 100%;
  align-items: center;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 60px;
  position: relative;
  @media (min-width: 1025px) and (max-width: 1440px) {
    min-width: 1025px;
  }
  @media (min-width: 766px) and (max-width: 1024px) {
    min-width: 766px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 1440px;
`;
export const HeadingAndFilterCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px 20px;
  border-bottom: 1px solid #c9c6cc80;

  @media (max-width: 765px) {
    padding: 0px 10px;
  }
`;
export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  text-decoration: none;
  @media (max-width: 765px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  a {
    text-decoration: none;
  }
`;
export const ConnectContainer = styled.div``;

export const FilterAndSortContainer = styled.div`
  display: flex;
  padding: 20px 0px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-top: 1px solid var(--Foundation-Grey-grey-100, #d6d6d6);

  @media (max-width: 765px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
`;
export const FilterLine = styled.div`
  height: 30px;
  width: 1px;
  border: 1px solid #d6d6d6;
  @media (min-width: 766px) and (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 765px) {
    display: none;
  }
`;

export const HeadingLine = styled.p`
  color: #333333;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--royal-purple);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: -0.9px;
  @media (max-width: 765px) {
    font-size: 32px;
    letter-spacing: -0.8px;
  }
`;

export const TitleImage = styled.img`
  padding: 2px 2px 2px 2px;
  align-items: center;
  gap: 10px;
  width: 24px;
  height: 24px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  width: 35%;
  border-radius: 12px;
  border: 1px solid var(--Foundation-Grey-grey-50, #f2f2f2);
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(48, 27, 114, 0.04);
  height: fit-content;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const CardContainer1 = styled.div`
  display: flex;
  padding: 20px 16px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  align-self: stretch;
  border-bottom: 1px solid var(--Foundation-Grey-grey-100, #d6d6d6);
  background: #fff;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 20px 16px;
  border: 0px 0px 1px 0px;
  gap: 16px;
  border-bottom: 1px solid #d6d6d6;

  padding: 30px;
`;
export const TextContainer1 = styled.div`
  color: var(--Text, #1e252a);
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const TextContainer = styled.div`
  gap: 8px;
`;

export const ParaContainer = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Frame1333 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const Frame1333Para = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
export const Frame1333Star = styled.img`
  width: 18px;
  height: 18px;
`;
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const IconContainer = styled.div`
  display: flex;
  padding: 6px;
  // align-items: flex-start;
  border-radius: 8px;
  border: 1px solid var(--Foundation-Grey-grey-100, #d6d6d6);
  background: var(--Foundation-Grey-grey-50, #f2f2f2);
`;

export const CorrectIcon = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 7px 3px;
  justify-content: center;
  align-items: center;
`;
export const CrossIcon = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 5px 2px;
  justify-content: center;
  align-items: center;
`;

export const Frame5111 = styled.div`
  display: flex;
  padding: 10px 10px 0px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;
export const Frame1353 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;
export const Frame5087 = styled.img`
  width: 48px;
  height: 48px;
  fill: var(--Light-Mode-Purple, #7200e0);
`;
export const Frame5088 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Frame5088Para = styled.p`
  color: var(--Text, #1e252a);
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Frame5088Img = styled.img`
  display: flex;
  padding: 2px 2px 2px 2px;
  align-items: center;
  gap: 10px;
  width: 20px;
  height: 20px;
`;
export const Frame5111Para = styled.p`
  color: var(--Foundation-Grey-grey-500, #7a7a7a);
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Frame5042 = styled.div`
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;
export const Frame5042Para1 = styled.p`
  color: var(--Light-Mode-Purple, #7200e0);
  leading-trim: both;
  text-edge: cap;
  font-family: IBM Plex Sans;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Frame5042Para2 = styled.p`
  color: var(--Foundation-Grey-grey-500, #7a7a7a);
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Frame5114 = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Foundation-Purple-purple-50, #f7eeff);
`;
export const Frame5112 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;
export const Frame5112para = styled.p`
  color: var(--Foundation-Grey-grey-800, #434343);
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Frame5086PopUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #d6d6d6;
`;
export const Frame5086PopUpTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;
export const Frame5086PopUpBody = styled.div`
  padding: 16px 20px 16px 20px;
  border: 0px 0px 1px 0px;
  // gap: 16px;
  border-bottom: 1px solid #d6d6d6;
`;
export const SortImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const SortText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Frame5051 = styled.div`
  padding: 8px 12px 8px 12px;
  border-radius: 25px;
  border: 1px;
  gap: 8px;
`;

export const TagsAndTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 765px) {
    flex-direction: column-reverse;
    gap: 16px;
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
`;
export const Tag = styled.div`
  display: flex;
  padding: 3px 8px 3px 8px;
  border-radius: 11.5px;
  border: 1px;
  gap: 10px;
  border: 1px solid #dec7ff;
`;
export const TagText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  color: #9b4be8;
`;
export const RequestedText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #a6a6a6;
`;
export const DataText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;
export const WordsCountContainer = styled.div`
  display: flex;
  gap: 12px;
`;
export const WordsCount = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #7a7a7a;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`;
export const FeedbackButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 16px;
  border-radius: 30px;
  border: 1px;
  gap: 4px;
  background: #7200e0;
  text-decoration: none;
`;
export const FeedbackButtonText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
`;
export const FeedbackButtonArrow = styled.img`
  width: 16px;
  height: 16px;
`;
export const CrossButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const DismissText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #575757;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 12px;
  border-radius: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Frame12841 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  border-radius: 12px;
`;
//

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
export const TaskIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
export const TaskIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  height: 32px;
  width: 32px;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  visibility: hidden;

  &:hover {
    background-color: rgba(241, 230, 252, 1);
  }
`;

export const DataTitle = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #4b464f;
`;
export const DataSubtitle = styled.p`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 16.9px;
  text-align: left;
  color: #b2aeb7;
`;

export const TaskCompiltion = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 0px 4px 0px;
  border-radius: 24px;
  gap: 5px;
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 16.9px;
  text-align: left;
  color: #7b7382;
`;
export const TaskCompiltionIcon = styled.img`
  width: 16px;
  height: 16px;
  padding: 1.33px 1.33px 1.33px 1.33px;
`;
export const IconContainerDown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // width: 10%;
  padding: 8px;
  border-radius: 4px;
  gap: 6px;
  @media (min-width: 766px) and (max-width: 1024px) {
    width: 15%;
  }
  @media (max-width: 765px) {
    width: 20%;
  }
`;

export const DownloadIcon = styled.img`
  width: 16px;
  height: 16px;
  // padding: 1.67px 1.67px 1.67px 1.67px;
`;
export const DownloadIconColor = styled.img`
  width: 16px;
  height: 16px;
  display: none;
`;

export const DeleteText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 16.9px;
  text-align: left;
  color: #9e322b;
  display: none;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 10px;
  border-bottom: 1px solid #c9c6cc80;
  background: #ffffff;
  cursor: pointer;
  justify-content: space-between;
  :hover {
    background: #f2f1f380;
  }
  &:hover {
    ${DownloadIconColor}, ${DeleteText} {
      display: flex;
    }
    ${DownloadIcon} {
      display: none;
    }
  }
`;

export const Table = styled.table`
  th {
    font-weight: 700;
  }
  .completed-heading{
    display: flex;
    align-items: center;
    gap: 5px;
  }
  td {
    font-weight: 500;
  }
  th,
  td {
    font-family: IBM Plex Sans;
    font-size: 13px;
    line-height: 24px;
    color: rgba(75, 70, 79, 1);
    text-align: start;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(201, 198, 204, 0.5);
  }
  .first-column {
    width: 65%;
  }

  .second-column {
    width: 10%;
  }

  .icon-row {
    display: flex;
    align-items: center;
  }

  tr:hover {
    background-color: rgba(242, 241, 243, 0.5); 
  }

  tr:hover ${TaskIconContainer} {
    visibility: visible;
  }
`;
