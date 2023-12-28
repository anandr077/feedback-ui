import styled, { keyframes } from 'styled-components';
import {
  IbmplexsansNormalPersianIndigo20px,
  IbmplexsansNormalWhite20px,
} from '../../styledMixins';

const slideIn = keyframes`
   0%{
    right: -400px;
   }
   25%{
    right: -300px;
   }
   50%{
    right: -200px;
   }
   75%{
    right: -100px;
   }
   100%{
    right: 0
   }
`;

const slideOut = keyframes`
  0% {
    right: 0;
  }
  25% {
    right: -100px;
  }
  50% {
    right: -200px;
  }
  75% {
    right: -300px;
  }
  100% {
    right: -400px;
  }
`;

export const NavigationContainer = styled.div`
  position: absolute;
  top: 70px;
  z-index: 10000 !important;
  border-radius: 8px;
  background-color: white;
  align-self: stretch;
  overflow-y: scroll;
  padding-bottom: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  height: ${props => props.pageHeight ? props.pageHeight + "px" : "0"};
  animation: ${(props) => (props.slideNotificationBar ? slideIn : slideOut)}
    0.3s linear forwards;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export const HelpbarContainer = styled.div`
  position: absolute;
  top: 70px;
  z-index: 10000 !important;
  border-radius: 8px;
  background-color: white;
  align-self: stretch;
  overflow-y: scroll;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  height: ${props => props.pageHeight ? props.pageHeight + "px" : "0"};
  animation: ${(props) => (props.isHelpBarOpen ? slideIn : slideOut)} 0.3s
    linear forwards;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export const Screen = styled.div`
  height: ${props => props.pageHeight ? (props.pageHeight + 170) + "px" : "0"};
  width: calc(100vw - 20px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 30px;
  z-index: 1;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 2px 5px 2px;
`;

export const Frame1344 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

export const Frame1343 = styled.img`
  position: relative;
  height: 43.499969482421875px;
  margin-left: -1.75px;
`;

export const Frame5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

export const Frame51 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  position: relative;
`;

export const HeaderButton = styled.article`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 50px;
  position: relative;
  border-radius: 26.5px;
  cursor: pointer;
`;

export const HeaderButtonInnnerContainer = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 88px;
  height: 26px;

  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
`;

export const ButtonText = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  height: 26px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
`;

export const SelectedButtonText = styled.div`
  ${IbmplexsansNormalWhite20px}

  height: 26px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
`;

export const HeaderButtonSelected = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 60px;
  position: relative;
  border-radius: 26.5px;
  background-color: var(--royal-purple);
  cursor: pointer;
`;
