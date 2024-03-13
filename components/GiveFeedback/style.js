import styled from 'styled-components';

export const MainContainer = styled.div`
  align-items: center;
  background-color: var(--white-pointer);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 60px;
  position: relative;
  min-height: 595px;
  padding: 60px 0px;
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
  gap: 40px;
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
export const HeadingAndFilterCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
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
  padding: 16px 0px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-top: 1px solid var(--Foundation-Grey-grey-100, #d6d6d6);
  @media (max-width: 1024px) and (min-width: 765px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
`;
export const SortContainer = styled.div`
  display: flex;
  gap: 8px;
`;
export const SortButton = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px 8px 12px;
  border-radius: 25px;
  border: 1px solid #a6a6a6;
  cursor: pointer;
`;
export const SortButtonText = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: #6f6f6f;
  text-align: center;
`;

export const HeadingLine = styled.p`
  color: var(--Foundation-Grey-grey-500, #7a7a7a);
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
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
  width: 65%;
  border-radius: 8px;
  border: 1px solid var(--Foundation-Grey-grey-50, #f2f2f2);
  background: #fff;
  box-shadow: 0px 3px 8px 0px rgba(48, 27, 114, 0.04);
  @media (max-width: 1024px) {
    width: 100%;
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

export const Frame5086 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: center;
  align-items: center;

  @media (max-width: 765px) {
    cursor: pointer;
  }
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
export const SortPopUpBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px 16px 20px;
  border: 0px 0px 1px 0px;
  gap: 16px;
`;
export const Frame5086Img = styled.img`
  width: 24px;
  height: 24px;
`;
export const Frame5086Text = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #918B97;
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
  width: 260px;
  border-radius: 12px;
`;

export const StarImg = styled.img`
  display: flex;
`;
export const StarsContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StarsPart = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;
export const StarPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StartLevel = styled.p`
  margin-top: 10px;
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 15px;
  height: 3px;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
`;
export const ProgressBardiv = styled.div`
  background-color: #7200e0;
  transition: width 0.5s ease-in-out;
  height: 100%;
`;
