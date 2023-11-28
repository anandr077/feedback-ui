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
  margin-bottom: 8px;
`;

export const TaskTitle = styled.p`
  ${IbmplexsansNormalShark20px}
  font-size: 16px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export const TaskTitleBold = styled.p`
  ${IbmplexsansSemiBoldShark20px}
  font-size: 16px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
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
export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: ${({overdue}) => (overdue ? '#FFDED2' : 'var(--white)')};
  border-color: var(--corn);
  border:  1px solid ${({ overdue }) => (overdue ? '#FE7171' : 'rgba(219, 87, 87, 0.2)')};

  border-radius: 16px;
  &:hover {
    background: #f9f5ff;
    border: 1px solid var(--light-mode-purple);
    box-shadow: 0px 4px 16px rgba(114, 0, 224, 0.2);
  }
`;

export const AnchorTag = styled.a`
  text-decoration: none;
`

export const StudentLength = styled.span`
  color: var(--royal-purple);
  text-decoration: underline;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  position: relative;
`