import styled from 'styled-components';
import {
  IbmplexsansMediumElectricViolet20px,
  IbmplexsansMediumWhite16px,
  IbmplexsansNormalShark20px,
  IbmplexsansSemiBoldShark20px,
} from '../../styledMixins';

export const MoreOptionsWrapper = styled.div`
  position: absolute;
  right: 2px;
  top: 18px;
  display: inline-flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 6px;
  border: 1px solid rgba(114, 0, 224, 0.1);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  z-index: 1;
`;

export const MoreOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #7200e0;
  font-size: 14px;
  font-family: IBM Plex Sans;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const IconContainer = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

export const DeleteButtonContainer = styled.div`
  display: flex;

  align-items: flex-start;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;

export const DeleteButtonContainerOnly = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const BubbleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  position: relative;
  margin-bottom: 7px;
`;

export const TaskTitle = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.8px;
  text-align: left;
  color: #7b7382;
`;

export const TaskTitleBold = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.8px;
  text-align: left;
  color: #4b464f;
`;

export const Frame12191 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

export const SLink = styled.div`
  ${IbmplexsansMediumElectricViolet20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: -0.5px;
  line-height: normal;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    color: blue;
    text-decoration: underline;
  }
`;
export const Buttons1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transition: 0.1s;
  }
`;

export const Button = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export const TaskLink = styled.a`
  text-decoration: none;
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 600;
  line-height: 16.9px;
  text-align: center;
  color: var(--light-mode-purple);
  display: none !important;
  justify-content: center;
`;

export const StyledCard = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: ${({ exemplar }) => (exemplar ? '20px' : '12px')};
  position: relative;
  align-self: stretch;

  //border: 1px solid ${({ overdue }) => (overdue ? '#C9C6CC80' : '#EAEAEA')};
  background-color: var(--white);
  box-shadow: ${({ exemplar }) =>
    !exemplar ? '0 4px 16px rgba(156, 156, 156, 0.4)' : 'none'};

  //border-color: ${({ exemplar }) => (exemplar ? 'none' : 'var(--corn)')};
  box-shadow: 0px 4px 8.5px 0px rgba(156, 156, 156, 0.08);
  border: 1px solid
    ${({ overdue }) => (overdue ? 'rgba(238, 149, 142, 1)' : '#EAEAEA')};
  border-radius: ${({ exemplar }) => (exemplar ? '6px' : '16px')};

  &:hover {
    background: ${({ exemplar }) => (exemplar ? 'inherit' : '#f1e6fc')};
    box-shadow: ${({ exemplar }) =>
      exemplar ? 'none' : '0px 4px 16px rgba(114, 0, 224, 0.2)'};
    ${TaskLink} {
      display: flex !important;
    }
  }
`;

export const StyledCardMain = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  // padding: 20px;
  position: relative;
  align-self: stretch;
  // background-color: ${({ overdue }) =>
    overdue ? '#FDE2E2' : 'var(--white)'};
  // box-shadow: 0 4px 16px rgba(156, 156, 156, 0.4);
  // border-color: var(--corn);
  // border: 1px solid
  //   ${({ overdue }) => (overdue ? 'rgba(114, 0, 224, 0.10)' : '#EAEAEA')};
  // border-radius: ${({ overdue }) => (overdue ? '16px' : '0px')};;

  // &:hover {
  //   background: #f1e6fc;
  //   box-shadow: 0px 4px 16px rgba(114, 0, 224, 0.2);
  // }
`;

export const AnchorTag = styled.a`
  text-decoration: none;
`;

export const StudentLength = styled.span`
  color: var(--royal-purple);
  text-decoration: underline;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ClassTitle = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  color: var(--river-bed);
  font-weight: 400;
  font-size: var(--font-size-m);
  line-height: 18px;
`;

export const FavouriteContainer = styled.div`
  cursor: pointer;
`;

export const FavouriteContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ favourite }) =>
    favourite ? '#C70A65' : 'var(--light-mode-purple)'};
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-s);
  line-height: 19px;
  transform: scale(1.1);
`;
