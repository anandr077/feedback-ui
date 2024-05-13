import styled, { keyframes } from 'styled-components';
import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 68px;
  width: 100%;
  padding: 12px 16px;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 80px;
  z-index: 100;
`;

export const TitleConatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ArrowRightImg = styled.img`
  width: 12px;
  height: 12px;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 3px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: 19px;
  line-height: 24px;
  color: #4b464f;
`;
export const TitleMain = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: IBM Plex Sans;
  font-size: 19px;
  font-weight: 400;
  line-height: 24.7px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #7b7382;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const NotificationAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  padding: 0 11px 0 5px;
`;


export const HelpbarContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  z-index: 10000 !important;
  border-radius: 8px;
  background-color: white;
  align-self: stretch;
  overflow-y: scroll;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  height: ${(props) => (props.pageHeight ? props.pageHeight + 'px' : '0')};
  animation: ${(props) => (props.isHelpBarOpen ? slideIn : slideOut)} 0.3s
    linear forwards;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export const Notification = styled.img`
  cursor: pointer;
`;

export const HeaderHelpBar = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`

export const Account = styled.div`
  height: 36px;
  width: 36px;
  cursor: pointer;
`;

export const Screen = styled.div`
  height: ${(props) =>
    props.pageHeight ? props.pageHeight + 170 + 'px' : '0'};
  //height: 100%;
  width: calc(100vw - 77px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

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
  right: 0;
  z-index: 10000 !important;
  border-radius: 8px 0 0 8px;
  background-color: white;
  align-self: stretch;
  overflow-y: scroll;
  padding-bottom: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  height: ${(props) => (props.pageHeight ? props.pageHeight + 'px' : '0')};
  animation: ${(props) => (props.slideNotificationBar ? slideIn : slideOut)}
    0.3s linear forwards;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
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
